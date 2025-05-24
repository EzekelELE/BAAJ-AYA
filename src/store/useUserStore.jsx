// src/store/useUserStore.js
"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      // Actions
      setUser: (userData) =>
        set({
          user: userData,
          isAuthenticated: !!userData,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      updateProfile: (profileData) =>
        set((state) => ({
          user: { ...state.user, ...profileData },
        })),
    }),
    {
      name: "user-storage", // unique name for localStorage key
      storage: createJSONStorage(() => localStorage),
      // Only persist these keys
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
