"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  DollarSign, 
  GraduationCap, 
  Heart,
  Coffee,
  Users,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function Recruitment() {
  const positions = [
    {
      title: "シニアシステムエンジニア",
      type: "正社員",
      location: "東京都世田谷区（リモートワーク可）",
      salary: "年収500万円〜800万円",
      experience: "実務経験5年以上",
      skills: ["Java", "Spring", "AWS", "React"],
      description: "大規模システムの設計・開発をリードしていただくポジションです。",
      status: "募集終了"
    },
    {
      title: "フロントエンドエンジニア",
      type: "正社員",
      location: "東京都世田谷区（リモートワーク可）",
      salary: "年収400万円〜650万円",
      experience: "実務経験3年以上",
      skills: ["React", "TypeScript", "Next.js", "CSS"],
      description: "モダンなWebアプリケーションのフロントエンド開発を担当していただきます。",
      status: "募集終了"
    },
    {
      title: "インフラエンジニア",
      type: "正社員",
      location: "東京都世田谷区（リモートワーク可）",
      salary: "年収450万円〜750万円",
      experience: "実務経験3年以上",
      skills: ["AWS", "Docker", "Kubernetes", "Linux"],
      description: "クラウドインフラの設計・構築・運用を担当していただきます。",
      status: "募集終了"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "充実した福利厚生",
      description: "各種社会保険完備、退職金制度、健康診断補助"
    },
    {
      icon: Coffee,
      title: "働きやすい環境",
      description: "フレックスタイム制、リモートワーク可"
    },
    {
      icon: Users,
      title: "チーム重視の文化",
      description: "風通しの良い職場、定期的な懇親会"
    },
    {
      icon: TrendingUp,
      title: "成長支援制度",
      description: "技術書購入補助、外部研修参加支援、資格取得奨励金"
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
    <section id="recruit" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            採用情報
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            私たちと一緒に、技術で社会を変える仲間を募集しています。
            成長意欲があり、チームワークを大切にする方をお待ちしております。
          </p>
        </motion.div>

        {/* 募集ポジション */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            募集ポジション
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-gray-900">
                        {position.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-primary border-primary">
                        {position.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{position.location}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{position.salary}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{position.experience}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">必要なスキル</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-accent/20 text-accent-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 福利厚生 */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            福利厚生・働く環境
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <benefit.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            現在の募集について
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            現在、新規採用の募集は行っておりませんが、将来的な採用の際は
            このページで情報をお知らせいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="#contact">
                お問い合わせ
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
