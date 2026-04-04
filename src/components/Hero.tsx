'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-0 overflow-hidden"
    >
      {/* Subtle white dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top: 3-column grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-8"
      >
        {/* Left: Role */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="w-10 h-px bg-white/50" />
          <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-medium">
            Software Engineer
          </p>
          <p className="text-white text-2xl font-display font-bold leading-snug">
            Mobile · SDK<br />& Web3
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Co-founder of Variance. CTO at LearnWay. Building where mobile meets blockchain.
          </p>
        </motion.div>

        {/* Center: Avatar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="relative">
            {/* Outer dashed spinning ring */}
            <div className="absolute inset-[-14px] rounded-full border border-dashed border-white/25 ring-spin" />
            {/* Secondary ring */}
            <div className="absolute inset-[-28px] rounded-full border border-white/10" />
            {/* Avatar — glass */}
            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center avatar-glow">
              <div className="flex flex-col items-center">
                <span className="font-display font-bold text-4xl text-white tracking-tight">
                  GAE
                </span>
                <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
                  Godwin A. Ekainu
                </span>
              </div>
            </div>
            {/* White dot indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-white/90 border-2 border-background" />
          </div>

          <p className="md:hidden text-white/40 text-sm">Godwin Alexander Ekainu</p>
        </motion.div>

        {/* Right: Bio */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="w-10 h-px bg-white/50 ml-auto hidden md:block" />
          <p className="text-white/80 text-sm leading-relaxed md:text-right">
            Hi, I&apos;m Godwin — Software Engineer, SDK author, and technical co-founder
            with 5+ years building production mobile apps and Web3 infrastructure.
          </p>
          <p className="text-white/50 text-sm leading-relaxed md:text-right">
            I co-founded Variance (hardware-backed crypto SDKs) and serve as CTO of
            LearnWay, a Lisk-funded learn-to-earn platform with MPC smart-account wallets.
          </p>
        </motion.div>
      </motion.div>

      {/* Mobile-only CTA row — sits below the 3-col grid, above the name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
        className="flex md:hidden justify-center gap-4 mt-10 px-6"
      >
        <button
          onClick={() => scrollTo('projects')}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 text-white text-sm font-medium bg-[#0d0618]/90 hover:bg-[#1a0f3d] transition-all duration-200"
        >
          <FiArrowRight size={14} />
          See my work
        </button>
        <button
          onClick={() => scrollTo('contact')}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium bg-[#0d0618]/80 hover:bg-[#1a0f3d] hover:text-white transition-all duration-200"
        >
          <FiDownload size={14} />
          Download CV
        </button>
      </motion.div>

      {/* Bottom: Oversized name + CTAs (desktop only) */}
      <div className="relative mt-12 md:mt-16 hidden md:block">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-0" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
          className="relative overflow-hidden"
        >
          {/* Oversized name */}
          <h1
            className="font-display font-bold leading-none text-center select-none px-4 text-white"
            style={{ fontSize: 'clamp(4.5rem, 16vw, 14rem)' }}
          >
            G
            <span className="text-white/40">O</span>
            DWI
            <span className="text-white/40">N</span>
          </h1>

          {/* CTA row — overlaid on name */}
          <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-4 z-10">
            <button
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/40 text-white text-sm font-medium bg-[#0d0618]/90 hover:bg-[#1a0f3d] transition-all duration-200"
            >
              <FiArrowRight size={14} />
              See my work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium bg-[#0d0618]/80 hover:bg-[#1a0f3d] hover:text-white transition-all duration-200"
            >
              <FiDownload size={14} />
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
