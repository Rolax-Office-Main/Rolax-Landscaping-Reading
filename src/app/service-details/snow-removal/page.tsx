"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Updated hook
import Link from "next/link";
import { FaPhoneAlt, FaCheckCircle, FaSnowflake, FaClock, FaTruck, FaArrowLeft } from "react-icons/fa";

// --- COMPONENTS ---
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"; 

// --- IMAGES ---
const breadcrumbBg = "/images/breadcrumb/1.jpg"; 
const snowImg = "/images/snow_removal/snowremoval.jpg";

// --- CONSTANTS ---
const BRAND_NAME = "Rolax Landscaping Reading";
const PHONE_DISPLAY = "(647) 916-6654";
const PHONE_TEL = "+16479166654";

const SnowRemoval = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const router = useRouter(); // Next.js Router

  // Soft fade on scroll animation
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // SEO Schema (For Next.js App Router, this is usually done in layout or page metadata, but we can render it here)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    telephone: PHONE_DISPLAY,
    areaServed: [
      "Reading, PA", "Wyomissing, PA", "West Reading, PA", "Shillington, PA", "Sinking Spring, PA",
      "Mohnton, PA", "Leesport, PA", "Temple, PA", "Laureldale, PA", "Ontelaunee, PA",
      "Blandon, PA", "Reiffton, PA", "Mt. Penn, PA", "Morisville, PA", "Flying Hills, PA",
      "Alleghenyville, PA", "Pricetown, PA", "Fleetwood, PA", "Lorne, PA",
      "Birdsboro, PA", "Exeter, PA", "Cumru, PA", "Muhlenberg, PA", "Amity, PA", "Tulpehocken, PA"
    ],
    url: "https://rolaxlandscapingcanada.com",
    serviceType: ["Snow Removal", "Snow Plowing", "Shoveling", "Salting", "De-icing"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style jsx>{`
        .snow-page { padding: 70px 0 90px; background: #fff; }
        .snow-container { width: min(1100px, calc(100% - 40px)); margin: 0 auto; }

        /* BACK BUTTON */
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          color: #6b7280;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 20px;
          transition: color 0.2s ease;
          padding: 0;
        }
        .back-btn:hover { color: #16a34a; }

        /* HERO SECTION */
        .snow-hero h1 {
          margin: 0 0 10px;
          font-size: 44px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.4px;
        }
        .snow-hero p {
          margin: 0 0 18px;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 600;
          color: #475569;
          max-width: 780px;
        }

        .snow-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #16a34a;
          color: #fff;
          font-weight: 900;
          padding: 12px 24px;
          border-radius: 12px;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .snow-call-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.18);
        }

        /* FEATURE POINTS */
        .snow-points {
          margin-top: 24px;
          display: grid;
          gap: 12px;
          max-width: 860px;
        }
        .snow-point {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-weight: 650;
          color: #334155;
          line-height: 1.6;
        }
        .snow-point svg { margin-top: 4px; color: #0ea5e9; flex: 0 0 auto; }

        /* SINGLE IMAGE */
        .snow-image { margin-top: 40px; display: flex; justify-content: center; }
        .snow-image img {
          width: 100%;
          max-width: 980px;
          border-radius: 18px;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        /* FADE ANIMATION */
        .fade-up {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 900ms ease, transform 900ms ease;
          will-change: opacity, transform;
        }
        .fade-up.in-view { opacity: 1; transform: translateY(0); }

        /* CONTENT SECTIONS */
        .snow-section { margin-top: 50px; }
        .snow-section h2 {
          margin: 0 0 12px;
          font-size: 28px;
          font-weight: 900;
          color: #0f172a;
        }
        .snow-section p {
          margin: 0 0 12px;
          color: #475569;
          font-weight: 600;
          line-height: 1.75;
          max-width: 900px;
        }

        /* SERVICE GRID */
        .snow-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .snow-card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 24px;
          background: #fff;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .snow-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .snow-card h3 {
          margin: 0 0 8px;
          font-weight: 900;
          font-size: 18px;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .snow-card p {
          margin: 0;
          color: #475569;
          font-weight: 500;
          line-height: 1.7;
        }

        /* FAQ */
        .faq { margin-top: 18px; display: grid; gap: 12px; max-width: 900px; }
        .faq details {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 16px;
          background: #fff;
        }
        .faq summary {
          cursor: pointer;
          font-weight: 900;
          color: #0f172a;
          list-style: none;
          font-size: 16px;
        }
        .faq summary::-webkit-details-marker { display: none; }
        .faq details p {
          margin: 10px 0 0;
          color: #475569;
          font-weight: 500;
          line-height: 1.75;
        }

        @media (max-width: 900px) {
          .snow-page { padding: 60px 0 70px; }
          .snow-hero h1 { font-size: 32px; }
          .snow-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Breadcrumb */}
      <Breadcrumb 
        breadcrumbBg={breadcrumbBg}
        heading="Snow Removal Services" 
        description="Reliable Winter Maintenance & Plowing"
        currentPage="Services - Snow Removal" 
      />

      <div className="snow-page">
        <div className="snow-container">
          
          {/* Back Button */}
          <button onClick={() => router.back()} className="back-btn">
            <FaArrowLeft /> Back
          </button>

          {/* HERO */}
          <section className="snow-hero">
            <h2>Snow Removal in Reading, PA and Nearby Communities</h2>
            <p>
              Keep your driveway, walkways, and entrances clear and safe all winter.
              We provide reliable snow removal for homes and businesses, including plowing,
              shoveling, salting, and de-icing — with quick response during storms.
            </p>

            <a className="snow-call-btn" href={`tel:${PHONE_TEL}`}>
              <FaPhoneAlt /> Call {PHONE_DISPLAY}
            </a>

            <div className="snow-points">
              <div className="snow-point"><FaSnowflake /> Seasonal plans and one-time service options</div>
              <div className="snow-point"><FaTruck /> Driveway clearing, walkway shoveling, and snow hauling</div>
              <div className="snow-point"><FaClock /> Fast dispatch during active snowfall for safer access</div>
              <div className="snow-point"><FaCheckCircle /> Salting and de-icing to reduce slips and refreeze</div>
            </div>
          </section>

          {/* SINGLE IMAGE */}
          <section className="snow-image">
            <img
              ref={imageRef}
              className="fade-up"
              src={snowImg}
              alt="Snow removal service in Reading, PA"
              loading="lazy"
            />
          </section>

          {/* SERVICES */}
          <section className="snow-section">
            <h2>Snow Removal Services We Offer</h2>
            <p>
              Our team focuses on clean, consistent clearing so your property stays accessible.
              We tailor service frequency based on storm conditions and your site needs.
            </p>

            <div className="snow-grid">
              <div className="snow-card">
                <h3><FaTruck /> Driveway Snow Plowing</h3>
                <p>Efficient clearing for residential driveways and private lanes to keep you moving.</p>
              </div>
              <div className="snow-card">
                <h3><FaCheckCircle /> Walkway Shoveling</h3>
                <p>Front steps, sidewalks, and entrances cleared for safe daily access.</p>
              </div>
              <div className="snow-card">
                <h3><FaSnowflake /> Salting & De-icing</h3>
                <p>Helps reduce ice buildup and refreeze on high-traffic areas.</p>
              </div>
              <div className="snow-card">
                <h3><FaClock /> Storm Response</h3>
                <p>Rapid service during snow events to keep properties safer and compliant.</p>
              </div>
            </div>
          </section>

          {/* SEO CONTENT */}
          <section className="snow-section">
            <h2>Why Choose {BRAND_NAME} for Snow Removal?</h2>
            <p>
              Winter in Berks County can change quickly. We keep service straightforward: show up on time,
              clear thoroughly, and focus on safety. Whether you need a one-time cleanup or a seasonal plan,
              we’ll recommend the right approach for your property size and traffic.
            </p>

            <h2 style={{ marginTop: 24 }}>Areas We Serve</h2>
            <p>
              Reading, Wyomissing, West Reading, Shillington, Sinking Spring,
              Muhlenberg, and nearby Berks County communities.
            </p>
          </section>

          {/* FAQ */}
          <section className="snow-section">
            <h2>Snow Removal FAQ</h2>
            <div className="faq">
              <details>
                <summary>Do you offer seasonal snow removal contracts?</summary>
                <p>Yes. Seasonal plans are ideal for consistent service through winter. Call us and we’ll quote based on your driveway and walkway size.</p>
              </details>
              <details>
                <summary>Can I book one-time snow removal?</summary>
                <p>Yes. We offer one-time visits for storm cleanup, driveway clearing, and walkway shoveling depending on availability.</p>
              </details>
              <details>
                <summary>Do you provide salting and de-icing?</summary>
                <p>Yes. We can apply salt or de-icer on walkways, steps, and entrances to help reduce slip hazards and refreeze.</p>
              </details>
              <details>
                <summary>How fast can you respond during a storm?</summary>
                <p>Response depends on storm intensity and route schedules. We prioritize safety and accessibility and service properties as conditions allow.</p>
              </details>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="snow-section">
            <h2>Get a Free Snow Removal Quote</h2>
            <p>
              Call <strong>{BRAND_NAME}</strong> for pricing and availability. We’ll help you choose a plan that fits your winter needs.
            </p>
            <a className="snow-call-btn" href={`tel:${PHONE_TEL}`}>
              <FaPhoneAlt /> Call {PHONE_DISPLAY}
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default SnowRemoval;