'use client'

import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className={inter.className}>{children}</div>
    </SessionProvider>
  )
}