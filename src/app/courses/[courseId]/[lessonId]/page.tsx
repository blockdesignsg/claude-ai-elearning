'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { courses } from '@/lib/courses';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageProps {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

export default function LessonPage({ params }: PageProps) {
  const { courseId, lessonId } = use(params);
  const course = courses.find((c) => c.id === Number(courseId));
  const lessonNumber = parseInt(lessonId, 10);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">コースが見つかりません</p>
      </div>
    );
  }

  const lesson = course.lessons.find((l) => l.id === lessonNumber);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">レッスンが見つかりません</p>
      </div>
    );
  }

  const formatLabels: Record<string, string> = {
    video: '動画',
    practice: '実習',
    video_practice: '動画+実習',
    test: 'テスト',
  };

  const nextLesson = course.lessons.find((l) => l.id === lessonNumber + 1);
  const prevLesson = course.lessons.find((l) => l.id === lessonNumber - 1);

  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/courses" className="hover:text-blue-600">コース一覧</Link>
            <span>/</span>
            <Link href={`/courses/${course.id}`} className="hover:text-blue-600">{course.title}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">レッスン {lessonNumber}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 sm:p-6 lg:p-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Video Player or Placeholder */}
            {courseId === '1' && lessonId === '1' ? (
              <div className="w-full rounded-lg overflow-hidden aspect-video bg-black">
                <video
                  controls
                  className="w-full h-full"
                  poster=""
                >
                  <source src="/videos/course1/lesson1.mp4" type="video/mp4" />
                  お使いのブラウザは動画再生に対応していません。
                </video>
              </div>
            ) : (
              <div className="w-full bg-slate-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-slate-600">{formatLabels[lesson.format]}</p>
                  <p className="text-sm text-slate-500 mt-2">{lesson.duration}分</p>
                  <p className="text-xs text-slate-400 mt-1">動画は準備中です</p>
                </div>
              </div>
            )}

            {/* Lesson Details */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                  {formatLabels[lesson.format]}
                </span>
                <span className="text-xs text-slate-500">{lesson.duration}分</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{lesson.title}</h1>
              <p className="text-lg text-slate-600 mb-6">{lesson.description}</p>

              {/* Learning Objective */}
              <div className="p-6 bg-slate-50 rounded-lg space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900">学習目標</h3>
                <p className="text-slate-700">{lesson.objective}</p>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 mb-8">
                {lesson.keywords.map((keyword) => (
                  <span key={keyword} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>

              {/* Complete Button */}
              <button
                onClick={() => setIsCompleted(!isCompleted)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isCompleted
                    ? 'bg-green-100 text-green-700'
                    : 'bg-slate-100 text-gray-900 hover:bg-slate-200'
                }`}
              >
                {isCompleted ? '✓ 完了済み' : 'このレッスンを完了する'}
              </button>
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-4 pt-8 border-t border-slate-200">
              {prevLesson ? (
                <Link href={`/courses/${course.id}/${prevLesson.id}`} className="flex items-center gap-2 px-6 py-2 rounded-lg border border-slate-300 font-medium hover:bg-slate-50 transition-colors">
                  <ChevronLeft className="h-5 w-5" /> 前のレッスン
                </Link>
              ) : <div />}
              {nextLesson ? (
                <Link href={`/courses/${course.id}/${nextLesson.id}`} className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors ml-auto">
                  次のレッスン <ChevronRight className="h-5 w-5" />
                </Link>
              ) : (
                <Link href={`/courses/${course.id}`} className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors ml-auto">
                  コースを完了する <ChevronRight className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">レッスン一覧</h3>
              <div className="space-y-1 max-h-96 overflow-y-auto">
                {course.lessons.map((l) => (
                  <Link
                    key={l.id}
                    href={`/courses/${course.id}/${l.id}`}
                    className={`block p-3 rounded-lg text-sm transition-all ${
                      l.id === lessonNumber
                        ? 'bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-600'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {l.id}. {l.title}
                  </Link>
                ))}
              </div>

              {/* Progress */}
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-2">進捗状況</p>
                <div className="w-full bg-slate-300 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${(lessonNumber / course.lessons.length) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-slate-600 mt-2">{lessonNumber} / {course.lessons.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-2xl">
          💬
        </button>
      </div>
    </div>
  );
}
