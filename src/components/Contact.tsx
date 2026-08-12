'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUpRight, FiSend } from 'react-icons/fi'

const EMAIL = 'clsyfriday@gmail.com'

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
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

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
          className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-foreground mt-4 leading-tight"
          style={{ letterSpacing: '-0.03em' }}
        >
          Let&apos;s build something{' '}
          <span className="text-white/40">together.</span>
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

        {/* Contact methods + form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 text-left"
        >
          {/* Left: direct contact cards */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.05] p-5 hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                <FiMail size={18} className="text-foreground" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-semibold text-white text-sm">
                  Send me an email
                </div>
                <div className="text-white/45 text-xs mt-0.5">
                  For detailed inquiries and project scopes.
                </div>
                <div className="text-white/70 text-sm mt-1.5 truncate flex items-center gap-1">
                  {EMAIL}
                  <FiArrowUpRight size={13} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
              </div>
            </a>

            <a
              href="https://x.com/godwinAekainu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.05] p-5 hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                <FiTwitter size={18} className="text-foreground" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-semibold text-white text-sm">
                  DM on X (Twitter)
                </div>
                <div className="text-white/45 text-xs mt-0.5">
                  For quick questions and chats.
                </div>
                <div className="text-white/70 text-sm mt-1.5 flex items-center gap-1">
                  @godwinAekainu
                  <FiArrowUpRight size={13} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
              </div>
            </a>
          </div>

          {/* Right: message form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.05] p-6"
          >
            <input
              type="text"
              required
              placeholder="Name"
              aria-label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-2.5 text-sm text-foreground placeholder:text-white/35 focus:outline-none focus:border-white/25 transition-colors"
            />
            <input
              type="email"
              required
              placeholder="Email"
              aria-label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-2.5 text-sm text-foreground placeholder:text-white/35 focus:outline-none focus:border-white/25 transition-colors"
            />
            <textarea
              required
              rows={4}
              placeholder="Message"
              aria-label="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-2.5 text-sm text-foreground placeholder:text-white/35 focus:outline-none focus:border-white/25 transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-foreground text-background text-sm font-semibold py-2.5 hover:bg-white/90 transition-all duration-200"
            >
              <FiSend size={14} />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social icon buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mt-14"
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
                className="w-12 h-12 rounded-full border border-white/[0.08] bg-white/[0.05] flex items-center justify-center text-foreground text-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
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
