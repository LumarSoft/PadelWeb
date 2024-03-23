import React from "react";
import Image from "next/image";
import {
  LavalleLogo,
  instagramLogo,
  whatsappLogo,
} from "@/shared/providers/ImageLocalProvider";
import DarkModeSwitch from "../switchMode/DarkModeSwitch";
import { Categories, MobileDropdownMenu } from "./LinksNavbar";
import TemplateFramer from "../framerMotion/FramerTemplate";

const NavbarComponent = () => {
  return (
    <TemplateFramer
      style="w-full h-20 flex items-center justify-between border-b absolute top-0 right-0 px-4 md:px-10"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Image src={LavalleLogo} alt="Lavalle Padel" width={60} height={60} />
      <Categories />
      <MobileDropdownMenu />
      <div className="hidden md:flex items-center gap-4">
        <Image
          src={instagramLogo}
          alt="Instagram de Lavalle Padel"
          width={40}
        />
        <Image src={whatsappLogo} alt="Whatsapp de Lavalle Padel" width={40} />
        <DarkModeSwitch style=""/>
      </div>
    </TemplateFramer>
  );
};

export default NavbarComponent;
