import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Tree Services in Reading, PA | Removal, Trimming & Care',
  description: 'Licensed tree services in Reading, PA including tree removal, trimming, pruning, and emergency cleanup. Safe and professional solutions.',
  keywords: [
    'tree removal Reading PA',
    'tree trimming Reading PA',
    'tree pruning Berks County',
    'emergency tree service',
    'Rolax Landscaping Reading',
  ],
  alternates: {
    canonical: 'https://rolaxlandscapingcanada.com/service-details/tree-service',
  },
  openGraph: {
    title: 'Professional Tree Services in Reading, PA | Removal, Trimming & Care',
    description: 'Licensed tree services in Reading, PA including tree removal, trimming, pruning, and emergency cleanup. Safe and professional solutions.',
    url: 'https://rolaxlandscapingcanada.com/service-details/tree-service',
    type: 'website',
    images: [
      {
        url: '/final.jpg',
        width: 1200,
        height: 630,
        alt: 'Tree Services in Reading, PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Tree Services in Reading, PA | Removal, Trimming & Care',
    description: 'Licensed tree services in Reading, PA including tree removal and pruning.',
    images: ['/final.jpg'],
  },
}

export default function TreeServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
