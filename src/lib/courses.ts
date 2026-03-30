import { Course, Lesson } from '../types/index'

// Course 1: AI・Claude入門
const course1Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 1,
    title: 'AIとは何か？〜身近な事例で理解する',
    format: 'video',
    duration: 8,
    description: 'AIの基本概念を身近な事例を通じて学びます。AIが私たちの日常生活でどのように活用されているかを理解することができます。',
    objective: 'AIの基本概念を理解し、AI技術が社会に与える影響を認識する',
    keywords: ['AI', '人工知能', '機械学習', '身近な事例']
  },
  {
    id: 2,
    courseId: 1,
    title: '生成AIの仕組み〜なぜ文章が書けるのか',
    format: 'video',
    duration: 8,
    description: '生成AIがどのようなメカニズムで文章を生成しているのかを解説します。トランスフォーマーなどの基本的なアーキテクチャについて学びます。',
    objective: '生成AIの基本的な仕組みと動作原理を理解する',
    keywords: ['生成AI', 'トランスフォーマー', 'ニューラルネットワーク', '学習']
  },
  {
    id: 3,
    courseId: 1,
    title: 'Claude vs ChatGPT vs Gemini〜各AIの特徴比較',
    format: 'video',
    duration: 8,
    description: '主要な生成AIモデル（Claude、ChatGPT、Gemini）の特徴や違いを比較します。それぞれのAIに適した使い分けを学びます。',
    objective: '各AIモデルの特徴を理解し、用途に応じて適切なAIを選択できる',
    keywords: ['Claude', 'ChatGPT', 'Gemini', 'AI比較']
  },
  {
    id: 4,
    courseId: 1,
    title: 'Claudeの強み〜なぜ業務自動化に最適か',
    format: 'video',
    duration: 7,
    description: 'Claudeが業務自動化に適している理由を詳しく説明します。長文処理、複雑なタスク、正確性などのClaudeの特徴を学びます。',
    objective: 'Claudeの強みを理解し、業務自動化への適用可能性を認識する',
    keywords: ['Claude', '業務自動化', '長文処理', '正確性']
  },
  {
    id: 5,
    courseId: 1,
    title: 'アカウント作成と初期設定',
    format: 'practice',
    duration: 8,
    description: 'Claudeのアカウント作成から初期設定まで、実際に手を動かして学びます。アカウント認証やプロフィール設定など必要な手順を習得します。',
    objective: 'Claudeのアカウントを自分で作成し、初期設定を完了する',
    keywords: ['アカウント作成', 'サインアップ', '初期設定']
  },
  {
    id: 6,
    courseId: 1,
    title: 'Claude画面の使い方〜基本操作マスター',
    format: 'practice',
    duration: 7,
    description: 'Claudeのユーザーインターフェースの各機能を詳しく解説します。チャット画面、サイドバー、メニューなどの操作方法をマスターします。',
    objective: 'Claudeの基本的な操作方法を身につけ、効率的に利用できるようになる',
    keywords: ['UI', 'インターフェース', '基本操作', 'ナビゲーション']
  },
  {
    id: 7,
    courseId: 1,
    title: '初めてのプロンプト〜話しかけてみよう',
    format: 'practice',
    duration: 7,
    description: 'Claudeに初めてプロンプトを入力して、AIとやり取りする体験をします。簡単な質問から始めて、コミュニケーションの基本を学びます。',
    objective: 'Claudeに初めてプロンプトを入力し、AIとの対話を体験する',
    keywords: ['プロンプト', '対話', 'コミュニケーション']
  },
  {
    id: 8,
    courseId: 1,
    title: 'ファイルアップロード活用術',
    format: 'practice',
    duration: 8,
    description: 'Claudeにファイルをアップロードして、PDFやWordなどの文書を処理させる方法を学びます。ファイルのアップロード、分析、抽出などを習得します。',
    objective: 'ファイルアップロード機能を使いこなし、文書の分析・処理ができるようになる',
    keywords: ['ファイルアップロード', 'PDF', 'ドキュメント処理']
  },
  {
    id: 9,
    courseId: 1,
    title: 'Artifacts機能でコンテンツ生成',
    format: 'practice',
    duration: 8,
    description: 'Artifacts機能を使って、コード、HTML、マークダウンなどのコンテンツを生成・編集します。生成したコンテンツの活用方法を学びます。',
    objective: 'Artifacts機能を活用してコンテンツを生成し、編集・カスタマイズできるようになる',
    keywords: ['Artifacts', 'コンテンツ生成', 'コード生成']
  },
  {
    id: 10,
    courseId: 1,
    title: 'Projects機能で知識ベースを構築',
    format: 'practice',
    duration: 8,
    description: 'Projects機能を使って、複数の会話や文書を整理し、知識ベースを構築します。プロジェクトの管理と活用方法を学びます。',
    objective: 'Projects機能を使って知識ベースを構築し、情報を効率的に管理できるようになる',
    keywords: ['Projects', '知識ベース', '情報管理']
  },
  {
    id: 11,
    courseId: 1,
    title: 'AIが苦手なこと〜限界と注意点',
    format: 'video',
    duration: 7,
    description: 'AIの限界と注意点を理解します。AIが得意な分野と苦手な分野、誤った回答のリスク、倫理的な配慮などについて学びます。',
    objective: 'AIの限界を理解し、適切で責任のある利用方法を身につける',
    keywords: ['限界', '注意点', '倫理', 'バイアス']
  },
  {
    id: 12,
    courseId: 1,
    title: 'コース1まとめ〜確認テスト',
    format: 'test',
    duration: 6,
    description: 'コース1で学んだ内容を確認するテストです。AIの基本概念からClaudeの基本操作までを総復習します。',
    objective: 'コース1全体の内容を定着させ、習得度を確認する',
    keywords: ['確認テスト', '復習', '総括']
  }
]

