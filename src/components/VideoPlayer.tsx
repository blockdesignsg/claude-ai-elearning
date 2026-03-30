import React from 'react';
import { Play, BookOpen } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  description?: string;
  objectives?: string[];
  format: 'video' | 'practice' | 'test';
  videoUrl?: string;
  duration?: string;
}

interface VideoPlayerProps {
  lesson: Lesson;
}

const FORMAT_BADGE_MAP: Record<string, { label: string; color: string }> = {
  video: { label: '動画', color: 'bg-blue-100 text-blue-700' },
  practice: { label: '実習', color: 'bg-green-100 text-green-700' },
  test: { label: 'テスト', color: 'bg-purple-100 text-purple-700' },
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ lesson }) => {
  const formatInfo = FORMAT_BADGE_MAP[lesson.format];

  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Video Placeholder */}
      <div className="relative w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden aspect-video flex items-center justify-center group cursor-pointer">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <Play size={32} className="text-white fill-white" />
          </div>
          {lesson.duration && (
            <span className="text-white text-sm font-medium">{lesson.duration}</span>
          )}
        </div>
      </div>

      {/* Lesson Information */}
      <div className="space-y-4">
        {/* Title and Format Badge */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${formatInfo.color}`}>
              {formatInfo.label}
            </span>
          </div>
        </div>

        {/* Description */}
        {lesson.description && (
          <div className="pt-2">
            <p className="text-gray-600 leading-relaxed">{lesson.description}</p>
          </div>
        )}

        {/* Objectives */}
        {lesson.objectives && lesson.objectives.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <h2 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-blue-600" />
              学習目標
            </h2>
            <ul className="space-y-2">
              {lesson.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
