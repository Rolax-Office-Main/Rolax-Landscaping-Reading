import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Remodelling Services in Reading, PA | Rolax Landscaping',
  description: 'Professional home remodelling and renovation services in Reading, PA. Upgrade your home with expert craftsmanship and modern finishes.',
  keywords: [
    'home remodelling Reading PA',
    'home renovation Reading PA',
    'interior upgrades Berks County',
    'exterior renovation',
    'Rolax Landscaping Reading',
  ],
  alternates: {
    canonical: 'https://rolaxlandscapingcanada.com/service-details/home-remodelling',
  },
  openGraph: {
    title: 'Home Remodelling Services in Reading, PA | Rolax Landscaping',
    description: 'Professional home remodelling and renovation services in Reading, PA. Upgrade your home with expert craftsmanship and modern finishes.',
    url: 'https://rolaxlandscapingcanada.com/service-details/home-remodelling',
    type: 'website',
    images: [
      {
        url: '/final.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Remodelling Services in Reading, PA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Remodelling Services in Reading, PA | Rolax Landscaping',
    description: 'Professional home remodelling and renovation services in Reading, PA.',
    images: ['/final.jpg'],
  },
}

export default function HomeRemodellingLayout({ children }: { children: React.ReactNode }) {
  return children
}