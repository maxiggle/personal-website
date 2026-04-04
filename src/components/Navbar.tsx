'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <span className="font-display font-bold text-lg text-white tracking-tight cursor-default select-none">
          G.A.E
        </span>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200"
          >
            <FiArrowRight size={14} />
            See my work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/40 bg-white/20 text-white text-sm font-medium hover:bg-white/30 transition-all duration-200"
          >
            <FiMail size={14} />
            Contact me
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
