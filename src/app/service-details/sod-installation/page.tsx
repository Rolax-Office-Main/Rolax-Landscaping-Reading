"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Updated hook
import Link from "next/link";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaLeaf,
  FaTools,
  FaExchangeAlt,
  FaArrowLeft,
} from "react-icons/fa";

// --- COMPONENTS ---
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"; 
// import FAQ from "@/components/faq/FAQ"; // Removed - component doesn't exist

// --- CONSTANTS ---
const BRAND_NAME = "Rolax Landscaping Reading";
const PHONE_DISPLAY = "(647) 916-6654";
const PHONE_TEL = "+16479166654";

// --- IMAGES ---
// Ensure this image exists in public/assets/images/breadcrumb/
const breadcrumbBg = "/images/breadcrumb/1.jpg"; 

const beforeImg = "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&w=800&q=80";
const afterImg = "https://images.unsplash.com/photo-1558905540-212847de509c?auto=format&fit=crop&w=800&q=80";

const BEFORE_AFTER = {
  before: beforeImg,
  after: afterImg,
};

const SodInstallation = () => {
  const [reveal, setReveal] = useState(55);
  const router = useRouter(); // Next.js Router

  return (
    <>
      <style jsx>{`
        .sod-page { padding: 70px 0 90px; background: #fff; }
        .sod-container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }

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

        /* HERO DESIGN */
        .sod-hero-new {
          background: #7a7a7a;
          border-radius: 22px;
          padding: 60px 56px;
          color: #fff;
          box-shadow: 0 18px 60px rgba(0,0,0,0.18);
          position: relative;
          overflow: hidden;
        }

        .sod-hero-new h1 {
          margin: 0 0 12px;
          font-size: 56px;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .sod-hero-new p {
          max-width: 900px;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.7;
          margin-bottom: 26px;
          color: rgba(255,255,255,0.95);
        }

        .sod-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #16a34a;
          color: #fff;
          font-weight: 900;
          border-radius: 12px;
          padding: 12px 24px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .sod-btn:hover {
          transform: translateY(-2px);
          color: #fff;
        }

        .sod-strip {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .sod-chip {
          background: rgba(255,255,255,0.15);
          border-radius: 14px;
          padding: 14px;
          color: #fff;
          font-weight: 700;
          display: flex;
          gap: 10px;
          align-items: center;
          backdrop-filter: blur(5px);
        }

        /* BEFORE AFTER SLIDER */
        .ba-wrap {
          margin-top: 40px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 18px 55px rgba(0,0,0,0.08);
          overflow: hidden;
          border: 1px solid #f3f4f6;
        }
        .ba-top {
          padding: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          background: #f9fafb;
          border-bottom: 1px solid #eee;
        }
        .ba-title {
          font-weight: 900;
          display: flex;
          gap: 10px;
          align-items: center;
          color: #374151;
        }
        .ba-stage {
          position: relative;
          width: 100%;
          height: 420px;
          cursor: col-resize;
        }
        .ba-stage img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ba-after {
          /* Using inline style for dynamic clip-path */
          clip-path: inset(0 0 0 calc(var(--reveal) * 1%));
        }
        .ba-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          left: calc(var(--reveal) * 1%);
          width: 3px;
          background: #fff;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          z-index: 10;
        }
        .ba-knob {
          position: absolute;
          top: 50%;
          left: calc(var(--reveal) * 1%);
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 11;
          color: #16a34a;
          font-size: 20px;
        }

        /* SEO CONTENT */
        .sod-seo {
          margin-top: 50px;
          background: #ffffff;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 18px 55px rgba(0,0,0,0.08);
          border: 1px solid #f3f4f6;
        }
        .sod-seo h2 {
          margin: 0 0 6px;
          font-size: 32px;
          font-weight: 900;
          color: #111827;
        }
        .sod-seo .sub {
          margin-bottom: 24px;
          font-size: 16px;
          font-weight: 800;
          color: #064e3b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .sod-seo p {
          margin-bottom: 18px;
          color: #4b5563;
          font-weight: 500;
          line-height: 1.8;
          font-size: 16px;
        }
        .sod-seo h3 {
          margin: 36px 0 20px;
          font-size: 24px;
          font-weight: 900;
          color: #111827;
        }

        .sod-benefits {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr 1fr;
        }
        .sod-benefit {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: #f9fafb;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 14px;
          padding: 20px;
          transition: transform 0.2s ease;
        }
        .sod-benefit:hover {
          transform: translateY(-3px);
          background: #fff;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .sod-benefit svg {
          color: #16a34a;
          margin-top: 4px;
          font-size: 20px;
          flex-shrink: 0;
        }
        .sod-benefit strong {
          display: block;
          font-weight: 900;
          margin-bottom: 6px;
          color: #111827;
          font-size: 17px;
        }

        /* CTA GREEN BAR */
        .sod-cta-bar {
          margin-top: 60px;
          background: #064e3b;
          border-radius: 22px;
          padding: 32px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          box-shadow: 0 18px 55px rgba(6, 78, 59, 0.25);
        }

        .cta-left {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          max-width: 700px;
        }

        .cta-icon {
          font-size: 28px;
          color: #4ade80;
          margin-top: 4px;
        }

        .sod-cta-bar p {
          margin: 0;
          color: #ffffff;
          font-weight: 600;
          line-height: 1.6;
          font-size: 17px;
        }

        .sod-cta-bar strong {
          color: #ffffff;
          font-weight: 900;
        }

        .cta-call-btn {
          background: #16a34a;
          color: #ffffff;
          font-weight: 900;
          padding: 16px 32px;
          border-radius: 14px;
          text-decoration: none;
          white-space: nowrap;
          font-size: 17px;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .cta-call-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.25);
          color: #fff;
          background: #15803d;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .sod-hero-new { padding: 40px 26px; }
          .sod-hero-new h1 { font-size: 38px; }
          .sod-strip { grid-template-columns: 1fr; }
          .sod-benefits { grid-template-columns: 1fr; }
          
          .sod-cta-bar {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px;
          }
          .cta-call-btn {
            width: 100%;
            text-align: center;
          }
          .ba-stage { height: 300px; }
        }
      `}</style>

      {/* Breadcrumb */}
      <Breadcrumb 
        breadcrumbBg={breadcrumbBg}
        heading="Sod Installation" 
        description="Professional Lawn Replacement & Grading"
        currentPage="Services - Sod Installation" 
      />

      <div className="sod-page">
        <div className="sod-container">
          
          {/* Back Button */}
          <button onClick={() => router.back()} className="back-btn">
            <FaArrowLeft /> Back
          </button>

          {/* HERO */}
          <section className="sod-hero-new">
            <h2>Sod Installation in Reading, PA</h2>
            <p>
              Professional sod installation with proper soil preparation,
              grading, and fresh sod for a healthy, long-lasting lawn.
            </p>

            <div className="sod-hero-cta">
              <a className="sod-btn" href={`tel:${PHONE_TEL}`}>
                <FaPhoneAlt /> Call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="sod-strip">
              <div className="sod-chip"><FaCheckCircle /> Proper Base Prep</div>
              <div className="sod-chip"><FaLeaf /> Fresh Sod</div>
              <div className="sod-chip"><FaTools /> Clean Installation</div>
            </div>
          </section>

          {/* BEFORE / AFTER SLIDER */}
          {/* Note: We cast the style to 'any' to allow the CSS variable --reveal */}
          <section className="ba-wrap" style={{ "--reveal": reveal } as any}>
            <div className="ba-top">
              <div className="ba-title">
                <FaExchangeAlt /> Before / After Result
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={reveal}
                onChange={(e) => setReveal(Number(e.target.value))}
                style={{ width: "200px" }}
              />
            </div>

            <div className="ba-stage">
              <img src={BEFORE_AFTER.before} alt="Before sod installation" />
              <img src={BEFORE_AFTER.after} alt="After sod installation" className="ba-after" />
              <div className="ba-divider" />
              <div className="ba-knob">↔</div>
            </div>
          </section>

          {/* SEO CONTENT */}
          <section className="sod-seo">
            <h2>🌱 Professional Sod Installation Services</h2>
            <div className="sub">Serving Reading and Nearby Berks County Communities</div>

            <p>
              We provide professional sod installation services designed to exceed your expectations and
              deliver a lush, healthy lawn you can enjoy almost immediately. Sod is made up of natural grass
              and a thin layer of soil, held together by a strong root system or biodegradable material.
            </p>
            <p>
              Our highly trained team uses modern tools, proven installation methods, and industry best
              practices to ensure your new sod establishes quickly and grows evenly. We guide you through
              every step, explaining what to do, what to avoid, and how to care for fresh sod.
            </p>

            <h3>🌿 Why Choose Sod Installation?</h3>

            <div className="sod-benefits">
              <div className="sod-benefit">
                <FaCheckCircle />
                <div>
                  <strong>Instant Green Lawn</strong>
                  Enjoy a beautiful lawn within two weeks instead of waiting months.
                </div>
              </div>

              <div className="sod-benefit">
                <FaCheckCircle />
                <div>
                  <strong>Ideal for Active Yards</strong>
                  Perfect for kids, pets, and entertaining.
                </div>
              </div>

              <div className="sod-benefit">
                <FaCheckCircle />
                <div>
                  <strong>Reduced Water Usage</strong>
                  Requires less long-term watering compared to seeded lawns.
                </div>
              </div>

              <div className="sod-benefit">
                <FaCheckCircle />
                <div>
                  <strong>Dense & Uniform Growth</strong>
                  Creates a level lawn with fewer weak spots.
                </div>
              </div>

              <div className="sod-benefit">
                <FaCheckCircle />
                <div>
                  <strong>Prevents Soil Erosion</strong>
                  Reduces dust, mud, and erosion immediately.
                </div>
              </div>
            </div>

            {/* CALL TO ACTION BAR */}
            <div className="sod-cta-bar">
              <div className="cta-left">
                <FaPhoneAlt className="cta-icon" />
                <p>
                  Contact <strong>{BRAND_NAME}</strong> today to schedule
                  high-quality sod installation and professional lawn management.
                </p>
              </div>

              <a href={`tel:${PHONE_TEL}`} className="cta-call-btn">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SodInstallation;