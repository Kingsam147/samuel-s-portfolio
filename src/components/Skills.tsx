'use client'

import { useEffect, useRef } from 'react'

const categories = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Java', 'C'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Serverless', 'Webhooks'],
  },
  {
    name: 'Databases & Caching',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'localStorage'],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS S3', 'Vercel', 'Docker', 'GitHub Actions', 'Cloudflare CDN'],
  },
  {
    name: 'Auth & Security',
    skills: ['Auth0', 'OAuth 2.0', 'JWT', 'HMAC', 'WAF', 'Rate Limiting'],
  },
  {
    name: 'Architecture',
    skills: [
      'Domain-Driven Design',
      'Multi-tenant Auth',
      'Optimistic Locking',
      'Caching Design',
    ],
  },
]

export default function Skills() {
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
    <section id="skills" ref={ref} className="fade-up mb-24 scroll-mt-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-code text-xs tracking-widest text-amber">04.</span>
        <h2 className="text-xl font-display font-semibold text-heading">Skills</h2>
        <div className="flex-1 h-px bg-border-c" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(({ name, skills }) => (
          <div key={name}>
            <p className="font-code text-xs tracking-widest uppercase mb-3 text-muted">
              {name}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
