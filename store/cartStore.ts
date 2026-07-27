import { create } from "zustand";
import { Product } from "@/types";

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;

  getTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({

  cart: [],

  addToCart(product) {

    const existing = get().cart.find(
      item => item.id === product.id
    );

    if (existing) {

      set({
        cart: get().cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });

      return;
    }

    set({
      cart: [
        ...get().cart,
        {
          ...product,
          quantity: 1,
        },
      ],
    });
  },

  removeFromCart(id) {

    set({
      cart: get().cart.filter(item => item.id !== id),
    });

  },

  increaseQuantity(id) {

    set({
      cart: get().cart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    });

  },

  decreaseQuantity(id) {

    set({
      cart: get().cart
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(item => item.quantity > 0),
    });

  },

  clearCart() {

    set({
      cart: [],
    });

  },

  getTotal() {

    return get().cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

  },

}));