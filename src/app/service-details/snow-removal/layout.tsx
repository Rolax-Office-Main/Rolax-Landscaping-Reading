import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Snow Plowing & Removal Services in Reading, PA | 24/7 Support',
  description: 'Reliable residential and commercial snow plowing services in Reading, PA. Fast-response snow removal to keep driveways and walkways safe.',
  keywords: [
    'snow removal Reading PA',
    'snow plowing Reading PA',
    'winter maintenance Berks County',
    'emergency snow removal',
    'Rolax Landscaping Reading',
  ],
  alternates: {
    canonical: 'https://rolaxlandscapingcanada.com/service-details/snow-removal',
  },
  openGraph: {
    title: 'Snow Plowing & Removal Services in Reading, PA | 24/7 Support',
    description: 'Reliable residential and commercial snow plowing services in Reading, PA. Fast-response snow removal to keep driveways and walkways safe.',
    url: 'https://rolaxlandscapingcanada.com/service-details/snow-removal',
    type: 'website',
    images: [
      {
        url: '/final.jpg',
        width: 1200,
        height: 630,
        alt: 'Snow Removal Services in Reading, PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snow Plowing & Removal Services in Reading, PA | 24/7 Support',
    description: 'Reliable residential and commercial snow plowing services in Reading, PA.',
    images: ['/final.jpg'],
  },
}

export default function SnowRemovalLayout({ children }: { children: React.ReactNode }) {
  return children
}
