'use client'

import { notFound } from 'next/navigation'
import { arsenalData, acondicionamientoData, dietaData } from '@/lib/modules-data'
import { ScrollReveal } from '@/components/scroll-reveal'
import { motion } from 'framer-motion'

export default function ModuloPage({ params }: { params: { id: string } }) {
  const modules: Record<string, any> = {
    'arsenal-del-amante': arsenalData,
    'acondicionamiento': acondicionamientoData,
    'dieta-del-vigor': dietaData,
  }

  const data = modules[params.id]
  if (!data) return notFound()

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] p-8 md:p-12">
      <ScrollReveal>
        <div className="text-center mb-20">
          <h1 className="text-7xl md:text-8xl font-black gradient-text mb-6">{data.title}</h1>
          <p className="subtitle-apple">{data.subtitle}</p>
        </div>
      </ScrollReveal>

      {/* Renderiza contenido específico con scroll reveal */}
      {params.id === 'arsenal-del-amante' && <ArsenalApple data={data} />}
    </div>
  )
}

function ArsenalApple({ data }: { data: any }) {
  return (
    <div className="space-y-24">
      {data.tactics.map((t: any, i: number) => (
        <ScrollReveal key={t.id} delay={i * 0.1}>
          <div className="glass-card-apple">
            <div className="flex items-start justify-between mb-8">
              <h3 className="text-5xl font-black text-teal-400">{t.title}</h3>
              <span className="text-2xl text-gray-400">0{i + 1}</span>
            </div>
            <p className="text-2xl text-gray-300 mb-12">{t.mission}</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-white">PROTOCOLO</h4>
                <ol className="space-y-4">
                  {t.protocol.map((s: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-4 text-xl">
                      <span className="w-8 h-8 bg-teal-400 text-black rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-6 text-teal-400">INTELIGENCIA DE CAMPO</h4>
                <div className="bg-teal-400/10 p-8 rounded-2xl border-l-4 border-teal-400 mb-8">
                  <p className="text-xl">{t.proTip}</p>
                </div>
                
                <h4 className="text-2xl font-bold mb-6 text-blue-400">BASE CIENTÍFICA</h4>
                <div className="bg-blue-500/10 p-8 rounded-2xl border-l-4 border-blue-400">
                  <p className="text-xl">{t.science}</p>
                </div>
              </div>
            </div>
            
            <motion.button
              className="btn-apple mt-12 w-full"
              whileHover={{ scale: 1.02 }}
            >
              MARCAR COMO DOMINADA →
            </motion.button>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}