# PFP Homepage

PFP株式会社の公式ホームページ

## 📋 プロジェクト概要

このプロジェクトは、PFP株式会社の公式ホームページを構築・運用するためのリポジトリです。
Next.js 15を使用したモダンなWebアプリケーションとして開発されています。

## 🏗️ プロジェクト構成

```
homepage-pfp/
├── pfp-website/          # Next.jsアプリケーション
│   ├── src/
│   │   ├── app/         # App Router (Next.js 15)
│   │   ├── components/  # Reactコンポーネント
│   │   └── lib/         # ユーティリティ関数
│   ├── public/          # 静的ファイル
│   ├── next.config.ts   # Next.js設定
│   └── package.json     # 依存関係
├── vercel.json          # Vercel設定ファイル
└── README.md           # このファイル
```

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### セットアップ手順

1. **リポジトリのクローン**
   ```bash
   git clone [リポジトリURL]
   cd homepage-pfp
   ```

2. **依存関係のインストール**
   ```bash
   cd pfp-website
   npm install
   ```

3. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

4. **ブラウザで確認**
   - http://localhost:3000 でアクセス

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番用ビルド
npm run build

# 本番用サーバー起動
npm run start

# リンター実行
npm run lint

# 型チェック
npm run type-check
```

## 📁 主要なディレクトリ・ファイル

### `src/app/`
- **layout.tsx**: 全体のレイアウト設定
- **page.tsx**: トップページ
- **globals.css**: グローバルスタイル

### `src/components/`
- **sections/**: 各セクションのコンポーネント
  - `Hero.tsx`: ヒーローセクション
  - `About.tsx`: 会社概要
  - `Services.tsx`: サービス内容
  - `Works.tsx`: 実績
  - `Contact.tsx`: お問い合わせ
  - `Recruitment.tsx`: 採用情報
- **ui/**: 再利用可能なUIコンポーネント
- **sections/Header.tsx**: ヘッダー
- **sections/Footer.tsx**: フッター

## 🎨 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **デプロイ**: Vercel

## 🚀 デプロイ

### 自動デプロイ
- `main`ブランチにプッシュすると、Vercelで自動デプロイされます
- デプロイ状況はVercelダッシュボードで確認できます

### 手動デプロイ
```bash
# ビルド
npm run build

# Vercelにデプロイ
vercel --prod
```

## 📝 開発ガイドライン

### コーディング規約
- TypeScriptの型定義を適切に行う
- コンポーネントは関数型で記述
- Tailwind CSSを使用したスタイリング
- レスポンシブデザインを意識

### コミットメッセージ
```
feat: 新機能追加
fix: バグ修正
docs: ドキュメント更新
style: コードスタイル修正
refactor: リファクタリング
test: テスト追加
```

### ブランチ戦略
- `main`: 本番環境
- `develop`: 開発環境
- `feature/*`: 機能開発
- `hotfix/*`: 緊急修正

## 🔧 トラブルシューティング

### よくある問題

1. **依存関係のエラー**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **ビルドエラー**
   ```bash
   npm run type-check
   npm run lint
   ```

3. **開発サーバーが起動しない**
   - ポート3000が使用中の場合、別のポートを指定
   ```bash
   npm run dev -- -p 3001
   ```

## 📞 サポート

開発に関する質問や問題が発生した場合は、以下に連絡してください：

- **技術的な問題**: 開発チーム
- **デザイン関連**: デザインチーム
- **緊急時**: プロジェクトマネージャー

## 📚 参考資料

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Documentation](https://vercel.com/docs)

---

**最終更新**: 2024年12月
**バージョン**: 1.0.0
