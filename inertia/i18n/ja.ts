import type { Translations } from './types'

const ja: Translations = {
  nav: {
    features: '機能',
    howItWorks: '仕組み',
    faq: 'よくある質問',
    analyze: 'ファイルを分析',
    community: 'コミュニティ',
    issues: 'Issues',
    pullRequests: 'Pull Requests',
  },
  hero: {
    badge: 'オープンベータ — 無料で始める',
    titleStart: 'ファイルの',
    titleHighlight: '隠れたデータ',
    titleEnd: 'を追跡する。',
    subtitle:
      'メタデータ、作者、GPS位置、編集履歴… DocHuntはあなたの文書が知らぬ間に公開しているすべてを明らかにします。',
    ctaPrimary: '分析を開始',
    ctaSecondary: '仕組みを見る',
    stats: {
      metadata: 'メタデータ',
      format: '現在のフォーマット',
      clientSide: 'クライアントサイド',
      stored: '保存データ',
    },
  },
  features: {
    tag: '機能',
    title: 'ファイルに隠されたすべて。',
    subtitle: 'DocHuntは各ファイルを深く分析し、存在するとは思わなかった機密情報を抽出します。',
    items: [
      {
        title: '作者の身元',
        description: 'フルネーム、組織、使用ソフトウェア。文書作成者を特定するすべての情報。',
      },
      {
        title: '位置情報',
        description: '画像や文書に埋め込まれたGPS座標。ファイルが作成された場所を正確に特定。',
      },
      { title: '完全な履歴', description: '作成日、更新日、最終印刷日。文書の完全な年表を追跡。' },
      {
        title: 'セキュリティレベル',
        description: '暗号化、権限、アクセス制限。ファイルの保護レベルを評価。',
      },
      {
        title: 'リンクとリソース',
        description: '埋め込みURL、フォント、画像、添付ファイル。隠れた依存関係をすべて発見。',
      },
      {
        title: 'リスクスコア',
        description: 'ファイルを通じて個人データがどの程度露出しているかの総合評価。',
      },
    ],
  },
  howItWorks: {
    tag: 'プロセス',
    title: 'シンプル。高速。プライベート。',
    subtitle: '3ステップであらゆるファイルの機密データを明らかに。',
    steps: [
      {
        title: 'ファイルをドロップ',
        description: 'ドラッグ＆ドロップまたはPDFを選択。アカウント登録不要。',
      },
      { title: '即時分析', description: 'DocHuntが数秒でメタデータと埋め込みデータをスキャン。' },
      {
        title: '詳細レポート',
        description: 'リスクスコアとデータ保護の推奨事項を含む完全レポート。',
      },
    ],
  },
  demo: {
    tag: '試してみる',
    title: '自分の目で確かめて。',
    subtitle: 'ファイルをアップロードして、露出している情報を即座に発見。',
    tabs: { pdf: 'PDF', image: '画像' },
    upload: {
      title: 'ここにファイルをドロップ',
      subtitle: 'またはクリックして参照',
      pdfOnly: 'PDFのみ · 最大20 MB',
      dragging: 'ここに放してください',
    },
    imageUpload: {
      title: 'ここに画像をドロップ',
      subtitle: 'またはクリックして参照',
      formats: 'JPEG, PNG, WebP, GIF, ICO · 最大20 MB',
      dragging: 'ここに放してください',
    },
    result: {
      status: '分析済み',
      sensitiveCount: '4件の機密項目を検出',
      export: 'エクスポート',
      clean: 'クリーン',
      loading: '分析中…',
      errorTitle: '分析に失敗しました',
      riskScore: 'リスクスコア',
      newAnalysis: '新しい分析',
      textContent: 'テキスト内容',
      noText: 'テキスト未検出 — スキャンPDF（OCR近日公開）',
      textTruncated: '10,000文字に切り詰め',
    },
  },
  formats: {
    tag: '互換性',
    title: 'サポートフォーマット',
    subtitle: 'PDFから開始 — さらに多くのフォーマットが近日対応予定。',
    soon: '近日公開',
    items: [
      { label: 'PDFドキュメント', description: 'メタデータ、作者、XMP、リンク' },
      { label: 'Wordドキュメント', description: 'プロパティ、コメント、リビジョン' },
      { label: '画像', description: 'EXIF、GPS、カメラ情報' },
      { label: 'Excelスプレッドシート', description: '非表示シート、マクロ、作者' },
    ],
  },
  faq: {
    tag: 'よくある質問',
    title: 'よくある質問',
    items: [
      {
        question: 'ファイルは保存されますか？',
        answer: 'いいえ。分析は一時的なもので、処理後にファイルは保持されません。',
      },
      {
        question: '本当に無料ですか？',
        answer:
          'はい、ベータ期間中はDocHuntは無料です。高度な機能を持つProバージョンが計画されています。',
      },
      {
        question: 'どのフォーマットに対応していますか？',
        answer: '現在はPDF。DOCX、画像（EXIF）、XLSXは近日対応予定。',
      },
      {
        question: '機密データとは何ですか？',
        answer: '作者を特定したり、作成場所を明かしたり、機密性を損なう情報。',
      },
      {
        question: 'ファイルをクリーンにできますか？',
        answer: 'メタデータクリーニング機能は開発中で、近日公開予定です。',
      },
      {
        question: '技術スタックは何ですか？',
        answer: 'AdonisJS 6、TypeScript、Inertia.jsとReact — モダンで高パフォーマンス。',
      },
    ],
  },
  cta: {
    title: '準備はできましたか',
    highlight: '探索',
    subtitle: 'あなたの文書が何を明かしているか今すぐ発見。',
    button: '最初のファイルを分析する',
  },
  footer: {
    description: 'ファイルの隠れたデータを明らかに。オープンソース、高速、プライバシー重視。',
    columns: {
      product: { title: '製品', links: ['機能', 'デモ', 'フォーマット', '変更履歴'] },
      resources: { title: 'リソース', links: ['ドキュメント', 'API', 'GitHub'] },
      legal: { title: '法的情報', links: ['プライバシー', '利用規約', 'お問い合わせ'] },
    },
    builtWith: 'AdonisJS、TypeScript、Inertia.jsで構築',
  },
  communityPage: {
    badge: 'オープンソース',
    title: '共に',
    highlight: '作る。',
    subtitle:
      'DocHuntはオープンソースプロジェクトです。コミュニティに参加しましょう：バグ報告、機能提案、コード貢献。',
    ctaGithub: 'GitHubで見る',
    ctaIssue: 'バグを報告',
    howTitle: '貢献するには？',
    howSubtitle: 'プロジェクトに参加する3つの方法。',
    cards: [
      {
        title: 'バグを報告',
        description: '問題を見つけましたか？できるだけ詳細を記載してGitHub issueを開いてください。',
        cta: 'Issueを開く',
      },
      {
        title: '機能を提案',
        description: '何か足りないものがありますか？issueで説明してコミュニティで議論しましょう。',
        cta: '提案する',
      },
      {
        title: 'コードを提出',
        description:
          'リポジトリをフォークしてブランチを作成し、Pull Requestを開いてください。あらゆる貢献を歓迎します。',
        cta: '開いているPRを見る',
      },
    ],
    stackTitle: '技術スタック',
    stackSubtitle: 'DocHuntを動かす技術。',
    openTitle: 'なぜオープンソース？',
    openSubtitle: '透明性、信頼、コラボレーション。',
    openItems: [
      {
        title: '完全な透明性',
        description: 'すべてのコードを確認し、ファイルが保存されないことを自分で検証できます。',
      },
      {
        title: '継続的な改善',
        description:
          '外部からの貢献により検出精度が向上し、新しいファイル形式のサポートが追加されます。',
      },
      {
        title: '活発なコミュニティ',
        description: 'Issues、議論、PR — プロジェクトはユーザーのフィードバックで進化します。',
      },
    ],
  },
  privacyPage: {
    badge: '法的情報',
    title: 'プライバシーポリシー',
    subtitle:
      'DocHunt はプライバシーを中心に構築されています。あなたのデータがどう扱われるかを正確にご説明します。',
    lastUpdated: '最終更新：2025年4月',
    sections: [
      {
        title: 'ファイルは保存されません',
        content:
          '分析のためにアップロードされたファイルはメモリ上で処理され、直ちに廃棄されます。ディスクへの書き込み、データベースへの保存、第三者への送信は一切行いません。',
      },
      {
        title: '個人データの収集なし',
        content:
          'アカウントを作成しない限り、DocHunt は氏名、メールアドレス、その他の個人識別情報を収集しません。アカウントデータ（メール＋ハッシュ化パスワード）は認証のためだけに保存されます。',
      },
      {
        title: 'Cookie と分析',
        content:
          '認証状態の管理のためにのみセッション Cookie を使用します。広告 Cookie、フィンガープリント、サードパーティトラッカーは使用しません。',
      },
      {
        title: 'サードパーティサービス',
        content:
          'ファイルを分析する Python マイクロサービスは自社インフラで動作します。ファイルの内容やメタデータが外部 API に送信されることはありません。',
      },
      {
        title: 'データ保持',
        content:
          'セッションデータはお使いのデバイスの Cookie に保存され、ブラウザを閉じると期限切れになります。認証フロー以外でサーバー側のセッションストレージは使用しません。',
      },
      {
        title: 'お問い合わせ',
        content:
          'プライバシーに関するご質問は privacy@dochunt.info または GitHub の Issue からご連絡ください。',
      },
    ],
  },
  termsPage: {
    badge: '法的情報',
    title: '利用規約',
    subtitle: 'DocHunt を使用するためのシンプルで公正なルール。',
    lastUpdated: '最終更新：2025年4月',
    sections: [
      {
        title: '同意',
        content:
          'DocHunt を使用することで、本利用規約に同意したものとみなされます。同意しない場合はサービスをご利用にならないでください。',
      },
      {
        title: 'サービスの説明',
        content:
          'DocHunt はドキュメントに埋め込まれた情報を抽出するメタデータ分析ツールで、オープンベータ期間中は無料で提供されます。サービスをいつでも変更、停止、終了する権利を留保します。',
      },
      {
        title: '許容される利用',
        content:
          'アップロードできるのは、自分が所有しているか分析を許可されているファイルのみです。明示的な同意なく第三者のファイルを処理することは厳禁です。',
      },
      {
        title: '知的財産',
        content:
          'DocHunt は MIT ライセンスのオープンソースプロジェクトです。ソースコードは GitHub で公開されています。同一ライセンスの下でフォーク、修正、再配布が可能です。名称とロゴはプロジェクトメンテナーに帰属します。',
      },
      {
        title: '保証の否認',
        content:
          'DocHunt は「現状のまま」で提供され、いかなる保証もありません。サービスの継続性や分析結果の完全性・正確性を保証しません。',
      },
      {
        title: '責任の制限',
        content:
          '法律で許容される範囲において、DocHunt およびその貢献者はサービスの利用から生じるいかなる損害についても責任を負いません。',
      },
      {
        title: '規約の変更',
        content:
          '本規約はいつでも更新される場合があります。変更後もサービスを継続して使用することは、改訂された規約への同意とみなされます。',
      },
      {
        title: 'お問い合わせ',
        content:
          '本規約についてご質問がある場合は legal@sentrak.info またはGitHub のディスカッションまでご連絡ください。',
      },
    ],
  },
  backToTop: 'トップへ戻る',
}

export default ja
