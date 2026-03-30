import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import Stripe from 'stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

if (!webhookSecret) {
  throw new Error('STRIPE_WEBHOOK_SECRET environment variable is required')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }

    // Verify webhook signature
    let event: Stripe.Event
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (error) {
      console.error('Webhook signature verification failed:', error)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const checkoutSession = event.data.object as Stripe.Checkout.Session
        await handleCheckoutSessionCompleted(checkoutSession)
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdated(subscription)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(subscription)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * Handle checkout.session.completed event
 */
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  try {
    const userId = session.metadata?.userId
    const customerId = session.customer as string

    if (!userId || !customerId) {
      console.error('Missing userId or customerId in checkout session metadata')
      return
    }

    // Update user with Stripe customer ID and subscription status
    await prisma.user.update({
      where: { id: userId },
      data: {
        stripeCustomerId: customerId,
        subscriptionStatus: 'active',
      },
    })

    console.log(`Checkout completed for user ${userId}`)
  } catch (error) {
    console.error('Error handling checkout.session.completed:', error)
    throw error
  }
}

/**
 * Handle customer.subscription.updated event
 */
async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  try {
    const customerId = subscription.customer as string
    const status = subscription.status

    // Find user by Stripe customer ID
    const user = await prisma.user.findFirst({
      where: { stripeCustomerId: customerId },
    })

    if (!user) {
      console.log(`No user found for customer ${customerId}`)
      return
    }

    // Update subscription status
    const subscriptionStatus =
      status === 'active' || status === 'trialing' ? 'active' : 'inactive'

    await prisma.user.update({
      where: { id: user.id },
      data: { subscriptionStatus },
    })

    console.log(
      `Subscription updated for user ${user.id}, status: ${subscriptionStatus}`
    )
  } catch (error) {
    console.error('Error handling customer.subscription.updated:', error)
    throw error
  }
}

/**
 * Handle customer.subscription.deleted event
 */
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  try {
    const customerId = subscription.customer as string

    // Find user by Stripe customer ID
    const user = await prisma.user.findFirst({
      where: { stripeCustomerId: customerId },
    })

    if (!user) {
      console.log(`No user found for customer ${customerId}`)
      return
    }

    // Update subscription status to inactive
    await prisma.user.update({
      where: { id: user.id },
      data: { subscriptionStatus: 'inactive' },
    })

    console.log(`Subscription deleted for user ${user.id}`)
  } catch (error) {
    console.error('Error handling customer.subscription.deleted:', error)
    throw error
  }
}
