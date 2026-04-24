import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sod Installation Services in Reading, PA | Instant Lawn Solutions',
  description: 'Professional sod installation for instant green lawns in Reading, PA. Fast, affordable, and beautiful lawn installation service.',
  keywords: [
    'sod installation Reading PA',
    'new lawn Reading PA',
    'grass installation Berks County',
    'instant lawn solutions',
    'Rolax Landscaping Reading',
  ],
  alternates: {
    canonical: 'https://rolaxlandscapingcanada.com/service-details/sod-installation',
  },
  openGraph: {
    title: 'Sod Installation Services in Reading, PA | Instant Lawn Solutions',
    description: 'Professional sod installation for instant green lawns in Reading, PA. Fast, affordable, and beautiful lawn installation service.',
    url: 'https://rolaxlandscapingcanada.com/service-details/sod-installation',
    type: 'website',
    images: [
      {
        url: '/final.jpg',
        width: 1200,
        height: 630,
        alt: 'Sod Installation Services in Reading, PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sod Installation Services in Reading, PA | Instant Lawn Solutions',
    description: 'Professional sod installation for instant green lawns in Reading, PA.',
    images: ['/final.jpg'],
  },
}

export default function SodInstallationLayout({ children }: { children: React.ReactNode }) {
  return children
}
