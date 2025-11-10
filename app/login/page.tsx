'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Shield, Mail, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    // Simular el envío del email mágico
    setTimeout(() => {
      setMessage('¡Revisa tu correo! Te hemos enviado un enlace mágico para acceder.')
      setIsLoading(false)
      
      // Para demo, redirigir después de 2 segundos
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-viril-400 to-viril-700 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">VIRIL</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">Acceso Exclusivo</h2>
          <p className="text-gray-300 mt-2">Ingresa tu email para recibir el enlace mágico</p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="text-viril-400">Iniciar Sesión</CardTitle>
            <CardDescription className="text-gray-300">
              Solo clientes autorizados pueden acceder a este contenido
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Correo Electrónico
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-viril-400 hover:bg-viril-400/90 text-viril-950 font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando enlace...
                  </>
                ) : (
                  'Enviar Enlace Mágico'
                )}
              </Button>
            </form>

            {message && (
              <div className="mt-4 p-4 bg-viril-400/20 border border-viril-400/30 rounded-lg">
                <p className="text-viril-400 text-sm text-center">{message}</p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400 text-center">
                Al continuar, confirmas que eres cliente autorizado de VIRIL
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white"
            onClick={() => router.push('/')}
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  )
}

// Componentes adicionales necesarios para el login
