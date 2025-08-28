import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function unauthorized() {
  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
  })
}

export function middleware(req: NextRequest) {
  // Allow common static assets without prompting for auth
  const publicFile = /\.(png|jpg|jpeg|gif|svg|ico|css|js|woff2?|txt|webp|avif|map)$/i
  if (publicFile.test(req.nextUrl.pathname)) return NextResponse.next()

  const user = process.env.Auth_User
  const pass = process.env.Auth_Pass
  if (!user || !pass) {
    return new Response('Auth not configured', { status: 500 })
  }

  const authHeader = req.headers.get('authorization')
  if (!authHeader) return unauthorized()

  const [scheme, encoded] = authHeader.split(' ')
  if (scheme !== 'Basic' || !encoded) return unauthorized()

  // Edge runtime: use atob instead of Node Buffer
  const decoded = globalThis.atob(encoded)
  const sep = decoded.indexOf(':')
  const u = decoded.slice(0, sep)
  const p = decoded.slice(sep + 1)

  if (u === user && p === pass) {
    return NextResponse.next()
  }
  return unauthorized()
}

// Protect everything except Next/image optimizer & static
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
