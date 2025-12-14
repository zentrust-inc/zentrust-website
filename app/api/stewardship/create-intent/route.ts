import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// 1. Define Request Schema for safety
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

    const validated = DonationSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { error: "Invalid request data", details: validated.error.format() },
        { status: 400 }
      );
    }

    const { amount, frequency, impactPath, email, name } = validated.data;
    const amountInCents = Math.round(amount * 100);

    const metadata = {
      donationAmountUSD: amount.toString(),
      frequency,
      impactPath,
    };

    // ─────────────────────────
    // ONE-TIME DONATION
    // ─────────────────────────
    if (frequency === "once") {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
        metadata,
      });

      if (!paymentIntent.client_secret) {
        throw new Error("PaymentIntent missing client_secret");
      }

      return NextResponse.json({
        type: "one_time",
        clientSecret: paymentIntent.client_secret,
      });
    }

    // ─────────────────────────
    // MONTHLY SUBSCRIPTION
    // ─────────────────────────
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

    // ─────────────────────────
    // STRIPE-SAFE CLIENT SECRET EXTRACTION
    // ─────────────────────────
    let clientSecret: string | undefined;

    // 1️⃣ New SCA-preferred path
    const confirmationSecret = (latestInvoice as any).confirmation_secret;
    if (confirmationSecret?.client_secret) {
      clientSecret = confirmationSecret.client_secret;
    }

    // 2️⃣ Fallback: retrieve PaymentIntent safely
    if (!clientSecret && latestInvoice.payment_intent) {
      const paymentIntentId =
        typeof latestInvoice.payment_intent === "string"
          ? latestInvoice.payment_intent
          : latestInvoice.payment_intent.id;

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
