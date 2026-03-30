import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { message: 'Payments not configured' },
    { status: 200 }
  )
}
