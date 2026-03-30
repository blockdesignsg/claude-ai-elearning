export interface Course {
  id: number
  title: string
  description: string
  lessonCount: number
  duration: number // minutes
  difficulty: 1 | 2 | 3
  targetAudience: string
  icon: string // emoji
  color: string // tailwind color class
  lessons: Lesson[]
}

export interface Lesson {
  id: number
  courseId: number
  title: string
  format: 'video' | 'practice' | 'video_practice' | 'test'
  duration: number
  description: string
  objective: string
  keywords: string[]
  videoUrl?: string
}

export interface UserProgress {
  courseId: number
  lessonId: number
  completed: boolean
  completedAt?: Date
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}
