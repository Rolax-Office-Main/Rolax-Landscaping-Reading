// import React from "react";
// import { Metadata } from "next";
// // Page Content Components
// import Hero from "@/components/hero/Hero";
// import Service from "@/components/sevices/Service"; 
// import HomeAbout from "@/components/home-about/HomeAbout";
// import Testimonial from "@/components/testimonial/Testimonial";

// export const metadata: Metadata = {
//   title: "Rolax Landscaping Canada | Home",
//   description: "Professional landscaping services in Toronto and GTA.",
// };

// export default function Home() {
//   return (
//     <main>
      
//       {/* Hero Banner (The big image + Quote Form) */}
//       <Hero />

//       {/* About Us Section */}
//       <HomeAbout />

//       {/* Services List */}
//       <Service />

//       {/* Customer Reviews */}
//       <Testimonial />

//     </main>
//   );
// }

import React from "react";
import { Metadata } from "next";
import Script from "next/script"; // Imported for Schema Markup

// Page Content Components
import Hero from "@/components/hero/Hero";
import Service from "@/components/sevices/Service"; 
import HomeAbout from "@/components/home-about/HomeAbout";
import Testimonial from "@/components/testimonial/Testimonial";

// 1. ADVANCED METADATA (Title, Description, Keywords, Canonical & Open Graph)
export const metadata: Metadata = {
  title: "Landscaping & Property Maintenance Reading PA | Rolax",
  description: "Expert landscaping, lawn care, and snow removal services in Reading and nearby Berks County communities. Get a free quote from Rolax Landscaping Reading today!",
  keywords: [
    "landscaping Reading PA",
    "lawn care Reading PA",
    "snow removal Reading PA",
    "property maintenance Berks County",
    "Rolax Landscaping Reading",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com",
  },
  openGraph: {
    title: "Landscaping & Property Maintenance Reading PA | Rolax",
    description: "Expert landscaping, lawn care, and snow removal services in Reading and nearby communities.",
    url: "https://rolaxlandscapingcanada.com",
    siteName: "Rolax Landscaping Reading",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Rolax Landscaping Reading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping & Property Maintenance Reading PA | Rolax",
    description: "Expert landscaping, lawn care, and snow removal services in Reading and nearby communities.",
    images: ["/final.jpg"],
  },
};

export default function Home() {
  
  // 2. SCHEMA MARKUP (Local Business JSON-LD to help Google understand your business)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rolax Landscaping Reading",
    "image": "https://rolaxlandscapingcanada.com/images/logo.jpg",
    "description": "Professional landscaping, lawn maintenance, hardscaping, tree services, and snow removal in Reading and nearby communities.",
    "url": "https://rolaxlandscapingcanada.com",
    "telephone": "+1-647-916-6654",
    "email": "Rolaxlandscapingreading@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "33 Saratoga Drive",
      "addressLocality": "Scarborough",
      "addressRegion": "ON",
      "postalCode": "M1P 4H8",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7845,
      "longitude": -79.2374
    },
    "areaServed": ["Reading", "Wyomissing", "West Reading", "Shillington", "Sinking Spring", "Muhlenberg"],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "120"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/rolaxlandscaping",
      "https://www.instagram.com/rolaxlandscaping"
    ]
  };

  return (
    <main>
      {/* Injecting Schema Markup cleanly into the DOM */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Banner (The big image + Quote Form) */}
      <Hero />

      {/* About Us Section */}
      <HomeAbout />

      {/* Services List */}
      <Service />

      {/* Customer Reviews */}
      <Testimonial />

    </main>
  );
}