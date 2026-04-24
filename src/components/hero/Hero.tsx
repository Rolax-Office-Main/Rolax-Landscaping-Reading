// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import emailjs from "@emailjs/browser";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// // KEYS from Environment Variables
// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
// const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
// const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

// const Hero = () => {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     address: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   // Handler for normal inputs
//   const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
//   };

//   // Handler specifically for the Phone Input
//   const onPhoneChange = (value: string, country: any, e: React.ChangeEvent<HTMLInputElement>, formattedValue: string) => {
//     setForm((p) => ({ ...p, phone: formattedValue }));
//   };

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");
//     setError("");

//     // --- VALIDATION: Minimum Phone Length ---
//     const rawNumber = form.phone.replace(/[^0-9]/g, "");

//     // Check if empty or too short (e.g., less than 8 digits including country code)
//     if (!form.phone || rawNumber.length < 8) {
//       setError("❌ Please enter a valid phone number.");
//       setLoading(false);
//       return;
//     }

//     emailjs
//       .send(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         {
//           name: form.name,
//           phone: form.phone,
//           email: form.email,
//           service: form.service,
//           address: form.address,
//         },
//         PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setSuccess("✅ Quote request sent successfully!");
//           setForm({ name: "", phone: "", email: "", service: "", address: "" });
//           setLoading(false);
//         },
//         (err) => {
//           console.error("EmailJS error:", err);
//           setError(`❌ Failed to send: ${err?.text || "Please try again."}`);
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <>
//       <style jsx>{`
//         .rlx-hero { position: relative; min-height: 760px; display: flex; align-items: center; background-size: cover; background-position: center; overflow: hidden; }
//         .rlx-hero::before { content: ""; position: absolute; inset: 0; background: rgba(0,0,0,0.55); z-index: 0; }
//         .rlx-hero .container { position: relative; z-index: 1; }
        
//         .rlx-hero-row { display: flex; align-items: center; gap: 28px; }
//         .rlx-hero-left { flex: 1; max-width: 640px; }
        
//         .rlx-title-green { margin: 0 0 10px; color: #16a34a; font-weight: 900; font-size: 56px; line-height: 1.08; }
//         .rlx-title-white { margin: 0 0 14px; color: #ffffff; font-weight: 900; font-size: 52px; line-height: 1.05; }
//         .rlx-hero-desc { margin: 0 0 24px; color: rgba(255,255,255,0.92); font-size: 16px; line-height: 1.65; max-width: 520px; }
        
//         .l-btn { display: inline-block; background-color: #16a34a; color: white; padding: 15px 30px; border-radius: 30px; font-weight: bold; text-decoration: none; transition: background 0.3s; }
//         .l-btn:hover { background-color: #15803d; color: white; }
        
//         .rlx-hero-card { width: 520px; max-width: 100%; background: #ffffff; border-radius: 22px; padding: 26px 26px 22px; box-shadow: 0 22px 60px rgba(0,0,0,0.25); }
//         .rlx-field { margin-bottom: 14px; }
//         .rlx-label { display: flex; gap: 6px; font-weight: 800; color: #111827; font-size: 14px; margin-bottom: 8px; }
//         .rlx-star { color: #ef4444; }
        
//         .rlx-input, .rlx-select, .rlx-textarea { width: 100%; height: 46px; border-radius: 999px; border: 1px solid rgba(0,0,0,0.12); padding: 0 16px; font-size: 14px; outline: none; background: #fff; }
//         .rlx-textarea { height: 90px; border-radius: 18px; padding: 12px 16px; resize: none; }
        
//         .rlx-submit { width: 100%; height: 54px; border-radius: 999px; border: none; background: #16a34a; color: #fff; font-weight: 900; cursor: pointer; margin-top: 6px; transition: transform 180ms ease, opacity 180ms ease; }
//         .rlx-submit:hover { transform: translateY(-2px); opacity: 0.95; }
//         .rlx-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        
//         .rlx-msg-success { margin: 12px 0 0; color: #16a34a; font-weight: 800; font-size: 14px; text-align: center; }
//         .rlx-msg-error { margin: 12px 0 0; color: #dc2626; font-weight: 800; font-size: 14px; text-align: center; }
        
//         @media (max-width: 992px) {
//           .rlx-hero { min-height: auto; padding: 60px 0; }
//           .rlx-hero-row { flex-direction: column; align-items: stretch; }
//           .rlx-title-green { font-size: 42px; }
//           .rlx-title-white { font-size: 40px; }
//           .rlx-hero-card { width: 100%; }
//         }
//         @media (max-width: 576px) {
//           .rlx-title-green { font-size: 34px; }
//           .rlx-title-white { font-size: 32px; }
//         }
//       `}</style>
      
