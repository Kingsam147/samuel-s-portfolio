'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'contact']

export default function ActiveSectionTracker() {
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
    <aside className="hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:w-[420px] lg:shrink-0 border-r border-border-c">
      <Hero activeSection={activeSection} />
    </aside>
  )
}