// Course 2: プロンプトエンジニアリング基礎
const course2Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 2,
    title: 'プロンプトとは何か〜良い指示の条件',
    format: 'video',
    duration: 8,
    description: 'プロンプトの概念と、AIから望む結果を得るための良い指示の条件を学びます。曖昧さを減らし、明確な指示を与える方法を理解します。',
    objective: 'プロンプトの重要性を理解し、効果的な指示の原則を身につける',
    keywords: ['プロンプト', '指示', '明確性', 'コミュニケーション']
  },
  {
    id: 2,
    courseId: 2,
    title: '役割指定テクニック〜AIに役割を与える',
    format: 'video_practice',
    duration: 10,
    description: 'AIに特定の役割や立場を与えることで、より適切な回答を引き出すテクニックを学びます。キャラクター指定や専門家役割の活用法を習得します。',
    objective: '役割指定テクニックを使いこなし、目的に応じた適切な回答を得られるようになる',
    keywords: ['役割指定', 'キャラクター', 'ペルソナ', 'コンテキスト']
  },
  {
    id: 3,
    courseId: 2,
    title: '出力形式の指定〜望む形で回答を得る',
    format: 'video_practice',
    duration: 10,
    description: 'AIに出力形式を明確に指示する方法を学びます。表形式、箇条書き、JSON、マークダウンなど様々な形式での出力を制御します。',
    objective: '出力形式を指定してAIから望むフォーマットで結果を取得できるようになる',
    keywords: ['出力形式', 'フォーマット', 'マークダウン', 'JSON']
  },
  {
    id: 4,
    courseId: 2,
    title: 'Few-shotプロンプト〜例を示して導く',
    format: 'video_practice',
    duration: 12,
    description: 'いくつかの例を示すことで、AIの出力を指定した形式や内容に誘導するテクニックを学びます。学習効果と活用例を習得します。',
    objective: 'Few-shotテクニックを活用して、AIの出力をより精密にコントロールできるようになる',
    keywords: ['Few-shot', '例示', 'パターン認識', 'テンプレート']
  },
  {
    id: 5,
    courseId: 2,
    title: 'Chain-of-Thought〜考えるプロセスを指示',
    format: 'video_practice',
    duration: 10,
    description: 'AIに段階的に考えさせるChain-of-Thoughtテクニックを学びます。複雑な問題を分解して、論理的な思考プロセスを促します。',
    objective: 'Chain-of-Thoughtプロンプトを使い、複雑な問題解決の精度を高められるようになる',
    keywords: ['Chain-of-Thought', 'ステップ思考', 'ロジック', '推論']
  },
  {
    id: 6,
    courseId: 2,
    title: 'コンテキストの与え方〜背景情報の設計',
    format: 'video_practice',
    duration: 10,
    description: 'AIに背景情報や文脈を効果的に与える方法を学びます。会社情報、業界知識、ルールなどのコンテキストを活用します。',
    objective: '適切なコンテキスト設計で、AIの回答の質と関連性を大幅に向上させられるようになる',
    keywords: ['コンテキスト', '背景情報', '文脈', '知識']
  },
  {
    id: 7,
    courseId: 2,
    title: '長文処理テクニック〜大量の文書を扱う',
    format: 'practice',
    duration: 12,
    description: '大量の文書やテキストを効率的にAIに処理させるテクニックを学びます。文書の分割、要約、抽出などの方法を習得します。',
    objective: '長文や大量のデータを効率的に処理でき、必要な情報を抽出できるようになる',
    keywords: ['長文処理', 'スケーリング', '要約', '情報抽出']
  },
  {
    id: 8,
    courseId: 2,
    title: 'プロンプトチェーン〜複数ステップの自動化',
    format: 'video_practice',
    duration: 12,
    description: '複数のプロンプトを組み合わせて、複雑なタスクを自動化するチェーン処理を学びます。各ステップの設計と連携方法を習得します。',
    objective: 'プロンプトチェーンを設計して、複数ステップのタスクを自動化できるようになる',
    keywords: ['プロンプトチェーン', 'ワークフロー', 'オートメーション', 'タスク分解']
  },
  {
    id: 9,
    courseId: 2,
    title: 'ネガティブプロンプト〜やってほしくないことを伝える',
    format: 'video_practice',
    duration: 8,
    description: 'AIにやってほしくないことを明確に指示するネガティブプロンプトの書き方を学びます。不要な情報やトーン、形式を除外する方法を習得します。',
    objective: 'ネガティブプロンプトを効果的に活用して、不要な出力を避けられるようになる',
    keywords: ['ネガティブプロンプト', '除外', '制限', '条件']
  },
  {
    id: 10,
    courseId: 2,
    title: 'プロンプトテンプレート集〜業務別ベスト',
    format: 'practice',
    duration: 10,
    description: '業務別の実践的なプロンプトテンプレートを学びます。文書作成、データ分析、顧客対応など、様々なシーンで活用できるテンプレートを習得します。',
    objective: '実務で即活用できるプロンプトテンプレートを習得し、効率的に業務に適用できるようになる',
    keywords: ['テンプレート', '業務別', '実践的', 'ベストプラクティス']
  },
  {
    id: 11,
    courseId: 2,
    title: 'プロンプトのデバッグ〜期待通りにならない時',
    format: 'practice',
    duration: 10,
    description: 'プロンプトが期待通りに動作しない場合の原因分析と改善方法を学びます。AIの回答を評価し、プロンプトを反復改善するプロセスを習得します。',
    objective: 'プロンプトを反復改善して、より良い結果を得るデバッグ技法を身につける',
    keywords: ['デバッグ', 'トラブルシューティング', '改善', '評価']
  },
  {
    id: 12,
    courseId: 2,
    title: 'コース2まとめ〜実践チャレンジ',
    format: 'test',
    duration: 10,
    description: 'コース2で学んだプロンプトエンジニアリングの技法を総合的に活用する実践的なチャレンジです。',
    objective: 'プロンプトエンジニアリングの全技法を統合し、実際のビジネス課題を解決できるようになる',
    keywords: ['実践', 'チャレンジ', '総合演習', '応用']
  }
]

// Course 3: 文書作成の自動化
const course3Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 3,
    title: '社内文書作成の現状課題と自動化の可能性',
    format: 'video',
    duration: 7,
    description: '社内文書作成にかける時間や課題を分析し、AIによる自動化でどのような改善が期待できるかを学びます。',
    objective: '文書作成の現状課題を認識し、自動化の効果と可能性を理解する',
    keywords: ['文書作成', '業務効率化', '現状分析', 'ROI']
  },
  {
    id: 2,
    courseId: 3,
    title: '報告書の自動生成〜定型フォーマットを活用',
    format: 'practice',
    duration: 10,
    description: '月次報告書や進捗報告など定型的な報告書をAIで自動生成する方法を学びます。テンプレートとデータを組み合わせた自動化を習得します。',
    objective: '定型的な報告書をAIで自動生成し、時間を削減できるようになる',
    keywords: ['報告書', 'テンプレート', '自動生成', 'データ活用']
  },
  {
    id: 3,
    courseId: 3,
    title: '提案書・企画書の作成支援',
    format: 'practice',
    duration: 10,
    description: 'AIを使って提案書や企画書の作成を支援する方法を学びます。構成案の作成から文章の磨き込みまでのプロセスを習得します。',
    objective: 'AIを活用して提案書・企画書を効率的に作成できるようになる',
    keywords: ['提案書', '企画書', 'コンテンツ生成', 'ストーリー構成']
  },
  {
    id: 4,
    courseId: 3,
    title: 'マニュアル・手順書の自動生成',
    format: 'practice',
    duration: 10,
    description: '業務マニュアルや手順書をAIで自動生成する方法を学びます。複雑なプロセスを分かりやすい手順に変換するテクニックを習得します。',
    objective: 'マニュアル・手順書をAIで効率的に作成できるようになる',
    keywords: ['マニュアル', '手順書', 'ドキュメント', '業務プロセス']
  },
  {
    id: 5,
    courseId: 3,
    title: '契約書・規約のドラフト作成支援',
    format: 'video_practice',
    duration: 10,
    description: '契約書や利用規約などの法務文書のドラフト作成をAIで支援する方法を学びます。法的な注意点と活用のポイントを習得します。',
    objective: '法務文書のドラフト作成をAIで支援し、法務部門の負担を軽減できるようになる',
    keywords: ['契約書', '規約', '法務', 'ドラフト作成']
  },
  {
    id: 6,
    courseId: 3,
    title: 'プレゼン資料のストーリー構成',
    format: 'practice',
    duration: 8,
    description: 'プレゼンテーション資料の効果的なストーリー構成をAIで設計する方法を学びます。聴き手を惹きつけるストーリーラインの作成を習得します。',
    objective: 'AIを活用して説得力のあるプレゼン資料を効率的に企画できるようになる',
    keywords: ['プレゼン', 'ストーリー', 'ストーリーテリング', '資料構成']
  },
  {
    id: 7,
    courseId: 3,
    title: '文書の校正・推敲〜品質を高める',
    format: 'practice',
    duration: 8,
    description: 'AIを使った文書の校正と推敲の方法を学びます。文法チェック、表現の改善、トーンの統一などを習得します。',
    objective: 'AIの支援により、文書の質を効率的に向上させられるようになる',
    keywords: ['校正', '推敲', '文法', '表現改善']
  },
  {
    id: 8,
    courseId: 3,
    title: '多言語翻訳〜グローバル文書対応',
    format: 'practice',
    duration: 8,
    description: 'AIを使った多言語翻訳で、グローバル対応の文書を効率的に作成する方法を学びます。品質の確保と実装方法を習得します。',
    objective: '多言語翻訳をAIで効率的に行い、グローバルコミュニケーションを加速できるようになる',
    keywords: ['翻訳', '多言語', 'グローバル', 'ローカライゼーション']
  },
  {
    id: 9,
    courseId: 3,
    title: '文書テンプレートライブラリの構築',
    format: 'practice',
    duration: 8,
    description: '組織全体で使える文書テンプレートライブラリをAIの活用で構築する方法を学びます。標準化と品質保証のポイントを習得します。',
    objective: '組織全体で使える文書テンプレートライブラリを構築できるようになる',
    keywords: ['テンプレート', 'ライブラリ', '標準化', 'ナレッジ']
  },
  {
    id: 10,
    courseId: 3,
    title: '文書の要約・比較分析',
    format: 'practice',
    duration: 8,
    description: '複数の文書を要約したり、比較分析したりするAIの活用方法を学びます。大量の文書から重要情報を抽出するテクニックを習得します。',
    objective: '複数文書の要約・比較分析をAIで効率的に行い、重要な洞察を得られるようになる',
    keywords: ['要約', '比較分析', '情報抽出', 'テキスト分析']
  },
  {
    id: 11,
    courseId: 3,
    title: 'ブランドボイス統一〜トーン&マナー設定',
    format: 'video_practice',
    duration: 7,
    description: '組織全体の文書で一貫したブランドボイスを保つためのAI活用方法を学びます。トーン、マナー、スタイルガイドの設定を習得します。',
    objective: '全社的なブランドボイスの統一をAIで支援し、一貫したコミュニケーションを実現できるようになる',
    keywords: ['ブランドボイス', 'トーン', 'スタイルガイド', '一貫性']
  },
  {
    id: 12,
    courseId: 3,
    title: 'コース3まとめ〜文書作成実践演習',
    format: 'test',
    duration: 6,
    description: 'コース3で学んだ文書作成自動化の知識を総合的に活用する実践的な演習です。',
    objective: '文書作成の自動化スキルを統合し、実務的な課題を解決できるようになる',
    keywords: ['実践', '総合演習', '応用', '統合']
  }
]

