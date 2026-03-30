import { notFound } from 'next/navigation';
import { courses } from '@/lib/courses';
import { Clock, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { courseId } = await params;
  const course = courses.find((c) => c.id === Number(courseId));

  if (!course) {
    notFound();
  }

  const difficultyLabels: Record<number, string> = { 1: '初級', 2: '中級', 3: '上級' };
  const difficultyLabel = difficultyLabels[course.difficulty] || '初級';

  const durationLabel = course.duration >= 60
    ? `${Math.floor(course.duration / 60)}時間${course.duration % 60 > 0 ? course.duration % 60 + '分' : ''}`
    : `${course.duration}分`;

  return (
    <div className="bg-white min-h-screen">
      <section className="border-b border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <Link href="/courses" className="text-sm text-blue-600 hover:text-blue-700 font-medium mb-4 block">
                ← コース一覧に戻る
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{course.icon}</span>
                <h1 className="text-4xl font-bold text-gray-900">{course.title}</h1>
              </div>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl">{course.description}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <span>{durationLabel}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <BookOpen className="h-5 w-5 text-slate-400" />
                  <span>{course.lessonCount} レッスン</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Target className="h-5 w-5 text-slate-400" />
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">{difficultyLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">レッスン一覧</h2>
              <div className="space-y-3">
                {course.lessons.map((lesson) => {
                  const formatLabels: Record<string, string> = {
                    video: '動画',
                    practice: '実習',
                    video_practice: '動画+実習',
                    test: 'テスト',
                  };
                  return (
                    <Link
                      key={lesson.id}
                      href={`/courses/${course.id}/${lesson.id}`}
                      className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                              {formatLabels[lesson.format] || lesson.format}
                            </span>
                            <span className="text-xs text-slate-500">{lesson.duration}分</span>
                          </div>
                          <h3 className="font-medium text-gray-900">
                            {lesson.id}. {lesson.title}
                          </h3>
                        </div>
                        <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                <Link
                  href={`/courses/${course.id}/1`}
                  className="block w-full text-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  このコースを始める
                </Link>
                <div className="p-6 rounded-lg border border-slate-200 space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">学習時間</p>
                    <p className="text-lg font-semibold text-gray-900">{durationLabel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">レッスン数</p>
                    <p className="text-lg font-semibold text-gray-900">{course.lessonCount}レッスン</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">難易度</p>
                    <p className="text-lg font-semibold text-gray-900">{difficultyLabel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">対象者</p>
                    <p className="text-lg font-semibold text-gray-900">{course.targetAudience}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
