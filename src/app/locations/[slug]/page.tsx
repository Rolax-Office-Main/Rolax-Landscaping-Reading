import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Cta from "@/components/cta/Cta";
import { getLocationBySlug, locationsData, toLocationSlug } from "@/data/locations";

type LocationDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://rolaxlandscapingcanada.com";

const serviceItems = [
  {
    title: "Landscaping",
    href: "/service-details/landscaping/",
    description: "Custom landscape design, planting plans, and ongoing outdoor property care.",
  },
  {
    title: "Hardscaping",
    href: "/service-details/hardscaping/",
    description: "Patios, walkways, retaining features, and outdoor living enhancements.",
  },
  {
    title: "Tree Service",
    href: "/service-details/tree-service/",
    description: "Safe pruning, removal, and tree health support for residential and commercial spaces.",
  },
  {
    title: "Snow Removal",
    href: "/service-details/snow-removal/",
    description: "Seasonal plowing and winter response for driveways, lots, and walkways.",
  },
  {
    title: "Sod Installation",
    href: "/service-details/sod-installation/",
    description: "Fast, clean lawn transformation with proper grading and installation methods.",
  },
  {
    title: "Mulch Installation",
    href: "/service-details/mulch-installation/",
    description: "Fresh mulch beds for healthier plants, cleaner lines, and better curb appeal.",
  },
];

const processSteps = [
  {
    title: "Site Review",
    text: "We assess access, drainage, grade, and property goals to create a practical service plan.",
  },
  {
    title: "Transparent Estimate",
    text: "You receive a clear scope, timeline, and pricing aligned to your property needs.",
  },
  {
    title: "Professional Execution",
    text: "Our crew completes work with quality control, clean-up, and communication at every stage.",
  },
  {
    title: "Seasonal Support",
    text: "We provide maintenance and seasonal services to keep your landscape performing year-round.",
  },
];

export function generateStaticParams() {
  return locationsData.map((location) => ({ slug: toLocationSlug(location.name) }));
}

