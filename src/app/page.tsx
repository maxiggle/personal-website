import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SkillsTicker from '@/components/SkillsTicker'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      {/* Decorative background orbs — the scene glassmorphism looks through */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-700/30 blur-[120px]" />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-purple-900/40 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-indigo-800/25 blur-[90px]" />
        <div className="absolute top-[70%] left-[-5%] w-[300px] h-[300px] rounded-full bg-violet-900/20 blur-[80px]" />
      </div>

      <Navbar />
      <Hero />
      <SkillsTicker />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
