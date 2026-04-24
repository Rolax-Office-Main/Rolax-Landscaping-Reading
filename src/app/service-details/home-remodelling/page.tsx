"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaPhoneAlt,
  FaArrowLeft,
  FaDraftingCompass,
  FaHardHat,
  FaCheckCircle,
  FaRulerCombined,
  FaTools,
  FaArrowRight
} from "react-icons/fa";

// --- COMPONENTS ---
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";


// --- CONSTANTS ---
const BRAND_NAME = "Rolax Landscaping & Renovation";
const PHONE_DISPLAY = "(647) 916-6654";
const PHONE_TEL = "+16479166654";

// --- IMAGES (Keep these placeholders or update paths) ---
const breadcrumbBg = "/images/breadcrumb/1.jpg"; 
const heroImage = "/images/remodelling.jpeg"; 
const aboutImage = "/images/modern renovation.png"; 
const imgKitchen = "/images/modern kitechen.jpg ";
const imgBath = "/images/modern-bathroom.jpg";
const imgBasement = "/images/basement.jpg";

const HomeRemodelling = () => {
  const router = useRouter();

  return (
    <>
      <style jsx>{`
        /* --- GLOBAL BEAUTY --- */
        .remodel-page { background: #fdfdfd; color: #333; padding-bottom: 100px; font-family: sans-serif; }
        .container { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
        
        h1, h2, h3 { color: #111827; letter-spacing: -0.02em; }
        p { color: #52525b; line-height: 1.8; font-size: 16px; margin-bottom: 20px; }

        /* BACK BUTTON */
        .back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid #e5e7eb; color: #6b7280;
          padding: 10px 20px; border-radius: 50px;
          font-weight: 600; font-size: 14px; cursor: pointer;
          margin: 40px 0 30px; transition: all 0.2s ease;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .back-btn:hover { color: #16a34a; border-color: #16a34a; transform: translateX(-3px); }

        /* --- 1. HERO SECTION (GLASS EFFECT) --- */
        .hero-section {
          position: relative;
          height: 520px;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          align-items: center;
          margin-bottom: 100px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-image: url('${heroImage}');
          background-size: cover;
          background-position: center;
          z-index: 1;
          transition: transform 10s ease;
        }
        .hero-section:hover .hero-bg { transform: scale(1.05); } /* Subtle zoom */
        
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
          z-index: 2;
        }
        
        .hero-card {
          position: relative; z-index: 3;
          background: rgba(255, 255, 255, 0.95); /* Glass card */
          backdrop-filter: blur(10px);
          padding: 50px;
          border-radius: 0 20px 20px 0;
          max-width: 600px;
          margin-left: 0; /* Align left */
          box-shadow: 10px 0 30px rgba(0,0,0,0.1);
          border-right: 4px solid #16a34a;
        }
        .hero-card h1 { font-size: 42px; font-weight: 900; margin-bottom: 16px; color: #111; line-height: 1.1; }
        .hero-card p { font-size: 18px; color: #444; margin-bottom: 24px; }
        
        .btn-primary {
          background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
          color: #fff; padding: 16px 32px; border-radius: 12px;
          font-weight: 700; text-decoration: none;
          display: inline-flex; align-items: center; gap: 10px;
          box-shadow: 0 10px 20px rgba(22, 163, 74, 0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(22, 163, 74, 0.4); }

        /* --- 2. INTRO (Clean Layout) --- */
        .intro-wrap {
          display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px;
          align-items: center; margin-bottom: 120px;
        }
        .intro-img {
          position: relative;
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
        .intro-img img { width: 100%; display: block; }
        .intro-badge {
          position: absolute; bottom: 30px; left: 30px;
          background: #fff; padding: 20px; border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          display: flex; align-items: center; gap: 15px;
        }
        .badge-icon { color: #16a34a; font-size: 24px; }
        .badge-text strong { display: block; color: #111; font-size: 18px; }
        .badge-text span { font-size: 13px; color: #666; }

        .intro-content h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; }
        .features { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px; }
        .feat-item { display: flex; align-items: center; gap: 12px; font-weight: 600; color: #374151; }
        .feat-item svg { color: #16a34a; background: #dcfce7; padding: 4px; border-radius: 50%; font-size: 20px; }

        /* --- 3. SERVICES (Cards that Pop) --- */
        .section-head { text-align: center; margin-bottom: 60px; }
        .section-head h2 { font-size: 38px; font-weight: 800; margin-bottom: 15px; }
        .section-head p { max-width: 600px; margin: 0 auto; color: #6b7280; font-size: 18px; }

        .services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;
          margin-bottom: 120px;
        }
        .srv-card {
          background: #fff; border-radius: 20px; overflow: hidden;
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
          position: relative;
        }
        .srv-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          border-color: transparent;
        }
        .srv-img { height: 260px; overflow: hidden; }
        .srv-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .srv-card:hover .srv-img img { transform: scale(1.1); }
        
        .srv-body { padding: 30px; }
        .srv-body h3 { font-size: 22px; font-weight: 700; margin-bottom: 12px; }
        .srv-link {
          color: #16a34a; font-weight: 700; font-size: 14px; 
          display: flex; align-items: center; gap: 6px; margin-top: 15px;
        }
        
        /* --- 4. PROCESS (Timeline) --- */
        .process-container {
          background: #111827;
          border-radius: 24px;
          padding: 80px 60px;
          color: #fff;
          margin-bottom: 100px;
          position: relative;
          overflow: hidden;
        }
        /* Abstract background circle */
        .process-container::before {
          content: ''; position: absolute; top: -100px; right: -100px;
          width: 300px; height: 300px; background: rgba(22, 163, 74, 0.1);
          border-radius: 50%; blur(50px);
        }

        .process-steps {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px;
          position: relative; z-index: 2;
        }
        .step { text-align: center; }
        .step-icon {
          width: 72px; height: 72px; margin: 0 auto 24px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px; display: flex; align-items: center; justify-content: center;
          font-size: 28px; color: #4ade80;
          transition: transform 0.3s;
        }
        .step:hover .step-icon { transform: rotate(10deg) scale(1.1); background: rgba(255,255,255,0.15); }
        .step h4 { color: #fff; font-size: 18px; margin-bottom: 10px; }
        .step p { color: #9ca3af; font-size: 14px; }

        /* --- 5. CTA (Gradient) --- */
        .cta-box {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 24px; padding: 60px;
          text-align: center; color: #fff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .cta-box h2 { color: #fff; font-size: 36px; margin-bottom: 20px; }
        .cta-box p { color: #cbd5e1; font-size: 18px; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .btn-white {
          background: #fff; color: #111; padding: 16px 32px; border-radius: 12px;
          font-weight: 700; text-decoration: none;
          display: inline-flex; align-items: center; gap: 10px;
          transition: transform 0.2s;
        }
        .btn-white:hover { transform: translateY(-3px); }

        /* RESPONSIVE */
        @media(max-width: 900px) {
          .hero-card { max-width: 100%; border-radius: 20px; margin: 20px; border: none; }
          .hero-section { height: auto; display: block; }
          .intro-wrap { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: 1fr 1fr; gap: 50px; }
        }
        @media(max-width: 600px) {
          .process-steps { grid-template-columns: 1fr; }
        }
      `}</style>

      <Breadcrumb 
        breadcrumbBg={breadcrumbBg}
        heading="Home Remodelling" 
        description="Crafting Beautiful Living Spaces"
        currentPage="Home Remodelling" 
      />

      <div className="remodel-page">
        <div className="container">
          
          <button onClick={() => router.back()} className="back-btn">
            <FaArrowLeft /> Back to Services
          </button>

          {/* 1. HERO SECTION */}
          <section className="hero-section">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            <div className="hero-card">
              <h1>Redefine Your Living Space.</h1>
              <p>
                From luxury kitchen upgrades to complete structural renovations,
                we bring modern design and master craftsmanship to your home.
              </p>
              <a href={`tel:${PHONE_TEL}`} className="btn-primary">
                <FaPhoneAlt /> Get a Free Quote
              </a>
            </div>
          </section>

          {/* 2. INTRO SECTION */}
          <section className="intro-wrap">
            <div className="intro-img">
              {/* 🔴 IMAGE HERE */}
              <Image src={aboutImage} alt="Modern renovation interior" width={900} height={600} />
              <div className="intro-badge">
                <div className="badge-icon"><FaCheckCircle /></div>
                <div className="badge-text">
                  <strong>Licensed & Insured</strong>
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
            
            <div className="intro-content">
              <h2>We Build Homes,<br />Not Just Rooms.</h2>
              <p>
                Your home is your sanctuary. At {BRAND_NAME}, we understand that remodelling 
                is a personal journey. We don't just replace tiles; we reimagine how you live.
              </p>
              <p>
                Whether you dream of a chef’s kitchen, a spa-inspired bathroom, or a 
                legal basement suite for extra income, our team handles every detail from 
                permits to the final coat of paint.
              </p>
              
              <div className="features">
                <div className="feat-item"><FaTools /> Precision Build</div>
                <div className="feat-item"><FaHardHat /> Expert Team</div>
                <div className="feat-item"><FaRulerCombined /> Custom Design</div>
                <div className="feat-item"><FaCheckCircle /> On-Time Delivery</div>
              </div>
            </div>
          </section>

          {/* 3. SERVICES GRID */}
          <section className="section-head">
            <h2>Our Expertise</h2>
            <p>We specialize in high-value renovations that transform properties.</p>
          </section>

          <div className="services-grid">
            {/* Card 1 */}
            <div className="srv-card">
              <div className="srv-img">
                <Image src={imgKitchen} alt="Kitchen renovation" width={800} height={520} />
              </div>
              <div className="srv-body">
                <h3>Kitchen Renovations</h3>
                <p>Open-concept layouts, custom islands, quartz countertops, and modern cabinetry.</p>
                {/* <div className="srv-link">Explore Kitchens <FaArrowRight /></div> */}
              </div>
            </div>

            {/* Card 2 */}
            <div className="srv-card">
              <div className="srv-img">
                <Image src={imgBath} alt="Bathroom renovation" width={800} height={520} />
              </div>
              <div className="srv-body">
                <h3>Bathroom Upgrades</h3>
                <p>Walk-in showers, heated floors, freestanding tubs, and luxury tiling.</p>
                {/* <div className="srv-link">Explore Bathrooms <FaArrowRight /></div> */}
              </div>
            </div>

            {/* Card 3 */}
            <div className="srv-card">
              <div className="srv-img">
                <Image src={imgBasement} alt="Basement renovation" width={800} height={520} />
              </div>
              <div className="srv-body">
                <h3>Basement Finishing</h3>
                <p>Legal rental suites, home theaters, gyms, or extra family living space.</p>
                {/* <div className="srv-link">Explore Basements <FaArrowRight /></div> */}
              </div>
            </div>
          </div>

          {/* 4. PROCESS DARK SECTION */}
          <div className="process-container">
            <div className="section-head" style={{marginBottom: '50px'}}>
              <h2 style={{color: '#fff'}}>How We Work</h2>
              <p style={{color: '#9ca3af'}}>A seamless experience from concept to completion.</p>
            </div>

            <div className="process-steps">
              <div className="step">
                <div className="step-icon"><FaDraftingCompass /></div>
                <h4>1. Consultation</h4>
                <p>We meet to discuss your vision, budget, and timeline.</p>
              </div>
              <div className="step">
                <div className="step-icon"><FaRulerCombined /></div>
                <h4>2. Design & Plan</h4>
                <p>We handle measurements, 3D designs, and permits.</p>
              </div>
              <div className="step">
                <div className="step-icon"><FaTools /></div>
                <h4>3. Construction</h4>
                <p>Our skilled tradespeople build with minimal disruption.</p>
              </div>
              <div className="step">
                <div className="step-icon"><FaCheckCircle /></div>
                <h4>4. Final Reveal</h4>
                <p>We clean up and walk you through your new space.</p>
              </div>
            </div>
          </div>

          {/* 5. CTA BOX */}
          <div className="cta-box">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Don't settle for ordinary. Contact us today for a free consultation 
              and let's build something extraordinary together.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="btn-white">
              Call {PHONE_DISPLAY}
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeRemodelling;