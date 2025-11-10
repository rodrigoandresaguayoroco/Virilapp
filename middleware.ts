import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Verificar autenticación simple para demo
  const isAuthenticated = request.cookies.get('viril-auth') || 
                         request.headers.get('authorization') ||
                         (typeof window !== 'undefined' && localStorage.getItem('viril-auth'))

  // Proteger rutas privadas
  if (request.nextpathname.startsWith('/dashboard') || 
      request.nextpathname.startsWith('/modulos')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/modulos/:path*']
}