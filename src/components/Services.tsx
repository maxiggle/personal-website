'use client'

import { motion } from 'framer-motion'
import { FiSmartphone, FiBox, FiLink, FiEdit3 } from 'react-icons/fi'
import type { IconType } from 'react-icons'

interface Service {
  icon: IconType
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    description:
      'Production-grade cross-platform apps with Flutter and native iOS/Android. Clean Architecture, BLoC/Riverpod state management, and secure onboarding flows shipped to the App Store and Play Store.',
    tags: ['Flutter', 'Dart', 'Kotlin', 'Swift'],
  },
  {
    icon: FiLink,
    title: 'Web3 & Blockchain Infrastructure',
    description:
      'Account abstraction (ERC-4337), MPC and smart-account wallets, and hardware-backed signing. I bridge complex on-chain protocols into seamless, seedless mobile-native experiences.',
    tags: ['ERC-4337', 'MPC', 'Solidity', 'Account Abstraction'],
  },
  {
    icon: FiBox,
    title: 'SDK & Developer Tooling',
    description:
      'Ergonomic, well-documented SDKs for other engineers to build on. Co-author of the Variance Dart SDK ecosystem — from signer interfaces to passkeys — with an obsession for clean, predictable APIs.',
    tags: ['pub.dev', 'API Design', 'Passkeys', 'Open Source'],
  },
  {
    icon: FiEdit3,
    title: 'Technical Writing & Documentation',
    description:
      'Professional technical writer with 3 years of experience — including contract work for Ninetailed (acquired by Contentful) writing developer articles and product docs, plus content for Codemagic, Strapi, OpenReplay, and ButterCMS.',
    tags: ['Technical Writing', 'Documentation', 'Developer Content', 'Video'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-2"
        >
          <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">
            What I do
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">
            Services
          </h2>
          <p className="text-white/40 max-w-xl mt-2">
            How I help teams ship — from mobile products to on-chain infrastructure
            and the content that supports it.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white/[0.05] rounded-2xl border border-white/[0.08] p-7 hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-300"
              >
                {/* Icon badge */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors duration-300">
                  <Icon size={22} className="text-foreground" />
                </div>

                <h3 className="font-display font-bold text-xl text-foreground">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mt-2.5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/80 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
