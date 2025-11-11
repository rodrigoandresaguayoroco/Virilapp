'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Heart, Apple, X } from 'lucide-react'
import { useState } from 'react'
import Particles from '@/components/particles'

const modules = [
  { id: 'arsenal', name: 'Arsenal del Amante', Icon: Shield, color: 'from-teal-400 to-teal-600', progress: 0 },
  { id: 'acondicionamiento', name: 'Acondicionamiento', Icon: Heart, color: 'from-red-400 to-red-600', progress: 0 },
  { id: 'dieta', name: 'Dieta del Vigor', Icon: Apple, color: 'from-green-400 to-green-600', progress: 0 },
]

export default function AppDashboard() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] p-8 md:p-12">
      <Particles />
      
      <div className="container mx-auto">
        <motion.h1
          className="text-7xl md:text-8xl font-black mb-16 gradient-text cursor-interactive"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          Tu Academia Privada
        </motion.h1>

        <div className="apple-grid mt-0">
          {modules.map(({ id, name, Icon, color, progress }, i) => (
            <motion.div
              key={id}
              className="glass-card-apple cursor-interactive"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelected(id)}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                {progress > 0 && (
                  <div className="text-right">
                    <div className="text-3xl font-black text-teal-400">{progress}%</div>
                    <div className="text-sm text-gray-400">PROGRESO</div>
                  </div>
                )}
              </div>
              
              <h2 className="text-4xl font-black mb-4">{name}</h2>
              <p className="text-gray-400 text-xl">Haz clic para explorar →</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Apple */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-apple cursor-interactive"
              initial={{ scale: 0.7, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
                onClick={() => setSelected(null)}
              >
                <X className="w-10 h-10" />
              </button>
              
              <h3 className="text-6xl font-black mb-8 text-teal-400">
                {modules.find(m => m.id === selected)?.name}
              </h3>
              
              <p className="text-2xl text-gray-300 mb-12">
                Contenido premium científicamente validado. Inicia tu entrenamiento.
              </p>

              <motion.button
                className="btn-apple w-full"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.location.href = `/modulos/${selected}`}
              >
                INICIAR ENTRENAMIENTO →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}