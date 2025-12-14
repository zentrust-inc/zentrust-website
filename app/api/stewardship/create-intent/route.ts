import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ─────────────────────────────
// Validation
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
        throw new Error("Missing PaymentIntent client_secret");
      }

      return NextResponse.json({
        type: "one_time",
        clientSecret: paymentIntent.client_secret,
      });
    }

    // ─────────────────────────────
    // MONTHLY STEWARDSHIP (CORRECT FLOW)
    // ─────────────────────────────

    // 1️⃣ Customer
    const customer = await stripe.customers.create({
      email,
      name,
      metadata,
    });

    // 2️⃣ Price
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: amountInCents,
      recurring: { interval: "month" },
      product_data: {
        name: "ZenTrust Monthly Stewardship",
      },
    });

    // 3️⃣ Subscription (NO expectation of intents)
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      payment_behavior: "default_incomplete",
      metadata,
    });

    // 4️⃣ EXPLICIT SetupIntent (THIS IS THE FIX)
    const setupIntent = await stripe.setupIntents.create({
      customer: customer.id,
      payment_method_types: ["card"],
      metadata: {
        subscriptionId: subscription.id,
      },
    });

    if (!setupIntent.client_secret) {
      throw new Error("Stripe did not return SetupIntent client_secret");
    }

    return NextResponse.json({
      type: "subscription",
      clientSecret: setupIntent.client_secret,
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
