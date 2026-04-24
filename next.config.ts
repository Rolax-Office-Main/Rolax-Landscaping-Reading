// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* Performance Optimizations */
  
//   // Compress assets
//   compress: true,
  
//   // Enable SWR caching for static content
//   staticPageGenerationTimeout: 120,
  
//   // Optimized Image loading
//   images: {
//     formats: ['image/webp', 'image/avif'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
//   },
  
//   // Headers for SEO and Security
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: [
//           {
//             key: 'X-DNS-Prefetch-Control',
//             value: 'on'
//           },
//           {
//             key: 'X-Frame-Options',
//             value: 'SAMEORIGIN'
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff'
//           },
//           {
//             key: 'X-XSS-Protection',
//             value: '1; mode=block'
//           },
//           {
//             key: 'Referrer-Policy',
//             value: 'strict-origin-when-cross-origin'
//           },
//         ]
//       },
//       // Cache control for static assets
//       {
//         source: '/images/:path*',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable'
//           }
//         ]
//       },
//       {
//         source: '/fonts/:path*',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable'
//           }
//         ]
//       }
//     ]
//   },

//   // Redirects for SEO
//   async redirects() {
//     return [
//       // Add any URL migrations or redirects here
//     ]
//   },

//   // Rewrites for pretty URLs
//   async rewrites() {
//     return {
//       beforeFiles: [],
//       afterFiles: [],
//       fallback: [],
//     }
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // --- REQUIRED FOR CLOUDFLARE PAGES ---
  output: "export", // Tells Next.js to generate HTML files
  trailingSlash: true,

  // --- REQUIRED FOR STATIC EXPORT ---
  // Standard Next.js Image Optimization requires a server.
  // We must disable it or use a custom loader for static exports.
  images: {
    unoptimized: true, 
  },

  // --- COMPATIBLE SETTINGS ---
  compress: true,
  staticPageGenerationTimeout: 120,

  // ❌ REMOVED: headers(), redirects(), rewrites()
  // Reason: These require a Node.js server and DO NOT work with 'output: export'.
  // If you need headers/redirects, you must create a '_headers' or '_redirects' file in your 'public' folder.
};

export default nextConfig;



// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // --- REQUIRED FOR CLOUDFLARE PAGES ---
//   output: "export", 

//   // --- REQUIRED FOR STATIC EXPORT ---
//   images: {
//     unoptimized: true, 
//   },

//   compress: true,

//   // ✅ SEO FIX: Enforce trailing slashes. 
//   // This prevents Google from indexing two versions of your pages (e.g., /contact and /contact/) 
//   // which causes "duplicate content" penalties on static hosts like Cloudflare.
//   trailingSlash: true, 
// };

// export default nextConfig;