// Course 4: データ分析・レポート自動化
const course4Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 4,
    title: 'データ分析業務の自動化〜全体像を掴む',
    format: 'video',
    duration: 8,
    description: 'データ分析業務全体がAIでどのように自動化できるかの全体像を学びます。各ステップと自動化の可能性を理解します。',
    objective: 'データ分析の自動化全体像を理解し、実装可能性を認識する',
    keywords: ['データ分析', '自動化', '業務効率化', '全体設計']
  },
  {
    id: 2,
    courseId: 4,
    title: 'CSVデータの読み込みと基本分析',
    format: 'practice',
    duration: 10,
    description: 'CSVファイルをAIで読み込んで基本的な分析を行う方法を学びます。データの統計情報抽出やパターン認識を習得します。',
    objective: 'CSVデータをAIで読み込み、基本的な分析結果を得られるようになる',
    keywords: ['CSV', 'データ読み込み', '基本統計', 'データ処理']
  },
  {
    id: 3,
    courseId: 4,
    title: 'Excelデータの高度な分析',
    format: 'practice',
    duration: 12,
    description: 'Excelの複雑なデータセットをAIで分析する高度な手法を学びます。複数シート、複雑な関数、マクロの活用を習得します。',
    objective: 'Excelデータを効率的に分析し、複雑な分析タスクを自動化できるようになる',
    keywords: ['Excel', 'データ分析', '複雑分析', '自動化']
  },
  {
    id: 4,
    courseId: 4,
    title: 'データクレンジング〜汚いデータを整える',
    format: 'practice',
    duration: 10,
    description: '不完全なデータを整理・クリーニングするAIの活用方法を学びます。欠損値処理、フォーマット統一、異常値検出を習得します。',
    objective: '汚いデータを効率的にクリーニングし、分析可能な状態に整備できるようになる',
    keywords: ['データクレンジング', 'データ品質', '欠損値', 'ノーマライゼーション']
  },
  {
    id: 5,
    courseId: 4,
    title: 'ピボットテーブル的な集計分析',
    format: 'practice',
    duration: 10,
    description: 'ピボットテーブルのような多次元集計をAIで実行する方法を学びます。データの複合集計と傾向分析を習得します。',
    objective: 'AIを使ってピボットテーブル級の集計分析を効率的に実行できるようになる',
    keywords: ['ピボットテーブル', '集計', '多次元分析', 'クロス集計']
  },
  {
    id: 6,
    courseId: 4,
    title: 'グラフ・チャートの自動生成',
    format: 'practice',
    duration: 10,
    description: 'データに基づいて最適なグラフやチャートをAIで自動生成する方法を学びます。視覚化の効果と選択基準を習得します。',
    objective: 'データを視覚的に分かりやすく表現するグラフをAIで効率的に生成できるようになる',
    keywords: ['グラフ', 'チャート', 'ビジュアライゼーション', '自動生成']
  },
  {
    id: 7,
    courseId: 4,
    title: 'KPIダッシュボード設計',
    format: 'video_practice',
    duration: 12,
    description: 'ビジネスのKPIを監視するダッシュボード設計をAIで支援する方法を学びます。指標の選定とレイアウト設計を習得します。',
    objective: 'KPIダッシュボードを設計し、経営状況を可視化できるようになる',
    keywords: ['KPI', 'ダッシュボード', 'ビジネスメトリクス', 'モニタリング']
  },
  {
    id: 8,
    courseId: 4,
    title: '定期レポートの自動生成テンプレート',
    format: 'practice',
    duration: 12,
    description: '月次、四半期、年次などの定期レポートをAIで自動生成する仕組みを学びます。テンプレート設計と自動化を習得します。',
    objective: '定期レポートを自動生成する仕組みを構築し、手作業を削減できるようになる',
    keywords: ['定期レポート', '自動生成', 'テンプレート', 'スケジューリング']
  },
  {
    id: 9,
    courseId: 4,
    title: 'アンケート分析〜自由記述の分類',
    format: 'practice',
    duration: 10,
    description: 'アンケートの自由記述をAIで自動分類・分析する方法を学びます。カテゴリ化、感情分析、キーワード抽出を習得します。',
    objective: 'テキストアンケートをAIで効率的に分析し、傾向や意見を把握できるようになる',
    keywords: ['アンケート分析', '自由記述', 'テキスト分析', 'センチメント分析']
  },
  {
    id: 10,
    courseId: 4,
    title: '予測分析の基礎〜トレンドを読む',
    format: 'video_practice',
    duration: 10,
    description: '歴史的なデータからトレンドを読み、将来を予測するAIの活用方法を学びます。統計的な基礎と実装方法を習得します。',
    objective: 'AIを使ってトレンド分析と基本的な予測ができるようになる',
    keywords: ['予測分析', 'トレンド', '時系列分析', 'フォーキャスト']
  },
  {
    id: 11,
    courseId: 4,
    title: '分析結果のプレゼンテーション',
    format: 'practice',
    duration: 8,
    description: 'データ分析の結果を経営層や関係者に効果的に伝えるプレゼンテーション方法を学びます。インサイトと提案の構成を習得します。',
    objective: '分析結果を説得力を持って伝え、意思決定を支援できるようになる',
    keywords: ['プレゼンテーション', 'インサイト', 'ストーリーテリング', '意思決定']
  },
  {
    id: 12,
    courseId: 4,
    title: 'コース4まとめ〜データ分析実践演習',
    format: 'test',
    duration: 8,
    description: 'コース4で学んだデータ分析・レポート自動化の知識を総合的に活用する実践演習です。',
    objective: 'データ分析の自動化スキルを統合し、実務的な分析課題を解決できるようになる',
    keywords: ['実践', '総合演習', '応用', '統合']
  }
]

