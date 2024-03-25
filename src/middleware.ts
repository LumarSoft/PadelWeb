import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(request: NextRequest) {
  const storedCredentials = getCookie("credentials", { req: request });


  // const urlLogin = "/login";

  // if (!storedCredentials) {
  //   return NextResponse.redirect(urlLogin);
  // }

  return NextResponse.next();
}

//Luego hacer el export const config y que matcheen las que quiero
