// import type { MetadataRoute } from 'next'

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rolaxcanada.com'
  
//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/services`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/service-details/landscaping`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/service-details/hardscaping`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/service-details/tree-service`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/service-details/snow-removal`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/service-details/sod-installation`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/service-details/mulch-installation`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/service-details/artificial-turf`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/projects`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/blogs`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: 'yearly',
//       priority: 0.6,
//     },
//   ]
// }


import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'
import { projectCases } from '@/data/projectCases'

// 🔥 THIS IS THE FIX: Forces the sitemap to be built once as a static file
export const dynamic = 'force-static' 

export default function sitemap(): MetadataRoute.Sitemap {
  // Ensure this URL matches your actual domain or falls back safely
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rolaxlandscapingcanada.com'
  
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-details/landscaping/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-details/hardscaping/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-details/tree-service/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-details/snow-removal/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-details/sod-installation/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-details/mulch-installation/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-details/artificial-turf/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-details/home-remodelling/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const projectPages: MetadataRoute.Sitemap = projectCases.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages, ...projectPages]
}