// Course 5: メール・コミュニケーション効率化
const course5Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 5,
    title: 'ビジネスメール作成の時短術',
    format: 'video_practice',
    duration: 8,
    description: 'ビジネスメール作成をAIで高速化する方法を学びます。敬語、形式、マナーを保ちながら効率化するテクニックを習得します。',
    objective: 'AIを活用してビジネスメール作成の時間を大幅に短縮できるようになる',
    keywords: ['ビジネスメール', 'メール作成', '時短', '敬語']
  },
  {
    id: 2,
    courseId: 5,
    title: '返信メールの自動ドラフト生成',
    format: 'practice',
    duration: 8,
    description: '受け取ったメールに対する返信をAIで自動ドラフト生成する方法を学びます。文脈を理解した適切な返信を習得します。',
    objective: 'メール返信をAIで自動ドラフト化し、確認と編集だけで送付できるようになる',
    keywords: ['メール返信', 'ドラフト生成', 'コンテキスト理解', '自動化']
  },
  {
    id: 3,
    courseId: 5,
    title: 'メールの要約〜長文メールを瞬時に把握',
    format: 'practice',
    duration: 7,
    description: '長く複雑なメールの内容を瞬時に要約するAIの活用方法を学びます。重要情報の抽出と優先順位の理解を習得します。',
    objective: '長文メールを効率的に要約し、重要な情報を素早く把握できるようになる',
    keywords: ['メール要約', '情報抽出', '優先度判定', '長文処理']
  },
  {
    id: 4,
    courseId: 5,
    title: '英文メール・多言語コミュニケーション',
    format: 'practice',
    duration: 8,
    description: '英文メールや多言語メールの作成・翻訳をAIで効率化する方法を学びます。正確な表現と文法の確保を習得します。',
    objective: 'AIを活用して英文メール・多言語メールを効率的に作成できるようになる',
    keywords: ['英文メール', '翻訳', '多言語', 'グローバルコミュニケーション']
  },
  {
    id: 5,
    courseId: 5,
    title: 'チャット・Slack文の効率化',
    format: 'practice',
    duration: 7,
    description: 'SlackなどのチャットツールでのメッセージをAIで効率化する方法を学びます。カジュアルながら明確な表現を習得します。',
    objective: 'AIを活用してSlackなどのチャットコミュニケーションを効率化できるようになる',
    keywords: ['Slack', 'チャット', 'メッセージング', 'カジュアルコミュニケーション']
  },
  {
    id: 6,
    courseId: 5,
    title: 'お詫び・クレーム対応文の作成',
    format: 'video_practice',
    duration: 8,
    description: 'お詫びやクレーム対応など難しいメールをAIで効果的に作成する方法を学びます。誠実さと問題解決を伝える文面を習得します。',
    objective: 'AIを活用して顧客対応のメールを適切に作成できるようになる',
    keywords: ['クレーム対応', 'お詫び', 'カスタマーサービス', '感情対応']
  },
  {
    id: 7,
    courseId: 5,
    title: '社内通知・アナウンスの作成',
    format: 'practice',
    duration: 7,
    description: '社内全体へのアナウンスやお知らせをAIで効率的に作成する方法を学びます。全員への分かりやすい伝達を習得します。',
    objective: 'AIを活用して社内通知・アナウンスを効率的に作成できるようになる',
    keywords: ['社内通知', 'アナウンス', 'インターナルコミュニケーション', '周知']
  },
  {
    id: 8,
    courseId: 5,
    title: 'カスタマーサポート返信テンプレート',
    format: 'practice',
    duration: 8,
    description: 'カスタマーサポートの定型返信をAIで効率化する方法を学びます。顧客満足度を保ちながら業務負荷を軽減します。',
    objective: 'AIを活用してカスタマーサポート対応を大幅に効率化できるようになる',
    keywords: ['カスタマーサポート', '返信テンプレート', 'サポート自動化', '顧客対応']
  },
  {
    id: 9,
    courseId: 5,
    title: 'SNS・ブログ投稿文の作成',
    format: 'practice',
    duration: 7,
    description: 'SNSやブログの投稿文をAIで効率的に作成する方法を学びます。各プラットフォームの特性に合わせた表現を習得します。',
    objective: 'AIを活用してSNS・ブログ投稿を効率的に作成できるようになる',
    keywords: ['SNS', 'ブログ', 'コンテンツ作成', 'ソーシャルメディア']
  },
  {
    id: 10,
    courseId: 5,
    title: 'コミュニケーションスタイルの使い分け',
    format: 'video',
    duration: 7,
    description: 'メール、チャット、SNS、電話など、コミュニケーション手段ごとのスタイル使い分けを学びます。相手や状況に応じた適切な表現を習得します。',
    objective: 'コミュニケーション手段に応じたスタイルを使い分け、効果的に伝えられるようになる',
    keywords: ['コミュニケーションスタイル', 'トーン', 'チャネル分け', '相手理解']
  },
  {
    id: 11,
    courseId: 5,
    title: 'コース5まとめ〜コミュニケーション演習',
    format: 'test',
    duration: 5,
    description: 'コース5で学んだメール・コミュニケーション効率化の知識を実践的に活用する演習です。',
    objective: 'コミュニケーション効率化スキルを統合し、日常業務で活用できるようになる',
    keywords: ['実践', '演習', '応用', '統合']
  }
]

