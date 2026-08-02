"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as Item } from "@/types/cart";
import { useCartStore } from "@/store/cartStore";

interface Props {
  item: Item;
}

export default function CartItem({ item }: Props) {
  const increase = useCartStore((state) => state.increaseQuantity);

  const decrease = useCartStore((state) => state.decreaseQuantity);

  const remove = useCartStore((state) => state.removeFromCart);

  return (
    <div className="flex gap-4 rounded-xl border p-3">

      <div className="relative h-24 w-24 overflow-hidden rounded-xl">

        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          className="object-cover"
        />

      </div>

      <div className="flex flex-1 flex-col">

        <h3 className="font-semibold">
          {item.product.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          ${item.product.price} / {item.product.unit}
        </p>

        <div className="mt-auto flex items-center justify-between">

          <div className="flex items-center gap-3">

            <button
              onClick={() => decrease(item.product.id)}
              className="rounded-full border p-1"
            >
              <Minus size={16} />
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increase(item.product.id)}
              className="rounded-full border p-1"
            >
              <Plus size={16} />
            </button>

          </div>

          <button
            onClick={() => remove(item.product.id)}
            className="text-red-500"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}