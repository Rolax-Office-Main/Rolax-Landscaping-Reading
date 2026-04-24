import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Rolax Landscaping Reading",
  description: "Read the privacy policy for Rolax Landscaping Reading. Learn how we collect, use, and protect your personal information.",
  keywords: [
    "Rolax Landscaping privacy policy",
    "landscaping data protection",
    "personal information policy",
    "Reading landscaping privacy",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Rolax Landscaping Reading",
    description: "Read the privacy policy for Rolax Landscaping Reading. Learn how we collect, use, and protect your personal information.",
    url: "https://rolaxlandscapingcanada.com/privacy-policy/",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Rolax Landscaping Reading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Rolax Landscaping Reading",
    description: "Read the privacy policy for Rolax Landscaping Reading.",
    images: ["/final.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading="Privacy Policy"
        description="How we handle and protect your information"
        currentPage="Privacy Policy"
      />

      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <p style={{ color: "#555", marginBottom: "32px" }}>
                <em>Last updated: March 2026</em>
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                When you use our website or contact us for a quote, we may collect the following
                information: your name, email address, phone number, property address, and any
                notes you include in your message.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to your inquiries and provide quotes</li>
                <li>Schedule and complete landscaping services</li>
                <li>Send service updates, invoices, or seasonal promotions</li>
                <li>Improve our website and services</li>
              </ul>

              <h2>3. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or transfer your personal information to outside parties.
                We may share data with trusted service providers who assist us in operating our
                website and conducting our business, provided those parties agree to keep this
                information confidential.
              </p>

              <h2>4. Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience. You can choose to
                disable cookies through your browser settings. Disabling cookies may affect
                certain features of the website.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible
                for the privacy practices or content of those sites.
              </p>

              <h2>7. Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your
                personal data. To make such a request, contact us at{" "}
                <a href="mailto:Rolaxlandscapingreading@gmail.com">
                  Rolaxlandscapingreading@gmail.com
                </a>
                .
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on
                this page with an updated date.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this policy, please contact us:
              </p>
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
