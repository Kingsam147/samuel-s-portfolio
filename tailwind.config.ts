import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0d0d0d',
        'main-bg': '#111111',
        'card-bg': '#1a1a1a',
        'border-col': '#2a2a2a',
        'text-muted': '#5c5c5c',
        'text-body': '#a0998a',
        'text-primary': '#d4cfc7',
        'text-heading': '#f0ebe3',
        amber: '#f0a500',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      transitionTimingFunction: {
        portfolio: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
  },
  plugins: [],
}

export default config
