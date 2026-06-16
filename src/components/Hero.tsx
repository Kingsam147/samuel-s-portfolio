'use client'

import { Mail, FileText } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const socials = [
  { icon: GitHubIcon, href: 'https://github.com/Kingsam147', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/in/samdarius', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:samueldarius1470@gmail.com', label: 'Email' },
  { icon: FileText, href: '/resume.pdf', label: 'Resume' },
]

interface HeroProps {
  activeSection: string
}

export default function Hero({ activeSection }: HeroProps) {
  return (
    <div className="flex flex-col justify-between h-full py-24 px-16 relative overflow-hidden">
      {/* Ambient amber glow */}
      <div className="hero-glow pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-100" />

      <div className="relative z-10">
        <h1 className="text-5xl font-display font-bold mb-3 tracking-tight text-heading">
          Samuel Darius
        </h1>

        <h2 className="text-lg font-display font-semibold mb-4 text-primary">
          Backend Engineer & Co-Founder
        </h2>

        <p className="text-sm leading-relaxed max-w-xs text-body">
          Having studied memory management and operating system principles,
          I always build systems while keeping in mind the cost, speed, and scale 
          before actually writing any code.
        </p>

        {/* Nav */}
        <nav className="mt-14">
          <ul className="space-y-1">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center gap-4 py-2 transition-all duration-200"
                  >
                    <span
                      className={`block h-px transition-all duration-300 ${
                        isActive ? 'w-10 bg-amber' : 'w-6 bg-muted'
                      }`}
                    />
                    <span
                      className={`text-xs font-code tracking-widest uppercase transition-colors duration-200 ${
                        isActive ? 'text-amber' : 'text-muted'
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 py-2 mt-1 transition-all duration-200"
          >
            <span className="block h-px w-6 bg-muted group-hover:w-10 group-hover:bg-amber transition-all duration-300" />
            <span className="text-xs font-code tracking-widest uppercase text-muted group-hover:text-amber transition-colors duration-200">
              Resume
            </span>
          </a>
        </nav>
      </div>

      {/* Socials */}
      <div className="relative z-10 flex items-center gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={label}
            className="text-muted hover:text-amber transition-colors duration-200 cursor-pointer"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  )
}
