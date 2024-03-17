"use client";

import { Switch } from "@/components/ui/switch";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useStoreMode } from "@/shared/context/StoreMode";
import { motion } from "framer-motion";

export const NavbarComponent = () => {
  const { mode, setMode } = useStoreMode();

  return (
    <motion.header
      className="w-full h-20 flex items-center justify-between px-2 border-b md:px-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="md:hidden">
        <DropDown changeTheme={setMode} mode={mode} />
      </div>
      {/* Cambiar aca */}
      <span>Logo</span>
      <div className="md:flex gap-4 hidden">
        {[1, 2, 3, 4].map((x, i) => (
          <span key={i}>Categoria</span>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <Switch
          className="hidden md:block"
          onCheckedChange={() => setMode()}
          checked={mode === "dark" ? false : true}
        />
        <FaShoppingCart className="text-3xl" />
      </div>
    </motion.header>
  );
};

const DropDown = ({
  changeTheme,
  mode,
}: {
  changeTheme: () => void;
  mode: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <GiHamburgerMenu className="text-3xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Categorias</DropdownMenuLabel>
        <DropdownMenuItem>Categoria1</DropdownMenuItem>
        <DropdownMenuItem>Categoria2</DropdownMenuItem>
        <DropdownMenuItem>Categoria3</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button onClick={() => changeTheme()}>
            {mode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
