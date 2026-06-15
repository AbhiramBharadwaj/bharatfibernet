import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, ADMIN_SESSION_TOKEN } from "@/lib/adminAuth";

const isLoggedIn = (request) =>
  request.cookies.get(ADMIN_COOKIE_NAME)?.value === ADMIN_SESSION_TOKEN;

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const loggedIn = isLoggedIn(request);

  if (pathname === "/admin/login") {
    if (loggedIn) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    if (!loggedIn) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
