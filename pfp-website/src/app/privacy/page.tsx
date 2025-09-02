"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, FileText, Phone, Mail, MapPin } from "lucide-react";

export default function PrivacyPage() {
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
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            個人情報保護方針
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            株式会社PFPは、お客様の個人情報の保護を最重要課題として位置づけ、適切な管理・保護に努めています。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 個人情報保護理念 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  個人情報保護理念
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  私たちは、システム開発ならびに保守・運用業務を営む個人情報取り扱い事業者として情報の適切な管理・保護を最重要課題のひとつに位置づけています。情報の価値を尊重することは、情報サービス事業としての社会的使命を果たしていく原点です。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  PFPは、お客様の機密情報・個人情報の管理・保護を経営の最重要課題のひとつに位置づけ、情報セキュリティボリシーの制定や組織体制の整備のほか、継続的な教育・啓発活動を通じて、その徹底に努めています。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 個人情報保護方針 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  個人情報保護方針
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      当社において個人情報を取り扱う際は、システム開発ならびに保守・運用業務ならびに従業員の雇用、人事管理上に必要な範囲でのみ取得し、利用、提供を行います。また、お客様から同意を得た範囲を超えて個人情報が目的外の利用、提供がされないよう管理します。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      当社は、個人情報に関する法令、国が定める指針、その他の規範を遵守します。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      当社では、個人情報への不正アクセス、個人情報の紛失、破壊、改ざん、漏洩を予防するために合理的な安全対策および是正処置を行います。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      当社は、個人情報の管理責任者を選任し、個人情報保護マネジメントシステムの実施および運用に関する責任と権限を与え、適切な管理を行います。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      当社の個人情報保護マネジメントシステムは、教育、運用、監査、見直しなどを通じて、継続的に改善を行います。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      当社では、個人情報の開示、訂正、削除、利用および提供の拒否要求、その他苦情、ご相談など、個人情報に関するお問合せについての窓口を設置し、2週間以内に対応致します。
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 利用目的 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary" />
                  利用目的
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  当社が取得した個人情報は、以下の目的に限り使用いたします。
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">システム開発でお預かりした個人情報</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• システムの開発およびテストなど業務委託契約の遂行</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">SNSの運用・保守業務でお預かりした個人情報</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 会員情報のデータベース管理</li>
                      <li>• メールマガジンの配信</li>
                      <li>• SNSサービスの提供</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">株主様に関する個人情報</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 会社法に基づく権利義務の履行</li>
                      <li>• 法令に基づく所定の基準による手続き</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">当社への採用選考を希望される方に関する個人情報</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 採用選考に関する手続き</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">社員に関する個人情報</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 人事管理の手続き</li>
                      <li>• 給与管理の手続き</li>
                      <li>• 雇用保険、社会保険の手続き</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">お客様に関する個人情報</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 顧客データベース</li>
                      <li>• 契約関連手続き</li>
                      <li>• 契約に基づくサービス提供</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">お問い合わせにより取得した個人情報</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• お問い合わせ内容の確認、回答</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 第三者提供 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  第三者提供
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  当社は、本人同意がない限り、法令の規定または司法手続きに基づく要請による場合を除き、個人情報を第三者に提供することはありません。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 外部委託 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  外部委託
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  当社は、利用目的の達成のため、当社と秘密保持契約を締結した業者へ、以下の通り個人情報の取扱いを委託することがあります。ただし、利用目的の達成に必要な範囲を超え、個人情報を取扱うことのないよう委託先の監督に努めます。
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>「利用目的 2」における業務遂行のため、サーバ管理会社へ個人情報の取扱いを委託します</p>
                  <p>「利用目的 5」における業務遂行のため、税理士、社労士へ個人情報の取扱いを委託します。</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 情報提供の任意性 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  情報提供の任意性
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  当社への個人情報の提供は任意となっています。ただし、情報に漏れやミスがある場合、正常なサービス等を提供できない場合があります。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 個人情報の開示等について */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  個人情報の開示等について
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  利用目的の通知、個人情報の開示、訂正、削除、利用および提供の拒否については、「個人情報開示等請求書」をダウンロードのうえ、必要書類・手数料を添付し、以下の住所までご郵送ください。
                </p>
                <p className="text-gray-700">
                  開示等を申請する際は、「個人情報開示等請求書」に記載された「開示等における個人情報の取扱について」を必ずご確認ください。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 手数料について */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  手数料について
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  利用目的の通知、個人情報の開示に関しましては、1請求ごとに、手数料として1000円（消費税込み）を徴収させていただきます。
                </p>
                <p className="text-gray-700">
                  各請求書を当社へ郵送する際に、手数料1000円分の切手または郵便定額小為替をご同封ください。
                </p>
                <p className="text-gray-700">
                  手数料が不足していた場合は、その旨をご連絡いたします。連絡後、1週間を経過しても手数料をお支払いいただけない場合、ご請求は無効とさせていただきます。
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">【郵送先】</h4>
                  <div className="space-y-1 text-gray-700">
                    <p>住所：〒１５４－００２３ 東京都世田谷区若林4-13-2</p>
                    <p>電話：０３－５８４８－２９９５（代表）</p>
                    <p>宛先：個人情報保護管理者 芹沢 宏之</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 特定個人情報の適正な取扱いについて */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  特定個人情報の適正な取扱いについて
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  株式会社PFP(以下「当社」という。)は、特定個人情報の適正な取扱いに関して、以下のとおり基本方針を定めます。
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">事業者の名称</h4>
                    <p className="text-gray-700">株式会社PFP</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">関係法令・ガイドライン等の尊守</h4>
                    <p className="text-gray-700">
                      当社は、「行政手続きにおける特定の個人を識別するための番号の利用等に関する法律」、「個人情報の保護に関する法律」、「特定個人情報の適正な取扱いに関するガイドライン（事業者編）」、「個人情報の保護に関する法律についてのガイドライン」等、の各種法令等を尊守し、特定個人情報の適正な取扱いを行います。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">安全管理措置に関する事項</h4>
                    <p className="text-gray-700">
                      当社は、特定個人情報の適正な取り扱いを実施するため、別途「特定個人情報等の適正な取り扱いに関する基本方針」を定め、特定個人情報の漏洩、減失又は毀損などのリスクに対して、適切かつ十分な安全管理措置を講じます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* お問い合わせ窓口 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary" />
                  個人情報・特定個人情報に関するご連絡、苦情、ご相談のお問い合わせ窓口
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="text-gray-700">03-5848-2995（代表）</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:contact@pfp.co.jp" className="text-primary hover:text-primary/80">
                          contact@pfp.co.jp
                        </a>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-gray-700">担当：個人情報保護管理者 芹沢 宏之</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 制定・改訂情報 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="text-center text-gray-600">
                  <p className="mb-2">
                    制定年月日 2020年12月1日 最終改訂年月日 2020年12月1日
                  </p>
                  <p className="font-semibold">
                    株式会社PFP 代表取締役社長 芹沢宏之
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* フッター */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-500">
            <p>© 2006-2023 PFP, INC.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
