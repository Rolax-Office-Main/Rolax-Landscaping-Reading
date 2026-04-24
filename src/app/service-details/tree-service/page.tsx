"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Updated hook
import Link from "next/link";
import { FaPhoneAlt, FaCheckCircle, FaTree, FaShieldAlt, FaTruck, FaArrowLeft } from "react-icons/fa";

// --- COMPONENTS ---
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"; 

// --- IMAGES ---
const breadcrumbBg = "/images/breadcrumb/1.jpg"; 
const treeImg = "/images/tree_removal/tree_removal.jpg";

// --- CONSTANTS ---
const BRAND_NAME = "Rolax Landscaping Reading";
const PHONE_DISPLAY = "(647) 916-6654";
const PHONE_TEL = "+16479166654";

const TreeRemoval = () => {
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
    areaServed: [
      "Reading, PA", "Wyomissing, PA", "West Reading, PA", "Shillington, PA", "Sinking Spring, PA",
      "Mohnton, PA", "Leesport, PA", "Temple, PA", "Laureldale, PA", "Ontelaunee, PA",
      "Blandon, PA", "Reiffton, PA", "Mt. Penn, PA", "Morisville, PA", "Flying Hills, PA",
      "Alleghenyville, PA", "Pricetown, PA", "Fleetwood, PA", "Lorne, PA",
      "Birdsboro, PA", "Exeter, PA", "Cumru, PA", "Muhlenberg, PA", "Amity, PA", "Tulpehocken, PA"
    ],
    url: "https://rolaxlandscapingcanada.com",
    serviceType: ["Tree Removal", "Tree Trimming", "Stump Grinding"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style jsx>{`
        .tree-page { padding: 70px 0 90px; background: #fff; }
        .tree-container { width: min(1100px, calc(100% - 40px)); margin: 0 auto; }

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
        .tree-hero h1 {
          margin: 0 0 10px;
          font-size: 44px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.4px;
        }
        .tree-hero p {
          margin: 0 0 18px;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 600;
          color: #475569;
          max-width: 820px;
        }

        .tree-call-btn {
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
        .tree-call-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.18);
        }

        /* POINTS */
        .tree-points {
          margin-top: 18px;
          display: grid;
          gap: 10px;
          max-width: 860px;
        }
        .tree-point {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-weight: 650;
          color: #334155;
          line-height: 1.6;
        }
        .tree-point svg { margin-top: 4px; color: #16a34a; flex: 0 0 auto; }

        /* SINGLE IMAGE */
        .tree-image { margin-top: 30px; display: flex; justify-content: center; }
        .tree-image img {
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
        .tree-section { margin-top: 40px; }
        .tree-section h2 {
          margin: 0 0 10px;
          font-size: 24px;
          font-weight: 900;
          color: #0f172a;
        }
        .tree-section p {
          margin: 0 0 12px;
          color: #475569;
          font-weight: 600;
          line-height: 1.75;
          max-width: 900px;
        }

        /* GRID */
        .tree-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .tree-card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          background: #fff;
          transition: transform 0.2s ease;
        }
        .tree-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .tree-card h3 {
          margin: 0 0 8px;
          font-weight: 900;
          font-size: 18px;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .tree-card p {
          margin: 0;
          color: #475569;
          font-weight: 600;
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
          font-weight: 600;
          line-height: 1.75;
        }

        @media (max-width: 900px) {
          .tree-page { padding: 60px 0 70px; }
          .tree-hero h1 { font-size: 32px; }
          .tree-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Breadcrumb */}
      <Breadcrumb 
        breadcrumbBg={breadcrumbBg}
        heading="Tree Services" 
        description="Removal, Pruning & Maintenance"
        currentPage="Services - Tree Removal" 
      />

      <div className="tree-page">
        <div className="tree-container">
          
          {/* Back Button */}
          <button onClick={() => router.back()} className="back-btn">
            <FaArrowLeft /> Back
          </button>

          {/* HERO */}
          <section className="tree-hero">
            <h2>Tree Services in Reading, PA and Nearby Communities</h2>
            <p>
              Need a dangerous or unwanted tree removed safely? We provide professional tree removal,
              pruning, and care across Reading and nearby communities.
              From small backyard trees to large removals near homes, fences, or power lines - we prioritize safety.
            </p>

            <a className="tree-call-btn" href={`tel:${PHONE_TEL}`}>
              <FaPhoneAlt /> Call {PHONE_DISPLAY}
            </a>

            <div className="tree-points">
              <div className="tree-point"><FaShieldAlt /> Safe removal for hazardous, leaning, or storm-damaged trees</div>
              <div className="tree-point"><FaTree /> Sectional dismantling for tight spaces and near structures</div>
              <div className="tree-point"><FaTruck /> Haul-away and full cleanup available</div>
              <div className="tree-point"><FaCheckCircle /> Transparent quotes and fast scheduling</div>
            </div>
          </section>

          {/* SINGLE IMAGE */}
          <section className="tree-image">
            <img
              ref={imageRef}
              className="fade-up"
              src={treeImg}
              alt="Tree removal service in Reading, PA"
              loading="lazy"
            />
          </section>

          {/* SERVICES */}
          <section className="tree-section">
            <h2>Tree Services We Offer</h2>
            <p>
              Every property is different. We assess access, tree condition, nearby structures, and safety
              before starting. Our goal is a controlled removal with minimal impact to your yard.
            </p>

            <div className="tree-grid">
              <div className="tree-card">
                <h3><FaTree /> Full Tree Removal</h3>
                <p>Complete removal of unwanted or dead trees with safe sectional cutting when needed.</p>
              </div>
              <div className="tree-card">
                <h3><FaShieldAlt /> Hazard & Storm Damage</h3>
                <p>Emergency or priority service for damaged, split, or leaning trees after storms.</p>
              </div>
              <div className="tree-card">
                <h3><FaTruck /> Debris Hauling</h3>
                <p>We can remove branches, logs, and debris and leave your site neat and clean.</p>
              </div>
              <div className="tree-card">
                <h3><FaCheckCircle /> Stump Removal</h3>
                <p>Want the stump gone too? Ask about stump grinding options with your quote.</p>
              </div>
            </div>
          </section>

          {/* SEO CONTENT */}
          <section className="tree-section">
            <h2>When Should You Remove a Tree?</h2>
            <p>
              Consider removal if the tree is dead, diseased, leaning, has major cracks, or roots lifting near
              driveways and foundations. If branches are rubbing your roof or close to power lines, removal
              (or pruning) can prevent costly damage.
            </p>

            <h2 style={{ marginTop: 20 }}>Areas We Serve</h2>
            <p>
              Reading, Wyomissing, West Reading, Shillington, Sinking Spring,
              Muhlenberg, and nearby Berks County communities.
            </p>
          </section>

          {/* FAQ */}
          <section className="tree-section">
            <h2>Tree Service FAQ</h2>
            <div className="faq">
              <details>
                <summary>Do you remove large trees close to houses?</summary>
                <p>Yes. We use sectional cutting and controlled lowering to remove trees safely in tight spaces near structures.</p>
              </details>
              <details>
                <summary>Do you haul away the wood and branches?</summary>
                <p>Yes, hauling and cleanup can be included. Tell us what you prefer when requesting your quote.</p>
              </details>
              <details>
                <summary>Do you provide stump grinding?</summary>
                <p>Stump grinding can be added as an optional service depending on site access and stump size.</p>
              </details>
              <details>
                <summary>How much does tree removal cost?</summary>
                <p>Pricing depends on tree size, access, proximity to structures, and complexity. Call us for a fast estimate.</p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="tree-section">
            <h2>Get a Free Tree Service Quote</h2>
            <p>
              Contact <strong>{BRAND_NAME}</strong> today for pricing and availability. We’ll recommend the safest and most cost-effective option for your property.
            </p>
            <a className="tree-call-btn" href={`tel:${PHONE_TEL}`}>
              <FaPhoneAlt /> Call {PHONE_DISPLAY}
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default TreeRemoval;