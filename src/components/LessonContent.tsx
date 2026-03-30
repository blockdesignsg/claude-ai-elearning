'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  content?: string;
  objectives?: string[];
  keywords?: string[];
}

interface LessonContentProps {
  lesson: Lesson;
}

type TabType = 'content' | 'objectives' | 'keywords';

export const LessonContent: React.FC<LessonContentProps> = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState<TabType>('content');

  const tabs: Array<{ id: TabType; label: string }> = [
    { id: 'content', label: 'レッスン内容' },
    { id: 'objectives', label: '学習目標' },
    { id: 'keywords', label: 'キーワード' },
  ];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
              activeTab === tab.id
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-600 border-transparent hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="prose prose-sm max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-4">
              {lesson.content ? (
                <p>{lesson.content}</p>
              ) : (
                <p className="text-gray-500">このレッスンのコンテンツはまだ利用できません。</p>
              )}
            </div>
          </div>
        )}

        {/* Objectives Tab */}
        {activeTab === 'objectives' && (
          <div>
            {lesson.objectives && lesson.objectives.length > 0 ? (
              <ul className="space-y-3">
                {lesson.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight
                      size={18}
                      className="text-blue-600 flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-700 leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">学習目標が設定されていません。</p>
            )}
          </div>
        )}

        {/* Keywords Tab */}
        {activeTab === 'keywords' && (
          <div>
            {lesson.keywords && lesson.keywords.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {lesson.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">キーワードが設定されていません。</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
