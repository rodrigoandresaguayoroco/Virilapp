'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Apple } from 'lucide-react'
import { ModuleCard } from '@/components/ui/module-card'

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 md:p-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl font-black mb-4 bg-gradient-to-r from-viril-400 to-viril-700 bg-clip-text text-transparent"
          >
            VIRIL Academy
          </motion.h1>
          <p className="text-xl text-gray-400">Contenido exclusivo para clientes premium</p>
        </div>

        {/* Progress Summary */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="text-sm text-gray-400">Progreso General</div>
            <div className="text-2xl font-bold text-viril-400">0%</div>
          </div>
        </motion.div>

        {/* Module Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <ModuleCard
            id="arsenal"
            title="Arsenal del Amante"
            description="7 tácticas para aumentar resistencia y placer"
            Icon={Shield}
            progress={0}
          />
          
          <ModuleCard
            id="acondicionamiento"
            title="Acondicionamiento Masculino"
            description="Técnicas manuales seguras para vitalidad"
            Icon={Heart}
            progress={0}
          />
          
          <ModuleCard
            id="dieta"
            title="Dieta del Vigor"
            description="15 alimentos clave para potenciar tu virilidad"
            Icon={Apple}
            progress={0}
          />
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center text-sm text-gray-500"
        >
          <p>Material educativo exclusivo para clientes VIRIL</p>
          <p className="mt-2">© 2024 VIRIL Academy. Todos los derechos reservados.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}