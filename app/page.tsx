'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Apple } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Particles from '@/components/particles'
import Cursor from '@/components/cursor'

export default function Home() {
  const router = useRouter()

  const features = [
    { Icon: Shield, title: 'Arsenal del Amante', desc: '7 tácticas científicas para dominio', color: 'from-viril-400 to-viril-700' },
    { Icon: Heart, title: 'Acondicionamiento', desc: 'Técnicas de vitalidad masculina', color: 'from-red-400 to-red-700' },
    { Icon: Apple, title: 'Dieta del Vigor', desc: 'Nutrición para rendimiento óptimo', color: 'from-green-400 to-green-700' },
  ]

  return (
    <div className="relative min-h-screen">
      <Cursor />
      <Particles />
      
      {/* Hero */}
      <section className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <motion.div
          className="text-center mb-32 md:mb-48"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-black tracking-tighter gradient-text mb-8"
            animate={{ scale: [0.8, 1] }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            VIRIL
          </motion.h1>
          <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto mb-12">
            Potencia tu virilidad. Acceso exclusivo a métodos científicos para máximo rendimiento.
          </p>
          <motion.button
            onClick={() => router.push('/app')}
            className="btn-premium cursor-interactive"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ENTRAR AL PROGRAMA →
          </motion.button>
        </motion.div>

        {/* Features */}
        <div className="grid grid-3 md-grid-3 gap-12">
          {features.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              className="glass-card cursor-interactive"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              onClick={() => router.push(`/modulos/${title.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              <div className={`w-16 h-16 mb-8 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-black mb-4">{title}</h3>
              <p className="text-gray-400 text-xl">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 text-gray-400">
        <p>© 2024 VIRIL Academy. Material educativo exclusivo.</p>
      </footer>
    </div>
  )
}