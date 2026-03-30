import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const features = [
    '全コースへのアクセス',
    'AIチャットサポート',
    '修了証の発行',
    'ダウンロード可能な資料',
    'コミュニティへのアクセス',
  ];

  const monthlyFeatures = features;
  const yearlyFeatures = [
    ...features,
    '優先サポート',
    '月1回のメンタリング相談',
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="border-b border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            料金プラン
          </h1>
          <p className="text-lg text-slate-600">
            シンプルで透明な価格設定。いつでもキャンセル可能です
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  月額プラン
                </h3>
                <p className="text-slate-600">柔軟な学習スケジュール向け</p>
              </div>

              <div className="mb-6">
                <div className="text-5xl font-bold text-foreground">
                  ¥2,980
                </div>
                <p className="text-slate-600 mt-2">1ヶ月あたり</p>
              </div>

              <Link
                href="/auth/signin"
                className="block w-full text-center px-6 py-3 rounded-lg bg-slate-100 text-foreground font-medium hover:bg-slate-200 transition-colors mb-8"
              >
                今すぐ始める
              </Link>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground mb-4">
                  含まれるもの：
                </h4>
                {monthlyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Yearly Plan - Recommended */}
            <div className="p-8 rounded-lg border-2 border-blue-600 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                おすすめ
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  年額プラン
                </h3>
                <p className="text-slate-600">最も人気のプラン</p>
              </div>

              <div className="mb-6">
                <div className="text-5xl font-bold text-foreground">
                  ¥29,800
                </div>
                <p className="text-slate-600 mt-2">1年あたり</p>
                <p className="text-sm text-green-600 font-medium mt-2">
                  2ヶ月分お得（月額換算: ¥2,483）
                </p>
              </div>

              <Link
                href="/auth/signin"
                className="block w-full text-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors mb-8"
              >
                今すぐ始める
              </Link>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground mb-4">
                  含まれるもの：
                </h4>
                {yearlyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Free Trial Notice */}
          <div className="text-center mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-slate-700">
              <span className="font-semibold">初月無料トライアル</span>
              - クレジットカードは不要です。いつでもキャンセルできます
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              よくある質問
            </h2>
            <p className="text-lg text-slate-600">
              ご質問がありましたらお気軽にお問い合わせください
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <details className="p-6 rounded-lg border border-slate-200 group cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground">
                <span>キャンセルはいつでもできますか？</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">
                  ⬇️
                </span>
              </summary>
              <p className="mt-4 text-slate-600">
                はい、いつでもキャンセルできます。キャンセルすると、その月の終わりに自動更新が停止します。返金はありませんが、キャンセル後もその月の終わりまでアクセスが可能です。
              </p>
            </details>

            {/* FAQ Item 2 */}
            <details className="p-6 rounded-lg border border-slate-200 group cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground">
                <span>複数ユーザーで使用できますか？</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">
                  ⬇️
                </span>
              </summary>
              <p className="mt-4 text-slate-600">
                いいえ、1つのアカウントは1人のユーザーのみが使用できます。複数ユーザーが必要な場合は、企業向けプランをお問い合わせください。
              </p>
            </details>

            {/* FAQ Item 3 */}
            <details className="p-6 rounded-lg border border-slate-200 group cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground">
                <span>新しいコースは随時追加されますか？</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">
                  ⬇️
                </span>
              </summary>
              <p className="mt-4 text-slate-600">
                はい、毎月新しいコースと教材が追加されます。すべてのプランで新しいコンテンツにアクセスできます。
              </p>
            </details>

            {/* FAQ Item 4 */}
            <details className="p-6 rounded-lg border border-slate-200 group cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-foreground">
                <span>修了証は履歴書に載せられますか？</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">
                  ⬇️
                </span>
              </summary>
              <p className="mt-4 text-slate-600">
                はい、すべての修了証は検証可能です。LinkedIn上で直接共有したり、履歴書に追加したりできます。
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            今すぐ学習を始めましょう
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            初月無料。クレジットカード不要。いつでもキャンセル可能です
          </p>
          <Link
            href="/auth/signin"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            無料で始める
          </Link>
        </div>
      </section>
    </div>
  );
}
