// import React from "react";
// import type { Metadata } from "next";
// import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
// import ContactForm from "@/components/contact/ContactForm";

// export const metadata: Metadata = {
//   title: "Contact Rolax Landscaping | Get Your Free Quote",
//   description: "Get in touch with Rolax Landscaping for a free consultation. We offer 24/7 support for all landscaping and outdoor services in Toronto.",
//   keywords: ["contact landscaping", "free quote", "landscaping estimate", "get in touch"],
// };

// const Contact = () => {
//   return (
//     <>
//       <Breadcrumb
//         breadcrumbBg="/images/breadcrumb/1.jpg"
//         heading="Contact Us"
//         description="We are available for 24/7 for Garden & Landscaping Services"
//         currentPage="Contact Us"
//       />
      
//       <ContactForm />
//     </>
//   );
// };

// export default Contact;




import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";

// ✅ SEO: Upgraded Metadata with Localized Keywords, Canonical URL, and Open Graph
export const metadata: Metadata = {
  title: "Contact Rolax Landscaping Reading | Free Quotes in Reading, PA",
  description: "Get a free estimate from Rolax Landscaping Reading today. We provide 24/7 support for landscaping, hardscaping, and snow removal in Reading and nearby communities.",
  keywords: [
    "landscaping quote Reading PA",
    "free estimate Reading PA",
    "Berks County landscapers",
    "snow removal Reading PA",
    "contact Rolax Landscaping",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com/contact/", // Crucial for preventing duplicate content penalties
  },
  openGraph: {
    title: "Contact Rolax Landscaping | Get Your Free Quote",
    description: "Reach out to Reading's landscaping and snow removal team for fast estimates and 24/7 support.",
    url: "https://rolaxlandscapingcanada.com/contact/",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Rolax Landscaping Reading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Rolax Landscaping | Get Your Free Quote",
    description: "Reach out to Reading's landscaping and snow removal team for fast estimates and 24/7 support.",
    images: ["/final.jpg"],
  },
};

const Contact = () => {
  return (
    <>
      {/* ✅ SEO: Upgraded Breadcrumb text to naturally include local & service keywords */}
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading="Contact Our Team"
        description="Available 24/7 for premium landscaping and snow removal in the Reading area"
        currentPage="Contact Us"
      />
      
      <ContactForm />
    </>
  );
};

export default Contact;