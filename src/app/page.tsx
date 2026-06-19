import ActiveSectionTracker from '@/components/ActiveSectionTracker'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <div className="min-h-screen bg-main-bg">
      {/* Mobile header */}
      <div className="lg:hidden px-8 pt-12 pb-6 border-b border-border-c">
        <h1 className="text-3xl font-display font-bold mb-1 text-heading">
          Samuel Darius
        </h1>
        <p className="text-sm font-display text-primary">
          Backend Engineer & Co-Founder
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto lg:flex">
        <ActiveSectionTracker />

        {/* Right panel — scrollable content */}
        <main className="flex-1 px-8 lg:px-16 pt-12 lg:pt-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  )
}
