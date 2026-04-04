'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/maxiggle',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/godwin',
    icon: FiLinkedin,
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/godwinAekainu',
    icon: FiTwitter,
  },
  {
    label: 'Email',
    href: 'mailto:clsyfriday@gmail.com',
    icon: FiMail,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium"
        >
          Get in touch
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mt-4 leading-tight"
        >
          Let&apos;s build something{' '}
          <span className="text-white/50">together.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-lg mt-6 max-w-xl mx-auto leading-relaxed"
        >
          Whether it&apos;s a mobile product, Web3 infrastructure, or an open source
          collaboration — I&apos;m always open to great conversations.
        </motion.p>

        {/* Social icon buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mt-12"
        >
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={social.label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xl hover:bg-white/20 hover:border-white/50 transition-all duration-200"
              >
                <Icon size={20} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-24 mb-8" />

        {/* Footer */}
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Godwin Alexander Ekainu. Built with{' '}
          <span className="text-white/60">Next.js</span> &{' '}
          <span className="text-white/60">Tailwind CSS</span>.
        </p>
      </div>
    </section>
  )
}
