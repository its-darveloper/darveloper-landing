import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Darveloper - Web Development & Digital Solutions',
  description: 'Professional web development, automation solutions, and design projects in Web2 and Web3. Portfolio coming soon.',
  keywords: ['web development', 'automation', 'design', 'Web3', 'Web2', 'digital solutions', 'developer portfolio', 'blockchain development'],
  authors: [{ name: 'Darveloper', url: 'https://darveloper.xyz' }],
  creator: 'Darveloper',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://darveloper.xyz',
    title: 'Darveloper - Web Development & Digital Solutions',
    description: 'Professional web development, automation solutions, and design projects in Web2 and Web3. Portfolio coming soon.',
    siteName: 'Darveloper',
    images: [
      {
        url: 'https://darveloper.xyz/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Darveloper - Web Development & Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darveloper - Web Development & Digital Solutions',
    description: 'Professional web development, automation solutions, and design projects in Web2 and Web3. Portfolio coming soon.',
    creator: '@darveloper.her',
    images: ['https://darveloper.xyz/og-image.png'],
  },
  alternates: {
    canonical: 'https://darveloper.xyz',
  },
  verification: {
    google: 'your-google-verification-code-here',
    // Add other verification codes as needed
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Darveloper',
              url: 'https://darveloper.xyz',
              sameAs: [
                'https://instagram.com/darveloper.her',
                'https://linkedin.com/in/darlyze-calixte-0501a8117'
              ],
              jobTitle: 'Web Developer & Digital Solutions Specialist',
              description: 'Professional web development, automation solutions, and design projects in Web2 and Web3',
              knowsAbout: ['Web Development', 'Automation', 'Web3', 'Blockchain', 'Design', 'Digital Solutions'],
              email: 'hello@darveloper.xyz'
            })
          }}
        />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#2D4A3E" />
        <meta name="msapplication-TileColor" content="#2D4A3E" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}