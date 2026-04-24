import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import FunFact from "@/components/fun-fact/FunFact";
import AboutExperience from "@/components/home-about/AboutExperience";
import Cta from "@/components/cta/Cta";
import HowItWork from "@/components/how-it-work/HowItWork";

export const metadata: Metadata = {
  title: "About Rolax Landscaping | Experienced Outdoor Specialists",
  description: "Learn about Rolax Landscaping Reading's years of expertise in professional lawn care, hardscaping, and outdoor design. Trusted by Reading-area property owners.",
  keywords: [
    "Reading landscaping company",
    "Berks County landscaping experts",
    "Reading outdoor contractors",
    "experienced landscapers",
    "Rolax Landscaping Reading",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com/about/",
  },
  openGraph: {
    title: "About Rolax Landscaping | Experienced Outdoor Specialists",
    description: "Learn about Rolax Landscaping's years of expertise in professional lawn care, hardscaping, and outdoor design.",
    url: "https://rolaxlandscapingcanada.com/about/",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Rolax Landscaping Reading Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rolax Landscaping | Experienced Outdoor Specialists",
    description: "Learn about Rolax Landscaping's years of expertise in professional lawn care, hardscaping, and outdoor design.",
    images: ["/final.jpg"],
  },
};

const About = () => {
  return (
    <>
      {/* Top Banner */}
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading="About Rolax Landscaping Reading"
        description="Trusted landscaping and outdoor service specialists for the Reading area"
        currentPage="About Us"
      />
      
      {/* Experience Section */}
      <AboutExperience />
      
      {/* Animated Counter */}
      <FunFact />
      
      {/* Call to Action Banner */}
      <Cta />
      
      {/* How It Works Steps */}
      <HowItWork />
    </>
  );
};

export default About;