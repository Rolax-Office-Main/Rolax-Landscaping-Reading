import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | Rolax Landscaping Reading",
  description: "Review the terms and conditions for using Rolax Landscaping Reading services. Understand your rights and responsibilities.",
  keywords: [
    "Rolax Landscaping terms of service",
    "landscaping service agreement",
    "snow removal terms",
    "service conditions Reading PA",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com/terms-of-service/",
  },
  openGraph: {
    title: "Terms of Service | Rolax Landscaping Reading",
    description: "Review the terms and conditions for using Rolax Landscaping Reading services. Understand your rights and responsibilities.",
    url: "https://rolaxlandscapingcanada.com/terms-of-service/",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - Rolax Landscaping Reading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Rolax Landscaping Reading",
    description: "Review the terms and conditions for using Rolax Landscaping Reading services.",
    images: ["/final.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
  return (
    <>
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading="Terms of Service"
        description="Please read these terms carefully before using our services"
        currentPage="Terms of Service"
      />

      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <p style={{ color: "#555", marginBottom: "32px" }}>
                <em>Last updated: March 2026</em>
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By using this website or engaging Rolax Landscaping Reading for services, you agree
                to be bound by these Terms of Service. If you do not agree, please do not use
                our website or services.
              </p>

              <h2>2. Services Provided</h2>
              <p>
                Rolax Landscaping Reading provides landscaping, hardscaping, tree services, snow
                removal, sod installation, mulch installation, artificial turf installation,
                and related outdoor property services to residential and commercial clients in
                Reading, Wyomissing, West Reading, and surrounding communities.
              </p>

              <h2>3. Quotes and Pricing</h2>
              <p>
                All quotes are estimates based on information provided at time of inquiry.
                Final pricing may vary depending on site conditions, scope changes, or
                unforeseen circumstances. You will be notified of any price changes before
                work proceeds beyond the quoted scope.
              </p>

              <h2>4. Scheduling and Cancellations</h2>
              <p>
                We will make every effort to complete services on the agreed date. Weather
                conditions or other factors beyond our control may require rescheduling.
                We will notify you as soon as possible if a rescheduling is necessary.
                Client cancellations made less than 24 hours before scheduled service may
                be subject to a cancellation fee.
              </p>

              <h2>5. Payment</h2>
              <p>
                Payment is due upon completion of services unless otherwise agreed in writing.
                We accept cash, e-transfer, and other payment methods as indicated on your invoice.
                Overdue accounts may be subject to a late fee.
              </p>

              <h2>6. Liability</h2>
              <p>
                Rolax Landscaping Reading is not liable for pre-existing property damage,
                underground utilities not properly marked by the client, or damage caused
                by extreme weather events. We carry appropriate liability insurance and will
                work in good faith to resolve any service-related concerns.
              </p>

              <h2>7. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, and design, is the
                property of Rolax Landscaping Reading. Unauthorized reproduction or use is
                prohibited.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to update these terms at any time. Continued use of
                our website or services after changes are posted constitutes acceptance of
                the updated terms.
              </p>

              <h2>9. Contact Us</h2>
              <p>For questions about these terms:</p>
              <ul>
                <li>Email: Rolaxlandscapingreading@gmail.com</li>
                <li>Phone: +1-647-916-6654</li>
                <li>Address: 33 Saratoga Drive, Scarborough, ON M1P 4H8</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
