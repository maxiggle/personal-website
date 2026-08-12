import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Godwin Alexander Ekainu — Software Engineer & Technical Writer',
  description:
    'Portfolio of Godwin Alexander Ekainu — Software Engineer building production mobile apps, Web3 SDKs, and developer-facing technical content for Codemagic, Strapi, OpenReplay, and more.',
  keywords: [
    'Software Engineer',
    'Mobile Engineer',
    'Technical Writer',
    'Web3',
    'Flutter',
    'Solidity',
    'Dart',
    'Kotlin',
    'Swift',
    'Next.js',
    'Developer Advocate',
  ],
  authors: [{ name: 'Godwin Alexander Ekainu' }],
  openGraph: {
    title: 'Godwin Alexander Ekainu — Software Engineer & Technical Writer',
    description:
      'Building at the intersection of mobile, Web3, and technical content.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} dark`}>
      <body className="bg-background text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  )
}
