import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { messages, courseId, lessonId } = await request.json()

    // Validate request body
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required' },
        { status: 400 }
      )
    }

    // Fetch course and lesson details for context
    let courseContext = ''
    if (courseId && lessonId) {
      try {
        const lesson = await prisma.lesson.findUnique({
          where: { id: lessonId },
          include: {
            course: {
              select: { title: true },
            },
          },
        })

        if (lesson) {
          courseContext = `\n\n現在のコース: 「${lesson.course.title}」\nレッスン: 「${lesson.title}」`
        }
      } catch (error) {
        console.error('Error fetching course context:', error)
        // Continue without context if there's an error
      }
    }

    // Create system prompt in Japanese
    const systemPrompt = `あなたはAI研修プラットフォームの学習アシスタントです。${courseContext}について、受講者の質問に丁寧で分かりやすく答えてください。

以下のことに気をつけてください:
- 専門的で正確な情報を提供する
- わかりやすい日本語で説明する
- 必要に応じて例やコード例を提供する
- 受講者の理解度に合わせて回答を調整する
- 詳しく知りたい場合は、さらに深く説明する準備がある`

    // Convert messages to Anthropic format
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content,
    }))

    // Create stream
    const stream = await client.messages.stream({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: systemPrompt,
      messages: formattedMessages,
    })

    // Return streaming response
    const responseStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
              const text = event.delta.text
              controller.enqueue(new TextEncoder().encode(text))
            }
          }
          controller.close()
        } catch (error) {
          console.error('Stream error:', error)
          controller.error(error)
        }
      },
    })

    return new NextResponse(responseStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
