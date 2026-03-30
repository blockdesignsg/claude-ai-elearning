'use client';

import { ArrowRight, BookOpen, MessageCircle, Zap } from 'lucide-react';
import Link from 'next/link';
import { CourseCard } from '@/components/CourseCard';
import { courses } from '@/lib/courses';

export default function Home() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Claudeで、社内業務を
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                自動化しよう
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
              実践的なハンズオンと AIチャットサポートで、誰でも効率的に習得できる
              e-ラーニングプラットフォーム
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                コースを見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/auth/signin"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-300 text-foreground font-medium hover:bg-slate-50 transition-colors"
              >
                無料で始める
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10</div>
              <p className="text-slate-600">体系的なコース</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">115</div>
              <p className="text-slate-600">実践的なレッスン</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">19+</div>
              <p className="text-slate-600">時間のコンテンツ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              なぜ選ばれるのか
            </h2>
            <p className="text-xl text-slate-600">
              他にはない、3つの特徴
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="p-8 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                体系的なカリキュラム
              </h3>
              <p className="text-slate-600">
                初級から応用まで、段階的に学べるように設計されたコース構成
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-8 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                AIチャットサポート
              </h3>
              <p className="text-slate-600">
                わからないことがあれば、いつでも Claudeに質問できる環境
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-8 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                実践的なハンズオン
              </h3>
              <p className="text-slate-600">
                実際の業務で使える知識とスキルを、すぐに活かせる課題
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                おすすめコース
              </h2>
              <p className="text-slate-600">
                人気の高い基礎コースから始めましょう
              </p>
            </div>
            <Link
              href="/courses"
              className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
            >
              全て見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              今すぐ学習を始めましょう
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              最初のコースは完全に無料。アカウント登録後、すぐに学習を開始できます
            </p>
            <Link
              href="/auth/signin"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              無料で始める
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
