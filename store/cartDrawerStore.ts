import { create } from "zustand";

interface CartDrawerStore {
  open: boolean;

  openDrawer: () => void;

  closeDrawer: () => void;

  toggleDrawer: () => void;
}

export const useCartDrawerStore = create<CartDrawerStore>((set) => ({
  open: false,

  openDrawer: () =>
    set({
      open: true,
    }),

  closeDrawer: () =>
    set({
      open: false,
    }),

  toggleDrawer: () =>
    set((state) => ({
      open: !state.open,
    })),
}));