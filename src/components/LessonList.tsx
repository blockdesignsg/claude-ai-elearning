'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Clock, Menu, X, BookOpen, Zap } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  format: 'video' | 'practice' | 'test';
  completed?: boolean;
}

interface LessonListProps {
  lessons: Lesson[];
  currentLessonId?: string;
  courseId: string;
  progress?: {
    [key: string]: boolean;
  };
}

const FORMAT_ICON_MAP: Record<string, React.ReactNode> = {
  video: <BookOpen size={14} className="text-blue-600" />,
  practice: <Zap size={14} className="text-orange-600" />,
  test: <BookOpen size={14} className="text-purple-600" />,
};

export const LessonList: React.FC<LessonListProps> = ({
  lessons,
  currentLessonId,
  courseId,
  progress = {},
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const completedLessons = lessons.filter((l) => progress[l.id] || l.completed).length;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed bottom-24 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-16 md:top-0 left-0 h-screen md:h-auto w-64 md:w-72 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 ease-out z-30 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-4 space-y-4">
          {/* Progress Header */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
            <p className="text-xs text-gray-600 mb-2">進捗状況</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-blue-600">{completedLessons}</span>
              <span className="text-sm text-gray-600">/ {lessons.length}</span>
            </div>
            <div className="mt-3 h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                style={{ width: `${(completedLessons / lessons.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Lessons List */}
          <nav className="space-y-1">
            {lessons.map((lesson, index) => {
              const isCompleted = progress[lesson.id] || lesson.completed;
              const isCurrent = lesson.id === currentLessonId;

              return (
                <Link
                  key={lesson.id}
                  href={`/courses/${courseId}/lessons/${lesson.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block p-3 rounded-lg transition-all duration-200 ${
                    isCurrent
                      ? 'bg-blue-50 border border-blue-200'
                      : 'hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Completion Check */}
                    {isCompleted ? (
                      <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-4.5 h-4.5 rounded-full border border-gray-300 flex-shrink-0 mt-1" />
                    )}

                    {/* Lesson Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2">
                        <p
                          className={`text-sm font-medium leading-tight ${
                            isCurrent
                              ? 'text-blue-600'
                              : isCompleted
                                ? 'text-gray-500 line-through'
                                : 'text-gray-900'
                          }`}
                        >
                          <span className="block text-xs text-gray-500 mb-0.5">
                            Lesson {index + 1}
                          </span>
                          {lesson.title}
                        </p>
                        <div className="flex-shrink-0">
                          {FORMAT_ICON_MAP[lesson.format]}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-500">
                        <Clock size={12} />
                        {lesson.duration}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};
