'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '2', label: 'Chains Deployed' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">
              About me
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-foreground mt-2">
              Building at the<br />
              intersection of{' '}
              <span className="text-accent-green">mobile</span>{' '}
              and{' '}
              <span className="text-accent-purple">Web3</span>
            </h2>
          </div>
          <div className="w-12 h-1 bg-white/20 rounded-full" />

          {/* Stats cards */}
          <div className="flex gap-4 pt-4 flex-wrap">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col bg-white/[0.05] border border-white/[0.08] rounded-2xl px-5 py-4"
              >
                <span className="font-display font-extrabold text-3xl text-foreground leading-none">
                  {stat.value}
                </span>
                <span className="text-white/50 text-xs uppercase tracking-wider mt-1.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="space-y-5"
        >
          <p className="text-white/80 leading-relaxed">
            I&apos;m a Software Engineer and technical leader with 5+ years building
            production-grade mobile applications and Web3 infrastructure. As Co-founder
            of{' '}<span className="text-white font-medium">Variance</span>, I ship
            developer SDKs that bridge complex blockchain protocols with seamless
            mobile-native experiences.
          </p>
          <p className="text-white/50 leading-relaxed">
            As CTO of{' '}<span className="text-white/80 font-medium">LearnWay</span>{' '}
            — funded by Lisk — I architect decentralized learn-to-earn systems using
            Flutter, MPC wallets, and ERC-4337 account abstraction. I specialise in
            hardware-backed cryptography (iOS Secure Enclave, Android StrongBox),
            secure wallet operations, and API ergonomics for developer-facing SDKs.
          </p>
          <p className="text-white/50 leading-relaxed">
            I&apos;m also a professional technical writer and documentation engineer
            with 3 years of experience. On contract with{' '}
            <span className="text-white/80 font-medium">Ninetailed GmbH</span>{' '}
            (since acquired by{' '}
            <span className="text-white/80 font-medium">Contentful</span>) I wrote
            developer articles and product documentation, and I&apos;ve authored
            technical content for Codemagic, Strapi, OpenReplay, and ButterCMS. I build
            docs sites with Mintlify, Docusaurus, and Document360, and write
            OpenAPI/Swagger references in Markdown and XML.
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['Flutter', 'Dart', 'Kotlin', 'Swift', 'Solidity', 'ERC-4337', 'MPC', 'TypeScript', 'Technical Writing', 'Documentation'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/80 text-xs"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
