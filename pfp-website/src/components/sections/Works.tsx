"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users } from "lucide-react";

export default function Works() {
  const works = [
    {
      title: "大手金融機関 勘定系システム",
      client: "大手都市銀行",
      period: "2023年4月〜継続中",
      team: "15名",
      description: "基幹業務システムの刷新プロジェクト。レガシーシステムからの移行とパフォーマンス向上を実現。",
      technologies: ["Java", "Spring Boot", "Oracle", "React", "AWS"],
      achievements: [
        "処理速度50%向上",
        "システム可用性99.9%達成",
        "運用コスト30%削減"
      ]
    },
    {
      title: "ECサイト構築・運用",
      client: "大手小売企業",
      period: "2022年6月〜2023年12月",
      team: "8名",
      description: "年商100億円規模のECサイトの構築とマイクロサービス化。高トラフィックに対応する設計を実現。",
      technologies: ["Node.js", "Next.js", "PostgreSQL", "Docker", "GCP"],
      achievements: [
        "月間PV数500万達成",
        "コンバージョン率15%向上",
        "サイト表示速度60%改善"
      ]
    },
    {
      title: "製造業向け IoT システム",
      client: "大手製造業",
      period: "2023年1月〜2023年10月",
      team: "12名",
      description: "工場の設備管理とデータ収集を行うIoTシステムの構築。リアルタイムでの監視・制御を実現。",
      technologies: ["Python", "Django", "MongoDB", "MQTT", "Azure"],
      achievements: [
        "設備稼働率95%達成",
        "メンテナンスコスト40%削減",
        "故障予知精度90%向上"
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            実績
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            これまでに手がけた主要プロジェクトの実績をご紹介します
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {works.map((work, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                    {work.title}
                  </CardTitle>
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{work.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>チーム規模: {work.team}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {work.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">技術スタック</h4>
                    <div className="flex flex-wrap gap-1">
                      {work.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">主な成果</h4>
                    <ul className="space-y-1">
                      {work.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
