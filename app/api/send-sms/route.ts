import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { to, msg } = await request.json();
    const key = process.env.SMS_API_KEY;
    const sender_id = process.env.SMS_SENDER_ID;

    const url = `https://sms.smsnotifygh.com/smsapi?key=${key}&to=${to}&msg=${encodeURIComponent(msg)}&sender_id=${sender_id}`;

    const response = await fetch(url);
    const result = await response.text();

    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send SMS' }, { status: 500 });
  }
}
