'use client';

import { useState } from 'react';
import { CourseCard } from '@/components/CourseCard';
import { courses } from '@/lib/courses';

type DifficultyFilter = 'all' | 1 | 2 | 3;

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
              {[
                { value: 'all' as DifficultyFilter, label: 'すべて' },
                { value: 1 as DifficultyFilter, label: '初級' },
                { value: 2 as DifficultyFilter, label: '中級' },
                { value: 3 as DifficultyFilter, label: '上級' },
              ].map((level) => (
                <button
                  key={String(level.value)}
                  onClick={() => setSelectedDifficulty(level.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedDifficulty === level.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-foreground hover:bg-slate-200'
                  }`}
                >
                  {level.label}
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
