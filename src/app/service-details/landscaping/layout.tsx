import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landscaping & Mulching Services in Reading, PA | Rolax',
  description: 'Professional landscaping and mulch installation services in Reading, PA. Expert lawn care, planting, edging, and seasonal landscape maintenance.',
  keywords: [
    'landscaping Reading PA',
    'mulch installation Reading PA',
    'lawn care Reading PA',
    'Berks County landscaping',
    'Rolax Landscaping Reading',
  ],
  alternates: {
    canonical: 'https://rolaxlandscapingcanada.com/service-details/landscaping',
  },
  openGraph: {
    title: 'Landscaping & Mulching Services in Reading, PA | Rolax',
    description: 'Professional landscaping and mulch installation services in Reading, PA. Expert lawn care, planting, edging, and seasonal landscape maintenance.',
    url: 'https://rolaxlandscapingcanada.com/service-details/landscaping',
    type: 'website',
    images: [
      {
        url: '/final.jpg',
        width: 1200,
        height: 630,
        alt: 'Landscaping and Mulching Services in Reading, PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landscaping & Mulching Services in Reading, PA | Rolax',
    description: 'Professional landscaping and mulch installation services in Reading, PA.',
    images: ['/final.jpg'],
  },
}

export default function LandscapingLayout({ children }: { children: React.ReactNode }) {
  return children
}
