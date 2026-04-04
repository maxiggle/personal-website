import {
  SiDart,
  SiFlutter,
  SiSolidity,
  SiKotlin,
  SiSwift,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiAndroid,
  SiEthereum,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

const skills: { name: string; icon: IconType }[] = [
  { name: 'Dart', icon: SiDart },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Solidity', icon: SiSolidity },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Swift', icon: SiSwift },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Android', icon: SiAndroid },
  { name: 'Ethereum', icon: SiEthereum },
]

const doubled = [...skills, ...skills]

export default function SkillsTicker() {
  return (
    <section className="py-8 overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-sm relative">
      {/* Left/right fade masks — match body bg */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d0618] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d0618] to-transparent z-10 pointer-events-none" />

      <div className="flex marquee-track animate-marquee" style={{ width: 'max-content' }}>
        {doubled.map((skill, index) => {
          const Icon = skill.icon
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 mx-8 group cursor-default"
            >
              <Icon
                size={22}
                className="text-white/50 group-hover:text-white transition-colors duration-200"
              />
              <span className="text-white/40 group-hover:text-white/80 text-sm font-medium uppercase tracking-wider transition-colors duration-200 whitespace-nowrap">
                {skill.name}
              </span>
              <span className="ml-8 text-white/15 text-lg select-none">·</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
