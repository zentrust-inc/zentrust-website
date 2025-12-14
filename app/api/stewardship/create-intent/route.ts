import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ─────────────────────────────
// Request validation
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
    // ONE-TIME DONATION (PaymentIntent)
    // ─────────────────────────────
    if (frequency === "once") {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
        metadata,
      });

      if (!paymentIntent.client_secret) {
        throw new Error("Stripe did not return PaymentIntent client_secret");
      }

      return NextResponse.json({
        type: "one_time",
        clientSecret: paymentIntent.client_secret,
      });
    }

    // ─────────────────────────────
    // MONTHLY STEWARDSHIP (Subscription)
    // ─────────────────────────────

    // 1️⃣ Create customer
    const customer = await stripe.customers.create({
      email,
      name,
      metadata,
    });

    // 2️⃣ Create price
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: amountInCents,
      recurring: { interval: "month" },
      product_data: {
        name: "ZenTrust Monthly Stewardship",
      },
    });

    // 3️⃣ Create subscription (Stripe-correct 2025 flow)
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      payment_behavior: "default_incomplete",
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      expand: [
        "latest_invoice.payment_intent",
        "pending_setup_intent",
      ],
      metadata,
    });

    let clientSecret: string | undefined;

    // ─────────────────────────────
    // PATH A — Immediate charge (PaymentIntent)
    // ─────────────────────────────
    const invoiceAny = subscription.latest_invoice as any;
    if (invoiceAny?.payment_intent?.client_secret) {
      clientSecret = invoiceAny.payment_intent.client_secret;
    }

    // ─────────────────────────────
    // PATH B — Card collection first (SetupIntent)
    // ─────────────────────────────
    if (!clientSecret && subscription.pending_setup_intent) {
      const setupIntent =
        typeof subscription.pending_setup_intent === "string"
          ? await stripe.setupIntents.retrieve(
              subscription.pending_setup_intent
            )
          : subscription.pending_setup_intent;

      clientSecret = setupIntent.client_secret ?? undefined;
    }

    if (!clientSecret) {
      throw new Error("Stripe did not return any client_secret");
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
