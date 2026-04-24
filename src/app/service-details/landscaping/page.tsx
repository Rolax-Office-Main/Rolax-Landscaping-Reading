"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Updated hook
import Link from "next/link";
import {
  FaDraftingCompass,
  FaSeedling,
  FaLeaf,
  FaBorderAll,
  FaPhoneAlt,
  FaArrowLeft,
} from "react-icons/fa";

// --- COMPONENTS ---
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"; 

// --- IMAGES ---
const breadcrumbBg = "/images/breadcrumb/1.jpg"; 

// Placeholder Images
const designImg = "/images/PLANNING.jpg";
const installImg = "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80";
const maintainImg = "/images/Maintenance.jpg";
const hardscapeImg = "/images/Hardscape.jpg";

const PHONE_DISPLAY = "(647) 916-6654";
const PHONE_TEL = "+16479166654";

const LandscapingServiceInclude = () => {
  const router = useRouter(); // Next.js Router

  return (
    <>
      <style jsx>{`
        .ls-page { padding: 70px 0 90px; background: #fff; }
        .ls-container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }

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
        .ls-hero {
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          height: 420px;
          box-shadow: 0 18px 55px rgba(0,0,0,.15);
        }
        .ls-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ls-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,.55);
        }
        .ls-hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          color: #fff;
          z-index: 2;
        }
        .ls-hero-content h1 {
          font-size: 52px;
          font-weight: 900;
          margin: 0 0 10px;
        }
        .ls-hero-content p {
          max-width: 800px;
          font-weight: 600;
          line-height: 1.6;
        }

        /* SERVICES */
        .ls-services {
          margin-top: 50px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
        }
        .ls-service {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(0,0,0,.08);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
          border: 1px solid #f3f4f6;
        }
        .ls-service:hover {
          transform: translateY(-5px);
        }
        .ls-service img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }
        .ls-service-body {
          padding: 22px;
        }
        .ls-service h3 {
          margin: 0 0 8px;
          font-size: 20px;
          font-weight: 900;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ls-service p {
          color: #374151;
          font-weight: 600;
          line-height: 1.7;
          margin: 0 0 14px;
        }
        .ls-call {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #eaf6ef;
          color: #064e3b;
          padding: 10px 14px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
          border: 1px solid rgba(6,78,59,.2);
          transition: background 0.2s ease;
        }
        .ls-call:hover {
          background: #dcfce7;
        }

        @media(max-width:900px) {
          .ls-services { grid-template-columns: 1fr; }
          .ls-hero-content h1 { font-size: 36px; }
        }
      `}</style>
        
      {/* Breadcrumb */}
      <Breadcrumb 
        breadcrumbBg={breadcrumbBg}
        heading="Landscaping Services" 
        description="Design, Installation & Maintenance"
        currentPage="Services - Landscaping" 
      />

      <div className="ls-page">
        <div className="ls-container">
          
          {/* BACK BUTTON */}
          <button onClick={() => router.back()} className="back-btn">
            <FaArrowLeft /> Back
          </button>
          
          {/* PAGE TITLE */}
          <div style={{textAlign: "center", marginBottom: "50px"}}>
             <h2 style={{fontSize:"42px", fontWeight:"900", marginBottom:"15px", color: "#111827"}}>Landscaping Services</h2>
             <p style={{maxWidth:"700px", margin:"0 auto", fontSize:"18px", lineHeight:"1.6", color:"#555"}}>
               Professional landscaping, maintenance, and outdoor upgrades designed for Reading-area homes and
               businesses. Clean work, clear communication, and results that last.
             </p>
          </div>

          {/* SERVICES GRID */}
          <section className="ls-services">

            <div className="ls-service">
              <img src={designImg} alt="Landscape Design and Planning" />
              <div className="ls-service-body">
                <h3><FaDraftingCompass /> Landscape Design & Planning</h3>
                <p>
                  Custom landscape designs tailored to your style and Reading-area
                  climate, improving curb appeal and property value.
                </p>
                <a className="ls-call" href={`tel:${PHONE_TEL}`}>
                  <FaPhoneAlt /> Free Estimates — {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="ls-service">
              <img src={installImg} alt="Landscape Installation" />
              <div className="ls-service-body">
                <h3><FaSeedling /> Landscape Installation</h3>
                <p>
                  Expert installation of plants, trees, sod, mulch, and complete
                  landscape systems done right from start to finish.
                </p>
                <a className="ls-call" href={`tel:${PHONE_TEL}`}>
                  <FaPhoneAlt /> Free Estimates — {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="ls-service">
              <img src={maintainImg} alt="Landscape Maintenance" />
              <div className="ls-service-body">
                <h3><FaLeaf /> Landscape Maintenance</h3>
                <p>
                  Year-round care including pruning, weeding, mulching,
                  fertilizing, and seasonal cleanups.
                </p>
                <a className="ls-call" href={`tel:${PHONE_TEL}`}>
                  <FaPhoneAlt /> Free Estimates — {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="ls-service">
              <img src={hardscapeImg} alt="Hardscape Integration" />
              <div className="ls-service-body">
                <h3><FaBorderAll /> Hardscape Integration</h3>
                <p>
                  Patios, walkways, and retaining walls blended seamlessly with
                  landscaping for complete outdoor living spaces.
                </p>
                <a className="ls-call" href={`tel:${PHONE_TEL}`}>
                  <FaPhoneAlt /> Free Estimates — {PHONE_DISPLAY}
                </a>
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  );
};

export default LandscapingServiceInclude;