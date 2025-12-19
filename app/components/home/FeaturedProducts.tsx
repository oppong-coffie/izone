"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Star, ShoppingCart, Heart, Eye, Check } from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  isDigital: boolean;
}

// Demo products - in production, these would come from API
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Earbuds Pro",
    slug: "wireless-bluetooth-earbuds-pro",
    price: 149.99,
    compareAtPrice: 249.99,
    image: "🎧",
    rating: 4.8,
    reviewCount: 256,
    category: "Electronics",
    isSale: true,
  },
  {
    id: "2",
    name: "Premium Laptop Backpack",
    slug: "premium-laptop-backpack",
    price: 89.99,
    image: "🎒",
    rating: 4.6,
    reviewCount: 189,
    category: "Fashion",
    isNew: true,
  },
  {
    id: "3",
    name: "Scientific Calculator FX-991",
    slug: "scientific-calculator-fx991",
    price: 45.99,
    compareAtPrice: 59.99,
    image: "🔢",
    rating: 4.9,
    reviewCount: 412,
    category: "Electronics",
    isSale: true,
  },
  {
    id: "4",
    name: "Complete Study Planner 2024",
    slug: "complete-study-planner-2024",
    price: 24.99,
    image: "📒",
    rating: 4.7,
    reviewCount: 98,
    category: "Books",
    isNew: true,
  },
  {
    id: "5",
    name: "USB-C Charging Hub 8-in-1",
    slug: "usb-c-charging-hub-8in1",
    price: 79.99,
    compareAtPrice: 99.99,
    image: "🔌",
    rating: 4.5,
    reviewCount: 167,
    category: "Electronics",
    isSale: true,
  },
  {
    id: "6",
    name: "Ergonomic Desk Lamp LED",
    slug: "ergonomic-desk-lamp-led",
    price: 59.99,
    image: "💡",
    rating: 4.4,
    reviewCount: 134,
    category: "Electronics",
  },
  {
    id: "7",
    name: "Noise Cancelling Headphones",
    slug: "noise-cancelling-headphones",
    price: 199.99,
    compareAtPrice: 299.99,
    image: "🎧",
    rating: 4.9,
    reviewCount: 523,
    category: "Electronics",
    isSale: true,
  },
  {
    id: "8",
    name: "Digital Art Course Bundle",
    slug: "digital-art-course-bundle",
    price: 49.99,
    image: "🎨",
    rating: 4.8,
    reviewCount: 87,
    category: "Digital",
    isNew: true,
  },
];

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
  isInCart: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  isInCart,
}) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      isDigital: product.category === "Digital",
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const discountPercentage = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) *
          100
      )
    : 0;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-black/10 transition-all duration-300">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="px-2.5 py-1 bg-[#32CD32] text-[#0A0A0A] text-xs font-bold rounded-full">
            NEW
          </span>
        )}
        {product.isSale && discountPercentage > 0 && (
          <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
            -{discountPercentage}%
          </span>
        )}
      </div>

      {/* Quick Actions */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
        <button className="w-9 h-9 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-[#32CD32] hover:text-[#0A0A0A] transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        <Link
          href={`/products/${product.id}`}
          className="w-9 h-9 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-[#32CD32] hover:text-[#0A0A0A] transition-colors"
        >
          <Eye className="w-4 h-4" />
        </Link>
      </div>

      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <span className="text-6xl">{product.image}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
          {product.category}
        </p>

        {/* Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-[#32CD32] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-[#32CD32] fill-current"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              GH₵ {product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-gray-400 line-through">
                GH₵ {product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={justAdded}
          className={`w-full mt-4 py-2.5 font-medium rounded-xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all ${
            justAdded
              ? "bg-green-500 text-white"
              : "bg-[#0A0A0A] dark:bg-[#32CD32] text-white dark:text-[#0A0A0A] hover:bg-[#32CD32] hover:text-[#0A0A0A] dark:hover:bg-[#3DE03D]"
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              {isInCart ? "Add More" : "Add to Cart"}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error loading cart:", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.productId === item.productId);
      if (existingItem) {
        // Update quantity
        return prevCart.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      // Add new item
      return [...prevCart, item];
    });
  };

  const isInCart = (productId: string) => {
    return cart.some((item) => item.productId === productId);
  };

  return (
    <section className="py-16 bg-white dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#32CD32]/10 text-[#32CD32] text-sm font-medium rounded-full mb-4">
            ⭐ Top Picks for You
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our handpicked selection of the most popular items loved by
            students
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              isInCart={isInCart(product.id)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0A0A0A] dark:bg-[#32CD32] text-white dark:text-[#0A0A0A] font-semibold rounded-full hover:bg-[#32CD32] hover:text-[#0A0A0A] dark:hover:bg-[#3DE03D] transition-all"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
