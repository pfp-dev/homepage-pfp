"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Hero() {
  return (
    <AuroraBackground className="min-h-screen">
      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* LCP最適化: メインタイトルを即座に表示 */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
            確かな技術力と
            <br />
            <span className="text-primary">柔軟な対応力</span>で
            <br />
            貴社の課題を解決します
          </h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {COMPANY_INFO.getYearsSinceEstablishmentTextWithOver()}の実績を持つSES事業のプロフェッショナル
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                無料相談・お問い合わせ
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg group border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <a href="#services" className="flex items-center gap-2">
                サービス詳細を見る
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* 電話番号のCTA */}
          <motion.div
            className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-lg border inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 text-primary">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">お急ぎの場合は</span>
              <a
                href="tel:0358482995"
                className="font-bold text-lg hover:underline"
              >
                03-5848-2995
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-1">平日 9:00〜18:00</p>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}
