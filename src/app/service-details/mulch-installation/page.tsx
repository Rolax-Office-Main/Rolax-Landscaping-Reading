"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Updated hook
import Link from "next/link"; // Use Link for internal navigation
import { FaPhoneAlt, FaCheckCircle, FaLeaf, FaTools, FaArrowLeft } from "react-icons/fa";

// --- COMPONENTS ---
// We assume you have moved your Breadcrumb component to this path. 
// If not, let me know and I can provide the code for it!
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"; 
// import FAQ from "@/components/faq/FAQ"; // Removed - component doesn't exist

// --- CONSTANTS ---
const BRAND_NAME = "Rolax Landscaping Reading";
const PHONE_DISPLAY = "(647) 916-6654";
const PHONE_TEL = "+16479166654";

// Use a placeholder or your local image import if you have it
const breadcrumbBg = "/images/breadcrumb/1.jpg"; 
const singleImg = "/images/MULCH.jpg";

const MulchInstallation = () => {
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

  return (
    <>
      <style jsx>{`
        .mulch-page { padding: 70px 0 90px; background: #fff; }
        .mulch-container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }

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

        /* HERO SIMPLE */
        .mulch-hero-inner {
          width: 100%;
          margin: 0 auto;
          color: #fff;
        }
        .mulch-hero-inner h1 {
          margin: 0 0 12px;
          font-size: 52px;
          font-weight: 900;
          letter-spacing: -0.5px;
          color: rgba(14, 59, 0, 0.92);
        }
        .mulch-hero-inner p {
          max-width: 880px;
          margin: 0 0 22px;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 600;
          color: rgba(55, 55, 55, 0.92);
        }
        .mulch-hero-actions { margin: 0 0 24px; }

        .mulch-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #16a34a;
          color: #fff;
          font-weight: 900;
          padding: 14px 22px;
          border-radius: 12px;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .mulch-call-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.25);
        }

        /* PILLS */
        .mulch-features-simple {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .mulch-feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: #064e3b;
          border: 1px solid rgba(255,255,255,0.18);
          font-weight: 800;
          color: #fff;
        }
        .mulch-feature-pill svg {
          font-size: 16px;
          color: #fff;
        }

        @media (max-width: 900px) {
          .mulch-hero-simple { padding: 70px 0 50px; }
          .mulch-hero-inner h1 { font-size: 36px; }
          .mulch-hero-inner p { font-size: 16px; }
        }

        /* SINGLE IMAGE */
        .mulch-single-image {
          margin: 50px 0;
          display: flex;
          justify-content: center;
        }
        .mulch-single-image img {
          width: 100%;
          max-width: 900px;
          border-radius: 22px;
          object-fit: cover;
          box-shadow: none;
        }

        /* FADE UP */
        .fade-up {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 900ms ease, transform 900ms ease;
          will-change: opacity, transform;
        }
        .fade-up.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* CONTENT GRID */
        .mulch-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 22px;
          align-items: start;
        }
        @media (max-width: 900px) {
           .mulch-grid { grid-template-columns: 1fr; }
        }

        .mulch-card {
          background: #fff;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 18px 55px rgba(0,0,0,0.08);
          border: 1px solid #f3f4f6;
        }
        .mulch-card h2 {
          margin: 0 0 10px;
          font-size: 26px;
          font-weight: 900;
          color: #111827;
        }
        .mulch-card p {
          margin: 0 0 14px;
          color: #374151;
          font-weight: 600;
          line-height: 1.75;
        }

        .mulch-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }
        .mulch-list li {
          display: flex;
          gap: 10px;
          font-weight: 650;
          color: #374151;
          line-height: 1.6;
        }
        .mulch-list svg { color: #16a34a; }

        /* SIDEBAR */
        .sidebar {
          background: #064e3b;
          color: #fff;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 18px 55px rgba(0,0,0,0.10);
        }
        .sidebar h3 {
          margin: 0 0 10px;
          font-weight: 900;
          font-size: 18px;
        }
        .sidebar p {
          margin: 0 0 14px;
          color: rgba(255,255,255,0.92);
          font-weight: 600;
          line-height: 1.7;
        }
        .sidebar a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #16a34a;
          color: #fff;
          text-decoration: none;
          font-weight: 900;
          border-radius: 14px;
          padding: 14px 18px;
          width: 100%;
          transition: transform .2s ease, opacity .2s ease;
        }
        .sidebar a:hover { transform: translateY(-2px); opacity: .95; }

        /* CTA BAR */
        .mulch-cta-bar {
          margin-top: 40px;
          background: #064e3b;
          border-radius: 22px;
          padding: 26px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          box-shadow: 0 18px 55px rgba(0,0,0,0.2);
          color: #ffffff;
        }
        .cta-left {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          max-width: 900px;
        }
        .cta-icon {
          font-size: 20px;
          color: #22c55e;
          margin-top: 3px;
        }
        .mulch-cta-bar p {
          margin: 0;
          color: #ffffff;
          font-weight: 700;
          line-height: 1.6;
          font-size: 16px;
        }
        .mulch-cta-bar strong { color: #fff; }

        .cta-call-btn {
          background: #16a34a;
          color: #ffffff;
          font-weight: 900;
          padding: 14px 26px;
          border-radius: 14px;
          text-decoration: none;
          white-space: nowrap;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .cta-call-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.25);
        }

        @media (max-width: 900px) {
          .mulch-cta-bar { flex-direction: column; align-items: flex-start; }
          .cta-call-btn { width: 100%; text-align: center; }
        }

        /* FAQ */
        .faq { margin-top: 18px; display: grid; gap: 12px; max-width: 900px; }
        .faq details {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 16px;
          cursor: pointer;
        }
        .faq summary {
          font-weight: 600;
          color: #111827;
          cursor: pointer;
          list-style: none;
          outline: none;
        }
        .faq summary::-webkit-details-marker { display: none; }
        .faq details p {
          margin: 12px 0 0 0;
          color: #374151;
          line-height: 1.6;
        }
      `}</style>

      {/* 2. BREADCRUMB (Header/Footer are in Layout.tsx) */}
      <Breadcrumb 
        breadcrumbBg={breadcrumbBg}
        heading="Mulch Installation" 
        description="Fresh Mulch for Healthy Gardens"
        currentPage="Services - Mulch Installation" 
      />

      <div className="mulch-page">
        <div className="mulch-container">
          
          {/* Back Button */}
          <button onClick={() => router.back()} className="back-btn">
            <FaArrowLeft /> Back
          </button>

          {/* HERO */}
          <section className="mulch-hero-simple">
            <div className="mulch-hero-inner">
              <h2>Mulch Installation in Reading, PA</h2>
              <p>
                Fresh mulch makes your landscape look clean, protects plant roots,
                improves moisture retention, and helps reduce weeds - installed neatly and evenly.
              </p>

              <div className="mulch-hero-actions">
                <a className="mulch-call-btn" href={`tel:${PHONE_TEL}`}>
                  <FaPhoneAlt /> Call {PHONE_DISPLAY}
                </a>
              </div>

              <div className="mulch-features-simple">
                <div className="mulch-feature-pill"><FaCheckCircle /> Clean edging & neat finish</div>
                <div className="mulch-feature-pill"><FaLeaf /> Better moisture retention</div>
                <div className="mulch-feature-pill"><FaTools /> Weed control & protection</div>
              </div>
            </div>
          </section>

          {/* SINGLE IMAGE */}
          <section className="mulch-single-image">
            {/* Standard img tag used for ease of migration */}
            <img
              ref={imageRef}
              className="fade-up"
              src={singleImg}
              alt="Mulch installation work"
            />
          </section>

          {/* CONTENT GRID */}
          <section className="mulch-grid">
            <div className="mulch-card">
              <h2>What’s Included in Mulch Installation</h2>
              <p>
                We install mulch the right way for a clean look and healthy garden beds.
                Our process focuses on proper preparation and consistent coverage.
              </p>

              <ul className="mulch-list">
                <li><FaCheckCircle /> Bed cleanup & light weeding</li>
                <li><FaCheckCircle /> Edge definition for a sharp finish</li>
                <li><FaCheckCircle /> Mulch delivery & even spreading</li>
                <li><FaCheckCircle /> Proper depth (avoid suffocating plants)</li>
                <li><FaCheckCircle /> Cleanup and tidy final look</li>
              </ul>

              <h2 style={{ marginTop: 22 }}>Why Mulch Matters</h2>
              <ul className="mulch-list">
                <li><FaCheckCircle /> Helps retain moisture and reduces watering</li>
                <li><FaCheckCircle /> Reduces weeds and keeps beds cleaner</li>
                <li><FaCheckCircle /> Protects roots from heat and cold</li>
                <li><FaCheckCircle /> Improves curb appeal instantly</li>
              </ul>
            </div>

            <aside className="sidebar">
              <h3>Free Estimates</h3>
              <p>
                Call <strong>{BRAND_NAME}</strong> for fast, no-obligation mulch installation quotes.
              </p>
              <a href={`tel:${PHONE_TEL}`}>
                <FaPhoneAlt /> Call {PHONE_DISPLAY}
              </a>
            </aside>
          </section>

          {/* CTA BAR */}
          <div className="mulch-cta-bar">
            <div className="cta-left">
              <FaPhoneAlt className="cta-icon" />
              <p>
                Contact <strong>{BRAND_NAME}</strong> today for mulch installation and professional landscape care.
              </p>
            </div>

            <a href={`tel:${PHONE_TEL}`} className="cta-call-btn">
              Call {PHONE_DISPLAY}
            </a>
          </div>

          {/* FAQ */}
          <section style={{ marginTop: "50px" }}>
            <h2>Mulch Installation FAQ</h2>
            <div className="faq">
              <details>
                <summary>How often should I replace mulch?</summary>
                <p>Mulch typically lasts 1-2 years before needing replacement, depending on quality and weather conditions.</p>
              </details>
              <details>
                <summary>What type of mulch do you recommend?</summary>
                <p>We recommend premium hardwood mulch for most applications - it's attractive, long-lasting, and provides excellent weed control.</p>
              </details>
              <details>
                <summary>Do you remove old mulch before installing new?</summary>
                <p>Yes, we clean out old mulch and prepare the beds properly before installing fresh mulch for the best results.</p>
              </details>
              <details>
                <summary>How deep should mulch be applied?</summary>
                <p>We apply mulch 2-3 inches deep around plants and 3-4 inches deep in pathways, avoiding direct contact with plant stems.</p>
              </details>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default MulchInstallation;