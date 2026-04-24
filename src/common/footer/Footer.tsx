"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaHome,
  FaArrowUp
} from "react-icons/fa";

// KEYS from Environment Variables
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setMessage("");

    const templateParams = {
      name: "Newsletter Subscriber",
      email: email,
      phone: "N/A",
      service: "Newsletter Subscription",
      address: "N/A",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          setMessage("✅ Subscribed successfully!");
          setEmail("");
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
          setMessage("❌ Failed. Try again.");
        }
      );
  };

  return (
    <>
      <style jsx>{`
        .rlx-footer { background: #23272f; color: #e5e7eb; padding: 70px 0 20px; }
        .rlx-footer h4 { color: #fff; font-weight: 800; font-size: 20px; margin: 0 0 18px; }
        .rlx-footer p { color: #cbd5e1; margin: 0 0 18px; line-height: 1.6; font-size: 15px; }
        
        .brand { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .brand img { max-height: 58px; width: auto; display: block; }
        
        .contact-list { display: flex; flex-direction: column; gap: 12px; margin-top: 8px; }
        .contact-item { display: flex; align-items: flex-start; gap: 12px; color: #e5e7eb; text-decoration: none; font-size: 15px; }
        .contact-item svg { color: #16a34a; margin-top: 3px; flex: 0 0 auto; }
        
        .list-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
        .list-links a { color: #e5e7eb; text-decoration: none; display: flex; align-items: center; gap: 10px; font-size: 15px; }
        .list-links a::before { content: "›"; color: #16a34a; font-weight: 900; font-size: 18px; line-height: 1; transform: translateY(-1px); }
        .list-links a:hover { color: #fbbf24; }
        
        .newsletter-box { display: flex; align-items: center; gap: 12px; margin-top: 10px; }
        .newsletter-box input { width: 100%; max-width: 340px; height: 52px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.12); background: #fff; padding: 0 16px; outline: none; font-size: 15px; color: #333; }
        .newsletter-box button { height: 52px; padding: 0 26px; border: none; border-radius: 6px; background: #16a34a; color: #0b1220; font-weight: 800; cursor: pointer; white-space: nowrap; transition: opacity 0.2s; }
        .newsletter-box button:hover { opacity: 0.92; }
        .newsletter-box button:disabled { opacity: 0.6; cursor: not-allowed; }
        
        .stay-text { margin-top: 18px; color: #cbd5e1; font-size: 15px; }
        .newsletter-msg { margin-top: 10px; font-size: 14px; font-weight: 700; }
        
        .social-row { display: flex; align-items: center; gap: 14px; margin-top: 18px; flex-wrap: wrap; }
        .soc { width: 44px; height: 44px; border-radius: 50%; background: #16a34a; display: flex; align-items: center; justify-content: center; color: #fff; text-decoration: none; transition: all .25s ease; }
        .soc svg { width: 18px; height: 18px; }
        .soc:hover { background: #1f2937; transform: translateY(-2px); }
        
        .footer-bottom-row { border-top: 1px solid rgba(255,255,255,0.08); margin-top: 40px; padding-top: 18px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .footer-bottom-row p { margin: 0; color: #e5e7eb; font-size: 14px; }
        .footer-bottom-row .hl { color: #fbbf24; font-weight: 800; }
        
        @media(max-width:992px){
          .newsletter-box { flex-direction: column; align-items: stretch; }
          .newsletter-box input { max-width: 100%; }
          .newsletter-box button { width: 140px; }
        }
      `}</style>

      <footer className="rlx-footer">
        <div className="container">
          <div className="row">
            {/* LEFT */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="brand">
                {/* Note: Path starts from public folder */}
                  <Image 
                    src="/images/rolax-logo.jpg"
                    alt="Rolax Landscaping" 
                    width={200}
                    height={58}
                    style={{ objectFit: 'contain' }}
                  />
              </div>

              <p>We offer services in Reading, PA.</p>

              <div className="contact-list">
                <a className="contact-item" href="https://www.google.com/maps/dir/?api=1&destination=33+Saratoga+Drive,+Scarborough,+ON+M1P+4H8" target="_blank" rel="noreferrer">
                  <FaMapMarkerAlt />
                  <span>Reading, PA</span>
                </a>

                <a className="contact-item" href="mailto:Rolaxlandscapingreading@gmail.com">
                  <FaEnvelope />
                  <span>Rolaxlandscapingreading@gmail.com</span>
                </a>

                <a className="contact-item" href="tel:+16479166654">
                  <FaPhoneAlt />
                  <span>(647)-916-6654</span>
                </a>
              </div>
            </div>

            {/* OTHER PAGES */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
              <h4>Other Pages</h4>
              <ul className="list-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/projects">Service Locations</Link></li>
                <li><Link href="/blogs">Landscaping Blog</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Get a Quote</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service">Terms of Service</Link></li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
              <h4>Quick Links</h4>
              <ul className="list-links">
                <li><Link href="/service-details/mulch-installation">Mulch Installation</Link></li>
                      <li><Link href="/service-details/sod-installation">Sod Installation</Link></li>
                      <li><Link href="/service-details/landscaping">Landscaping</Link></li>
                      <li><Link href="/service-details/snow-removal">Snow Removal</Link></li>
                      <li><Link href="/service-details/tree-service">Tree Service</Link></li>
                      <li><Link href="/service-details/hardscaping">Hardscaping</Link></li>
                      <li><Link href="/service-details/artificial-turf">Artificial Turf</Link></li>
                      <li><Link href="/service-details/home-remodelling">Home Remodelling</Link></li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <h4>Newsletter</h4>

              <form className="newsletter-box" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" disabled={loading}>
                  {loading ? "..." : "Send"}
                </button>
              </form>

              {message && (
                <div 
                  className="newsletter-msg" 
                  style={{ color: message.includes("✅") ? "#4ade80" : "#ef4444" }}
                >
                  {message}
                </div>
              )}

              <div className="stay-text">Stay connected with us.</div>

              <div className="social-row">
                <a className="soc" href="https://www.facebook.com/rolaxlandscaping" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a className="soc" href="https://www.instagram.com/rolaxlandscaping" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                {/* Fixed the 'Top' link to scroll smoothly */}
                <a className="soc" href="#" aria-label="Top" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
                  <FaArrowUp />
                </a>
                <Link className="soc" href="/" aria-label="Home">
                  <FaHome />
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="footer-bottom-row">
            <p>
              © Copyright 2026 <span className="hl">Rolax Landscaping.</span>
            </p>
            <p>
              All rights reserved to <span className="hl">Rolax Landscaping.</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;