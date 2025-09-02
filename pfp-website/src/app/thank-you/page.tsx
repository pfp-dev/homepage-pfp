import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <CardTitle className="text-3xl text-gray-900 mb-4">
              お問い合わせありがとうございます
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-gray-600">
              お問い合わせを受け付けました。
              <br />
              内容を確認の上、2営業日以内にご連絡いたします。
            </p>
            
            <div className="pt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                トップページに戻る
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