// Course 6: 会議・議事録の自動化
const course6Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 6,
    title: '会議業務の全体像と自動化ポイント',
    format: 'video',
    duration: 7,
    description: '会議前・中・後の各段階でAIを活用できるポイントを学びます。効率化のメリットと実装方法を理解します。',
    objective: '会議業務全体の自動化ポイントを認識し、実装可能性を判断できるようになる',
    keywords: ['会議', '議事録', '自動化', 'ワークフロー']
  },
  {
    id: 2,
    courseId: 6,
    title: 'アジェンダの自動生成',
    format: 'practice',
    duration: 8,
    description: '会議のアジェンダ（議事次第）をAIで自動生成する方法を学びます。目的に応じた論点の整理を習得します。',
    objective: 'AIを活用して会議アジェンダを効率的に作成できるようになる',
    keywords: ['アジェンダ', '議事次第', '論点整理', '会議準備']
  },
  {
    id: 3,
    courseId: 6,
    title: '事前資料の要約と論点整理',
    format: 'practice',
    duration: 9,
    description: '会議の事前資料を要約し、論点を整理するAIの活用方法を学びます。参加者の事前準備を効率化します。',
    objective: 'AIで資料を要約し、会議に向けた効率的な準備ができるようになる',
    keywords: ['資料要約', '論点抽出', '事前準備', '効率化']
  },
  {
    id: 4,
    courseId: 6,
    title: '議事録の作成〜音声テキストから構造化',
    format: 'video_practice',
    duration: 10,
    description: '会議の音声記録をテキスト化し、構造化された議事録に変換するAIの活用方法を学びます。',
    objective: '音声から自動的に構造化した議事録を作成できるようになる',
    keywords: ['議事録', '音声テキスト', '構造化', '自動化']
  },
  {
    id: 5,
    courseId: 6,
    title: 'アクションアイテムの自動抽出',
    format: 'practice',
    duration: 8,
    description: '会議の議論から「誰が、いつまでに、何をするか」を自動抽出するAIの活用方法を学びます。',
    objective: 'AIでアクションアイテムを自動抽出し、実行管理を効率化できるようになる',
    keywords: ['アクションアイテム', 'タスク抽出', 'To-Do', '実行管理']
  },
  {
    id: 6,
    courseId: 6,
    title: '決定事項のサマリー配信テンプレート',
    format: 'practice',
    duration: 8,
    description: '会議の決定事項をサマリーして参加者に配信するテンプレートをAIで作成する方法を学びます。',
    objective: '会議の決定事項を効率的にサマリーして配信できるようになる',
    keywords: ['決定事項', 'サマリー', '配信', 'テンプレート']
  },
  {
    id: 7,
    courseId: 6,
    title: '複数会議の横断分析',
    format: 'practice',
    duration: 9,
    description: '複数の会議の議事録から、組織全体の傾向やテーマを分析するAIの活用方法を学びます。',
    objective: '複数会議の情報を統合分析し、組織全体の課題を把握できるようになる',
    keywords: ['横断分析', '複数会議', 'テーマ分析', '組織理解']
  },
  {
    id: 8,
    courseId: 6,
    title: '会議の効率化コンサルティング',
    format: 'video_practice',
    duration: 9,
    description: '過去の会議データを分析して、会議効率を改善するための提案をAIで生成する方法を学びます。',
    objective: 'AIを活用して会議効率を分析し、改善提案ができるようになる',
    keywords: ['効率化', 'コンサルティング', '分析', '改善']
  },
  {
    id: 9,
    courseId: 6,
    title: 'リモート会議特有の課題と対策',
    format: 'video',
    duration: 7,
    description: 'リモート会議でのコミュニケーション課題をAIで補完する方法を学びます。音声認識精度の確保やニュアンス捉え方を習得します。',
    objective: 'リモート会議の課題をAIで補完し、効果的なコミュニケーションが取れるようになる',
    keywords: ['リモート会議', 'オンライン', '音声認識', 'コミュニケーション']
  },
  {
    id: 10,
    courseId: 6,
    title: '会議テンプレートの標準化',
    format: 'practice',
    duration: 8,
    description: '組織全体で使える会議テンプレートをAIで設計・標準化する方法を学びます。一貫性のある会議運営を習得します。',
    objective: '組織全体の会議テンプレートを標準化し、一貫した会議運営ができるようになる',
    keywords: ['テンプレート', '標準化', '会議フォーマット', '一貫性']
  },
  {
    id: 11,
    courseId: 6,
    title: 'コース6まとめ〜議事録作成実践',
    format: 'test',
    duration: 7,
    description: 'コース6で学んだ会議・議事録自動化の知識を実践的に活用する演習です。',
    objective: '会議・議事録自動化スキルを統合し、実務で活用できるようになる',
    keywords: ['実践', '演習', '応用', '統合']
  }
]

// Course 7: プロジェクト管理の効率化
const course7Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 7,
    title: 'プロジェクト管理×AI〜新しい管理手法',
    format: 'video',
    duration: 8,
    description: 'AIがプロジェクト管理にどのような新しい価値をもたらすかを学びます。従来の手法との違いと活用方法を理解します。',
    objective: 'AI時代のプロジェクト管理手法を理解し、導入の可能性を認識する',
    keywords: ['プロジェクト管理', 'AI', '新しい手法', '効率化']
  },
  {
    id: 2,
    courseId: 7,
    title: 'WBS・タスク分解の自動化',
    format: 'practice',
    duration: 10,
    description: 'プロジェクトの目標をAIで自動的にタスクに分解するWBS（ワークブレークダウンストラクチャ）の方法を学びます。',
    objective: 'AIを使ってプロジェクトを効率的にタスク分解できるようになる',
    keywords: ['WBS', 'タスク分解', 'プロジェクト設計', 'スコープ定義']
  },
  {
    id: 3,
    courseId: 7,
    title: 'スケジュール策定支援',
    format: 'practice',
    duration: 10,
    description: 'タスク間の依存関係を考慮したスケジュールをAIで策定する方法を学びます。クリティカルパス分析も習得します。',
    objective: 'AIを活用して効率的でリアルなプロジェクトスケジュールを策定できるようになる',
    keywords: ['スケジュール', 'ガントチャート', 'クリティカルパス', '工程管理']
  },
  {
    id: 4,
    courseId: 7,
    title: '進捗報告書の自動生成',
    format: 'practice',
    duration: 9,
    description: 'プロジェクトの進捗状況をAIで自動的に分析して、報告書を生成する方法を学びます。ステータス、課題、見通しなどを習得します。',
    objective: 'AIで進捗状況を自動分析し、効率的に報告書を作成できるようになる',
    keywords: ['進捗報告', 'ステータス', '自動生成', 'KPI']
  },
  {
    id: 5,
    courseId: 7,
    title: 'リスク分析・リスク管理表の作成',
    format: 'practice',
    duration: 10,
    description: 'プロジェクトの潜在的なリスクをAIで自動抽出・分析して、リスク管理表を作成する方法を学びます。',
    objective: 'AIを使ってプロジェクトリスクを体系的に分析・管理できるようになる',
    keywords: ['リスク分析', 'リスク管理', 'ハザード', 'ミティゲーション']
  },
  {
    id: 6,
    courseId: 7,
    title: '課題管理〜問題解決の支援',
    format: 'practice',
    duration: 9,
    description: 'プロジェクト中に発生する課題の追跡と解決をAIで支援する方法を学びます。問題の分類と解決策提示を習得します。',
    objective: 'AIを活用してプロジェクト課題を効率的に管理・解決できるようになる',
    keywords: ['課題管理', '問題解決', 'イシュー追跡', '根本原因分析']
  },
  {
    id: 7,
    courseId: 7,
    title: 'ステークホルダー分析と報告カスタマイズ',
    format: 'video_practice',
    duration: 9,
    description: 'プロジェクトのステークホルダーを分析して、各関係者に合わせた報告内容をAIで作成する方法を学びます。',
    objective: 'ステークホルダーに応じたカスタマイズされた報告を効率的に作成できるようになる',
    keywords: ['ステークホルダー分析', 'コミュニケーション計画', 'カスタマイズ', '関係管理']
  },
  {
    id: 8,
    courseId: 7,
    title: '要件定義・仕様書の作成支援',
    format: 'practice',
    duration: 10,
    description: 'プロジェクトの要件をAIで整理して、仕様書に変換する方法を学びます。明確で実行可能な仕様書を習得します。',
    objective: 'AIを活用して明確な要件定義と仕様書を効率的に作成できるようになる',
    keywords: ['要件定義', '仕様書', 'ドキュメント', 'スコープ']
  },
  {
    id: 9,
    courseId: 7,
    title: 'レトロスペクティブの支援',
    format: 'practice',
    duration: 8,
    description: 'プロジェクト完了後のふり返り（レトロスペクティブ）の実施と分析をAIで支援する方法を学びます。継続改善を習得します。',
    objective: 'AIを活用してレトロスペクティブを効率的に実施し、継続改善につなげられるようになる',
    keywords: ['レトロスペクティブ', 'ふり返り', 'lessons learned', '改善']
  },
  {
    id: 10,
    courseId: 7,
    title: 'プロジェクトナレッジの蓄積',
    format: 'video_practice',
    duration: 9,
    description: 'プロジェクト完了後の経験と知識をAIで蓄積・整理して、組織の資産にする方法を学びます。',
    objective: 'AIを活用してプロジェクトナレッジを体系的に蓄積できるようになる',
    keywords: ['ナレッジ蓄積', 'lessons learned', 'ドキュメント', 'ナレッジベース']
  },
  {
    id: 11,
    courseId: 7,
    title: 'コース7まとめ〜PM実践演習',
    format: 'test',
    duration: 8,
    description: 'コース7で学んだプロジェクト管理効率化の知識を実践的に活用する演習です。',
    objective: 'プロジェクト管理効率化スキルを統合し、実務で活用できるようになる',
    keywords: ['実践', '演習', '応用', '統合']
  }
]

