import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SkillsTicker from '@/components/SkillsTicker'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Writing from '@/components/Writing'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <SkillsTicker />
      <About />
      <Services />
      <Projects />
      <Writing />
      <Contact />
    </main>
  )
}
