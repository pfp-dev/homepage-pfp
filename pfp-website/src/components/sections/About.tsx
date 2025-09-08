"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, TrendingUp } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function About() {
  const stats = [
    {
      icon: Users,
      number: "7名",
      label: "技術者在籍",
      description: "経験豊富なエンジニア"
    },
    {
      icon: Building,
      number: "14社",
      label: "取引実績",
      description: "大手企業との継続取引"
    },
    {
      icon: Award,
      number: COMPANY_INFO.getYearsSinceEstablishmentText(),
      label: "事業実績",
      description: "安定したサービス提供"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "継続率",
      description: "高い顧客満足度"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            株式会社PFPについて
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            私たちは{COMPANY_INFO.getYearsSinceEstablishmentTextWithOver()}にわたり、SES事業を通じて多くの企業様のIT課題解決をサポートしてまいりました。
            確かな技術力と豊富な経験を持つエンジニアが、お客様のプロジェクトを成功に導きます。
          </p>
        </motion.div>

        {/* 統計情報 */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <stat.icon className="h-12 w-12 mx-auto text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 会社情報 */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">会社概要</h3>
              <div className="space-y-4">
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">会社名</span>
                  <span className="text-gray-900">株式会社PFP（英語表記：PFP,INC.）</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">設立日</span>
                  <span className="text-gray-900">2006年12月1日</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">資本金</span>
                  <span className="text-gray-900">500万円</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">代表者</span>
                  <span className="text-gray-900">代表取締役 芹沢宏之</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">従業員数</span>
                  <span className="text-gray-900">7名</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">取引銀行</span>
                  <span className="text-gray-900">三菱UFJ銀行　自由が丘支店</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">事業内容</span>
                  <span className="text-gray-900">システム開発事業</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">所在地・連絡先</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600 font-medium block mb-1">所在地</span>
                  <span className="text-gray-900">
                    〒154-0023<br />
                    東京都世田谷区若林
                  </span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">E-mail</span>
                  <span className="text-gray-900">contact@pfp.co.jp</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">電話番号</span>
                  <span className="text-gray-900">03-5848-2995</span>
                </div>
                <div className="flex">
                  <span className="w-32 text-gray-600 font-medium">営業時間</span>
                  <span className="text-gray-900">平日 9:00〜18:00</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 沿革 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">沿革</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* タイムラインの縦線 */}
              <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-primary/30"></div>
              
              {/* 2006年12月 */}
              <motion.div
                className="relative mb-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-sm text-primary font-semibold">2006年12月</div>
                      <div className="text-lg font-bold text-gray-900">株式会社 パウンド・フォー・パウンド 設立</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </motion.div>

              {/* 2016年01月 */}
              <motion.div
                className="relative mb-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-sm text-primary font-semibold">2016年01月</div>
                      <div className="text-lg font-bold text-gray-900">株式会社 PFP へ社名変更</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2022年07月 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-sm text-primary font-semibold">2022年07月</div>
                      <div className="text-lg font-bold text-gray-900">資本金を500万円に増額</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
