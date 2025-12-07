import { NextResponse } from "next/server"
import Stripe from "stripe"

export const runtime = "nodejs"

// Explicitly assert env vars as strings for TypeScript
const stripeSecret = process.env.STRIPE_SECRET_KEY as string
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string

if (!stripeSecret) throw new Error("Missing STRIPE_SECRET_KEY")
if (!webhookSecret) throw new Error("Missing STRIPE_WEBHOOK_SECRET")

// Do not specify apiVersion – let Stripe use the account default
const stripe = new Stripe(stripeSecret)

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get("stripe-signature")

  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 },
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded":
        console.log("💰 One-time donation succeeded:", event.data.object.id)
        break

      case "invoice.paid":
        console.log("🌿 Monthly donation invoice paid:", event.data.object.id)
        break

      case "invoice.payment_failed":
        console.log("⚠️ Monthly donation failed:", event.data.object.id)
        break

      default:
        console.log("ℹ️ Unhandled event:", event.type)
    }

    return NextResponse.json({ received: true })
  } catch (err: any) {
    console.error("❌ Webhook handling error:", err)
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    )
  }
}