//       {/* PHONE INPUT OVERRIDES (Global css doesn't always catch these in styled-jsx) */}
//       <style jsx global>{`
//          .react-tel-input .form-control { width: 100% !important; height: 46px !important; border-radius: 999px !important; border: 1px solid rgba(0,0,0,0.12) !important; padding-left: 58px !important; font-size: 14px !important; }
//          .react-tel-input .flag-dropdown { border-radius: 999px 0 0 999px !important; border: 1px solid rgba(0,0,0,0.12) !important; border-right: none !important; background: transparent !important; }
//          .react-tel-input .selected-flag { border-radius: 999px 0 0 999px !important; padding-left: 12px !important; }
//       `}</style>

//       {/* Note: Update the path below to match where you put your image in the public folder */}
//       <section className="rlx-hero" style={{ backgroundImage: `url('/images/hero/hero2.jpg')` }}>
//         <div className="container">
//           <div className="rlx-hero-row">
//             <div className="rlx-hero-left">
//               <h1 className="rlx-title-green">
//                 Landscaping, Snow,<br />
//                 Christmas Deco &<br />
//                 Tree-Service
//               </h1>
//               <h2 className="rlx-title-white">Design to Maintenance</h2>
//               <p className="rlx-hero-desc">
//                We provide complete landscaping, snow removal, Christmas décor, and tree services for residential and commercial properties. From design and installation to year-round maintenance, our team delivers reliable, high-quality results across Toronto and the GTA. Get in touch today for a free estimate and professional outdoor service you can trust.
//               </p>
//               <div>
//                   <Link href="/projects" className="l-btn">Our Solution</Link>
//               </div>
//             </div>

//             <div className="rlx-hero-card">
//               <form onSubmit={onSubmit}>
//                 <div className="rlx-field">
//                   <div className="rlx-label">Name</div>
//                   <input
//                     className="rlx-input"
//                     name="name"
//                     value={form.name}
//                     onChange={onChange}
//                     placeholder="Your Name"
//                     required
//                   />
//                 </div>

//                 <div className="rlx-field">
//                   <div className="rlx-label">Phone <span className="rlx-star">*</span></div>
//                   <PhoneInput
//                     country={'ca'}
//                     value={form.phone}
//                     onChange={onPhoneChange}
//                     enableSearch={true}
//                     disableSearchIcon={false}
//                   />
//                 </div>

//                 <div className="rlx-field">
//                   <div className="rlx-label">
//                     Email <span className="rlx-star">*</span>
//                   </div>
//                   <input
//                     className="rlx-input"
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={onChange}
//                     placeholder="Your Email Address"
//                     required
//                   />
//                 </div>

//                 <div className="rlx-field">
//                   <div className="rlx-label">Services</div>
//                   <select
//                     className="rlx-select"
//                     name="service"
//                     value={form.service}
//                     onChange={onChange}
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option value="Mulch Installation">Mulch Installation</option>
//                     <option value="Sod Installation">Sod Installation</option>
//                     <option value="Rock Installation">Rock Installation</option>
//                     <option value="Snow Removal">Snow Removal</option>
//                     <option value="Tree Service">Tree Service</option>
//                     <option value="Hardscaping">Hardscaping</option>
//                     <option value="Artificial Turf">Artificial Turf</option>
//                   </select>
//                 </div>

//                 <div className="rlx-field">
//                   <div className="rlx-label">Address</div>
//                   <textarea
//                     className="rlx-textarea"
//                     name="address"
//                     value={form.address}
//                     onChange={onChange}
//                     placeholder="Your Address"
//                     required
//                   />
//                 </div>

//                 <button className="rlx-submit" type="submit" disabled={loading}>
//                   {loading ? "SENDING..." : "REQUEST A QUOTE"}
//                 </button>

//                 {success && <div className="rlx-msg-success">{success}</div>}
//                 {error && <div className="rlx-msg-error">{error}</div>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;








