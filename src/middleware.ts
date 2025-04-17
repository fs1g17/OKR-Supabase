// middleware.ts
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect routes starting with /dashboard or whatever
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith("/list") || path.startsWith("/okr") || path.startsWith("/test");

  //TODO: fix middleware
  // if (isProtectedRoute && !user) {
  //   // Redirect to login
  //   const loginUrl = new URL("/sign-in", req.url);
  //   return NextResponse.redirect(loginUrl);
  // }

  return res;
}

export const config = {
  matcher: ["/list/:path*", "/okr/:path*", "/test/:path*"], // add protected routes here
};
