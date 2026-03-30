import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Claude AI 研修 | 社内業務自動化 e-ラーニング',
  description:
    'Claudeを使った社内業務自動化の体系的な学習プラットフォーム。実践的なハンズオンとAIチャットサポートで、誰でも効率的に習得できます。',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
