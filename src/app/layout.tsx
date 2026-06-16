import type { Metadata } from 'next'
import { Syne, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Samuel Darius — Backend Engineer & Co-Founder',
  description:
    'Backend engineer specializing in system design, multi-tier caching, multi-tenant authorization, and Domain-Driven Design. Co-Founder of Tourgate.',
  openGraph: {
    title: 'Samuel Darius — Backend Engineer & Co-Founder',
    description:
      'Backend engineer specializing in system design, multi-tier caching, and DDD.',
    url: 'https://samuel-s-portfolio.vercel.app',
    siteName: 'Samuel Darius',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
