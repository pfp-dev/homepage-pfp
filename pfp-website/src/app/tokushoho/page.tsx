"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

export default function TokushohoPage() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            asChild
            className="text-gray-600 hover:text-gray-900"
          >
            <a href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              トップページに戻る
            </a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            特定商取引法に基づく表記
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 販売事業者 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  販売事業者
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">株式会社PFP</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 運営統括責任者 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  運営統括責任者
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">芹沢 宏之</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 所在地 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  所在地
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  〒154-0023<br />
                  東京都世田谷区若林4-13-2
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 電話番号 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  電話番号
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  090-1450-5288<br />
                  ※お問い合わせはメールにてお願いいたします。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* メールアドレス */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  メールアドレス
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">support@pfp.co.jp</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 商品内容 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  商品内容
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  道場ホームページ制作・運営代行サービス<br />
                  コンテンツ更新、技術サポートを含みます。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 販売価格 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  販売価格
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  月額 5,500円（税込）<br />
                  Stripeによる毎月自動決済となります。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 商品代金以外の必要料金 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  商品代金以外の必要料金
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-lg text-gray-700 space-y-2">
                  <li>• 消費税（表示価格に含む場合はその旨明記）</li>
                  <li>• 振込手数料（銀行振込をご利用の場合）</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 支払い方法と時期 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  支払い方法と時期
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  クレジットカード（Stripeによる毎月自動決済）<br />
                  初回決済日を基準に、以降毎月自動で決済されます。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* サービスの提供時期 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  サービスの提供時期
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  契約締結および初回決済確認後、10営業日以内にホームページ制作を開始いたします。<br />
                  運営代行は契約期間中、継続的に提供いたします。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 返品・キャンセルについて */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  返品・キャンセルについて
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-lg text-gray-700 space-y-2">
                  <li>• サービスの性質上、契約成立後の返金はお受けできません。</li>
                  <li>• 契約の解約を希望される場合は、翌月以降の課金を停止いたします。</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 特別条件 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  特別条件
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">
                  20歳未満の方は保護者の同意を得たうえでお申込みください。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* フッター */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-500">
            <p>© 2006-{currentYear} PFP, INC.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
