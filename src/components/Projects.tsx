'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiSmartphone, FiCpu } from 'react-icons/fi'
import { SiEthereum, SiAppstore, SiGoogleplay, SiDart } from 'react-icons/si'

type ProjectType = 'mobile' | 'web3' | 'sdk' | 'contrib'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  type: ProjectType
  badge: string
  github: string | null
  pubDev: string | null
  appStore: string | null
  playStore: string | null
  live: string | null
}

const filters: { label: string; value: ProjectType | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'SDK', value: 'sdk' },
  { label: 'Web3', value: 'web3' },
  { label: 'Contributions', value: 'contrib' },
]

const projects: Project[] = [
  {
    id: 1,
    title: 'LearnWay',
    description:
      'CTO & co-builder of a learn-to-earn platform funded by Lisk. Users earn Gems, XP, and on-chain tokens by completing quizzes and lessons. Built with Flutter on the Lisk blockchain, with MPC-secured smart-account wallets (ERC-4337) — no seed phrases, no single point of failure.',
    tags: ['Flutter', 'Dart', 'Lisk', 'ERC-4337', 'MPC', 'Account Abstraction'],
    type: 'web3',
    badge: 'Mobile · Web3',
    github: null,
    pubDev: null,
    appStore: 'https://apps.apple.com/ng/app/learnway-learn-and-earn/id6743034005',
    playStore: 'https://play.google.com/store/apps/details?id=xyz.learnway.app&pcampaignid=web_share',
    live: null,
  },
  {
    id: 2,
    title: 'variance-dart',
    description:
      'Co-authored Dart/Flutter SDK implementing the ERC-4337 account abstraction standard. Enables creation and management of smart accounts with a clean, ergonomic API — and serves as the interface layer that ties together the broader Variance SDK ecosystem (web3_signers, MPC, passkeys).',
    tags: ['Dart', 'Flutter', 'ERC-4337', 'Account Abstraction', 'Smart Accounts', 'pub.dev'],
    type: 'sdk',
    badge: 'SDK · Open Source',
    github: 'https://github.com/vaariance/variance-dart',
    pubDev: 'https://pub.dev/packages/variance_dart',
    appStore: null,
    playStore: null,
    live: null,
  },
  {
    id: 3,
    title: 'Para SDK — Variance Integration',
    description:
      'Contributed a ParaSigner adapter that implements the Variance MSI (Multi-Signer Interface), enabling Para SDK wallets to sign ERC-4337 user operations through Variance\'s hardware-backed signer infrastructure — biometrics, Secure Enclave, and StrongBox included.',
    tags: ['Dart', 'Flutter', 'ERC-4337', 'MSI', 'Para SDK', 'Passkeys'],
    type: 'contrib',
    badge: 'Contribution · SDK',
    github: 'https://github.com/vaariance/para-demo',
    pubDev: null,
    appStore: null,
    playStore: null,
    live: null,
  },
  {
    id: 5,
    title: 'web3-signers',
    description:
      'Co-authored a Flutter/Dart package that provides a unified Signer interface for Passkeys (WebAuthn/FIDO2), Platform Keys (Secure Enclave on iOS, Keystore on Android, Windows Hello), and Local Private Keys. Implements EIP-1271 and ERC-7739 signing standards with cross-platform hardware-backed security — the credential layer powering the Variance SDK ecosystem.',
    tags: ['Dart', 'Flutter', 'Passkeys', 'WebAuthn', 'ERC-7739', 'EIP-1271', 'pub.dev'],
    type: 'sdk',
    badge: 'SDK · Open Source',
    github: 'https://github.com/vaariance/web3-signers',
    pubDev: 'https://pub.dev/packages/web3_signers',
    appStore: null,
    playStore: null,
    live: null,
  },
  {
    id: 4,
    title: 'Flitaa & Getcoins',
    description:
      'Crypto wallet interfaces built at Chigisoft focusing on secure onboarding and real-time asset tracking, alongside a decentralized voting system using Flutter Web with Clean Architecture and BLoC state management.',
    tags: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Web3.js'],
    type: 'mobile',
    badge: 'Mobile · Crypto',
    github: 'https://github.com/maxiggle',
    pubDev: null,
    appStore: null,
    playStore: null,
    live: null,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects() {
  const [active, setActive] = useState<ProjectType | 'all'>('all')

  const visible =
    active === 'all' ? projects : projects.filter((p) => p.type === active)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 space-y-2"
        >
          <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">
            My work
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">
            Featured Projects
          </h2>
          <p className="text-white/40 max-w-xl mt-2">
            A selection of things I&apos;ve built — from mobile apps to on-chain infrastructure.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((filter) => {
            const isActive = active === filter.value
            return (
              <button
                key={filter.value}
                onClick={() => setActive(filter.value)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? 'bg-foreground border-foreground text-background'
                    : 'bg-transparent border-white/[0.08] text-white/50 hover:text-foreground hover:border-white/20'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          key={active}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.id}
              layout
              variants={cardVariants}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-white/[0.05] rounded-2xl border border-white/[0.08] overflow-hidden hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-300 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="w-full h-44 bg-white/[0.02] flex items-center justify-center relative overflow-hidden">
                {/* Dot grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                {project.type === 'mobile' ? (
                  <FiSmartphone size={52} className="text-white/20 group-hover:text-white/35 transition-colors duration-300" />
                ) : project.type === 'sdk' ? (
                  <FiCpu size={52} className="text-white/20 group-hover:text-white/35 transition-colors duration-300" />
                ) : project.type === 'contrib' ? (
                  <SiDart size={52} className="text-white/20 group-hover:text-white/35 transition-colors duration-300" />
                ) : (
                  <SiEthereum size={52} className="text-white/20 group-hover:text-white/35 transition-colors duration-300" />
                )}
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/5 to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <span
                  className={`text-xs uppercase tracking-[0.2em] font-medium ${
                    project.type === 'mobile'
                      ? 'text-accent-green'
                      : project.type === 'web3'
                      ? 'text-accent-purple'
                      : 'text-accent-blue'
                  }`}
                >
                  {project.badge}
                </span>
                <h3 className="font-display font-bold text-xl text-foreground mt-1">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mt-2 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/80 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.12] text-foreground text-xs font-medium hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200"
                    >
                      <FiGithub size={13} />
                      GitHub
                    </a>
                  )}
                  {project.pubDev && (
                    <a
                      href={project.pubDev}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on pub.dev`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.12] text-foreground text-xs font-medium hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200"
                    >
                      <SiDart size={13} />
                      pub.dev
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} App Store`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.12] text-foreground text-xs font-medium hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200"
                    >
                      <SiAppstore size={13} />
                      App Store
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Play Store`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.08] text-white/60 text-xs font-medium hover:bg-white/[0.08] hover:border-white/20 hover:text-foreground transition-all duration-200"
                    >
                      <SiGoogleplay size={13} />
                      Play Store
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
