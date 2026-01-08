import { NextResponse } from "next/server";
import { clearCart } from "@/lib/db";

export async function POST() {
  try {
    clearCart();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to clear cart" },
      { status: 500 }
    );
  }
}
