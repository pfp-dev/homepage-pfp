"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Brain, Cloud, Users, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "システム開発",
      description: "Webアプリケーション、業務システムの設計・開発を行います。最新の技術スタックを活用し、スケーラブルなシステムを構築します。",
      features: ["React/Next.js", "Node.js", "Python", "Java"]
    },
    {
      icon: Database,
      title: "データベース設計",
      description: "効率的なデータベース設計と最適化を提供します。大規模データの処理とパフォーマンス向上を実現します。",
      features: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: Brain,
      title: "AIコンサルティング",
      description: "AI技術の導入から実装まで、お客様のビジネスプロセス最適化を支援します。データ分析から予測モデル構築まで幅広く対応します。",
      features: ["機械学習", "自然言語処理", "画像認識", "予測分析"]
    },
    {
      icon: Cloud,
      title: "クラウドインフラ",
      description: "AWS、Azure、GCPを活用したクラウドインフラの構築と運用を支援します。コスト最適化とセキュリティ対策も万全です。",
      features: ["AWS", "Azure", "GCP", "Docker"]
    },
    {
      icon: Users,
      title: "チーム開発支援",
      description: "アジャイル開発手法を取り入れたチーム開発の支援を行います。プロジェクト管理から品質保証まで一貫してサポートします。",
      features: ["Scrum", "CI/CD", "Git", "Jira"]
    },
    {
      icon: Settings,
      title: "システム保守・運用",
      description: "既存システムの保守・運用を通じて、安定稼働と継続的な改善を実現します。24時間365日のサポート体制を提供します。",
      features: ["監視", "バックアップ", "セキュリティ", "パフォーマンス"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            サービス内容
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            豊富な経験と最新の技術を活用して、お客様のビジネス課題を解決するための
            包括的なITソリューションを提供いたします。
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA セクション */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            お客様のプロジェクトを成功に導きます
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            どのようなご要望でもお気軽にご相談ください。
            経験豊富なエンジニアがお客様に最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <a href="#contact">無料相談を申し込む</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="#works">実績を見る</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
