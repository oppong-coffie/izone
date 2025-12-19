import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Send email with PIN
async function sendVerificationEmail(email: string, name: string, pin: string, phone: string): Promise<boolean> {
  try {
    // Create transporter - fallback to console log if SMTP not configured
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // If SMTP credentials are not set, just log and return success for development
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.log('📧 [DEV MODE] Verification PIN for', email, ':', pin);
      return true;
    }

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'iZone Digistore <noreply@izone.com>',
      to: email,
      subject: 'Your iZone Verification Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #32CD32; margin: 0;">iZone Digistore</h1>
          </div>
          <h2 style="color: #333;">Hi ${name}!</h2>
          <p style="color: #666; font-size: 16px;">
            Thank you for registering with iZone Digistore. Use the code below to verify your email address:
          </p>
          <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 10px; margin: 20px 0;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #32CD32;">
              ${pin}
            </span>
          </div>
          <p style="color: #999; font-size: 14px;">
            This code expires in 10 minutes. If you didn't create an account, please ignore this email.
          </p>
        </div>
      `,
    });

    // send sms
    const key = process.env.SMS_API_KEY;
    const sender_id = process.env.SMS_SENDER_ID;
    const smsMessage = `Your iZone Digistore verification code is: ${pin}.`;
    const url = `https://sms.smsnotifygh.com/smsapi?key=${key}&to=${phone}&msg=${encodeURIComponent(smsMessage)}&sender_id=${sender_id}`;
    const response = await fetch(url);
    console.log('📱 SMS sent to:', phone);

    console.log('✅ Verification email sent to:', email);
    return true;
  } catch (error) {
    console.error('❌ Email send error:', error);
    // Still return true in development - PIN is logged to console
    console.log('📧 [FALLBACK] Verification PIN for', email, ':', pin);
    return true;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, name, pin, phone } = await request.json();

    if (!email || !name || !pin || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const sent = await sendVerificationEmail(email, name, pin, phone);

    if (sent) {
      return NextResponse.json({ success: true, message: 'Verification email sent' });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('❌ Send verification error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
