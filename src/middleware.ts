import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (request.nextUrl.pathname === '/pokemon') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return response;
}

export const config = {
  matcher: ['/pokemon']
}
