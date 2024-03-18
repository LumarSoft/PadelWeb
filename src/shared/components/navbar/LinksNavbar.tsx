"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkModeSwitch from "../switchMode/DarkModeSwitch";
import Link from "next/link";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";

export const MobileDropdownMenu = () => {
  const routerHelper = useRouterHelper();
  const currentRoute = routerHelper.getCurrentRoute();

  const routes = currentRoute
    ? routerHelper.getRouteExcluding(currentRoute)
    : [];
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <GiHamburgerMenu className="text-3xl" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {routes.map((route, index) => (
            <DropdownMenuItem key={index}>
              <Link href={route.path}>{route.name}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="">
            <DarkModeSwitch />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const Categories = () => {
  const routerHelper = useRouterHelper();
  const currentRoute = routerHelper.getCurrentRoute();

  const routes = currentRoute
    ? routerHelper.getRouteExcluding(currentRoute)
    : [];

  return (
    <div className="md:flex gap-4 hidden">
      {routes.map((route, index) => (
        <Link key={index} href={route.path}>
          {route.name}
        </Link>
      ))}
    </div>
  );
};
