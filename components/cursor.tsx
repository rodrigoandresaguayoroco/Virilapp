'use client'

import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX - 12)
      cursorY.set(e.clientY - 12)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('.cursor-interactive')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <motion.div
      className={`fixed z-50 pointer-events-none mix-blend-difference ${
        isHovering ? 'scale-150' : 'scale-100'
      }`}
      style={{ x: cursorX, y: cursorY }}
    >
      <div className="w-6 h-6 border-2 border-teal-400 rounded-full" />
    </motion.div>
  )
}