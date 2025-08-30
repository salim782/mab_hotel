import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  console.log(token, "*********************************************");

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && req.nextUrl.pathname.startsWith("/new-reservation")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && req.nextUrl.pathname.startsWith("/res-booking")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && req.nextUrl.pathname.startsWith("/res-cancel")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🔥 TESTING: add custom header to check if middleware ran
  // const res = NextResponse.next();
  // res.headers.set("x-middleware-test", "ran");
  // return res;

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/forgotpassword/:path*",
    "/new-reservation/:path*",
    "/res-booking/:path*",
    "/res-cancel/:path*",
    "/reset-password/:path*",
    "/signup/:path*",
  ],
};
