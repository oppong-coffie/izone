import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { User } from '@/lib/models/User';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    console.log('🔐 Login request received');

    // Connect to database
    try {
      await connectDB();
      console.log('✅ Database connected');
    } catch (dbError: any) {
      console.error('❌ Database connection error:', dbError.message);
      return NextResponse.json(
        { success: false, error: 'Database connection failed. Please try again later.' },
        { status: 500 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
      console.log('📝 Login attempt for:', body.email);
    } catch (parseError) {
      console.error('❌ Body parse error:', parseError);
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      console.log('❌ Missing credentials');
      return NextResponse.json(
        { success: false, error: 'Please provide email and password' },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      console.log('❌ User not found:', email);
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Check password (using bcrypt since passwords are hashed)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('❌ Invalid password for:', email);
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    console.log('✅ Login successful for:', email);

    // Return success with user data (excluding password)
    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          isVerified: user.isVerified,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Login error:', error);
    return NextResponse.json(
      { success: false, error: `Login failed: ${error.message}` },
      { status: 500 }
    );
  }
}
