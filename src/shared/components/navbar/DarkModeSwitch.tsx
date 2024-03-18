"use client";
import { Switch } from "@/components/ui/switch";
import { useStoreMode } from "@/shared/context/StoreMode";

const DarkModeSwitch = () => {
  const { setMode, mode } = useStoreMode();
  return (
    <Switch
      className=""
      onCheckedChange={() => setMode()}
      checked={mode === "dark" ? false : true}
    />
  );
};

export default DarkModeSwitch;
