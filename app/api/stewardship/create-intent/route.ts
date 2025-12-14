export const runtime = "nodejs";

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

// -----------------------------------------------------------------------------
// Config
// -----------------------------------------------------------------------------

const MIN_AMOUNT_USD = 5;
const MAX_AMOUNT_USD = 1000;

type Frequency = "once" | "monthly";

const MONTHLY_PRICE_ID = process.env.STRIPE_MONTHLY_PRICE_ID!;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

// -----------------------------------------------------------------------------
// POST handler
// -----------------------------------------------------------------------------

export async function POST(req: Request) {
  try {
    const { amount, frequency } = (await req.json()) as {
      amount: number;
      frequency: Frequency;
    };

    // ------------------ Validation ------------------

    if (
      typeof amount !== "number" ||
      !Number.isInteger(amount) ||
      amount < MIN_AMOUNT_USD ||
      amount > MAX_AMOUNT_USD
    ) {
      return NextResponse.json(
        { error: "Invalid amount." },
        { status: 400 }
      );
    }

    if (frequency !== "once" && frequency !== "monthly") {
      return NextResponse.json(
        { error: "Invalid frequency." },
        { status: 400 }
      );
    }

    // ------------------ ONE-TIME ------------------

    if (frequency === "once") {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: amount * 100,
              product_data: {
                name: "ZenTrust One-Time Stewardship",
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${SITE_URL}/stewardship/thank-you`,
        cancel_url: `${SITE_URL}/stewardship/checkout`,
        metadata: {
          purpose: "zentrust_stewardship",
          frequency: "once",
          amount_usd: amount.toString(),
        },
      });

      return NextResponse.json({ url: session.url });
    }

    // ------------------ MONTHLY (FIXED) ------------------

    if (!MONTHLY_PRICE_ID) {
      throw new Error("Missing STRIPE_MONTHLY_PRICE_ID");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: MONTHLY_PRICE_ID, // $1/month
          quantity: amount,         // slider value
        },
      ],
      success_url: `${SITE_URL}/stewardship/thank-you`,
      cancel_url: `${SITE_URL}/stewardship/checkout`,
      subscription_data: {
        metadata: {
          purpose: "zentrust_stewardship",
          frequency: "monthly",
          amount_usd: amount.toString(),
        },
      },
    });

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error("Create intent error:", error);
    return NextResponse.json(
      { error: error.message || "Stripe error" },
      { status: 500 }
    );
  }
}