// Course 8: Claude API・自動化ツール活用
const course8Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 8,
    title: 'APIとは何か〜非エンジニアでも分かる基礎',
    format: 'video',
    duration: 10,
    description: 'APIの基本概念をプログラミング知識がない人にも分かるように解説します。APIがなぜ必要かを理解します。',
    objective: 'APIの基本概念を理解し、活用の可能性を認識する',
    keywords: ['API', 'インターフェース', '統合', 'オートメーション']
  },
  {
    id: 2,
    courseId: 8,
    title: 'Claude APIの始め方〜アカウント設定',
    format: 'practice',
    duration: 12,
    description: 'Claude APIを使うためのアカウント設定、APIキーの取得、権限設定を実際に行います。',
    objective: 'Claude APIの利用を開始し、基本的なアカウント設定ができるようになる',
    keywords: ['Claude API', 'APIキー', 'アカウント設定', '認証']
  },
  {
    id: 3,
    courseId: 8,
    title: 'Python環境構築〜初めてのAPI呼び出し',
    format: 'practice',
    duration: 15,
    description: 'Pythonの基本的な環境構築から、Claude APIの初めての呼び出しまでを実施します。実装に必要な基礎を習得します。',
    objective: 'Pythonを使ってClaude APIを呼び出すことができるようになる',
    keywords: ['Python', 'API呼び出し', 'ライブラリ', '実装']
  },
  {
    id: 4,
    courseId: 8,
    title: 'APIパラメータ詳解〜最適な設定',
    format: 'video_practice',
    duration: 12,
    description: 'Claude APIの重要なパラメータ（temperature、max_tokens など）の意味と最適な設定方法を学びます。',
    objective: 'APIパラメータを理解し、目的に応じた最適な設定ができるようになる',
    keywords: ['パラメータ', 'temperature', 'max_tokens', 'トークン管理']
  },
  {
    id: 5,
    courseId: 8,
    title: 'バッチ処理〜大量データの自動処理',
    format: 'practice',
    duration: 15,
    description: 'APIを使って、大量のデータを自動的に処理するバッチ処理の実装方法を学びます。効率的な処理フロー を習得します。',
    objective: '数百件、数千件のデータを効率的にAPIで処理できるようになる',
    keywords: ['バッチ処理', 'ループ処理', '大量データ', '効率化']
  },
  {
    id: 6,
    courseId: 8,
    title: 'Google Sheets連携〜スプレッドシート自動化',
    format: 'practice',
    duration: 12,
    description: 'Claude APIをGoogle Sheetsと連携させ、スプレッドシートのデータを自動処理する方法を学びます。',
    objective: 'Google SheetsとClaude APIを連携させ、スプレッドシート業務を自動化できるようになる',
    keywords: ['Google Sheets', 'スプレッドシート', 'API連携', '自動化']
  },
  {
    id: 7,
    courseId: 8,
    title: 'Slack Bot構築〜社内AIアシスタント',
    format: 'video_practice',
    duration: 15,
    description: 'Claude APIを使ってSlack上で動作するAIボットを構築する方法を学びます。社内での即座の活用を習得します。',
    objective: 'Slack内で動作するAIアシスタントボットを構築できるようになる',
    keywords: ['Slack Bot', 'Slack API', 'インテグレーション', 'チャットボット']
  },
  {
    id: 8,
    courseId: 8,
    title: 'ストリーミング対応〜リアルタイム応答',
    format: 'practice',
    duration: 12,
    description: 'APIのストリーミング機能を使い、リアルタイムで応答を返す実装方法を学びます。ユーザー体験を改善します。',
    objective: 'ストリーミング機能を活用して、リアルタイムな応答ができるようになる',
    keywords: ['ストリーミング', 'リアルタイム', 'イベント駆動', 'ユーザー体験']
  },
  {
    id: 9,
    courseId: 8,
    title: 'エラーハンドリングとレート制限対策',
    format: 'video_practice',
    duration: 12,
    description: 'APIのエラーが発生した時の処理とレート制限への対策方法を学びます。堅牢なシステム構築を習得します。',
    objective: 'エラーに強い、スケーラブルなAPI活用ができるようになる',
    keywords: ['エラーハンドリング', 'レート制限', '例外処理', 'リトライ']
  },
  {
    id: 10,
    courseId: 8,
    title: 'コスト最適化〜APIコストを管理する',
    format: 'video',
    duration: 10,
    description: 'Claude APIの利用料金を最適化し、コスト効率を高める方法を学びます。予算管理と効率化を習得します。',
    objective: 'APIコストを適切に管理し、費用対効果の高い利用ができるようになる',
    keywords: ['コスト管理', '予算', '効率化', 'トークン使用量']
  },
  {
    id: 11,
    courseId: 8,
    title: 'Tool Use（関数呼び出し）の活用',
    format: 'practice',
    duration: 15,
    description: 'Claude APIのTool Use機能を使い、外部ツールやシステムと連携させる方法を学びます。複雑なワークフローを実装します。',
    objective: 'Tool Useを活用して、複数システムを統合したワークフローを構築できるようになる',
    keywords: ['Tool Use', '関数呼び出し', '外部連携', 'インテグレーション']
  },
  {
    id: 12,
    courseId: 8,
    title: 'コース8まとめ〜API活用実践',
    format: 'test',
    duration: 10,
    description: 'コース8で学んだClaude API・自動化ツール活用の知識を総合的に活用する実践演習です。',
    objective: 'Claude APIを活用した実装スキルを統合し、実務的なシステムを構築できるようになる',
    keywords: ['実践', '実装', '統合', '応用']
  }
]

