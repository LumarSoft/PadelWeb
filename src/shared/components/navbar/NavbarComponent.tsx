import React from "react";
import Image from "next/image";
import { LavalleLogo } from "@/shared/providers/ImageLocalProvider";
import DarkModeSwitch from "./DarkModeSwitch";
import { Categories, MobileDropdownMenu } from "./LinksNavbar";
import TemplateFramer from "../framerMotion/FramerTemplate";

const NavbarComponent = () => {
  return (
    <TemplateFramer
      style="w-full h-20 flex items-center justify-between px-4 border-b md:px-10 fixed"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Image src={LavalleLogo} alt="Lavalle Padel" width={60} height={60} />
      <Categories />
      <MobileDropdownMenu />
      <div className="hidden md:block">
        <DarkModeSwitch />
      </div>
    </TemplateFramer>
  );
};

export default NavbarComponent;
