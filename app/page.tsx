'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Apple } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Particles from '@/components/particles'

export default function Home() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen">
      <Particles />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-32"
        >
          <motion.h1
            className="hero-title mb-8 cursor-interactive"
            animate={{ scale: [0.9, 1] }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            VIRIL
          </motion.h1>
          <p className="subtitle-apple mb-16">
            Potencia tu virilidad. Métodos científicos para máximo rendimiento.
          </p>
          <motion.button
            className="btn-apple cursor-interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/app')}
          >
            Explorar Programa →
          </motion.button>
        </motion.div>

        {/* Features */}
        <div className="apple-grid">
          {[
            { Icon: Shield, title: 'Arsenal del Amante', desc: '7 tácticas científicas para dominio', path: 'arsenal-del-amante' },
            { Icon: Heart, title: 'Acondicionamiento', desc: 'Técnicas de vitalidad masculina', path: 'acondicionamiento' },
            { Icon: Apple, title: 'Dieta del Vigor', desc: 'Nutrición para rendimiento óptimo', path: 'dieta-del-vigor' },
          ].map((item, i) => (
            <FeatureCard key={item.title} {...item} onClick={() => router.push(`/modulos/${item.path}`)} index={i} />
          ))}
        </div>
      </main>
    </div>
  )
}

function FeatureCard({ Icon, title, desc, onClick, index }: any) {
  return (
    <motion.div
      className="glass-card-apple cursor-interactive"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div className="w-20 h-20 mb-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 text-lg">{desc}</p>
    </motion.div>
  )
}