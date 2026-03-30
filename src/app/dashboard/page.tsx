import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { courses } from '@/lib/courses';

// This page requires authentication - add middleware protection
// Middleware should redirect unauthenticated users to /auth/signin

export default function DashboardPage() {
  const completionStats = [
    { course: courses[0], progress: 75 },
    { course: courses[1], progress: 40 },
    { course: courses[2], progress: 0 },
  ];

  const totalProgress = Math.round(
    completionStats.reduce((sum, stat) => sum + stat.progress, 0) /
      completionStats.length
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="border-b border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            こんにちは、田中さん
          </h1>
          <p className="text-lg text-slate-600">
            学習の進捗状況をチェックして、次のステップに進みましょう
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Total Progress Card */}
            <div className="p-6 rounded-lg border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">全体の進捗</h3>
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600">
                {totalProgress}%
              </div>
              <div className="w-full bg-slate-300 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
            </div>

            {/* Hours Learned */}
            <div className="p-6 rounded-lg border border-slate-200 space-y-4">
              <h3 className="font-semibold text-foreground">
                学習時間
              </h3>
              <div className="text-4xl font-bold text-slate-900">
                14.5
              </div>
              <p className="text-sm text-slate-600">
                /19+ 時間（今月）
              </p>
            </div>

            {/* Completed Courses */}
            <div className="p-6 rounded-lg border border-slate-200 space-y-4">
              <h3 className="font-semibold text-foreground">
                完了したコース
              </h3>
              <div className="text-4xl font-bold text-slate-900">
                2
              </div>
              <p className="text-sm text-slate-600">
                /10 コース完了
              </p>
            </div>
          </div>

          {/* Course Progress Cards */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              学習中のコース
            </h2>
            <div className="space-y-4">
              {completionStats.map((stat) => (
                <Link
                  key={stat.course.id}
                  href={`/courses/${stat.course.id}`}
                  className="block p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {stat.course.title}
                    </h3>
                    <span className="text-sm font-medium text-slate-600">
                      {stat.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-300 rounded-full h-2 mb-4">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">
                      {stat.course.lessons} レッスン
                    </span>
                    <span className="text-blue-600 font-medium flex items-center">
                      続きを学ぶ
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recently Accessed */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              最近見たコース
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="block p-6 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group"
                >
                  <div className="mb-4">
                    <span className="text-3xl">{course.icon}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="mt-4 text-sm text-blue-600 font-medium flex items-center">
                    開く
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Resume CTA */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              続きを学ぶ
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              最後に見ていたレッスンから再開しましょう
            </p>
            <Link
              href={`/courses/${completionStats[0].course.id}/3`}
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              レッスンを再開する
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
