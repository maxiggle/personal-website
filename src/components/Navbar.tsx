'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

const socials = [
  { href: 'https://github.com/maxiggle', label: 'GitHub', icon: FiGithub },
  { href: 'https://linkedin.com/in/godwin', label: 'LinkedIn', icon: FiLinkedin },
  { href: 'https://x.com/godwinAekainu', label: 'X (Twitter)', icon: FiTwitter },
]

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-display font-extrabold text-lg tracking-tight select-none"
        >
          Godwin<span className="text-accent-purple">E</span>
        </button>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white/50 hover:text-foreground text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-1">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-white/40 hover:text-foreground hover:bg-white/5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
