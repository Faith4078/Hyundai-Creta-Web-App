import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
* Better Auth compatible middleware
* ❌ No session / cookie / auth checks here
* ✅ Safe for Vercel Edge Runtime
*/
export function middleware(_request: NextRequest) {
    // Do nothing – allow request to continue
    return NextResponse.next();
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