import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Service from "@/components/sevices/Service";
import Cta from "@/components/cta/Cta";
import WhyChoseUs from "@/components/why-chose-us/WhyChoseUs";
import HomeAbout from "@/components/home-about/HomeAbout";
import ServiceArea from "@/components/service-area/ServiceArea";

export const metadata: Metadata = {
  title: "Landscaping Services | Reading Hardscaping, Tree & Snow Removal",
  description: "Comprehensive landscaping, hardscaping, tree services, and snow removal in Reading, PA. Professional solutions for residential and commercial properties.",
  keywords: [
    "landscaping services Reading PA",
    "hardscaping contractors Reading PA",
    "tree removal services",
    "snow removal Reading PA",
    "Rolax Landscaping Reading",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com/services/",
  },
  openGraph: {
    title: "Landscaping Services | Reading Hardscaping, Tree & Snow Removal",
    description: "Comprehensive landscaping, hardscaping, tree services, and snow removal in Reading, PA.",
    url: "https://rolaxlandscapingcanada.com/services/",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Landscaping Services in Reading, PA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping Services | Reading Hardscaping, Tree & Snow Removal",
    description: "Comprehensive landscaping, hardscaping, tree services, and snow removal in Reading, PA.",
    images: ["/final.jpg"],
  },
};

const Services = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading="Professional Landscaping Services in Reading, PA"
        description="Comprehensive landscaping, hardscaping, tree care, and snow removal for residential and commercial properties"
        currentPage="Services"
      />
      
      {/* Main Services Grid */}
      <Service />
      
      {/* Call to Action */}
      <Cta />
      
      {/* Why Choose Us Section */}
      <WhyChoseUs />
      
      {/* About Section */}
      <HomeAbout />

      {/* NEW: Service Area Interactive List */}
      <ServiceArea />
    </>
  );
};

export default Services;