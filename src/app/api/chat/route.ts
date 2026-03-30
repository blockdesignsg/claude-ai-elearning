import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { message: 'チャット機能は準備中です。' },
    { status: 200 }
  )
}
