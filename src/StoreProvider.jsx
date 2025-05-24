// src/providers/StoreProvider.jsx
"use client";

import { useRef } from "react";
import { useUserStore } from "@/store/useUserStore";
import { useCartStore } from "@/store/useCartStore";

// This component ensures hydration between SSR and client rendering
export function StoreProvider({ children }) {
  const userStoreInitialized = useRef(false);
  const cartStoreInitialized = useRef(false);

  // Initialize the store once on the client
  if (typeof window !== "undefined" && !userStoreInitialized.current) {
    useUserStore.getState();
    userStoreInitialized.current = true;
  }

  if (typeof window !== "undefined" && !cartStoreInitialized.current) {
    useCartStore.getState();
    cartStoreInitialized.current = true;
  }

  return children;
}
