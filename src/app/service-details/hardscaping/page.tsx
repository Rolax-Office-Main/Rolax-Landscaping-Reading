"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Updated hook
import Link from "next/link";
import { FaPhoneAlt, FaCheckCircle, FaThLarge, FaHammer, FaRulerCombined, FaArrowLeft } from "react-icons/fa";

// --- COMPONENTS ---
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"; 

// --- IMAGES ---
const breadcrumbBg = "/images/breadcrumb/1.jpg"; 
const patioImg = "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=1200&q=80";

// --- CONSTANTS ---
const BRAND_NAME = "Rolax Landscaping Reading";
const PHONE_DISPLAY = "(647) 916-6654";
const PHONE_TEL = "+16479166654";

const HardscapingPatio = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const router = useRouter(); // Next.js Router

  // Soft fade on scroll
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

  // SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    telephone: PHONE_DISPLAY,
    areaServed: ["Reading, PA", "Wyomissing, PA", "West Reading, PA", "Shillington, PA", "Sinking Spring, PA", "Muhlenberg, PA"],
    url: "https://rolaxlandscapingcanada.com",
    serviceType: ["Hardscaping", "Patio Installation", "Interlocking"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style jsx>{`
        .patio-page { padding: 70px 0 90px; background: #fff; }
        .patio-container { width: min(1100px, calc(100% - 40px)); margin: 0 auto; }

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

        /* HERO */
        .patio-hero h1 {
          margin: 0 0 10px;
          font-size: 44px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.4px;
        }
        .patio-hero p {
          margin: 0 0 18px;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 600;
          color: #475569;
          max-width: 820px;
        }

        .patio-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #16a34a;
          color: #fff;
          font-weight: 900;
          padding: 12px 18px;
          border-radius: 12px;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .patio-call-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.18);
        }

        /* POINTS */
        .patio-points {
          margin-top: 18px;
          display: grid;
          gap: 10px;
          max-width: 860px;
        }
        .patio-point {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-weight: 650;
          color: #334155;
          line-height: 1.6;
        }
        .patio-point svg {
          margin-top: 4px;
          color: #16a34a;
          flex: 0 0 auto;
        }

        /* IMAGE */
        .patio-image {
          margin-top: 30px;
          display: flex;
          justify-content: center;
        }
        .patio-image img {
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

        /* SECTIONS */
        .patio-section { margin-top: 40px; }
        .patio-section h2 {
          margin: 0 0 10px;
          font-size: 24px;
          font-weight: 900;
          color: #0f172a;
        }
        .patio-section p {
          margin: 0 0 12px;
          color: #475569;
          font-weight: 600;
          line-height: 1.75;
          max-width: 900px;
        }

        /* GRID */
        .patio-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .patio-card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          background: #fff;
          transition: transform 0.2s ease;
        }
        .patio-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .patio-card h3 {
          margin: 0 0 8px;
          font-weight: 900;
          font-size: 18px;
          color: #0f172a;
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .patio-card p {
          margin: 0;
          color: #475569;
          font-weight: 600;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .patio-page { padding: 60px 0 70px; }
          .patio-hero h1 { font-size: 32px; }
          .patio-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Breadcrumb */}
      <Breadcrumb 
        breadcrumbBg={breadcrumbBg}
        heading="Hardscaping Services" 
        description="Patios, Walkways & Stonework"
        currentPage="Services - Hardscaping" 
      />

      <div className="patio-page">
        <div className="patio-container">

          {/* Back Button */}
          <button onClick={() => router.back()} className="back-btn">
            <FaArrowLeft /> Back
          </button>

          {/* HERO */}
          <section className="patio-hero">
            <h2>Hardscaping & Patio Installation in Reading, PA</h2>
            <p>
              Upgrade your outdoor space with a professionally built patio.
              We design and install durable, level, and visually appealing patios
              using quality materials that stand up to Pennsylvania seasons.
            </p>

            <a className="patio-call-btn" href={`tel:${PHONE_TEL}`}>
              <FaPhoneAlt /> Call {PHONE_DISPLAY}
            </a>

            <div className="patio-points">
              <div className="patio-point">
                <FaRulerCombined /> Proper base preparation and grading
              </div>
              <div className="patio-point">
                <FaHammer /> Precision installation with clean edges
              </div>
              <div className="patio-point">
                <FaCheckCircle /> Long-lasting, low-maintenance finish
              </div>
            </div>
          </section>

          {/* IMAGE */}
          <section className="patio-image">
            <img
              ref={imageRef}
              className="fade-up"
              src={patioImg}
              alt="Hardscaping patio installation in Reading, PA"
              loading="lazy"
            />
          </section>

          {/* SERVICES */}
          <section className="patio-section">
            <h2>Patio Hardscaping Services We Offer</h2>
            <p>
              From small backyard patios to larger entertainment areas,
              we focus on solid construction, drainage, and a clean finish.
            </p>

            <div className="patio-grid">
              <div className="patio-card">
                <h3><FaThLarge /> Interlocking Stone Patios</h3>
                <p>Strong, attractive patios built with precision-laid interlock pavers.</p>
              </div>
              <div className="patio-card">
                <h3><FaHammer /> Concrete & Slab Patios</h3>
                <p>Smooth or textured concrete patio installations with proper base support.</p>
              </div>
              <div className="patio-card">
                <h3><FaRulerCombined /> Patio Repairs & Re-Leveling</h3>
                <p>Fix sunken, uneven, or shifting patio stones for safety and appearance.</p>
              </div>
              <div className="patio-card">
                <h3><FaCheckCircle /> Edge Restraints & Finishing</h3>
                <p>Clean borders and secure edges to keep patios stable long-term.</p>
              </div>
            </div>
          </section>

          {/* SEO CONTENT */}
          <section className="patio-section">
            <h2>Why Choose Hardscaping for Your Patio?</h2>
            <p>
              A properly built hardscape patio adds usable outdoor space,
              improves property value, and requires less maintenance than wood decks.
              With correct base preparation, your patio stays level and durable for years.
            </p>

            <h2 style={{ marginTop: 24 }}>Areas We Serve</h2>
            <p>
              Reading, Wyomissing, West Reading, Shillington, Sinking Spring,
              Muhlenberg, and nearby Berks County communities.
            </p>
          </section>

          {/* CTA */}
          <section className="patio-section">
            <h2>Get a Free Patio Installation Quote</h2>
            <p>
              Contact <strong>{BRAND_NAME}</strong> today to discuss your patio project.
              We’ll recommend the right materials and layout for your space and budget.
            </p>
            <a className="patio-call-btn" href={`tel:${PHONE_TEL}`}>
              <FaPhoneAlt /> Call {PHONE_DISPLAY}
            </a>
          </section>

        </div>
      </div>
    </>
  );
};

export default HardscapingPatio;