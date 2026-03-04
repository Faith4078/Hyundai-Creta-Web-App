import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
* Better Auth compatible middleware
* ❌ No session / cookie / auth checks here
* ✅ Safe for Vercel Edge Runtime
*/
export function middleware(_request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    // Explicitly allow 'unsafe-eval' as requested by user
    const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline' https:;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' blob: data: https://*.supabase.co;
        connect-src 'self' https://*.supabase.co;
        frame-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    const requestHeaders = new Headers(_request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', cspHeader);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set('Content-Security-Policy', cspHeader);

    return response;
}

/**
* Apply middleware to all pages except:
* - API routes
* - Next.js internal assets
* - Static files
*/
export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)$).*)",
    ],
};