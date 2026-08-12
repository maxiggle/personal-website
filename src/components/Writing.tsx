'use client'

import { motion } from 'framer-motion'
import { FiArrowUpRight, FiAward, FiFileText, FiPlay } from 'react-icons/fi'
import { SiTiktok, SiYoutube } from 'react-icons/si'
import type { IconType } from 'react-icons'

interface Article {
  platform: string
  title: string
  blurb: string
  href: string | null
  featured?: boolean
  note?: string
}

const articles: Article[] = [
  {
    platform: 'Codemagic',
    title: 'Multi-Flavored Authentication in Flutter',
    blurb:
      'My best-performing article — ranked #22 across the entire Codemagic blog. A deep dive into build flavors and authentication in Flutter.',
    href: 'https://blog.codemagic.io/multi-flavored-authentication-in-flutter/',
    featured: true,
    note: 'Ranked #22 on the platform',
  },
  {
    platform: 'Strapi',
    title: 'Author Profile — Strapi Blog',
    blurb:
      'Technical articles on Strapi, the open-source headless CMS.',
    href: 'https://strapi.io/user/godwin-alexander-ekainu',
  },
  {
    platform: 'OpenReplay',
    title: 'Author Profile — OpenReplay',
    blurb:
      'My full writing portfolio on the OpenReplay engineering blog.',
    href: 'https://blog.openreplay.com/authors/godwin-alexander/',
  },
  {
    platform: 'ButterCMS',
    title: 'Author Profile — ButterCMS',
    blurb: 'Articles published on the ButterCMS blog.',
    href: 'https://buttercms.com/blog/author/godwin-alexander-ekainu/',
  },
  {
    platform: 'QuickNode',
    title: 'Technical Content Contributions',
    blurb: 'Web3 and infrastructure content contributions.',
    href: null,
    note: 'Available upon request',
  },
]

interface MediaItem {
  label: string
  title: string
  href: string
  icon: IconType
}

const media: MediaItem[] = [
  {
    label: 'TikTok',
    title: 'Short-form Video #1',
    href: 'https://vt.tiktok.com/ZS9T2SFW9/',
    icon: SiTiktok,
  },
  {
    label: 'TikTok',
    title: 'Short-form Video #2',
    href: 'https://vt.tiktok.com/ZS9T2PaBF/',
    icon: SiTiktok,
  },
  {
    label: 'Podcast',
    title: 'Fly High with Flutter',
    href: 'https://youtu.be/PywC-vE-Mvk?si=OgkaT1T0YSFjh1I8',
    icon: SiYoutube,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Writing() {
  const featured = articles.find((a) => a.featured)!
  const rest = articles.filter((a) => !a.featured)

  return (
    <section id="writing" className="py-24 px-6">
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
            Writing &amp; media
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">
            Technical Content
          </h2>
          <p className="text-white/40 max-w-xl mt-2">
            Articles, tutorials, videos, and podcasts where I break down the
            engineering behind mobile and Web3.
          </p>
        </motion.div>

        {/* Featured article */}
        <motion.a
          href={featured.href ?? undefined}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="group block relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.05] p-7 md:p-9 hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-300"
        >
          {/* Dot grid accent */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-accent-purple text-xs uppercase tracking-[0.2em] font-medium">
                <FiAward size={14} />
                {featured.note}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wider mt-3">
                {featured.platform}
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-1 leading-tight">
                {featured.title}
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed mt-3 max-w-2xl">
                {featured.blurb}
              </p>
            </div>
            <div className="flex items-center gap-2 text-foreground text-sm font-medium shrink-0 group-hover:gap-3 transition-all duration-200">
              Read article
              <FiArrowUpRight size={18} />
            </div>
          </div>
        </motion.a>

        {/* Author-profile cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6"
        >
          {rest.map((article) => {
            const Wrapper = article.href ? motion.a : motion.div
            return (
              <Wrapper
                key={article.platform}
                {...(article.href
                  ? {
                      href: article.href,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
                variants={cardVariants}
                whileHover={article.href ? { y: -5 } : undefined}
                className={`group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.05] p-6 transition-all duration-300 ${
                  article.href
                    ? 'hover:bg-white/[0.08] hover:border-white/[0.14]'
                    : 'opacity-90'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4">
                  <FiFileText size={18} className="text-foreground" />
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider">
                  {article.platform}
                </div>
                <h3 className="font-display font-semibold text-base text-foreground mt-1 leading-snug">
                  {article.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mt-2 flex-1">
                  {article.blurb}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium">
                  {article.href ? (
                    <span className="flex items-center gap-1 text-foreground group-hover:gap-2 transition-all duration-200">
                      View profile
                      <FiArrowUpRight size={14} />
                    </span>
                  ) : (
                    <span className="text-white/40">{article.note}</span>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </motion.div>

        {/* Video & podcast row */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-5">
            <FiPlay size={14} className="text-white/50" />
            <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">
              Video &amp; podcasts
            </span>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {media.map((item) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.05] p-5 hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                    <Icon size={22} className="text-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white/50 text-xs uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="font-display font-semibold text-foreground text-sm truncate">
                      {item.title}
                    </div>
                  </div>
                  <FiArrowUpRight
                    size={16}
                    className="text-white/40 group-hover:text-white shrink-0 transition-colors duration-200"
                  />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
