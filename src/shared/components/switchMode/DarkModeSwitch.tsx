"use client";
import { Switch } from "@/components/ui/switch";
import { useStoreMode } from "@/shared/context/StoreMode";

const DarkModeSwitch = ({ style }: { style: string }) => {
  const { setMode, mode } = useStoreMode();
  return (
    <Switch
      className={style}
      onCheckedChange={() => setMode()}
      checked={mode === "dark" ? false : true}
    />
  );
};

export default DarkModeSwitch;
