'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="fade-up mb-24 scroll-mt-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-code text-xs tracking-widest text-amber">01.</span>
        <h2 className="text-xl font-display font-semibold text-heading">About</h2>
        <div className="flex-1 h-px bg-border-c" />
      </div>

      <div className="space-y-5 text-sm leading-7 text-body">
        <p>
          I&apos;m a backend engineer and co-founder based in Holbrook, MA. I build systems
          that lead with design — data modeling from access patterns, multi-tier caching
          with a clear justification for every layer, and multi-tenant authorization that
          treats resource ownership as a first principle, not an afterthought.
          Domain-Driven Design isn&apos;t a pattern I reach for because it reads well on a
          resume. It&apos;s how I actually structure work when the complexity warrants it.
        </p>
        <p>
          I&apos;m currently co-founding{' '}
          <a
            href="https://tourgate.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:underline transition-all duration-200"
          >
            Tourgate
          </a>
          , a platform that brings every real estate agent&apos;s messages and meetings
          under one roof — with an AI agent that handles the inbox for them. I inherited
          the starter code, hardened the security, and now own all technical decisions.
          That kind of end-to-end ownership is exactly what I work toward.
        </p>
        <p>
          I believe engineers go further with a strong community around them. That
          conviction started on the cross country team at UMass Boston, where the hardest
          workouts were only survivable because of the people running alongside me, and
          it&apos;s been reinforced by over eight years of volunteering at church — where
          I&apos;ve watched what sustained, consistent presence does over time. It shows
          up in how I lead technical projects: I meet people individually, make space for
          every perspective, and move fast once real alignment is there.
        </p>
        <p>
          Outside of code, I run, mentor younger kids at my church, and am a proud
          graduate of the Hack.Diversity fellowship.
        </p>
      </div>
    </section>
  )
}
