import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  Code2,
  Heart,
  Home,
  JapaneseYen,
  MapPin,
  Train,
  UserCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ApplyForm from "./ApplyForm";

// 伊東オフィス求人ポスター（QRコード）からの着地ページ
// 暫定版（2026-10-02 CEO GO）：確定済みの条件のみ掲載。未確定の労働条件は「面談時にご案内」とし、値を推測で書かないこと。

const PAGE_TITLE = "Javaエンジニア採用（伊豆・リモート）｜株式会社PFP";
const PAGE_DESCRIPTION =
  "伊豆に住んで、東京のJava案件。株式会社PFPでは、熱海・伊東・伊豆エリアからリモートで東京の案件を担当するJavaエンジニア（正社員・年収460万円〜）を募集しています。";
const PAGE_PATH = "/ito"; // layout の metadataBase（https://pfp.co.jp）で絶対URL化される

export const metadata: Metadata = {
  // layout の title.template を使わず、そのまま表示する
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    siteName: "株式会社PFP",
    locale: "ja_JP",
    type: "website",
    // page で openGraph を指定すると layout の images が引き継がれないため明示する
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "株式会社PFP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const highlights = [
  { icon: Home, label: "基本リモート（在宅）" },
  { icon: JapaneseYen, label: "年収460万円〜" },
  { icon: Briefcase, label: "正社員" },
  { icon: Heart, label: "介護・通院など家族の事情に柔軟対応" },
];

type Row = { label: string; value: React.ReactNode };

const conditions: Row[] = [
  { label: "職種", value: "Javaエンジニア" },
  {
    label: "業務内容",
    value: "東京の案件を担当していただきます（Javaを用いたシステム開発）。",
  },
  { label: "雇用形態", value: "正社員" },
  { label: "年収", value: "460万円〜（経験・スキルにより決定）" },
  { label: "応募条件", value: "Java実務経験2年以上" },
  {
    label: "勤務地",
    value: (
      <>
        基本リモート（在宅）。伊東オフィスへの出社も選択できます。
        <br />
        熱海・伊東・伊豆の各地からの応募を歓迎します。
      </>
    ),
  },
  {
    label: "出張",
    value: "東京出張 月2回程度あり（交通費・宿泊費は会社負担）",
  },
  {
    label: "働き方への配慮",
    value: "介護・通院など、ご家族の事情に柔軟に対応します。",
  },
  {
    label: "その他の条件",
    value:
      "契約期間・試用期間・就業時間・休日休暇・社会保険・福利厚生などの詳細は、面談の際にご案内します。",
  },
];

const points = [
  {
    icon: Home,
    title: "伊豆に住みながら、東京の案件",
    body: "勤務は基本リモート（在宅）。熱海・伊東・伊豆の暮らしを続けながら、東京の案件に携われます。",
  },
  {
    icon: Building2,
    title: "伊東オフィスも使える",
    body: "在宅だけでなく、伊東オフィスへの出社も選べます。",
  },
  {
    icon: Train,
    title: "東京出張は月2回程度",
    body: "東京への出張が月2回程度あります。交通費・宿泊費は会社が負担します。",
  },
  {
    icon: Heart,
    title: "家族の事情に柔軟に",
    body: "介護・通院など、ご家族の事情に合わせた働き方に柔軟に対応します。",
  },
];

export default function ItoRecruitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="sticky top-0 z-40 border-b bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.webp" alt="PFP.INC ロゴ" className="h-7 w-7 object-contain" />
            <span className="text-lg font-bold text-gray-900">PFP.INC</span>
          </Link>
          <Button asChild size="sm" className="bg-primary text-white hover:bg-primary/90">
            <a href="#apply">応募する</a>
          </Button>
        </div>
      </header>

      <main>
        {/* ヒーロー */}
        <section className="bg-gradient-to-br from-primary via-primary to-blue-900 text-white">
          <div className="container mx-auto px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-5 border-transparent bg-accent text-gray-900 hover:bg-accent">
                Javaエンジニア募集｜正社員
              </Badge>
              <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
                伊豆に住んで、
                <br />
                東京のJava案件。
              </h1>
              <p className="mt-6 text-base leading-relaxed text-blue-100 sm:text-lg">
                株式会社PFPは、熱海・伊東・伊豆エリアから基本リモートで東京の案件を担当する
                Javaエンジニアを募集しています。
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium sm:text-base"
                  >
                    <h.icon className="h-5 w-5 shrink-0 text-accent" />
                    {h.label}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent text-base font-bold text-gray-900 hover:bg-accent/90 sm:w-auto"
                >
                  <a href="#apply">応募はこちら</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 働き方のポイント */}
        <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            この仕事の働き方
          </h2>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <Card key={p.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <p.icon className="h-5 w-5 text-primary" />
                    </span>
                    {p.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-gray-700">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 募集要項 */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              募集要項
            </h2>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border">
              <dl className="divide-y">
                {conditions.map((row) => (
                  <div key={row.label} className="sm:grid sm:grid-cols-[12rem_1fr]">
                    <dt className="bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 sm:py-4">
                      {row.label}
                    </dt>
                    <dd className="px-4 py-3 leading-relaxed text-gray-700 sm:py-4">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 選考フロー */}
        <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            選考フロー
          </h2>
          <div className="mx-auto max-w-3xl text-center">
            <p className="leading-relaxed text-gray-700">
              下記フォームからご応募ください。応募内容を確認のうえ、担当者より面談についてご連絡します。
            </p>
          </div>
        </section>

        {/* 応募 */}
        <section id="apply" className="scroll-mt-20 bg-primary py-12 text-white sm:py-16">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl">応募はこちら</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-blue-100">
              Java実務経験2年以上の方のご応募をお待ちしています。
              熱海・伊東・伊豆にお住まいの方、移住を考えている方もお気軽にどうぞ。
            </p>
            <div className="mx-auto mt-8 max-w-xl">
              <ApplyForm />
            </div>
          </div>
        </section>

        {/* 会社情報 */}
        <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-bold text-gray-900">株式会社PFP</h2>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              本社：〒150-0041 東京都渋谷区神南1丁目11-4 FPGリンクス神南 5階
            </p>
            <p className="flex items-start gap-2">
              <Code2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              事業内容：システム開発・ITソリューション
            </p>
            <p className="flex items-start gap-2">
              <UserCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              ご応募いただいた個人情報は、
              <Link href="/privacy" className="text-primary underline">
                個人情報保護方針
              </Link>
              に基づき適切に取り扱います。
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <Button variant="ghost" asChild className="px-0 text-gray-600 hover:text-gray-900">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                トップページへ
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 text-center text-sm text-gray-400">
        © 株式会社PFP. All rights reserved.
      </footer>
    </div>
  );
}

