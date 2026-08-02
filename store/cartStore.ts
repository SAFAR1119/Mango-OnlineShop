import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";

interface CartStore {
  items: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;

  getTotalItems: () => number;

  getSubtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items;

        const existing = items.find(
          (item) => item.product.id === product.id
        );

        if (existing) {
          set({
            items: items.map((item) =>
              item.product.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          });
        } else {
          set({
            items: [
              ...items,
              {
                product,
                quantity: 1,
              },
            ],
          });
        }
      },

      removeFromCart: (id) =>
        set({
          items: get().items.filter(
            (item) => item.product.id !== id
          ),
        }),

      increaseQuantity: (id) =>
        set({
          items: get().items.map((item) =>
            item.product.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        }),

      decreaseQuantity: (id) =>
        set({
          items: get()
            .items.map((item) =>
              item.product.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        }),

      clearCart: () =>
        set({
          items: [],
        }),

      getTotalItems: () =>
        get().items.reduce(
          (total, item) => total + item.quantity,
          0
        ),

      getSubtotal: () =>
        get().items.reduce(
          (total, item) =>
            total + item.product.price * item.quantity,
          0
        ),
    }),
    {
      name: "amm-ansi-cart",
    }
  )
);