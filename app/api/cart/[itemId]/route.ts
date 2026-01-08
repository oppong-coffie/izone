import { NextResponse } from "next/server";
import { removeFromCart } from "@/lib/db";

export async function DELETE(
  req: Request,
  { params }: { params: { itemId: string } }
) {
  try {
    const { itemId } = params;

    removeFromCart(itemId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return NextResponse.json(
      { error: "Failed to remove item" },
      { status: 500 }
    );
  }
}
