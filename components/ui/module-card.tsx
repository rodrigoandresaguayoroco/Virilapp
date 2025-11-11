'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { LucideIcon } from 'lucide-react'

interface ModuleCardProps {
  id: string
  title: string
  description: string
  Icon: LucideIcon
  progress: number
}

export function ModuleCard({ id, title, description, Icon, progress }: ModuleCardProps) {
  const router = useRouter()

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-gradient-to-br from-viril-400/10 to-viril-700/10"
      onClick={() => router.push(`/modulos/${id}`)}
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <Icon className="w-12 h-12 text-viril-400" />
          {progress > 0 && (
            <div className="text-right">
              <div className="text-2xl font-bold text-viril-400">{progress}%</div>
              <div className="text-xs text-gray-400">Completado</div>
            </div>
          )}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <motion.div 
          className="w-full bg-gray-700 rounded-full h-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-viril-400 to-viril-700 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}