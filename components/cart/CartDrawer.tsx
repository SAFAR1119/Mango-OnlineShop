"use client";

import { X, ShoppingCart } from "lucide-react";
import { useCartDrawerStore } from "@/store/cartDrawerStore";
import { useCartStore } from "@/store/cartStore";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useEffect } from "react";

export default function CartDrawer() {
  const open = useCartDrawerStore((state) => state.open);
  const closeDrawer = useCartDrawerStore((state) => state.closeDrawer);
  const openDrawer = useCartDrawerStore((state) => state.openDrawer);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeDrawer]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-[90] bg-black/50 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[100] flex h-screen w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <div className="flex items-center gap-3">
            <ShoppingCart className="text-green-700" />

            <h2 className="text-2xl font-bold">
              Your Cart
            </h2>
          </div>

          <button
            onClick={closeDrawer}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}

        <div className="flex-1 overflow-y-auto p-6">

          {items.length === 0 ? (
            <div className="mt-20 text-center">

              <ShoppingCart
                size={70}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Your Cart Is Empty
              </h3>

              <p className="mt-3 text-gray-500">
                Browse our fresh mangoes and
                add your favorites.
              </p>

            </div>
          ) : (
            <div className="space-y-5">

              {items.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                />
              ))}

            </div>
          )}

        </div>

        {/* Footer */}

        {items.length > 0 && (
          <div className="border-t bg-gray-50 p-6">

            <CartSummary />

          </div>
        )}
      </aside>
    </>
  );
}