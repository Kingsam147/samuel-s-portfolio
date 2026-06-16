'use client'

import { useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

const socials = [
  { icon: GitHubIcon, href: 'https://github.com/Kingsam147', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/in/samdarius', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:samueldarius1470@gmail.com', label: 'Email' },
]

export default function Contact() {
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
    <section id="contact" ref={ref} className="fade-up mb-16 scroll-mt-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-code text-xs tracking-widest text-amber">05.</span>
        <h2 className="text-xl font-display font-semibold text-heading">Contact</h2>
        <div className="flex-1 h-px bg-border-c" />
      </div>

      <div className="rounded border border-border-c bg-card-bg p-8 text-center">
        <p className="text-sm leading-7 max-w-md mx-auto mb-8 text-body">
          I&apos;m actively looking for backend and full-stack engineering roles. If you
          have an opportunity, a question, or just want to talk systems — my inbox is
          open.
        </p>

        <a
          href="mailto:samueldarius1470@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-code tracking-wide border border-amber text-amber hover:bg-amber/7 transition-all duration-200 mb-8"
        >
          <Mail size={14} />
          Say hello
        </a>

        <div className="flex items-center justify-center gap-6 pt-8 border-t border-border-c">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="text-muted hover:text-amber transition-colors duration-200"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs font-code mt-8 text-muted">
        Designed & built by Samuel Darius
      </p>
    </section>
  )
}