// Course 9: 社内ワークフロー構築
const course9Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 9,
    title: 'ワークフロー自動化の全体設計',
    format: 'video',
    duration: 10,
    description: 'ビジネスプロセスをワークフローとして自動化する全体的なアプローチを学びます。設計原則と実装戦略を理解します。',
    objective: 'ワークフロー自動化の全体像を理解し、設計できるようになる',
    keywords: ['ワークフロー', 'プロセス自動化', 'BPM', '全体設計']
  },
  {
    id: 2,
    courseId: 9,
    title: '業務プロセスの可視化と分析',
    format: 'practice',
    duration: 12,
    description: '現在の業務プロセスを図解化して、ボトルネックと改善ポイントを分析する方法を学びます。',
    objective: '業務プロセスを可視化・分析し、自動化の優先順位を決められるようになる',
    keywords: ['プロセス可視化', 'フローチャート', 'ボトルネック分析', '改善']
  },
  {
    id: 3,
    courseId: 9,
    title: 'Zapier/Make連携〜ノーコード自動化',
    format: 'video_practice',
    duration: 12,
    description: 'ZapierやMakeなどのノーコード自動化ツールでワークフローを構築する方法を学びます。プログラミング不要です。',
    objective: 'ノーコードツールを使い、複雑なワークフローを構築できるようになる',
    keywords: ['Zapier', 'Make', 'ノーコード', 'オートメーション']
  },
  {
    id: 4,
    courseId: 9,
    title: '受注〜請求の業務フロー自動化',
    format: 'practice',
    duration: 12,
    description: '営業から請求までの一連のプロセスをAIとノーコードツールで自動化する実装を学びます。',
    objective: '受注から請求までの業務フローを自動化できるようになる',
    keywords: ['受注', '請求', 'セールスプロセス', 'エンドツーエンド']
  },
  {
    id: 5,
    courseId: 9,
    title: '採用業務の効率化ワークフロー',
    format: 'practice',
    duration: 12,
    description: '採用プロセスをAIで効率化するワークフローを学びます。応募者管理から合否判定まで自動化します。',
    objective: '採用業務をAIで効率化し、HR部門の負担を軽減できるようになる',
    keywords: ['採用', 'HR', 'ATS', '候補者管理']
  },
  {
    id: 6,
    courseId: 9,
    title: 'カスタマーサポート自動化フロー',
    format: 'practice',
    duration: 12,
    description: 'サポート受付から解決までの流れをAIで自動化するワークフローを学びます。顧客満足度を維持しながら効率化します。',
    objective: 'カスタマーサポートをAIで自動化し、対応品質と効率を両立できるようになる',
    keywords: ['カスタマーサポート', 'チケット管理', 'チャットボット', '自動応答']
  },
  {
    id: 7,
    courseId: 9,
    title: '社内ナレッジベースの構築と運用',
    format: 'video_practice',
    duration: 12,
    description: 'AIを活用して、社内の情報やノウハウを一元管理するナレッジベースを構築する方法を学びます。',
    objective: '社内ナレッジベースを構築・運用し、組織の知的資産を最大活用できるようになる',
    keywords: ['ナレッジベース', 'Wiki', 'ドキュメント', '知識管理']
  },
  {
    id: 8,
    courseId: 9,
    title: 'ワークフローのテストと品質保証',
    format: 'practice',
    duration: 12,
    description: '構築したワークフローが正しく動作することを確認するテスト方法を学びます。品質保証プロセスを習得します。',
    objective: 'ワークフローのテストを実施し、本運用前に問題を発見・解決できるようになる',
    keywords: ['テスト', 'QA', 'バグ検出', '品質管理']
  },
  {
    id: 9,
    courseId: 9,
    title: 'モニタリングと継続改善',
    format: 'video_practice',
    duration: 10,
    description: 'ワークフロー導入後の監視と、継続的な改善方法を学びます。メトリクスの設定と分析を習得します。',
    objective: 'ワークフローを監視・分析し、継続的に改善できるようになる',
    keywords: ['モニタリング', 'メトリクス', '継続改善', 'KPI']
  },
  {
    id: 10,
    courseId: 9,
    title: 'ROI計算〜自動化の効果を数値化',
    format: 'practice',
    duration: 10,
    description: 'ワークフロー自動化のROI（投資対効果）を計算する方法を学びます。効果測定と経営判断への活用を習得します。',
    objective: '自動化の効果をROIとして数値化し、経営層に報告できるようになる',
    keywords: ['ROI', 'コスト削減', '効果測定', '経営判断']
  },
  {
    id: 11,
    courseId: 9,
    title: 'コース9まとめ〜ワークフロー設計実践',
    format: 'test',
    duration: 8,
    description: 'コース9で学んだ社内ワークフロー構築の知識を実践的に活用する演習です。',
    objective: 'ワークフロー構築スキルを統合し、実務的なワークフロー設計ができるようになる',
    keywords: ['実践', '設計', '統合', '応用']
  }
]

// Course 10: 社内展開・運用・セキュリティ
const course10Lessons: Lesson[] = [
  {
    id: 1,
    courseId: 10,
    title: 'AI導入戦略の立案',
    format: 'video',
    duration: 10,
    description: '組織全体へのAI導入を成功させるための戦略立案方法を学びます。ビジョン、ロードマップ、チェンジマネジメントを理解します。',
    objective: 'AIを組織全体に導入するための戦略を立案できるようになる',
    keywords: ['導入戦略', 'ロードマップ', 'ビジョン', '経営戦略']
  },
  {
    id: 2,
    courseId: 10,
    title: 'セキュリティポリシーの策定',
    format: 'video_practice',
    duration: 12,
    description: 'AI利用時のセキュリティリスクを管理するためのポリシーを策定する方法を学びます。',
    objective: 'AI利用時のセキュリティポリシーを策定できるようになる',
    keywords: ['セキュリティ', 'ポリシー', 'リスク管理', 'データ保護']
  },
  {
    id: 3,
    courseId: 10,
    title: '機密情報の取り扱い〜入力してはいけないデータ',
    format: 'video',
    duration: 8,
    description: 'AIに入力してはいけない機密情報とその理由を学びます。データ分類と安全な利用基準を理解します。',
    objective: '機密情報の取り扱いを理解し、安全なAI利用ができるようになる',
    keywords: ['機密情報', 'データ分類', 'プライバシー', 'コンプライアンス']
  },
  {
    id: 4,
    courseId: 10,
    title: '利用ガイドラインの作成',
    format: 'practice',
    duration: 10,
    description: '組織のAI利用ガイドラインを作成する方法を学びます。従業員の安全で効果的なAI利用を支援する内容を習得します。',
    objective: '組織全体が遵守すべきAI利用ガイドラインを作成できるようになる',
    keywords: ['ガイドライン', 'ポリシー', 'ベストプラクティス', '教育']
  },
  {
    id: 5,
    courseId: 10,
    title: '社内研修プログラムの設計',
    format: 'video_practice',
    duration: 10,
    description: '従業員のAIリテラシー向上を目的とした研修プログラムの設計方法を学びます。段階的なアプローチを習得します。',
    objective: '従業員向けのAI研修プログラムを設計できるようになる',
    keywords: ['研修', 'トレーニング', 'リテラシー向上', '段階的学習']
  },
  {
    id: 6,
    courseId: 10,
    title: 'チェンジマネジメント〜現場の抵抗を乗り越える',
    format: 'video',
    duration: 10,
    description: 'AI導入時の組織変革を円滑に進めるためのチェンジマネジメント手法を学びます。抵抗への対処を習得します。',
    objective: 'AI導入時の組織抵抗に対処し、スムーズに導入できるようになる',
    keywords: ['チェンジマネジメント', '変革', 'リーダーシップ', 'コミュニケーション']
  },
  {
    id: 7,
    courseId: 10,
    title: '効果測定〜KPI設計と評価',
    format: 'practice',
    duration: 10,
    description: 'AI導入の効果を測定するためのKPI設計と評価方法を学びます。定量的・定性的な効果を把握します。',
    objective: 'AI導入の効果を適切に測定・評価できるようになる',
    keywords: ['KPI', '効果測定', '評価', 'メトリクス']
  },
  {
    id: 8,
    courseId: 10,
    title: 'コンプライアンスと法的考慮事項',
    format: 'video',
    duration: 10,
    description: 'AI利用に関する法的リスクとコンプライアンス要件を学びます。規制動向と対応方法を理解します。',
    objective: 'AI利用時の法的リスクを理解し、適切に対応できるようになる',
    keywords: ['コンプライアンス', '法務', 'リスク', '規制']
  },
  {
    id: 9,
    courseId: 10,
    title: 'AI活用事例集〜他社の成功事例',
    format: 'video',
    duration: 10,
    description: '様々な業界での AI活用成功事例を学びます。自社への適用可能性を検討する視点を習得します。',
    objective: '他社の成功事例から学び、自社への適用を検討できるようになる',
    keywords: ['事例研究', 'ベストプラクティス', 'インスピレーション', '応用']
  },
  {
    id: 10,
    courseId: 10,
    title: 'AIの未来〜次に来るテクノロジー',
    format: 'video',
    duration: 8,
    description: 'AIテクノロジーの今後の発展方向と社会への影響を学びます。組織の長期的な準備を支援します。',
    objective: 'AI技術の未来トレンドを理解し、組織の長期戦略を立案できるようになる',
    keywords: ['AI', 'テクノロジー', 'トレンド', '未来展望']
  },
  {
    id: 11,
    courseId: 10,
    title: 'コース10まとめ〜修了テスト',
    format: 'test',
    duration: 12,
    description: 'コース10で学んだ社内展開・運用・セキュリティの知識を総合的に確認するテストです。',
    objective: 'コース全体の内容を定着させ、習得度を確認する',
    keywords: ['確認テスト', '復習', '総括', '修了']
  }
]

