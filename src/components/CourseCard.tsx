'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';
import { DifficultyStars } from './DifficultyStars';
import { ProgressBar } from './ProgressBar';
import type { Course } from '@/types';

interface CourseCardProps {
  course: Course;
  progress?: {
    completed: number;
    total: number;
  };
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, progress }) => {
  const { id, title, description, lessonCount, duration, difficulty, icon, color } = course;
  const truncatedDescription =
    description && description.length > 100
      ? description.substring(0, 100) + '...'
      : description || '';

  const durationLabel = duration >= 60
    ? `${Math.floor(duration / 60)}時間${duration % 60 > 0 ? duration % 60 + '分' : ''}`
    : `${duration}分`;

  return (
    <Link href={`/courses/${id}`}>
      <div className="group h-full bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer hover:border-gray-300">
        <div
          className={`h-24 bg-gradient-to-br ${color || 'from-blue-50 to-indigo-50'} flex items-center justify-center`}
        >
          <span className="text-4xl">{icon || '📚'}</span>
        </div>

        <div className="p-5 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
          </div>

          <p className="text-sm text-gray-600 line-clamp-2">{truncatedDescription}</p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              {lessonCount}レッスン
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {durationLabel}
            </div>
          </div>

          <div className="pt-1">
            <DifficultyStars level={difficulty} />
          </div>

          {progress && (
            <div className="pt-2 border-t border-gray-100">
              <ProgressBar completed={progress.completed} total={progress.total} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
