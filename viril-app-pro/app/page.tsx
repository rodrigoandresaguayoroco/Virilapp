import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Shield, Heart, Apple } from 'lucide-react'

const modules = [
  {
    id: 'arsenal-del-amante',
    title: 'Arsenal del Amante',
    description: '7 tácticas científicas para dominio total.',
    icon: <Shield className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 'acondicionamiento',
    title: 'Acondicionamiento',
    description: 'Técnicas de vitalidad masculina seguras.',
    icon: <Heart className="w-8 h-8 text-red-400" />,
  },
  {
    id: 'dieta-del-vigor',
    title: 'Dieta del Vigor',
    description: 'Nutrición molecular para rendimiento óptimo.',
    icon: <Apple className="w-8 h-8 text-green-400" />,
  },
]

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen max-w-5xl p-8 md:p-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          VIRIL Academy
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Potencia tu virilidad. Acceso exclusivo a métodos científicos
          para máximo rendimiento.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <Link href={`/modulos/${mod.id}`} key={mod.id}>
            <Card className="h-full hover:border-blue-400 transition-colors cursor-pointer">
              <CardHeader>
                <div className="mb-4">{mod.icon}</div>
                <CardTitle>{mod.title}</CardTitle>
                <CardDescription>{mod.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}