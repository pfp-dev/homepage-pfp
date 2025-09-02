"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      {/* 背景のパララックス効果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      
      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            確かな技術力と
            <br />
            <span className="text-primary">柔軟な対応力</span>で
            <br />
            貴社の課題を解決します
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {COMPANY_INFO.getYearsSinceEstablishmentTextWithOver()}の実績を持つSES事業のプロフェッショナル
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
              className="px-8 py-3 text-lg group"
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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

      {/* 装飾的な要素 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-lg" />
    </section>
  );
}
