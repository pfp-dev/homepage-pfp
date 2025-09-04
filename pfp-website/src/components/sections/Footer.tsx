"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { href: "#about", label: "会社概要" },
    { href: "#services", label: "事業内容" },
    { href: "#works", label: "実績" },
    { href: "#recruit", label: "採用情報" },
    { href: "#contact", label: "お問い合わせ" }
  ];

  const services = [
    "システム開発",
    "データベース設計",
    "AIコンサルティング",
    "クラウドインフラ構築",
    "ITコンサルティング",
    "システム保守・運用"
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/pfp.tokyo", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインフッターコンテンツ */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* 会社情報 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">株式会社PFP（PFP,INC.）</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                2006年の設立以来、システム開発事業を通じて多くの企業様のIT課題解決をサポートしてまいりました。
                確かな技術力と豊富な経験を持つエンジニアが、お客様のプロジェクトを成功に導きます。
              </p>
              
              {/* 連絡先情報 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-sm text-gray-300">03-5848-2995</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-sm text-gray-300">contact@pfp.co.jp</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-accent mt-0.5" />
                  <span className="text-sm text-gray-300">
                    〒154-0023<br />
                    東京都世田谷区若林
                  </span>
                </div>
              </div>
            </motion.div>

            {/* クイックリンク */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">クイックリンク</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* サービス一覧 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">サービス</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ソーシャルメディア・お問い合わせ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">フォローする</h3>
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-accent hover:text-gray-900 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-300">お気軽にお問い合わせください</h4>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-gray-900"
                >
                  <a href="#contact">
                    お問い合わせ
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="border-t border-gray-800" />

        {/* フッター下部 */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} 株式会社PFP. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
              >
                個人情報保護方針
              </a>
              <a
                href="/tokushoho"
                className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
              >
                特定商取引法
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* トップに戻るボタン */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-accent text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="トップに戻る"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
