"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function CartSummary() {
  const subtotal = useCartStore((state) => state.getSubtotal());

  const items = useCartStore((state) => state.getTotalItems());

  return (
    <div className="border-t pt-5">

      <div className="mb-4 flex justify-between">

        <span>Total Items</span>

        <span>{items}</span>

      </div>

      <div className="mb-8 flex justify-between text-xl font-bold">

        <span>Subtotal</span>

        <span>${subtotal}</span>

      </div>

      <Link
        href="/checkout"
        className="block rounded-full bg-green-700 py-4 text-center font-semibold text-white transition hover:bg-green-800"
      >
        Proceed To Checkout
      </Link>

    </div>
  );
}