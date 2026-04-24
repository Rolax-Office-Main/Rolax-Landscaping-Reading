

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

// // 1. CSS IMPORTS
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./globals.css";
// import "@/styles/css/default.css";
// import "@/styles/css/main.css";
// import "@/styles/css/responsive.css";
// import "@/styles/vendor/modal-video/modal-video.min.css";
// import "@/styles/vendor/slick/slick.css";

// // 2. Component Imports
// import ScrollToTopButton from "@/components/ScrollToTopButton";
// import Header from "@/common/header/Header"; 
// import Footer from "@/common/footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rolaxlandscapingcanada.com";

// export const metadata: Metadata = {
//   metadataBase: new URL(siteUrl),
//   title: {
//     default: "Rolax Landscaping Canada | Professional Landscaping Services Toronto",
//     template: "%s | Rolax Landscaping Canada",
//   },
//   description: "Professional landscaping, hardscaping, tree services, and snow removal in Toronto & Scarborough.",
//   keywords: ["landscaping Toronto", "hardscaping", "tree removal", "snow removal"],
  
//   // ✅ FIX: ADD ICONS HERE FOR GOOGLE & BROWSER TABS
//   icons: {
//     icon: "/images/logo.jpg",      // Path to your logo in public folder
//     shortcut: "/images/logo.jpg",  // For shortcuts
//     apple: "/images/logo.jpg",     // For iPhone home screen
//   },

//   openGraph: {
//     type: "website",
//     locale: "en_CA",
//     url: siteUrl,
//     siteName: "Rolax Landscaping Canada",
//     title: "Professional Landscaping Services in Toronto | Rolax Canada",
//     description: "Expert landscaping, hardscaping, tree services, and snow removal.",
//     images: [
//       {
//         url: "/images/logo.jpg", // Using logo for social sharing preview too
//         width: 1200,
//         height: 630,
//         alt: "Rolax Landscaping Canada",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Rolax Landscaping Canada",
//     description: "Expert landscaping & outdoor services in Toronto",
//     images: ["/images/logo.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   verification: {
//     google: "your-google-site-verification-code",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
//         <meta name="theme-color" content="#16a34a" />
        
//         {/* ❌ REMOVED manual <link rel="icon"> because we added it to metadata above */}
        
//         {/* Schema Markup */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "LocalBusiness",
//               name: "Rolax Landscaping Canada",
//               image: `${siteUrl}/images/logo.jpg`, // Updated to use the simple filename
//               description: "Professional landscaping and outdoor services",
//               telephone: "+1-647-916-6654",
//               email: "Rolaxlandscapingreading@gmail.com",
//               address: {
//                 "@type": "PostalAddress",
//                 streetAddress: "33 Saratoga Drive",
//                 addressLocality: "Scarborough",
//                 addressRegion: "ON",
//                 postalCode: "M1P 4H8",
//                 addressCountry: "CA",
//               },
//               geo: {
//                 "@type": "GeoCoordinates",
//                 latitude: 43.7845,
//                 longitude: -79.2374,
//               },
//               url: siteUrl,
//               sameAs: [
//                 "https://www.facebook.com/rolaxlandscaping",
//                 "https://www.instagram.com/rolaxlandscaping",
//               ],
//             }),
//           }}
//         />
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//         <ScrollToTopButton />
//       </body>
//     </html> 
//   );
// }







import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ReactNode } from "react";

// 1. CSS IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "@/styles/css/default.css";
import "@/styles/css/main.css";
import "@/styles/css/responsive.css";
import "@/styles/vendor/modal-video/modal-video.min.css";
import "@/styles/vendor/slick/slick.css";

// 2. Component Imports
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Header from "@/common/header/Header"; 
import Footer from "@/common/footer/Footer";

// ✅ PERFORMANCE: Optimize fonts with display swap strategy
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevent font loading from blocking page render
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rolaxlandscapingcanada.com";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// ✅ SEO: Next.js Best Practice is to export viewport/theme-color separately
export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rolax Landscaping Reading | Reading Area Property Care",
    template: "%s | Rolax Landscaping Reading",
  },
  description: "Top-rated landscaping, hardscaping, and snow removal services in Reading, Wyomissing, West Reading, and nearby Berks County communities.",
  
  // ✅ SEO: Expanded naturally around Reading-area service keywords.
  keywords: [
    "landscaping Reading PA", 
    "Wyomissing landscapers", 
    "West Reading landscaping", 
    "snow removal Reading PA", 
    "hardscaping contractors near me", 
    "tree removal Reading PA",
    "commercial property maintenance"
  ],
  
  icons: {
    icon: "/final.jpg",
    shortcut: "/final.jpg",
    apple: "/final.jpg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rolax Landscaping Reading",
    title: "Expert Landscaping & Snow Removal | Rolax Landscaping Reading",
    description: "Transforming outdoor spaces with expert landscaping, hardscaping, and snow removal in the Reading area.",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Rolax Landscaping Reading Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolax Landscaping Reading",
    description: "Expert landscaping and outdoor services in Reading and nearby communities.",
    images: ["/final.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        
        {/* ✅ PERFORMANCE: DNS prefetch and preconnect for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* ✅ PERFORMANCE: Prefetch critical pages for instant navigation */}
        <link rel="prefetch" href="/contact/" as="document" />
        <link rel="prefetch" href="/services/" as="document" />

        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        
        {/* ✅ SEO: Advanced Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Rolax Landscaping Reading",
              image: `${siteUrl}/images/logo.jpg`, 
              description: "Professional landscaping, hardscaping, tree services, and snow removal for residential and commercial properties.",
              telephone: "+1-647-916-6654",
              email: "Rolaxlandscapingreading@gmail.com",
              priceRange: "$$", // Required by Google for local businesses
              address: {
                "@type": "PostalAddress",
                streetAddress: "33 Saratoga Drive",
                addressLocality: "Scarborough",
                addressRegion: "ON",
                postalCode: "M1P 4H8",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.7845,
                longitude: -79.2374,
              },
              areaServed: [
                "Reading, PA", "Wyomissing, PA", "West Reading, PA", "Shillington, PA", "Sinking Spring, PA",
                "Mohnton, PA", "Leesport, PA", "Temple, PA", "Laureldale, PA", "Ontelaunee, PA",
                "Blandon, PA", "Reiffton, PA", "Mt. Penn, PA", "Morisville, PA", "Flying Hills, PA",
                "Alleghenyville, PA", "Pricetown, PA", "Fleetwood, PA", "Lorne, PA",
                "Birdsboro, PA", "Exeter, PA", "Cumru, PA", "Muhlenberg, PA", "Amity, PA", "Tulpehocken, PA"
              ],
              openingHoursSpecification: [ // Added hours (Google loves this)
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "07:00",
                  closes: "19:00"
                }
              ],
              url: siteUrl,
              sameAs: [
                "https://www.facebook.com/rolaxlandscaping",
                "https://www.instagram.com/rolaxlandscaping",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html> 
  );
}