import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Blog from "@/components/page-blog/Blog";

export const metadata: Metadata = {
  title: "Landscaping Blog | Tips & Insights for Reading Homeowners",
  description: "Read expert landscaping tips, seasonal maintenance guides, and design inspiration from Rolax Landscaping Reading.",
  keywords: [
    "landscaping blog Reading PA",
    "landscaping tips Berks County",
    "lawn care guide",
    "hardscaping ideas",
    "Rolax Landscaping Reading",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com/blogs/",
  },
  openGraph: {
    title: "Landscaping Blog | Tips & Insights for Reading Homeowners",
    description: "Read expert landscaping tips, seasonal maintenance guides, and design inspiration from Rolax Landscaping Reading.",
    url: "https://rolaxlandscapingcanada.com/blogs/",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Rolax Landscaping Reading Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping Blog | Tips & Insights for Reading Homeowners",
    description: "Read expert landscaping tips, seasonal maintenance guides, and design inspiration from Rolax Landscaping Reading.",
    images: ["/final.jpg"],
  },
};

const Blogs = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading="Our Blog"
        description="Reading-area landscaping insights, seasonal tips, and project inspiration"
        currentPage="Blog"
      />
      
      <Blog /> {/* <--- UNCOMMENT THIS */}
      
      <div className="container" style={{ paddingBottom: "50px" }}></div>
    </>
  );
};

export default Blogs;