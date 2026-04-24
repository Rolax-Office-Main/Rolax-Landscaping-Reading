import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mulch Installation Services in Reading, PA | Landscape Enhancement',
  description: 'Professional mulch installation for landscaping in Reading, PA. Beautiful mulch options for gardens, flower beds, and landscape design.',
  keywords: [
    'mulch installation Reading PA',
    'landscape mulch Reading',
    'wood chips',
    'garden mulch Berks County',
    'Rolax Landscaping Reading',
  ],
  alternates: {
    canonical: 'https://rolaxlandscapingcanada.com/service-details/mulch-installation',
  },
  openGraph: {
    title: 'Mulch Installation Services in Reading, PA | Landscape Enhancement',
    description: 'Professional mulch installation for landscaping in Reading, PA. Beautiful mulch options for gardens, flower beds, and landscape design.',
    url: 'https://rolaxlandscapingcanada.com/service-details/mulch-installation',
    type: 'website',
    images: [
      {
        url: '/final.jpg',
        width: 1200,
        height: 630,
        alt: 'Mulch Installation Services in Reading, PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mulch Installation Services in Reading, PA | Landscape Enhancement',
    description: 'Professional mulch installation for landscaping in Reading, PA.',
    images: ['/final.jpg'],
  },
}

export default function MulchInstallationLayout({ children }: { children: React.ReactNode }) {
  return children
}
