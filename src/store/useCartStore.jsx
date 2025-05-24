// src/store/useCartStore.js
"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      // Add item to cart
      addItem: (product) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            // Update quantity if item exists
            const updatedItems = state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );

            return {
              items: updatedItems,
              totalItems: state.totalItems + 1,
              totalPrice: state.totalPrice + product.price,
            };
          } else {
            // Add new item
            return {
              items: [...state.items, { ...product, quantity: 1 }],
              totalItems: state.totalItems + 1,
              totalPrice: state.totalPrice + product.price,
            };
          }
        });
      },

      // Remove item from cart
      removeItem: (productId) => {
        set((state) => {
          const itemToRemove = state.items.find(
            (item) => item.id === productId
          );

          if (!itemToRemove) return state;

          return {
            items: state.items.filter((item) => item.id !== productId),
            totalItems: state.totalItems - itemToRemove.quantity,
            totalPrice:
              state.totalPrice - itemToRemove.price * itemToRemove.quantity,
          };
        });
      },

      // Update item quantity
      updateItemQuantity: (productId, quantity) => {
        set((state) => {
          const item = state.items.find((item) => item.id === productId);

          if (!item) return state;

          const quantityDiff = quantity - item.quantity;

          return {
            items: state.items.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
            totalItems: state.totalItems + quantityDiff,
            totalPrice: state.totalPrice + item.price * quantityDiff,
          };
        });
      },

      // Clear cart
      clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
    }),
    {
      name: "shopping-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
