import { create } from "zustand";

const useCartStore = create((set) => {
  return {
    products: [],
    addProduct: (product) =>
      set((state) => {
        return {products: state.products.concat(product)}
      }),
  };
});

export { useCartStore };
