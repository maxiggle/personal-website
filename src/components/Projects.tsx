'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiSmartphone, FiCpu } from 'react-icons/fi'
import { SiEthereum, SiAppstore, SiGoogleplay, SiDart } from 'react-icons/si'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  type: 'mobile' | 'web3' | 'sdk' | 'contrib'
  badge: string
  github: string | null
  pubDev: string | null
  appStore: string | null
  playStore: string | null
  live: string | null
}

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
  return (
    <section id="projects" className="py-24 px-6">
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
            My work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Featured Projects
          </h2>
          <p className="text-white/40 max-w-xl mt-2">
            A selection of things I&apos;ve built — from mobile apps to on-chain infrastructure.
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
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/[0.15] hover:border-white/30 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)] flex flex-col"
            >
              {/* Image placeholder */}
              <div className="w-full h-44 bg-white/5 flex items-center justify-center relative overflow-hidden">
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
                    project.type === 'mobile' ? 'text-white/70' : 'text-violet-300'
                  }`}
                >
                  {project.badge}
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-1">
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
                      className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 text-xs"
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
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/30 text-white text-xs font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-200"
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
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/30 text-white text-xs font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-200"
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
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/30 text-white text-xs font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-200"
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
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs font-medium hover:bg-white/20 hover:border-white/30 hover:text-white transition-all duration-200"
                    >
                      <SiGoogleplay size={13} />
                      Play Store
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
