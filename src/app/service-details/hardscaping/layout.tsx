import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hardscaping Contractors in Reading, PA | Patios, Pavers & Walkways',
  description: 'Professional hardscaping contractors in Reading, PA. Custom patios, paver walkways, retaining walls, and durable outdoor living spaces.',
  keywords: [
    'hardscaping Reading PA',
    'patio contractors Reading PA',
    'paver walkways Berks County',
    'retaining walls Reading PA',
    'Rolax Landscaping Reading',
  ],
  alternates: {
    canonical: 'https://rolaxlandscapingcanada.com/service-details/hardscaping',
  },
  openGraph: {
    title: 'Hardscaping Contractors in Reading, PA | Patios, Pavers & Walkways',
    description: 'Professional hardscaping contractors in Reading, PA. Custom patios, paver walkways, retaining walls, and durable outdoor living spaces.',
    url: 'https://rolaxlandscapingcanada.com/service-details/hardscaping',
    type: 'website',
    images: [
      {
        url: '/final.jpg',
        width: 1200,
        height: 630,
        alt: 'Hardscaping Services in Reading, PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hardscaping Contractors in Reading, PA | Patios, Pavers & Walkways',
    description: 'Professional hardscaping contractors in Reading, PA.',
    images: ['/final.jpg'],
  },
}

export default function HardscapingLayout({ children }: { children: React.ReactNode }) {
  return children
}
