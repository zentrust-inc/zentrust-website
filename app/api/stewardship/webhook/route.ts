import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

/**
 * IMPORTANT
 * Do NOT hardcode apiVersion unless you REALLY need to.
 * Let Stripe SDK use the account default to avoid TS errors.
 */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

/**
 * Webhook signing secret from Stripe Dashboard
 */
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

/**
 * Stripe requires raw body
 */
export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      webhookSecret
    );
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  /**
   * 🔑 ONLY EVENTS YOU NEED (5)
   */
  try {
    switch (event.type) {

      // 1️⃣ Checkout completed (entry point)
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log("✅ checkout.session.completed", {
          id: session.id,
          email: session.customer_details?.email,
          customer: session.customer,
          mode: session.mode,
          amount_total: session.amount_total,
          currency: session.currency,
        });

        break;
      }

      // 2️⃣ Payment succeeded (one-time OR subscription invoice)
      case "payment_intent.succeeded": {
        const pi = event.data.object as Stripe.PaymentIntent;

        console.log("💰 payment_intent.succeeded", {
          id: pi.id,
          amount: pi.amount,
          currency: pi.currency,
          customer: pi.customer,
        });

        break;
      }

      // 3️⃣ Subscription started or updated
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;

        console.log("🔁 subscription active", {
          id: sub.id,
          customer: sub.customer,
          status: sub.status,
          current_period_end: sub.current_period_end,
        });

        break;
      }

      // 4️⃣ Subscription canceled
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;

        console.log("🛑 subscription canceled", {
          id: sub.id,
          customer: sub.customer,
        });

        break;
      }

      // 5️⃣ Invoice paid (monthly recurring truth)
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;

        console.log("📄 invoice.paid", {
          id: invoice.id,
          customer: invoice.customer,
          amount_paid: invoice.amount_paid,
          currency: invoice.currency,
          subscription: invoice.subscription,
        });

        break;
      }

      // Ignore everything else
      default:
        console.log("ℹ️ Ignored event:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("❌ Webhook handler error:", err);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
