"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Updated hook
import Link from "next/link";
import { FaPhoneAlt, FaCheckCircle, FaLeaf, FaDog, FaGolfBall, FaArrowLeft, FaWater } from "react-icons/fa";

// --- COMPONENTS ---
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"; 

// --- IMAGES ---
const breadcrumbBg = "/images/breadcrumb/1.jpg"; 
const turfImg = "/images/breadcrumb/1.jpg";

// --- CONSTANTS ---
const BRAND_NAME = "Rolax Landscaping Reading";
const PHONE_DISPLAY = "(647) 916-6654";
const PHONE_TEL = "+16479166654";

const ArtificialTurf = () => {
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
    serviceType: ["Artificial Turf", "Synthetic Grass", "Putting Greens"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style jsx>{`
        .turf-page { padding: 70px 0 90px; background: #fff; }
        .turf-container { width: min(1100px, calc(100% - 40px)); margin: 0 auto; }

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
        .turf-hero h1 {
          margin: 0 0 10px;
          font-size: 44px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.4px;
        }
        .turf-hero p {
          margin: 0 0 18px;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 600;
          color: #475569;
          max-width: 820px;
        }

        .turf-call-btn {
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
        .turf-call-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.18);
        }

        /* POINTS */
        .turf-points {
          margin-top: 18px;
          display: grid;
          gap: 10px;
          max-width: 860px;
        }
        .turf-point {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-weight: 650;
          color: #334155;
          line-height: 1.6;
        }
        .turf-point svg {
          margin-top: 4px;
          color: #16a34a;
          flex: 0 0 auto;
        }

        /* IMAGE */
        .turf-image {
          margin-top: 30px;
          display: flex;
          justify-content: center;
        }
        .turf-image img {
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
        .turf-section { margin-top: 40px; }
        .turf-section h2 {
          margin: 0 0 10px;
          font-size: 24px;
          font-weight: 900;
          color: #0f172a;
        }
        .turf-section p {
          margin: 0 0 12px;
          color: #475569;
          font-weight: 600;
          line-height: 1.75;
          max-width: 900px;
        }

        /* GRID */
        .turf-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .turf-card {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          background: #fff;
          transition: transform 0.2s ease;
        }
        .turf-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .turf-card h3 {
          margin: 0 0 8px;
          font-weight: 900;
          font-size: 18px;
          color: #0f172a;
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .turf-card p {
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
          .turf-page { padding: 60px 0 70px; }
          .turf-hero h1 { font-size: 32px; }
          .turf-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Breadcrumb */}
      <Breadcrumb 
        breadcrumbBg={breadcrumbBg}
        heading="Artificial Turf Services" 
        description="Low Maintenance, Always Green"
        currentPage="Services - Artificial Turf" 
      />

      <div className="turf-page">
        <div className="turf-container">

          {/* Back Button */}
          <button onClick={() => router.back()} className="back-btn">
            <FaArrowLeft /> Back
          </button>

          {/* HERO */}
          <section className="turf-hero">
            <h2>Artificial Turf Installation in Reading, PA</h2>
            <p>
              Get a lush, green lawn all year round with zero maintenance. 
              Our premium artificial turf is perfect for backyards, dog runs, balconies, and playgrounds. 
              No watering, no mowing, just a perfect lawn instantly.
            </p>

            <a className="turf-call-btn" href={`tel:${PHONE_TEL}`}>
              <FaPhoneAlt /> Call {PHONE_DISPLAY}
            </a>

            <div className="turf-points">
              <div className="turf-point">
                <FaLeaf /> Looks and feels like real grass (Evergreen)
              </div>
              <div className="turf-point">
                <FaDog /> 100% Pet-friendly and easy to clean
              </div>
              <div className="turf-point">
                <FaWater /> No watering or mowing required (Eco-friendly)
              </div>
              <div className="turf-point">
                <FaCheckCircle /> 15+ Year durability with proper installation
              </div>
            </div>
          </section>

          {/* IMAGE */}
          <section className="turf-image">
            <img
              ref={imageRef}
              className="fade-up"
              src={turfImg}
              alt="Artificial turf installation in Reading, PA"
              loading="lazy"
            />
          </section>

          {/* SERVICES */}
          <section className="turf-section">
            <h2>Synthetic Grass Services We Offer</h2>
            <p>
              We don't just roll out a carpet. We excavate, install a proper drainage base, 
              and secure the turf for a long-lasting, wrinkle-free finish.
            </p>

            <div className="turf-grid">
              <div className="turf-card">
                <h3><FaLeaf /> Residential Lawns</h3>
                <p>Replace your patchy front or backyard grass with flawless, soft synthetic turf.</p>
              </div>
              <div className="turf-card">
                <h3><FaDog /> Pet Turf & Dog Runs</h3>
                <p>Durable, non-toxic turf designed for easy waste cleanup and drainage.</p>
              </div>
              <div className="turf-card">
                <h3><FaGolfBall /> Putting Greens</h3>
                <p>Custom backyard putting greens with professional-grade roll and speed.</p>
              </div>
              <div className="turf-card">
                <h3><FaCheckCircle /> Balcony & Rooftop</h3>
                <p>Transform concrete spaces into green retreats with lightweight turf solutions.</p>
              </div>
            </div>
          </section>

          {/* SEO CONTENT */}
          <section className="turf-section">
            <h2>Why Choose Artificial Turf?</h2>
            <p>
              Pennsylvania weather can be tough on natural grass. Artificial turf eliminates mud,
              yellow spots from pets, and the need for fertilizers. It drains water efficiently
              and stays green even during winter, boosting your curb appeal instantly.
            </p>

            <h2 style={{ marginTop: 24 }}>Areas We Serve</h2>
            <p>
              Reading, Wyomissing, West Reading, Shillington, Sinking Spring,
              Muhlenberg, and nearby Berks County communities.
            </p>
          </section>

          {/* FAQ */}
          <section className="turf-section">
            <h2>Artificial Turf FAQ</h2>
            <div className="faq">
              <details>
                <summary>Is artificial turf safe for kids and pets?</summary>
                <p>Yes! We use high-quality, non-toxic turf that is lead-free and safe for children and animals.</p>
              </details>
              <details>
                <summary>How does drainage work?</summary>
                <p>Our installation includes a crushed stone base and perforated turf backing, allowing water to drain through faster than natural soil.</p>
              </details>
              <details>
                <summary>How long does it last?</summary>
                <p>With proper installation and care, high-quality synthetic grass can last 15 to 20 years.</p>
              </details>
              <details>
                <summary>Does it get hot in the summer?</summary>
                <p>Synthetic grass can get warmer than natural grass, but we use modern turf technology designed to stay cooler, and a quick spray of water cools it down instantly.</p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="turf-section">
            <h2>Get a Free Artificial Turf Quote</h2>
            <p>
              Contact <strong>{BRAND_NAME}</strong> today to see samples and get an estimate.
              We’ll help you design the perfect maintenance-free green space.
            </p>
            <a className="turf-call-btn" href={`tel:${PHONE_TEL}`}>
              <FaPhoneAlt /> Call {PHONE_DISPLAY}
            </a>
          </section>

        </div>
      </div>
    </>
  );
};

export default ArtificialTurf;