import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/auth-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VIRIL - Potenciador de Testosterona',
  description: 'Aplicación privada para clientes VIRIL con módulos interactivos de mejora personal',
  keywords: 'viril, testosterona, potenciador, salud masculina, rendimiento',
  authors: [{ name: 'VIRIL Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-viril-900 via-viril-800 to-viril-700`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}