import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  console.log(token,"***************");
  

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", 
    "/admin/:path*",
    "/forgotpassword/:path*",
    "/new-reservation/:path*",
    "/res-booking/:path*",
    "/res-cancel/:path*",
    "/status/:path*",
    "/reset-password/:path*",
    "/signup/:path*",],
};