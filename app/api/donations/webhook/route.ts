import Stripe from "stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

// IMPORTANT: Webhooks must run in Node.js runtime.
export const runtime = "nodejs"

// Load keys
const stripeSecret = process.env.STRIPE_SECRET_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

if (!stripeSecret) throw new Error("Missing STRIPE_SECRET_KEY")
if (!webhookSecret) throw new Error("Missing STRIPE_WEBHOOK_SECRET")

const stripe = new Stripe(stripeSecret, {
  apiVersion: "2023-10-16",
})

export async function POST(req: Request) {
  let event: Stripe.Event

  try {
    const rawBody = await req.text()
    const sig = headers().get("stripe-signature")

    if (!sig) {
      return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 })
    }

    // 1) Verify Signature
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // 2) Handle Events
  try {
    switch (event.type) {
      // --------------------------
      // ONE-TIME DONATIONS
      // --------------------------
      case "payment_intent.succeeded": {
        const intent = event.data.object as Stripe.PaymentIntent
        console.log("💰 One-time donation succeeded:", intent.id)

        // You can access metadata:
        // intent.metadata.donationAmountUSD
        // intent.metadata.frequency
        // intent.metadata.impactPath

        // TODO: Save to DB OR Sunlight Ledger OR send email receipt

        break
      }

      case "payment_intent.payment_failed": {
        const intent = event.data.object as Stripe.PaymentIntent
        console.warn("⚠️ One-time donation FAILED:", intent.id)
        break
      }

      // --------------------------
      // MONTHLY DONATIONS
      // --------------------------
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice
        console.log("🌱 Monthly donation invoice paid:", invoice.id)

        // invoice.subscription
        // invoice.customer
        // invoice.amount_paid

        // TODO: Log monthly donation renewal
        break
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice
        console.warn("⚠️ Monthly donation FAILED:", invoice.id)
        break
      }

      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("🟢 Subscription created:", subscription.id)
        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("🔁 Subscription updated:", subscription.id)
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        console.log("🔴 Subscription cancelled:", subscription.id)
        break
      }

      // --------------------------
      // DEFAULT CASE
      // --------------------------
      default:
        console.log(`ℹ️ Unhandled Stripe event: ${event.type}`)
    }

    // 3) Respond to Stripe
    return NextResponse.json({ received: true })
  } catch (err: any) {
    console.error("❌ Webhook processing error:", err)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}