export async function generateMetadata({ params }: LocationDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | Rolax Landscaping Reading",
      robots: { index: false, follow: true },
    };
  }

  const canonical = `${siteUrl}/locations/${slug}/`;

  return {
    title: `${location.name} Landscaping Services | Rolax Reading PA`,
    description: `${location.description} View our service area details, map location, and request landscaping support in ${location.name}.`,
    keywords: [
      `${location.name} landscaping services`,
      `${location.name} PA hardscaping`,
      `${location.name} snow removal`,
      `${location.name} tree service`,
      `${location.name} sod installation`,
      `${location.name} mulch installation`,
      "Berks County landscaping company",
      "Rolax Landscaping Reading",
    ],
    alternates: { canonical },
    openGraph: {
      title: `${location.name} Landscaping Services | Rolax Reading PA`,
      description: location.description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `${siteUrl}/final.jpg`,
          width: 1200,
          height: 630,
          alt: `${location.name} landscaping services by Rolax`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.name} Landscaping Services | Rolax Reading PA`,
      description: location.description,
      images: [`${siteUrl}/final.jpg`],
    },
  };
}

export default async function LocationDetailsPage({ params }: LocationDetailsPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`;
  const relatedLocations = locationsData
    .filter((item) => item.type === location.type && item.name !== location.name)
    .slice(0, 6);

  const faqItems = [
    {
      question: `Do you provide full landscaping services in ${location.name}?`,
      answer: `Yes. Rolax Landscaping provides design, installation, maintenance, and seasonal support in ${location.name} and nearby communities.`,
    },
    {
      question: `Can I book hardscaping and tree service together in ${location.name}?`,
      answer:
        "Yes. We regularly combine hardscaping, landscaping, and tree services into one coordinated project timeline.",
    },
    {
      question: `Do you offer winter snow removal in ${location.name}?`,
      answer:
        "Yes. We offer snow and ice management options for residential and commercial properties during winter months.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Rolax Landscaping - ${location.name}`,
    url: `${siteUrl}/locations/${slug}/`,
    areaServed: location.name,
    image: `${siteUrl}/final.jpg`,
    telephone: "+1-647-916-6654",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Reading",
      addressRegion: "PA",
      addressCountry: "US",
    },
    makesOffer: serviceItems.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading={`${location.name} Service Area`}
        description="Dedicated service area details and local map"
        currentPage={location.name}
      />

      <section style={{ padding: "70px 0", background: "#f7f8f4" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(22, 163, 74, 0.15)",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
                  height: "100%",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "#dcfce7",
                    color: "#166534",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  Primary Area
                </span>
                <h1 style={{ fontSize: "38px", fontWeight: 800, marginBottom: "14px", color: "#111827" }}>
                  {location.name}
                </h1>
                <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#4b5563", marginBottom: "20px" }}>
                  {location.description}
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#374151", marginBottom: "28px" }}>
                  Rolax Landscaping provides dependable outdoor services throughout {location.name}, including landscaping,
                  hardscaping, tree care, snow removal, sod installation, and seasonal property maintenance.
                </p>

                <ul style={{ marginBottom: "28px", color: "#374151", lineHeight: 1.8, paddingLeft: "20px" }}>
                  <li>Residential and commercial service coverage in {location.name}</li>
                  <li>Project planning for curb appeal, drainage, and usability</li>
                  <li>Reliable scheduling with weather-aware seasonal service delivery</li>
                </ul>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link
                    href="/contact/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "12px 18px",
                      borderRadius: "10px",
                      background: "#16a34a",
                      color: "#fff",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Request Free Quote
                  </Link>
                  <Link
                    href="/locations/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "12px 18px",
                      borderRadius: "10px",
                      border: "1px solid #d1d5db",
                      color: "#111827",
                      fontWeight: 700,
                      textDecoration: "none",
                      background: "#fff",
                    }}
                  >
                    Back To All Locations
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "12px",
                  border: "1px solid rgba(22, 163, 74, 0.15)",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
                  height: "100%",
                }}
              >
                <iframe
                  title={`Google map for ${location.name}`}
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ minHeight: "460px", border: 0, borderRadius: "12px" }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "20px 0 70px", background: "#f7f8f4" }}>
        <div className="container">
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "32px",
              border: "1px solid rgba(22, 163, 74, 0.12)",
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
            }}
          >
            <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "10px", color: "#111827" }}>
              Services Available In {location.name}
            </h2>
            <p style={{ color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
              Explore our most requested outdoor services in {location.name}. Each service page provides detailed scope,
              benefits, and project examples.
            </p>

            <div className="row g-3">
              {serviceItems.map((service) => (
                <div key={service.title} className="col-md-6 col-xl-4">
                  <div
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      padding: "18px",
                      height: "100%",
                      background: "#fbfdfc",
                    }}
                  >
                    <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}>
                      {service.title}
                    </h3>
                    <p style={{ color: "#4b5563", lineHeight: 1.75, marginBottom: "14px" }}>
                      {service.description}
                    </p>
                    <Link href={service.href} style={{ color: "#166534", fontWeight: 700, textDecoration: "none" }}>
                      View {service.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 70px", background: "#f7f8f4" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(22, 163, 74, 0.12)",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
                }}
              >
                <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "12px", color: "#111827" }}>
                  How We Deliver Projects In {location.name}
                </h2>
                <p style={{ color: "#4b5563", lineHeight: 1.8, marginBottom: "22px" }}>
                  Our process is designed for consistency, transparency, and long-term landscape performance.
                </p>

                <div style={{ display: "grid", gap: "16px" }}>
                  {processSteps.map((step, index) => (
                    <div
                      key={step.title}
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: "12px",
                        padding: "16px",
                        background: "#fbfdfc",
                      }}
                    >
                      <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#111827" }}>
                        {index + 1}. {step.title}
                      </h3>
                      <p style={{ margin: "8px 0 0", color: "#4b5563", lineHeight: 1.75 }}>{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(22, 163, 74, 0.12)",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
                  marginBottom: "24px",
                }}
              >
                <h2 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "12px", color: "#111827" }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: "grid", gap: "14px" }}>
                  {faqItems.map((faq) => (
                    <div key={faq.question}>
                      <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#111827", marginBottom: "6px" }}>
                        {faq.question}
                      </h3>
                      <p style={{ color: "#4b5563", lineHeight: 1.75, margin: 0 }}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "32px",
                  border: "1px solid rgba(22, 163, 74, 0.12)",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
                }}
              >
                <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "12px", color: "#111827" }}>
                  Nearby Areas We Also Serve
                </h2>
                <p style={{ color: "#4b5563", lineHeight: 1.8, marginBottom: "14px" }}>
                  Browse additional service coverage near {location.name}.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {relatedLocations.map((item) => (
                    <Link
                      key={item.name}
                      href={`/locations/${toLocationSlug(item.name)}/`}
                      style={{
                        display: "inline-flex",
                        padding: "8px 12px",
                        borderRadius: "999px",
                        border: "1px solid #d1d5db",
                        textDecoration: "none",
                        color: "#1f2937",
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        id={`location-localbusiness-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id={`location-faq-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Cta />
    </>
  );
}
