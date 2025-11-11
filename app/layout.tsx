import './styles.css'
import { Providers } from './providers'

export const metadata = {
  title: 'VIRIL Academy - Contenido Exclusivo',
  description: 'Potencia tu rendimiento con contenido premium para clientes VIRIL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-[#101010] text-white min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}