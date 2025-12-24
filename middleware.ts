import { NextRequest, NextResponse } from 'next/server';

// Define route patterns
const authRoutes = ['/sign-in', '/sign-up'];
const protectedRoutes = ['/dashboard'];

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check for Better Auth session cookie
    const sessionCookie = request.cookies.get('better-auth.session_token');
    const isAuthenticated = !!sessionCookie;

    // Check if the current route is an auth route (sign-in, sign-up)
    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

    // Check if the current route is a protected route (dashboard, etc.)
    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    // If user is authenticated and trying to access auth pages (sign-in/sign-up)
    // Redirect them to dashboard
    if (isAuthenticated && isAuthRoute) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // If user is not authenticated and trying to access protected routes
    // Redirect them to sign-in
    if (!isAuthenticated && isProtectedRoute) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    // Allow the request to continue
    return NextResponse.next();
}

// Configure which routes this middleware should run on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder files
         */
        '/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.svg$|.*\\.gif$).*)',
    ],
};
