import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artificial Turf Installation in Reading, PA | Low-Maintenance Lawns',
  description: 'Professional artificial turf installation in Reading, PA. Low-maintenance, durable, and beautiful synthetic grass solutions for homes and businesses.',
  keywords: [
    'artificial turf Reading PA',
    'synthetic grass Reading PA',
    'artificial lawn Berks County',
    'low maintenance lawn',
    'Rolax Landscaping Reading',
  ],
  alternates: {
    canonical: 'https://rolaxlandscapingcanada.com/service-details/artificial-turf',
  },
  openGraph: {
    title: 'Artificial Turf Installation in Reading, PA | Low-Maintenance Lawns',
    description: 'Professional artificial turf installation in Reading, PA. Low-maintenance, durable, and beautiful synthetic grass solutions for homes and businesses.',
    url: 'https://rolaxlandscapingcanada.com/service-details/artificial-turf',
    type: 'website',
    images: [
      {
        url: '/final.jpg',
        width: 1200,
        height: 630,
        alt: 'Artificial Turf Installation in Reading, PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artificial Turf Installation in Reading, PA | Low-Maintenance Lawns',
    description: 'Professional artificial turf installation in Reading, PA.',
    images: ['/final.jpg'],
  },
}

export default function ArtificialTurfLayout({ children }: { children: React.ReactNode }) {
  return children
}