"use client";
import React, { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// KEYS from Environment Variables
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const Hero = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onPhoneChange = (
    _value: string,
    _country: unknown,
    _event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => {
    setForm((p) => ({ ...p, phone: formattedValue }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const rawNumber = form.phone.replace(/[^0-9]/g, "");

    if (!form.phone || rawNumber.length < 8) {
      setError("❌ Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          address: form.address,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess("✅ Quote request sent successfully!");
          setForm({ name: "", phone: "", email: "", service: "", address: "" });
          setLoading(false);
        },
        (err) => {
          console.error("EmailJS error:", err);
          setError(`❌ Failed to send: ${err?.text || "Please try again."}`);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <style jsx>{`
        .rlx-hero { position: relative; min-height: 760px; display: flex; align-items: center; background-size: cover; background-position: center; overflow: hidden; }
        .rlx-hero::before { content: ""; position: absolute; inset: 0; background: linear-gradient(110deg, rgba(7, 17, 12, 0.82), rgba(7, 17, 12, 0.56)); z-index: 0; }
        .rlx-hero::after { content: ""; position: absolute; right: -180px; top: -80px; width: 420px; height: 420px; border-radius: 50%; background: radial-gradient(circle, rgba(255,107,53,0.28), transparent 70%); z-index: 0; }
        .rlx-hero .container { position: relative; z-index: 1; }
        .rlx-hero-row { display: flex; align-items: center; gap: 28px; }
        .rlx-hero-left { flex: 1; max-width: 640px; }
        .rlx-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: #e8f5e9; font-size: 12px; text-transform: uppercase; letter-spacing: 0.07em; font-weight: 700; padding: 8px 14px; border-radius: 999px; margin-bottom: 14px; animation: slideInFromLeft 520ms ease-out both; }
        .rlx-dot { width: 8px; height: 8px; border-radius: 50%; background: #ff6b35; box-shadow: 0 0 0 6px rgba(255, 107, 53, 0.18); }
        .rlx-title-green { margin: 0 0 10px; color: #4ade80; font-weight: 900; font-size: 56px; line-height: 1.08; letter-spacing: -0.03em; animation: slideInFromLeft 600ms ease-out both; animation-delay: 120ms; }
        .rlx-title-white { margin: 0 0 14px; color: #ffffff; font-weight: 900; font-size: 46px; line-height: 1.08; letter-spacing: -0.03em; animation: slideInFromLeft 600ms ease-out both; animation-delay: 220ms; }
        .rlx-hero-desc { margin: 0 0 24px; color: rgba(255,255,255,0.92); font-size: 16px; line-height: 1.7; max-width: 560px; animation: fadeIn 700ms ease-out both; animation-delay: 340ms; }
        .l-btn { display: inline-block; background: linear-gradient(135deg, #16a34a, #15803d); color: white; padding: 15px 30px; border-radius: 999px; font-weight: 800; text-decoration: none; transition: transform 200ms ease, box-shadow 200ms ease, opacity 200ms ease; box-shadow: 0 16px 30px rgba(22, 163, 74, 0.35); animation: slideUp 700ms ease-out both; animation-delay: 460ms; }
        .l-btn:hover { transform: translateY(-2px); box-shadow: 0 22px 34px rgba(22, 163, 74, 0.42); color: white; }
        .rlx-hero-card { width: 520px; max-width: 100%; background: rgba(255,255,255,0.98); backdrop-filter: blur(4px); border-radius: 22px; padding: 26px 26px 22px; box-shadow: 0 22px 60px rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.7); animation: slideInFromRight 700ms ease-out both; animation-delay: 220ms; }
        .rlx-field { margin-bottom: 14px; }
        .rlx-label { display: flex; gap: 6px; font-weight: 800; color: #111827; font-size: 14px; margin-bottom: 8px; }
        .rlx-star { color: #ef4444; }
        .rlx-input, .rlx-select, .rlx-textarea { width: 100%; height: 46px; border-radius: 999px; border: 1px solid rgba(0,0,0,0.12); padding: 0 16px; font-size: 14px; outline: none; background: #fff; transition: border-color 180ms ease, box-shadow 180ms ease; }
        .rlx-input:focus, .rlx-select:focus, .rlx-textarea:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.16); }
        .rlx-textarea { height: 90px; border-radius: 18px; padding: 12px 16px; resize: none; }
        .rlx-submit { width: 100%; height: 54px; border-radius: 999px; border: none; background: linear-gradient(135deg, #16a34a, #15803d); color: #fff; font-weight: 900; cursor: pointer; margin-top: 6px; transition: transform 180ms ease, opacity 180ms ease, box-shadow 180ms ease; box-shadow: 0 14px 24px rgba(22,163,74,0.3); }
        .rlx-submit:hover { transform: translateY(-2px); opacity: 0.98; box-shadow: 0 18px 28px rgba(22,163,74,0.35); }
        .rlx-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .rlx-msg-success { margin: 12px 0 0; color: #16a34a; font-weight: 800; font-size: 14px; text-align: center; }
        .rlx-msg-error { margin: 12px 0 0; color: #dc2626; font-weight: 800; font-size: 14px; text-align: center; }
        @media (max-width: 992px) {
          .rlx-hero { min-height: auto; padding: 72px 0 56px; }
          .rlx-hero::after { right: -220px; top: -110px; width: 360px; height: 360px; }
          .rlx-hero-row { flex-direction: column; align-items: stretch; }
          .rlx-title-green { font-size: 42px; }
          .rlx-title-white { font-size: 36px; }
          .rlx-hero-desc { max-width: none; }
          .rlx-hero-card { width: 100%; }
        }
        @media (max-width: 576px) {
          .rlx-hero { padding: 64px 0 48px; }
          .rlx-badge { font-size: 11px; }
          .rlx-title-green { font-size: 32px; }
          .rlx-title-white { font-size: 28px; }
          .rlx-hero-desc { font-size: 15px; }
          .l-btn { width: 100%; text-align: center; }
          .rlx-hero-card { padding: 20px 18px; }
        }
      `}</style>
      
      <style jsx global>{`
         .react-tel-input .form-control { width: 100% !important; height: 46px !important; border-radius: 999px !important; border: 1px solid rgba(0,0,0,0.12) !important; padding-left: 58px !important; font-size: 14px !important; }
         .react-tel-input .flag-dropdown { border-radius: 999px 0 0 999px !important; border: 1px solid rgba(0,0,0,0.12) !important; border-right: none !important; background: transparent !important; }
         .react-tel-input .selected-flag { border-radius: 999px 0 0 999px !important; padding-left: 12px !important; }
      `}</style>

      <section className="rlx-hero" style={{ backgroundImage: `url('/images/hero/hero2.jpg')` }}>
        <div className="container">
          <div className="rlx-hero-row">
            <div className="rlx-hero-left">
              <div className="rlx-badge">
                <span className="rlx-dot" />
                Trusted Across Reading and Berks County
              </div>
              
              {/* ✅ SEO: Upgraded H1. Clearer services, highly searchable. */}
              <h1 className="rlx-title-green">
                Landscaping & Property Maintenance in Reading, PA
              </h1>
              
              {/* ✅ SEO: Upgraded H2. Adds location context immediately for Google. */}
              <h2 className="rlx-title-white">Snow Removal, Tree Service & Hardscaping</h2>
              
              {/* ✅ SEO: Semantic paragraph. Naturally includes secondary keywords (Scarborough, Hardscaping, Commercial). */}
              <p className="rlx-hero-desc">
                Transform your residential or commercial property with Rolax Landscaping Reading. We provide landscaping and property maintenance in Reading, PA, plus custom hardscaping, winter snow removal, and seasonal care. Our reliable experts deliver high-quality outdoor maintenance across Reading, Wyomissing, West Reading, and nearby communities. Get your free estimate today!
              </p>
              
              <div>
                  {/* ✅ UX/SEO: Better Call-To-Action text */}
                  <Link href="/projects" className="l-btn">View Our Projects</Link>
              </div>
            </div>

            <div className="rlx-hero-card">
              <form onSubmit={onSubmit}>
                {/* Form fields remain exactly the same */}
                <div className="rlx-field">
                  <div className="rlx-label">Name</div>
                  <input className="rlx-input" name="name" value={form.name} onChange={onChange} placeholder="Your Name" required />
                </div>

                <div className="rlx-field">
                  <div className="rlx-label">Phone <span className="rlx-star">*</span></div>
                  <PhoneInput country={'ca'} value={form.phone} onChange={onPhoneChange} enableSearch={true} disableSearchIcon={false} />
                </div>

                <div className="rlx-field">
                  <div className="rlx-label">Email <span className="rlx-star">*</span></div>
                  <input className="rlx-input" type="email" name="email" value={form.email} onChange={onChange} placeholder="Your Email Address" required />
                </div>

                <div className="rlx-field">
                  <div className="rlx-label">Services</div>
                  <select className="rlx-select" name="service" value={form.service} onChange={onChange} required>
                    <option value="">Select a Service</option>
                    <option value="Mulch Installation">Mulch Installation</option>
                    <option value="Sod Installation">Sod Installation</option>
                    <option value="Rock Installation">Rock Installation</option>
                    <option value="Snow Removal">Snow Removal</option>
                    <option value="Tree Service">Tree Service</option>
                    <option value="Hardscaping">Hardscaping</option>
                    <option value="Artificial Turf">Artificial Turf</option>
                  </select>
                </div>

                <div className="rlx-field">
                  <div className="rlx-label">Address</div>
                  <textarea className="rlx-textarea" name="address" value={form.address} onChange={onChange} placeholder="Property Address" required />
                </div>

                <button className="rlx-submit" type="submit" disabled={loading}>
                  {loading ? "SENDING..." : "GET A FREE QUOTE"}
                </button>

                {success && <div className="rlx-msg-success">{success}</div>}
                {error && <div className="rlx-msg-error">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;