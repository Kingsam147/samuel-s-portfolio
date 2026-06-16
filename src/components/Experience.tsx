'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const experiences = [
  {
    period: '2025 — Present',
    role: 'Co-Founder & Technical Lead',
    company: 'Tourgate',
    companyUrl: 'https://tourgate.vercel.app',
    bullets: [
      'Inherited starter code from a non-technical co-founder, refactored the entire codebase, hardened security, and now own all technical decisions for the platform.',
      'Built a unified inbox that aggregates messages from Facebook, Apartments.com, Craigslist, Redfin, MLS, and YGL — plus a Google Calendar integration that surfaces all meetings in one view.',
      'Implemented an AI agent that autonomously reads and replies to messages with dynamic model routing: simpler messages use a cheaper model, complex ones escalate to a more capable one — cutting API costs without sacrificing response quality.',
      'Designed a Redis sliding window cache (last 20 messages per user) as the hot layer for the AI context window, with full conversation history persisted in Supabase PostgreSQL.',
      'Chose PostgreSQL over MongoDB because message threads are relational, queries are field-selective, and row-level security maps directly to per-agent data isolation.',
    ],
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Redis', 'OpenAI', 'Vercel'],
  },
  {
    period: 'Jan 2025 — May 2025',
    role: 'Software Engineer Fellow',
    company: 'Hack.Diversity',
    companyUrl: 'https://hackdiversity.com',
    bullets: [
      'Solved 18+ algorithm problems applying dynamic programming, recursion, and hash map strategies with explicit time/space complexity analysis.',
      'Practiced production Git workflows across the full cycle: branching, pull requests, code review, and Agile sprint collaboration.',
    ],
    tech: ['JavaScript', 'Python', 'Git', 'Agile'],
  },
  {
    period: 'Sep 2022 — Present',
    role: 'Warehouse Associate',
    company: 'Amazon',
    companyUrl: 'https://amazon.com',
    bullets: [
      'Operate in a high-throughput, safety-critical environment processing hundreds of packages per shift; recognized for reliability and consistency under sustained time pressure.',
    ],
    tech: [],
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="fade-up mb-24 scroll-mt-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-code text-xs tracking-widest text-amber">02.</span>
        <h2 className="text-xl font-display font-semibold text-heading">Experience</h2>
        <div className="flex-1 h-px bg-border-c" />
      </div>

      <div className="space-y-2">
        {experiences.map(({ period, role, company, companyUrl, bullets, tech }) => (
          <div
            key={`${company}-${role}`}
            className="group relative p-5 rounded border border-border-c hover:border-amber/25 hover:bg-amber/7 transition-all duration-200 cursor-default"
          >
            <p className="font-code text-xs tracking-widest uppercase mb-2 text-muted">
              {period}
            </p>

            <div className="flex items-start gap-2 mb-3">
              <span className="font-display font-semibold text-base text-heading">
                {role}
              </span>
              <span className="font-display font-semibold text-base text-muted">·</span>
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-base text-amber hover:underline inline-flex items-center gap-1 transition-all duration-200"
              >
                {company}
                <ExternalLink size={12} />
              </a>
            </div>

            <ul className="space-y-2 mb-4">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm leading-6">
                  <span className="mt-2.5 shrink-0 w-1 h-1 rounded-full bg-amber" />
                  <span className="text-body">{bullet}</span>
                </li>
              ))}
            </ul>

            {tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
