import { NextRequest, NextResponse } from 'next/server'

// Simplified progress tracking for basic e-learning site
// In-memory storage for demo purposes - replace with database in production

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const courseId = searchParams.get('courseId')
    const userId = searchParams.get('userId')

    if (!courseId || !userId) {
      return NextResponse.json(
        { error: 'courseId and userId query parameters are required' },
        { status: 400 }
      )
    }

    // Return stub data for now
    return NextResponse.json({
      courseId,
      totalLessons: 0,
      completedLessons: 0,
      completionPercentage: 0,
      progress: [],
    })
  } catch (error) {
    console.error('Progress GET error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { lessonId, completed, userId } = await request.json()

    // Validate request body
    if (!lessonId || typeof completed !== 'boolean' || !userId) {
      return NextResponse.json(
        { error: 'lessonId, completed (boolean), and userId are required' },
        { status: 400 }
      )
    }

    // Return success response with stub data
    return NextResponse.json({
      userProgress: {
        id: 'stub',
        userId,
        lessonId,
        completed,
        completedAt: completed ? new Date() : null,
        lesson: {
          id: lessonId,
          title: 'Lesson',
          courseId: 'stub-course',
        },
      },
      courseProgress: {
        courseId: 'stub-course',
        totalLessons: 0,
        completedLessons: 0,
        completionPercentage: 0,
      },
    })
  } catch (error) {
    console.error('Progress POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
