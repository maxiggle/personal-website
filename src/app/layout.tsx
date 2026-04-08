import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Godwin Alexander Ekainu — Mobile Engineer & Web3 Infrastructure',
  description:
    'Portfolio of Godwin Alexander Ekainu, a Mobile Engineer and Web3 Infrastructure developer specializing in Flutter, Kotlin, Swift, Solidity, and Next.js.',
  keywords: [
    'Mobile Engineer',
    'Web3',
    'Flutter',
    'Solidity',
    'Dart',
    'Kotlin',
    'Swift',
    'Next.js',
  ],
  authors: [{ name: 'Godwin Alexander Ekainu' }],
  openGraph: {
    title: 'Godwin Alexander Ekainu — Mobile Engineer & Web3 Infrastructure',
    description:
      'Building at the intersection of mobile and the decentralized web.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}
    >
      <body className="bg-background text-white font-body antialiased">
        {children}
      </body>
    </html>
  )
}
