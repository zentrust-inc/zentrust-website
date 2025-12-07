import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripeSecret = process.env.STRIPE_SECRET_KEY
if (!stripeSecret) {
  throw new Error("STRIPE_SECRET_KEY is missing in environment variables.")
}

const stripe = new Stripe(stripeSecret, {
  apiVersion: "2023-10-16", // Latest stable API version
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const amount = Number(body?.amount ?? 0)
    const frequency = body?.frequency === "monthly" ? "monthly" : "once"
    const impactPath = body?.impactPath || "flexible"

    // -------------------------------------------------------
    // 1) Basic Amount Validation (NEVER trust client amount)
    // -------------------------------------------------------
    if (!amount || amount < 1 || amount > 200000) {
      return NextResponse.json(
        { error: "Invalid donation amount." },
        { status: 400 }
      )
    }

    // Convert dollars → cents for Stripe
    const amountInCents = Math.round(amount * 100)

    // -------------------------------------------------------
    // 2) Metadata (safe for Stripe + later database logging)
    // -------------------------------------------------------
    const metadata = {
      impactPath,
      frequency,
      donationAmountUSD: amount.toString(),
    }

    // -------------------------------------------------------
    // 3A) Create one-time donation (PaymentIntent)
    // -------------------------------------------------------
    if (frequency === "once") {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
        metadata,
      })

      return NextResponse.json({
        type: "one_time",
        clientSecret: paymentIntent.client_secret,
      })
    }

    // -------------------------------------------------------
    // 3B) Create monthly recurring donation (Subscription)
    // -------------------------------------------------------
    // For monthly donors, Stripe requires:
    // 1) A customer object
    // 2) A subscription with payment behavior set to default_incomplete
    // 3) Return `clientSecret` from the latest invoice's PaymentIntent

    const customer = await stripe.customers.create({
      metadata,
    })

    const price = await stripe.prices.create({
      unit_amount: amountInCents,
      currency: "usd",
      recurring: { interval: "month" },
      product_data: {
        name: "ZenTrust Monthly Recurring Donation",
      },
      metadata,
    })

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
      metadata,
    })

    const clientSecret =
      subscription.latest_invoice?.payment_intent?.client_secret

    if (!clientSecret) {
      throw new Error("Unable to obtain client secret for subscription.")
    }

    return NextResponse.json({
      type: "subscription",
      clientSecret,
      subscriptionId: subscription.id,
    })
  } catch (err: any) {
    console.error("Stripe create-intent error:", err)
    return NextResponse.json(
      { error: err?.message ?? "Unable to create payment session" },
      { status: 500 }
    )
  }
}
