import { NextResponse } from "next/server";
import { getCart, getProduct } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const cart = getCart();

    if (!cart || cart.items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    // Calculate total
    let total = 0;
    cart.items.forEach((item) => {
      const product = getProduct(item.productId);
      if (product) {
        total += product.price * item.quantity;
      }
    });

    // Paystack expects amount in pesewas (multiply by 100)
    const amountInPesewas = total * 100;

    const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
    
    if (!PAYSTACK_SECRET_KEY) {
      console.error("PAYSTACK_SECRET_KEY is not defined");
       return NextResponse.json(
        { error: "Payment configuration error" },
        { status: 500 }
      );
    }

    const paystackResponse = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email || "guest@example.com", // Fallback if no email provided, though frontend should enforce it
        amount: amountInPesewas,
        currency: "GHS",
        callback_url: `http://localhost:3000/checkout/success`, // In prod, this should be env var
        metadata: {
            cartId: cart.id,
            custom_fields: cart.items.map(item => ({
                display_name: "Item",
                variable_name: "item",
                value: `${item.quantity}x ${getProduct(item.productId)?.name}`
            }))
        }
      }),
    });

    const paystackData = await paystackResponse.json();

    if (!paystackData.status) {
      return NextResponse.json(
        { error: paystackData.message || "Paystack initialization failed" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      authorization_url: paystackData.data.authorization_url,
      access_code: paystackData.data.access_code,
      reference: paystackData.data.reference,
    });

  } catch (error) {
    console.error("Checkout Initialization Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
