import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession, PRICE_IDS } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { priceId, userId, email } = await request.json()

    // Validate inputs
    const validPriceIds = Object.values(PRICE_IDS)
    if (!priceId || !validPriceIds.includes(priceId) || !userId || !email) {
      return NextResponse.json(
        { error: 'priceId, userId, and email are required' },
        { status: 400 }
      )
    }

    // Get the origin for redirect URLs
    const origin = request.headers.get('origin') || 'http://localhost:3000'

    // Create checkout session
    const checkoutSession = await createCheckoutSession(
      userId,
      priceId,
      `${origin}/dashboard?success=true`,
      `${origin}/pricing?canceled=true`
    )

    if (!checkoutSession.url) {
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      url: checkoutSession.url,
    })
  } catch (error) {
    console.error('Checkout API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
