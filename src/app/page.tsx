'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Page() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observers = SECTIONS.map(id => {
      const element = document.getElementById(id)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(element)
      return observer
    })

    return () => observers.forEach(o => o?.disconnect())
  }, [])

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
        {/* Left panel — sticky on desktop */}
        <aside className="hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:w-[420px] lg:shrink-0 border-r border-border-c">
          <Hero activeSection={activeSection} />
        </aside>

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
