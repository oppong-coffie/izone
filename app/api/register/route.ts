import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { User } from '@/lib/models/User';
import bcrypt from 'bcryptjs';



export async function POST(request: NextRequest) {
  try {
    console.log('📝 Registration request received');
    
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
      console.log('📝 Request body parsed:', { name: body.name, email: body.email });
    } catch (parseError) {
      console.error('❌ Body parse error:', parseError);
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { name, email, password, verificationPin, phone } = body;

    // Validate input
    if (!name || !email || !password || !phone) {
      console.log('❌ Missing required fields');
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      console.log('❌ User already exists:', email);
      return NextResponse.json(
        { success: false, error: 'An account with this email already exists' },
        { status: 400 }
      );
    }

    // Password validation
    if (password.length < 8) {
      console.log('❌ Password too short');
      return NextResponse.json(
        { success: false, error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user with hashed password
    console.log('📝 Creating user...');
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      phone,
      password: hashedPassword,
      role: 'customer',
      isVerified: true, // Set to true since verification was done client-side
    });

    console.log('✅ User created successfully:', user._id);

    
    // Return success with PIN (client will store it)
    return NextResponse.json(
      {
        success: true,
        message: 'Account created successfully',
        verificationPin, // Send PIN to client for verification
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('❌ Registration error:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'An account with this email already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: `Registration failed: ${error.message}` },
      { status: 500 }
    );
  }
}
