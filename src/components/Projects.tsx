'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/SocialIcons'

const projects = [
  {
    number: '01',
    name: 'Pokémon Damage Calculator',
    description:
      'A full-stack app exposing 32 REST endpoints across 1,200+ Pokémon, 900+ moves, and 300+ abilities — with a multi-tier caching strategy where every layer has a distinct justification. Redis handles shared state across serverless instances (cutting enemy-team load from 1,384ms to 196ms — 7×). localStorage caches 6 immutable datasets to avoid network round-trips entirely. User teams and damage calculations are deliberately left uncached: teams are constantly mutating with no size cap; calculations have ~1,000 variable combinations per fight and would yield near-zero cache hit rate.',
    highlight: '1,384ms → 196ms · 7× faster',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Auth0', 'Cloudflare', 'AWS S3'],
    github: 'https://github.com/Kingsam147/pokemon-radical-red-database',
    live: 'https://pokemon-damage-calculator-gamma.vercel.app',
    featured: true,
  },
  {
    number: '02',
    name: 'Tourgate',
    description:
      'Co-founded and serve as technical lead. Tourgate aggregates real estate agent messages from six platforms (Facebook, Apartments.com, Craigslist, Redfin, MLS, YGL) into a single AI-managed inbox. The AI agent autonomously reads and replies, with dynamic model routing — simpler requests use a cheaper model, complex ones escalate — reducing API cost without degrading quality. Conversation context is kept fast via a Redis sliding window cache (last 20 messages); full history lives in Supabase PostgreSQL, chosen over MongoDB because message threads are relational and queries are field-selective.',
    highlight: 'AI model routing by complexity · Redis sliding window',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Redis', 'OpenAI', 'Vercel'],
    github: 'https://github.com/Kingsam147/tourgate',
    live: 'https://tourgate.vercel.app',
    featured: true,
  },
  {
    number: '03',
    name: 'Car Website — Appointment Booking',
    description:
      'Booking platform for a car detailing business, replacing phone-call scheduling with self-serve appointments. The slot API generates all 19 time windows (8AM–5PM, 30-min intervals) on the fly and subtracts booked ones — only real bookings hit the database. Availability checks run in O(1) via a Set. A 60-minute same-day buffer filters past slots. Slots are Cloudflare edge-cached for 5 minutes; race conditions are caught at write time with a user-facing fallback.',
    highlight: 'Compute-over-store · O(1) Set lookup · write-time race guard',
    tech: ['Next.js', 'MongoDB', 'Cloudflare', 'Vercel'],
    github: 'https://github.com/Kingsam147/CarWebsite',
    live: 'https://carwebsite-coral.vercel.app',
    featured: false,
  },
  {
    number: '04',
    name: 'Student Scheduling System',
    description:
      "Led a 5-developer Agile team as Scrum Master through a 2–3 month cycle. Broke a team deadlock by meeting each member 1-on-1, taking notes, and synthesizing their ideas into a shared direction — a faster path to alignment than group debate. Built the ICS parser that reads university .ical files, extracts unavailable time blocks per weekday, and persists them so the scheduler can reject any conflicting shift assignment.",
    highlight: 'Scrum Master · ICS conflict detection · Google OAuth',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Google OAuth'],
    github: 'https://github.com/Kingsam147/CS410-Student-Scheduling-Project',
    live: 'https://student-scheduler-alb536wnu-samueldarius1470-8728s-projects.vercel.app',
    featured: false,
  },
  {
    number: '05',
    name: 'Pinterest Clone',
    description:
      'Hack.Diversity capstone project. Improved performance and UX of a React/Node.js/Express/MongoDB application in an Agile team environment through targeted pull requests and peer code reviews.',
    highlight: 'Hack.Diversity Capstone · Agile collaboration',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Kingsam147/pinterest-clone',
    live: 'https://frontend-ebon-phi-50.vercel.app',
    featured: false,
  },
]

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.live)}&screenshot=true&meta=false&embed=screenshot.url`

  return (
    <div className="group relative rounded border border-border-c bg-card-bg hover:border-amber/30 hover:bg-amber/7 transition-all duration-200 cursor-default overflow-hidden">
      {/* Preview screenshot */}
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} live site`}
        className="block overflow-hidden"
      >
        <Image
          src={screenshotUrl}
          alt={`${project.name} live preview`}
          width={800}
          height={176}
          unoptimized
          loading="lazy"
          className="w-full h-44 object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </a>

      {/* Card content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="font-code text-2xl font-bold leading-none text-amber/20">
            {project.number}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-amber transition-colors duration-200"
            >
              <GitHubIcon size={17} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-muted hover:text-amber transition-colors duration-200"
            >
              <ExternalLink size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <h3 className="font-display font-semibold text-base mb-1 text-heading group-hover:text-amber transition-colors duration-200">
          {project.name}
        </h3>

        <p className="font-code text-xs mb-3 tracking-wide text-amber">
          {project.highlight}
        </p>

        <p className="text-sm leading-6 mb-5 text-body">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
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

  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" ref={ref} className="fade-up mb-24 scroll-mt-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-code text-xs tracking-widest text-amber">03.</span>
        <h2 className="text-xl font-display font-semibold text-heading">Projects</h2>
        <div className="flex-1 h-px bg-border-c" />
      </div>

      <div className="space-y-4 mb-4">
        {featured.map(project => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {others.map(project => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  )
}
