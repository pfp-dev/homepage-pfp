# 株式会社PFP コーポレートサイト

株式会社PFPの公式コーポレートサイトです。Next.js App Router、TailwindCSS、shadcn/ui、framer-motionを使用して構築されています。

## 🚀 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **スタイリング**: TailwindCSS 3.4
- **UIコンポーネント**: shadcn/ui
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **言語**: TypeScript
- **フォント**: Inter & Noto Sans JP

## 📁 プロジェクト構造

```
pfp-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── ui/           # shadcn/uiコンポーネント
│       └── sections/     # ページセクション
│           ├── Header.tsx
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Services.tsx
│           ├── Works.tsx
│           ├── Recruitment.tsx
│           ├── Contact.tsx
│           └── Footer.tsx
├── public/
├── tailwind.config.ts
└── package.json
```

## 🎨 デザイン特徴

- **レスポンシブデザイン**: モバイルファーストアプローチ
- **モダンUI**: shadcn/uiによる統一されたデザインシステム
- **スムーズアニメーション**: Framer Motionによる滑らかな動作
- **アクセシビリティ**: WAI-ARIAガイドラインに準拠
- **SEO最適化**: Next.js 15のメタデータAPIを活用

## 🚦 はじめ方

### 前提条件

- Node.js 18.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

### ビルド

```bash
# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm run start
```

## 📄 ページセクション

### 1. ヘッダー (Header)
- ナビゲーションメニュー
- レスポンシブモバイルメニュー
- スクロール時の背景変化

### 2. ヒーロー (Hero)
- メインビジュアル
- キャッチコピー
- CTAボタン

### 3. 会社概要 (About)
- 会社紹介
- 統計情報
- 企業理念

### 4. サービス (Services)
- 提供サービス一覧
- 技術スタック
- サービス詳細

### 5. 実績 (Works)
- プロジェクト実績
- 技術情報
- 成果指標

### 6. 採用情報 (Recruitment)
- 募集職種
- 福利厚生
- 働く環境

### 7. お問い合わせ (Contact)
- コンタクトフォーム
- 会社情報
- アクセス情報

### 8. フッター (Footer)
- 会社情報
- サイトマップ
- ソーシャルメディアリンク

## 🎯 主な機能

- **フォームバリデーション**: お問い合わせフォームの入力検証
- **スムーススクロール**: アンカーリンクによる滑らかなスクロール
- **レスポンシブナビゲーション**: モバイル対応のハンバーガーメニュー
- **アニメーション**: スクロール連動のフェードイン・スライドイン効果
- **SEO対応**: メタタグ、構造化データの最適化

## 🔧 カスタマイズ

### カラーテーマの変更
`src/app/globals.css` でCSS変数を編集：

```css
:root {
  --primary: 210 100% 23%;
  --accent: 48 100% 50%;
  /* その他の色設定 */}
```

### コンテンツの更新
各セクションコンポーネント内のデータ配列を編集してください。

### 新しいコンポーネントの追加
shadcn/uiコンポーネントを追加：

```bash
npx shadcn@latest add [component-name]
```

## 📱 レスポンシブブレークポイント

- **sm**: 640px以上
- **md**: 768px以上
- **lg**: 1024px以上
- **xl**: 1280px以上
- **2xl**: 1536px以上

## 🚀 デプロイ

### Vercel (推奨)

```bash
# Vercel CLIでデプロイ
npx vercel
```

### その他のプラットフォーム

- Netlify
- AWS Amplify
- Docker

## 📄 ライセンス

このプロジェクトは株式会社PFPの所有物です。

## 🤝 貢献

プルリクエストや課題の報告を歓迎します。

## 📞 サポート

技術的な質問やサポートが必要な場合は、以下にお問い合わせください：

- **Email**: info@pfp-company.com
- **Phone**: 03-5848-2995

---

**株式会社PFP** - 最新の技術で、未来を創造する
