import { NextResponse } from "next/server";
import { getCart, addToCart, getProduct } from "@/lib/db";

// GET: Fetch Cart items
export async function GET(req: Request) {
  try {
    const cart = getCart();
    // Populate products
    const populatedItems = cart.items.map(item => {
        const product = getProduct(item.productId);
        return {
            ...item,
            product: product || { name: "Unknown Product", price: 0 }
        };
    });

    return NextResponse.json({ ...cart, items: populatedItems });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 });
  }
}

// POST: Add item to Cart
export async function POST(req: Request) {
  try {
    const { productId, quantity = 1 } = await req.json();

    if (!productId) {
        return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const product = getProduct(productId);
    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    addToCart(productId, quantity);
    
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json({ error: "Failed to add to cart" }, { status: 500 });
  }
}
