import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request:NextRequest) {
  const token = request.cookies.get("token")?.value;

  // agar token nahi hai to /login bhej do
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Specify kin routes pe chalega
export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/admin/:path*",
    "/forgotpassword/:path*",
    "/new-reservation/:path*",
    "/res-booking/:path*",
    "/res-cancel/:path*",
    "/status/:path*",
    "/reset-password/:path*",
    "/signup/:path*",

  ],
};