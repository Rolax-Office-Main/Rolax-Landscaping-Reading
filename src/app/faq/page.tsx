import type { Metadata } from "next";
import Script from "next/script";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ | Rolax Landscaping Reading",
  description:
    "Frequently asked questions about landscaping, hardscaping, tree service, and snow removal in Reading and nearby communities.",
  keywords: [
    "landscaping FAQ Reading PA",
    "hardscaping questions Reading PA",
    "snow removal FAQ",
    "free landscaping estimates",
    "Rolax Landscaping Reading",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com/faq/",
  },
  openGraph: {
    title: "FAQ | Rolax Landscaping Reading",
    description:
      "Frequently asked questions about landscaping, hardscaping, tree service, and snow removal in Reading and nearby communities.",
    url: "https://rolaxlandscapingcanada.com/faq/",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ - Rolax Landscaping Reading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Rolax Landscaping Reading",
    description:
      "Frequently asked questions about landscaping, hardscaping, tree service, and snow removal in Reading and nearby communities.",
    images: ["/final.jpg"],
  },
};

const faqItems = [
  {
    question: "Do you offer free landscaping estimates in Reading and nearby areas?",
    answer:
      "Yes. We provide free estimates for landscaping, hardscaping, tree services, sod installation, and snow removal across Reading and nearby communities.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Reading, Wyomissing, West Reading, Shillington, Sinking Spring, Muhlenberg, and nearby communities for residential and commercial outdoor services.",
  },
  {
    question: "Do you provide winter snow removal for commercial properties?",
    answer:
      "Yes. We provide scheduled and on-demand snow plowing and salting services for commercial and residential properties.",
  },
  {
    question: "How soon can you start a project?",
    answer:
      "Project start times depend on season and scope. Contact us for current scheduling and availability.",
  },
  {
    question: "Are your services available year-round?",
    answer:
      "Yes. We provide year-round property maintenance including summer landscaping and winter snow removal.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading="Frequently Asked Questions"
        description="Answers to common questions about our landscaping services"
        currentPage="FAQ"
      />

      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              {faqItems.map((item) => (
                <div key={item.question} style={{ marginBottom: "32px" }}>
                  <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{item.question}</h2>
                  <p style={{ color: "#555", marginBottom: 0 }}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
