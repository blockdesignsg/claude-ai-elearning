import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const courseId = searchParams.get('courseId')

    if (!courseId) {
      return NextResponse.json(
        { error: 'courseId query parameter is required' },
        { status: 400 }
      )
    }

    // Get user's progress for the course
    const progress = await prisma.userProgress.findMany({
      where: {
        userId: session.user.id,
        lesson: {
          courseId: courseId,
        },
      },
      include: {
        lesson: {
          select: {
            id: true,
            title: true,
            order: true,
          },
        },
      },
      orderBy: {
        lesson: {
          order: 'asc',
        },
      },
    })

    // Get total lessons in course
    const totalLessons = await prisma.lesson.count({
      where: { courseId },
    })

    // Calculate completion percentage
    const completedLessons = progress.filter((p) => p.completed).length
    const completionPercentage =
      totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

    return NextResponse.json({
      courseId,
      totalLessons,
      completedLessons,
      completionPercentage,
      progress,
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
    // Check authentication
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { lessonId, completed } = await request.json()

    // Validate request body
    if (!lessonId || typeof completed !== 'boolean') {
      return NextResponse.json(
        { error: 'lessonId and completed (boolean) are required' },
        { status: 400 }
      )
    }

    // Verify lesson exists
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
    })

    if (!lesson) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
    }

    // Upsert user progress record
    const userProgress = await prisma.userProgress.upsert({
      where: {
        userId_lessonId: {
          userId: session.user.id,
          lessonId,
        },
      },
      update: {
        completed,
        completedAt: completed ? new Date() : null,
      },
      create: {
        userId: session.user.id,
        lessonId,
        completed,
        completedAt: completed ? new Date() : null,
      },
      include: {
        lesson: {
          select: {
            id: true,
            title: true,
            courseId: true,
          },
        },
      },
    })

    // Get updated course progress
    const courseProgress = await prisma.userProgress.findMany({
      where: {
        userId: session.user.id,
        lesson: {
          courseId: lesson.courseId,
        },
      },
    })

    const totalLessons = await prisma.lesson.count({
      where: { courseId: lesson.courseId },
    })

    const completedLessons = courseProgress.filter((p) => p.completed).length
    const completionPercentage =
      totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

    return NextResponse.json({
      userProgress,
      courseProgress: {
        courseId: lesson.courseId,
        totalLessons,
        completedLessons,
        completionPercentage,
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