// All courses data
export const courses: Course[] = [
  {
    id: 1,
    title: 'AI・Claude入門',
    description: 'Claudeの基本から始める、初心者向けの必修コース。AIとは何か、Claudeの使い方、基本機能を習得します。',
    lessonCount: 12,
    duration: 90,
    difficulty: 1,
    targetAudience: '全社員',
    icon: '🤖',
    color: 'blue',
    lessons: course1Lessons
  },
  {
    id: 2,
    title: 'プロンプトエンジニアリング基礎',
    description: 'Claudeから最高の結果を引き出すためのプロンプト設計テクニック。業務効率化の鍵となる実践スキルを習得します。',
    lessonCount: 12,
    duration: 120,
    difficulty: 2,
    targetAudience: '全社員',
    icon: '✍️',
    color: 'green',
    lessons: course2Lessons
  },
  {
    id: 3,
    title: '文書作成の自動化',
    description: 'AIを使った文書作成業務の効率化。報告書、提案書、マニュアルなど、様々な文書の自動生成と品質向上を学びます。',
    lessonCount: 12,
    duration: 100,
    difficulty: 2,
    targetAudience: '事務・管理部門',
    icon: '📝',
    color: 'orange',
    lessons: course3Lessons
  },
  {
    id: 4,
    title: 'データ分析・レポート自動化',
    description: 'データ分析業務全体の自動化。収集から分析、レポート生成まで、AIがどのように支援するかを習得します。',
    lessonCount: 12,
    duration: 120,
    difficulty: 2,
    targetAudience: '企画・経営企画',
    icon: '📊',
    color: 'slate',
    lessons: course4Lessons
  },
  {
    id: 5,
    title: 'メール・コミュニケーション効率化',
    description: 'メールやチャットなど日常のコミュニケーション業務をAIで効率化。時短と品質の両立を実現します。',
    lessonCount: 11,
    duration: 80,
    difficulty: 1,
    targetAudience: '全社員',
    icon: '✉️',
    color: 'gray',
    lessons: course5Lessons
  },
  {
    id: 6,
    title: '会議・議事録の自動化',
    description: 'Claudeを活用した会議効率化。アジェンダ作成から議事録生成まで、会議業務全体を自動化します。',
    lessonCount: 11,
    duration: 90,
    difficulty: 2,
    targetAudience: '全社員',
    icon: '🎙️',
    color: 'yellow',
    lessons: course6Lessons
  },
  {
    id: 7,
    title: 'プロジェクト管理の効率化',
    description: 'AIを活用したプロジェクト管理の新しい手法。計画から報告まで、PM業務を大幅に効率化します。',
    lessonCount: 11,
    duration: 100,
    difficulty: 2,
    targetAudience: 'マネージャー',
    icon: '📋',
    color: 'indigo',
    lessons: course7Lessons
  },
  {
    id: 8,
    title: 'Claude API・自動化ツール活用',
    description: 'Claudeの高度な活用。APIの基礎からSlack Botなど実装的な使用方法まで、プログラマティックな活用を学びます。',
    lessonCount: 12,
    duration: 150,
    difficulty: 3,
    targetAudience: 'IT部門・DX推進',
    icon: '⚡',
    color: 'purple',
    lessons: course8Lessons
  },
  {
    id: 9,
    title: '社内ワークフロー構築',
    description: 'Claudeとノーコードツールで業務フロー全体を自動化。受注から採用まで、実践的なワークフロー設計を習得します。',
    lessonCount: 11,
    duration: 130,
    difficulty: 3,
    targetAudience: 'IT部門・DX推進',
    icon: '🔄',
    color: 'pink',
    lessons: course9Lessons
  },
  {
    id: 10,
    title: '社内展開・運用・セキュリティ',
    description: 'AI導入の組織的側面。戦略立案からセキュリティ、チェンジマネジメントまで、全社的なAI導入を成功させるポイントを学びます。',
    lessonCount: 11,
    duration: 110,
    difficulty: 2,
    targetAudience: '管理職・IT部門',
    icon: '🛡️',
    color: 'emerald',
    lessons: course10Lessons
  }
]

// Helper functions
export function getCourse(id: number): Course | undefined {
  return courses.find(course => course.id === id)
}

export function getLesson(courseId: number, lessonId: number): Lesson | undefined {
  const course = getCourse(courseId)
  if (!course) return undefined
  return course.lessons.find(lesson => lesson.id === lessonId)
}

export function getAllCourses(): Course[] {
  return courses
}

// Get course with filtered lessons if needed
export function getCourseWithLessons(id: number): Course | undefined {
  return getCourse(id)
}

// Get all lessons for a course
export function getCourseLessons(courseId: number): Lesson[] {
  const course = getCourse(courseId)
  return course ? course.lessons : []
}

// Get lesson count for a course
export function getLessonCount(courseId: number): number {
  return getCourseLessons(courseId).length
}

// Get lessons by format
export function getLessonsByFormat(courseId: number, format: 'video' | 'practice' | 'video_practice' | 'test'): Lesson[] {
  return getCourseLessons(courseId).filter(lesson => lesson.format === format)
}

// Get total course duration in minutes
export function getCourseTotalDuration(courseId: number): number {
  return getCourseLessons(courseId).reduce((sum, lesson) => sum + lesson.duration, 0)
}

// Search lessons by keyword
export function searchLessons(keyword: string): Lesson[] {
  return courses.flatMap(course =>
    course.lessons.filter(lesson =>
      lesson.title.includes(keyword) ||
      lesson.description.includes(keyword) ||
      lesson.keywords.some(k => k.includes(keyword))
    )
  )
}

// Get courses by difficulty
export function getCoursesByDifficulty(difficulty: 1 | 2 | 3): Course[] {
  return courses.filter(course => course.difficulty === difficulty)
}

// Get courses by target audience
export function getCoursesByAudience(audience: string): Course[] {
  return courses.filter(course => course.targetAudience.includes(audience))
}
