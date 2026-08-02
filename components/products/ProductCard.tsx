"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const  addToCart  = useCartStore((state) => state.addToCart);

  return (
    <div className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-72 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">

          <div className="flex items-center justify-between">

        <h3 className="text-2xl font-bold">
         {product.name}
       </h3>

       <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
         Premium
       </span>

       </div>

        <div className="mt-3 flex items-center gap-1 text-yellow-500">
            <div className="flex text-yellow-500">
          {[...Array(product.sweetness)].map((_, index) => (
            <Star key={index} size={18} fill="currentColor" />
          ))}
        </div>

        <p className="mt-4 text-gray-600">
          {product.shortDescription}
        </p>
        </div>

        <div className="mt-5 space-y-2 text-sm text-gray-500">
          <p>
            <strong>Origin:</strong> {product.origin}
          </p>

          <p>
            <strong>Season:</strong> {product.season}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">

          <div>
            <p className="text-3xl font-bold text-green-700">
              ৳{product.price}
            </p>

            <p className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              per {product.unit}
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-800"
          >
            <ShoppingCart size={18} />
            Add
          </button>

        </div>

      </div>

    </div>
  );
}