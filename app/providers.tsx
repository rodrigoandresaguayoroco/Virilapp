'use client'

import { Inter } from 'next/font/google'
import Cursor from '@/components/cursor'

const inter = Inter({ subsets: ['latin'] })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Cursor />
      {children}
    </div>
  )
}