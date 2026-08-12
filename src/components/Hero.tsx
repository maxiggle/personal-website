'use client'

import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const roles = [
  { label: 'Software Engineer', className: 'text-accent-blue bg-blue-500/10 border-blue-500/20' },
  { label: 'Web3 Developer', className: 'text-accent-purple bg-purple-500/10 border-purple-500/20' },
  { label: 'Mobile Developer', className: 'text-accent-green bg-emerald-500/10 border-emerald-500/20' },
  { label: 'Technical Writer', className: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center max-w-3xl mx-auto"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants} className="relative mb-10">
          <div className="absolute inset-[-10px] rounded-full border border-dashed border-white/10 ring-spin" />
          <div className="relative w-24 h-24 rounded-full bg-white/[0.06] border border-white/10 flex flex-col items-center justify-center">
            <span className="font-display font-extrabold text-2xl tracking-tight">GAE</span>
          </div>
          {/* Availability dot */}
          <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-accent-green border-2 border-background" />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold text-foreground leading-none"
          style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)', letterSpacing: '-0.03em' }}
        >
          Godwin Ekainu
        </motion.h1>

        {/* Role pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2.5 mt-7">
          {roles.map((role) => (
            <span
              key={role.label}
              className={`px-4 py-1.5 rounded-full border text-[13px] font-medium ${role.className}`}
            >
              {role.label}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-display font-semibold text-xl md:text-2xl text-foreground mt-8"
        >
          I build software that creates leverage.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-white/50 text-base md:text-lg leading-relaxed mt-4 max-w-2xl"
        >
          Co-founder of Variance and CTO at LearnWay. I design and ship production
          mobile apps, developer SDKs, and Web3 infrastructure built to scale beyond
          the first version.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-[15px] font-semibold hover:bg-white/90 transition-all duration-200"
          >
            View Works
            <FiArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 text-foreground text-[15px] font-semibold hover:bg-white/5 hover:border-white/25 transition-all duration-200"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
