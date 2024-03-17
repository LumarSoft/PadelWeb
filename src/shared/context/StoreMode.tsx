import { create } from "zustand";
import { persist } from "zustand/middleware";

type StoreMode = {
  mode: "dark" | "light";
  setMode: () => void;
};

export const useStoreMode = create<StoreMode>()(
  persist(
    (set) => ({
      mode: "dark",
      setMode: () =>
        set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
    }),
    { name: "mode-storage" }
  )
);
