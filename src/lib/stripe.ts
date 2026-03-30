import Stripe from 'stripe'

// Initialize Stripe with a default key if not provided (for builds without Stripe config)
const stripeKey = process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key'

export const stripe = new Stripe(stripeKey, {
  apiVersion: '2023-10-16',
})

// Price IDs for different subscription plans
export const PRICE_IDS = {
  MONTHLY: process.env.STRIPE_PRICE_ID_MONTHLY || 'price_1234_monthly',
  YEARLY: process.env.STRIPE_PRICE_ID_YEARLY || 'price_1234_yearly',
}

/**
 * Create a Stripe checkout session for a user
 */
export async function createCheckoutSession(
  userId: string,
  priceId: string,
  successUrl: string,
  cancelUrl: string
) {
  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: undefined, // Will be populated by the user's email from DB
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        userId,
      },
    })

    return session
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

/**
 * Create a Stripe customer portal session for managing subscriptions
 */
export async function createPortalSession(customerId: string, returnUrl: string) {
  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    })

    return session
  } catch (error) {
    console.error('Error creating portal session:', error)
    throw error
  }
}

/**
 * Get subscription details for a customer
 */
export async function getSubscription(customerId: string) {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 1,
    })

    return subscriptions.data[0] || null
  } catch (error) {
    console.error('Error getting subscription:', error)
    throw error
  }
}
