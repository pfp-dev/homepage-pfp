import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, subject, message, to } = body;

    // 基本的なバリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メール送信の処理（実際の実装ではResend、SendGrid、Mailgunなどのサービスを使用）
    // ここでは成功レスポンスを返す
    console.log('受信したお問い合わせ:', {
      name,
      company,
      email,
      phone,
      subject,
      message,
      to: to || 'contact@pfp.co.jp'
    });

    // 成功レスポンス
    return NextResponse.json(
      { 
        message: 'お問い合わせを受け付けました',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API エラー:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
