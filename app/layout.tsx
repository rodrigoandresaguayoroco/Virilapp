import './styles/globals.css'
import { Spline_Sans } from 'next/font/google'
import Cursor from '@/components/cursor'

const spline = Spline_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'VIRIL Academy',
  description: 'Métodos científicos para máximo rendimiento masculino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${spline.className} antialiased`}>
      <body className="bg-[#0a0a0a] text-white">{children}</body>
    </html>
  )
}