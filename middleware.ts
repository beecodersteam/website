import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip API routes, static files, and assets
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/locales/') ||
    pathname.includes('.') // files with extensions
  ) {
    return NextResponse.next();
  }

  // Simple locale detection and redirection for client-side handling
  const response = NextResponse.next();
  
  // Add headers for client-side locale detection
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    response.headers.set('x-accept-language', acceptLanguage);
  }
  
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico|locales).*)',
  ],
};
