import {create} from "zustand";

interface Checkout {
  cart: [];
  cartCount: number;
}

export const useCheckout = create<Checkout>(() => ({
  cart: [],
  cartCount: 0,
}));
