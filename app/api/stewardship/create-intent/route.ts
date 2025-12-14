import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ─────────────────────────────
// Request schema
// ─────────────────────────────
const DonationSchema = z.object({
  amount: z.number().min(1).max(200000),
  frequency: z.enum(["once", "monthly"]),
  impactPath: z.string().optional().default("flexible"),
  name: z.string().optional(),
  email: z.string().email().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = DonationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request data", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { amount, frequency, impactPath, email, name } = parsed.data;
    const amountInCents = Math.round(amount * 100);

    const metadata = {
      donationAmountUSD: amount.toString(),
      frequency,
      impactPath,
    };

    // ─────────────────────────────
    // ONE-TIME DONATION
    // ─────────────────────────────
    if (frequency === "once") {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
        metadata,
      });

      if (!paymentIntent.client_secret) {
        throw new Error("Missing client_secret on PaymentIntent");
      }

      return NextResponse.json({
        type: "one_time",
        clientSecret: paymentIntent.client_secret,
      });
    }

    // ─────────────────────────────
    // MONTHLY SUBSCRIPTION
    // ─────────────────────────────
    const customer = await stripe.customers.create({
      email,
      name,
      metadata,
    });

    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: amountInCents,
      recurring: { interval: "month" },
      product_data: {
        name: "ZenTrust Monthly Stewardship",
      },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      payment_behavior: "default_incomplete",
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice"],
      metadata,
    });

    const latestInvoice = subscription.latest_invoice;
    if (!latestInvoice || typeof latestInvoice === "string") {
      throw new Error("Latest invoice missing");
    }

    // ⚠️ Stripe typing gap: trust runtime, not TS
    const invoiceAny = latestInvoice as any;

    let clientSecret: string | undefined;

    // 1️⃣ Preferred SCA path (confirmation_secret)
    if (invoiceAny.confirmation_secret?.client_secret) {
      clientSecret = invoiceAny.confirmation_secret.client_secret;
    }

    // 2️⃣ Fallback: retrieve PaymentIntent manually
    if (!clientSecret && invoiceAny.payment_intent) {
      const paymentIntentId =
        typeof invoiceAny.payment_intent === "string"
          ? invoiceAny.payment_intent
          : invoiceAny.payment_intent.id;

      const paymentIntent =
        await stripe.paymentIntents.retrieve(paymentIntentId);

      clientSecret = paymentIntent.client_secret ?? undefined;
    }

    if (!clientSecret) {
      throw new Error("Unable to retrieve payment client_secret");
    }

    return NextResponse.json({
      type: "subscription",
      clientSecret,
      subscriptionId: subscription.id,
    });
  } catch (err: any) {
    console.error("Stripe Error:", err);
    return NextResponse.json(
      { error: err.message ?? "Internal server error" },
      { status: 500 }
    );
  }
}
