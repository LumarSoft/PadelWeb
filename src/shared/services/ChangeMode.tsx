"use client";

import { useEffect } from "react";
import { useStoreMode } from "../context/StoreMode";

export const ChangeTheme = () => {
  const { mode } = useStoreMode();

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);

  return null;
};
