import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(request: NextRequest) {
  const storedCredentials = getCookie("credentials", { req: request });

  // if (!storedCredentials) {
  //   return NextResponse.redirect("/login");
  // }

  return NextResponse.next();
}

//Luego hacer el export const config y que matcheen las que quiero
