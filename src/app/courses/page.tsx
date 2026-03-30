'use client';

import { useState } from 'react';
import { CourseCard } from '@/components/CourseCard';
import { courses } from '@/lib/courses';

type DifficultyFilter = 'all' | 'beginner' | 'intermediate' | 'advanced';

export default function CoursesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('all');

  const filteredCourses = courses.filter((course) => {
    if (selectedDifficulty === 'all') return true;
    return course.difficulty === selectedDifficulty;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="border-b border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            全コース一覧
          </h1>
          <p className="text-lg text-slate-600">
            {filteredCourses.length} コースが利用可能です
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              難易度で絞る
            </h3>
            <div className="flex flex-wrap gap-3">
              {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedDifficulty(level as DifficultyFilter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedDifficulty === level
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-foreground hover:bg-slate-200'
                  }`}
                >
                  {level === 'all'
                    ? 'すべて'
                    : level === 'beginner'
                      ? '初級'
                      : level === 'intermediate'
                        ? '中級'
                        : '上級'}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-slate-600">
                該当するコースはありません
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
