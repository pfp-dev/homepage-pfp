"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// トップの問い合わせフォーム（Contact.tsx）と同じ Web3Forms access key を使い、
// 件名・送信者名で採用応募を区別する。
const WEB3FORMS_ACCESS_KEY = "8ee8c8c8-d532-4dcc-980f-06881c075c10";

const javaYearsOptions = ["2年〜3年未満", "3年〜5年未満", "5年〜10年未満", "10年以上"];

export default function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const result = await response.json().catch(() => null);
      if (response.ok && result?.success !== false) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error("送信エラー:", response.statusText, result);
        alert("送信に失敗しました。お手数ですが時間をおいて再度お試しください。");
      }
    } catch (error) {
      console.error("送信エラー:", error);
      alert("送信に失敗しました。お手数ですが時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-white px-6 py-12 text-center text-gray-900">
        <CheckCircle className="mx-auto mb-4 h-14 w-14 text-green-500" />
        <h3 className="mb-2 text-xl font-semibold">ご応募ありがとうございます</h3>
        <p className="text-gray-600">内容を確認のうえ、担当者よりご連絡いたします。</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-lg bg-white p-5 text-left text-gray-900 shadow-lg sm:p-8"
      name="ito-recruit"
    >
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="【採用応募】Javaエンジニア（伊豆・リモート /ito）" />
      <input type="hidden" name="from_name" value="PFP採用応募フォーム（/ito）" />
      {/* スパム対策（Web3Forms の honeypot） */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
          お名前 <span className="text-red-500">*</span>
        </label>
        <Input id="name" name="name" type="text" required autoComplete="name" placeholder="山田 太郎" className="h-11" />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <Input id="email" name="email" type="email" required autoComplete="email" placeholder="example@mail.com" className="h-11" />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
          電話番号
        </label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="090-1234-5678" className="h-11" />
      </div>

      <div>
        <label htmlFor="java_years" className="mb-2 block text-sm font-medium text-gray-700">
          Java実務経験年数 <span className="text-red-500">*</span>
        </label>
        <select
          id="java_years"
          name="java_years"
          required
          defaultValue=""
          className="h-11 w-full rounded-md border border-input bg-transparent px-3 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
        >
          <option value="" disabled>
            選択してください
          </option>
          {javaYearsOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          メッセージ
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="経歴の概要、お住まいのエリア、ご質問などをご自由にどうぞ"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-gray-700">
        <input type="checkbox" name="privacy_agreed" value="同意する" required className="mt-1 h-4 w-4" />
        <span>
          <Link href="/privacy" target="_blank" className="text-primary underline">
            個人情報保護方針
          </Link>
          に同意します <span className="text-red-500">*</span>
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-12 w-full bg-accent text-base font-bold text-gray-900 hover:bg-accent/90"
      >
        {isSubmitting ? (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-gray-900" />
            送信中...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            応募する
          </>
        )}
      </Button>
    </form>
  );
}
