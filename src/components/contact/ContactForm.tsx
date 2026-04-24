// "use client";
// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelopeOpen,
//   FaClock,
// } from "react-icons/fa";

// // KEYS from Environment Variables
// const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
// const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
// const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

// const ContactForm = () => {
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

//   // Handler for standard text inputs
//   const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

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

//   // Quick helpers to make cards clickable
//   const openMap = () => {
//     window.open(
//       "https://www.google.com/maps/search/?api=1&query=33+Saratoga+Drive,+Scarborough,+ON+M1P+4H8",
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };
//   const callPhone = () => {
//     window.location.href = "tel:+16479166654";
//   };
//   const sendEmail = () => {
//     window.location.href = "mailto:Rolaxlandscapingreading@gmail.com";
//   };

//   // Google Maps Embed URL
//   const mapAddress = "33 Saratoga Drive, Scarborough, ON M1P 4H8";
//   const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

//   return (
//     <>
//       <style jsx>{`
//         .rlx-contact-wrap {
//           padding: 80px 0 90px;
//           background: #ffffff;
//         }

//         /* TOP HEADING */
//         .rlx-title-area {
//           text-align: center;
//           margin-bottom: 26px;
//         }
//         .rlx-title-area .kicker {
//           font-weight: 900;
//           letter-spacing: 1px;
//           color: #0f5132;
//           margin: 0 0 10px;
//           text-transform: uppercase;
//           font-size: 14px;
//         }
//         .rlx-title-area h2 {
//           margin: 0 0 10px;
//           font-size: 42px;
//           font-weight: 900;
//           color: #111827;
//         }
//         .rlx-title-area p {
//           margin: 0;
//           color: #374151;
//           max-width: 720px;
//           margin-left: auto;
//           margin-right: auto;
//           line-height: 1.6;
//         }

//         /* 4 CARDS */
//         .rlx-cards {
//           margin-top: 34px;
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 22px;
//           margin-bottom: 40px;
//         }

//         /* CARD BASE */
//         .rlx-card {
//           background: #064e3b;
//           border-radius: 16px;
//           padding: 26px 22px;
//           box-shadow: 0 18px 55px rgba(0, 0, 0, 0.08);
//           text-align: center;
//           color: #fff;
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//           transition: transform 220ms ease, box-shadow 220ms ease;
//           outline: none;
//         }

//         .rlx-card:focus {
//           box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.45), 0 26px 70px rgba(0, 0, 0, 0.22);
//         }

//         /* SHINE OVERLAY */
//         .rlx-card::after {
//           content: "";
//           position: absolute;
//           inset: -40px;
//           background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.18), transparent 55%);
//           opacity: 0;
//           transition: opacity 220ms ease;
//           pointer-events: none;
//         }

//         /* HOVER LIFT */
//         .rlx-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 26px 70px rgba(0, 0, 0, 0.22);
//         }
//         .rlx-card:hover::after {
//           opacity: 1;
//         }

//         /* ICON */
//         .rlx-card .icon {
//           width: 52px;
//           height: 52px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.12);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 14px;
//           transition: transform 220ms ease, background 220ms ease;
//         }

//         .rlx-card .icon :global(svg) {
//           width: 22px;
//           height: 22px;
//           color: #16a34a;
//         }

//         .rlx-card:hover .icon {
//           transform: scale(1.08);
//           background: rgba(255, 255, 255, 0.18);
//         }

//         /* TITLE */
//         .rlx-card h4 {
//           margin: 0 0 10px;
//           font-weight: 900;
//           font-size: 18px;
//           color: #fff;
//         }

//         /* TEXT */
//         .rlx-card p {
//           margin: 0;
//           color: rgba(255, 255, 255, 0.92);
//           font-weight: 600;
//           line-height: 1.5;
//           transition: color 220ms ease;
//         }

//         /* TEXT HOVER HIGHLIGHT */
//         .rlx-card:hover p {
//           color: #08fe04;
//         }

//         /* MAP + FORM WRAP */
//         .rlx-mainbox {
//           background: #fff;
//           border-radius: 18px;
//           box-shadow: 0 18px 55px rgba(0, 0, 0, 0.1);
//           overflow: hidden;
//         }

//         .rlx-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           min-height: 620px;
//         }

//         .rlx-map {
//           min-height: 620px;
//         }

//         .rlx-map iframe {
//           width: 100%;
//           height: 100%;
//           min-height: 620px;
//           border: 0;
//           display: block;
//         }

//         .rlx-form {
//           padding: 40px;
//         }

//         .rlx-label {
//           font-weight: 800;
//           color: #111827;
//           font-size: 14px;
//           margin: 0 0 10px;
//           display: flex;
//           gap: 6px;
//           align-items: center;
//         }

//         .rlx-star {
//           color: #ef4444;
//         }

//         .rlx-input,
//         .rlx-select,
//         .rlx-textarea {
//           width: 100%;
//           border: 1px solid rgba(0, 0, 0, 0.18);
//           border-radius: 6px;
//           padding: 14px 14px;
//           font-size: 14px;
//           outline: none;
//           margin-bottom: 18px;
//         }

//         .rlx-select {
//           background: #fff;
//         }

//         .rlx-textarea {
//           min-height: 120px;
//           resize: none;
//         }

//         .rlx-btn {
//           width: 100%;
//           height: 56px;
//           border: none;
//           border-radius: 10px;
//           background: #16a34a;
//           color: #fff;
//           font-weight: 900;
//           letter-spacing: 0.5px;
//           cursor: pointer;
//           transition: transform 180ms ease, opacity 180ms ease;
//         }
//         .rlx-btn:hover {
//           transform: translateY(-2px);
//           opacity: 0.95;
//         }
//         .rlx-btn:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//           transform: none;
//         }

//         .rlx-msg-success {
//           margin-top: 12px;
//           color: #16a34a;
//           font-weight: 800;
//           font-size: 14px;
//         }
//         .rlx-msg-error {
//           margin-top: 12px;
//           color: #dc2626;
//           font-weight: 800;
//           font-size: 14px;
//         }

//         /* RESPONSIVE */
//         @media (max-width: 1200px) {
//           .rlx-cards {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 992px) {
//           .rlx-title-area h2 {
//             font-size: 34px;
//           }
//           .rlx-grid {
//             grid-template-columns: 1fr;
//             min-height: unset;
//           }
//           .rlx-form {
//             padding: 26px;
//           }
//           .rlx-map {
//             min-height: 360px;
//           }
//           .rlx-map iframe {
//             min-height: 360px;
//           }
//         }

//         @media (max-width: 576px) {
//           .rlx-cards {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .rlx-card,
//           .rlx-card::after,
//           .rlx-card .icon {
//             transition: none !important;
//             animation: none !important;
//           }
//         }
//       `}</style>
      
//       {/* PHONE INPUT STYLES (Global overrides) */}
//       <style jsx global>{`
//          .react-tel-input .form-control { width: 100% !important; height: 50px !important; border-radius: 6px !important; border: 1px solid rgba(0,0,0,0.18) !important; padding-left: 58px !important; font-size: 14px !important; margin-bottom: 18px !important; }
//          .react-tel-input .flag-dropdown { border-radius: 6px 0 0 6px !important; border: 1px solid rgba(0,0,0,0.18) !important; border-right: none !important; background: transparent !important; }
//          .react-tel-input .selected-flag { border-radius: 6px 0 0 6px !important; padding-left: 12px !important; }
//       `}</style>

//       <div className="rlx-contact-wrap">
//         <div className="container">
//           {/* TOP TITLE */}
//           <div className="rlx-title-area">
//             <div className="kicker">CONTACT US</div>
//             <h2>Get in touch with us</h2>
//             <p>
//               If you have any questions in your mind regarding landscaping, feel free to reach us any time.
//               We are eager to help you asap.
//             </p>
//           </div>

//           {/* 4 GREEN CARDS */}
//           <div className="rlx-cards">
//             <div className="rlx-card" role="button" tabIndex={0} onClick={openMap}>
//               <div className="icon">
//                 <FaMapMarkerAlt />
//               </div>
//               <h4>Our Location</h4>
//               <p>33 Saratoga Dr, Scarborough, ON</p>
//             </div>

//             <div className="rlx-card" role="button" tabIndex={0} onClick={callPhone}>
//               <div className="icon">
//                 <FaPhoneAlt />
//               </div>
//               <h4>Phone Number</h4>
//               <p>(647)-916-6654</p>
//             </div>

//             <div className="rlx-card" role="button" tabIndex={0} onClick={sendEmail}>
//               <div className="icon">
//                 <FaEnvelopeOpen />
//               </div>
//               <h4>Email Us</h4>
//               <p>Rolaxlandscapingreading@gmail.com</p>
//             </div>

//             <div className="rlx-card" role="button" tabIndex={0}>
//               <div className="icon">
//                 <FaClock />
//               </div>
//               <h4>Working Hours</h4>
//               <p>Mon - Sat : 09.00 - 18.00</p>
//             </div>
//           </div>

//           {/* MAP + FORM */}
//           <div className="rlx-mainbox">
//             <div className="rlx-grid">
//               {/* MAP */}
//               <div className="rlx-map">
//                 <iframe
//                   title="Rolax Landscaping Location"
//                   src={mapSrc}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>

//               {/* FORM */}
//               <div className="rlx-form">
//                 <form onSubmit={onSubmit}>
//                   <div className="rlx-label">Name</div>
//                   <input
//                     className="rlx-input"
//                     name="name"
//                     value={form.name}
//                     onChange={onChange}
//                     placeholder="Your Name"
//                     required
//                   />

//                   <div className="rlx-label">
//                     Phone <span className="rlx-star">*</span>
//                   </div>
//                   <PhoneInput
//                     country={"ca"}
//                     value={form.phone}
//                     onChange={onPhoneChange}
//                     enableSearch={true}
//                     disableSearchIcon={false}
//                   />

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

//                   <div className="rlx-label">Address</div>
//                   <textarea
//                     className="rlx-textarea"
//                     name="address"
//                     value={form.address}
//                     onChange={onChange}
//                     placeholder="Your Address"
//                     required
//                   />

//                   <button className="rlx-btn" type="submit" disabled={loading}>
//                     {loading ? "SENDING..." : "REQUEST A QUOTE"}
//                   </button>

//                   {success && <div className="rlx-msg-success">{success}</div>}
//                   {error && <div className="rlx-msg-error">{error}</div>}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactForm;













"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaClock,
} from "react-icons/fa";

// KEYS from Environment Variables
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const RECEIVER_EMAIL = "Rolaxlandscapingreading@gmail.com";

const ContactForm = () => {
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onPhoneChange = (value: string, country: unknown, e: React.ChangeEvent<HTMLInputElement>, formattedValue: string) => {
    setForm((p) => ({ ...p, phone: formattedValue }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("❌ Email service is not configured. Please add EmailJS keys in .env.local.");
      setLoading(false);
      return;
    }

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
          ...form,
          to_email: RECEIVER_EMAIL,
          reply_to: form.email,
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

  const openMap = () => window.open("https://maps.google.com/?q=33+Saratoga+Drive,+Scarborough,+ON", "_blank");
  const callPhone = () => window.location.href = "tel:+16479166654";
  const sendEmail = () => window.location.href = `mailto:${RECEIVER_EMAIL}`;

  // ✅ BUG FIX: Added the missing '$' for template interpolation and used the correct Google Maps embed URL format
  const mapAddress = "33 Saratoga Drive, Scarborough, ON M1P 4H8";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <style jsx>{`
        /* Keeping all your exact CSS */
        .rlx-contact-wrap { padding: 80px 0 90px; background: #ffffff; }
        .rlx-title-area { text-align: center; margin-bottom: 26px; }
        .rlx-title-area .kicker { font-weight: 900; letter-spacing: 1px; color: #0f5132; margin: 0 0 10px; text-transform: uppercase; font-size: 14px; }
        .rlx-title-area h1 { margin: 0 0 10px; font-size: 42px; font-weight: 900; color: #111827; }
        .rlx-title-area p { margin: 0; color: #374151; max-width: 720px; margin-left: auto; margin-right: auto; line-height: 1.6; }
        .rlx-cards { margin-top: 34px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; margin-bottom: 40px; }
        .rlx-card { background: #064e3b; border-radius: 16px; padding: 26px 22px; box-shadow: 0 18px 55px rgba(0, 0, 0, 0.08); text-align: center; color: #fff; cursor: pointer; position: relative; overflow: hidden; transition: transform 220ms ease, box-shadow 220ms ease; outline: none; }
        .rlx-card:focus { box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.45), 0 26px 70px rgba(0, 0, 0, 0.22); }
        .rlx-card::after { content: ""; position: absolute; inset: -40px; background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.18), transparent 55%); opacity: 0; transition: opacity 220ms ease; pointer-events: none; }
        .rlx-card:hover { transform: translateY(-6px); box-shadow: 0 26px 70px rgba(0, 0, 0, 0.22); }
        .rlx-card:hover::after { opacity: 1; }
        .rlx-card .icon { width: 52px; height: 52px; border-radius: 50%; background: rgba(255, 255, 255, 0.12); display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; transition: transform 220ms ease, background 220ms ease; }
        .rlx-card .icon :global(svg) { width: 22px; height: 22px; color: #16a34a; }
        .rlx-card:hover .icon { transform: scale(1.08); background: rgba(255, 255, 255, 0.18); }
        .rlx-card h2 { margin: 0 0 10px; font-weight: 900; font-size: 18px; color: #fff; }
        .rlx-card p { margin: 0; color: rgba(255, 255, 255, 0.92); font-weight: 600; line-height: 1.5; transition: color 220ms ease; }
        .rlx-card:hover p { color: #08fe04; }
        .rlx-mainbox { background: #fff; border-radius: 18px; box-shadow: 0 18px 55px rgba(0, 0, 0, 0.1); overflow: hidden; }
        .rlx-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: 620px; }
        .rlx-map { min-height: 620px; }
        .rlx-map iframe { width: 100%; height: 100%; min-height: 620px; border: 0; display: block; }
        .rlx-form { padding: 40px; }
        .rlx-label { font-weight: 800; color: #111827; font-size: 14px; margin: 0 0 10px; display: flex; gap: 6px; align-items: center; cursor: pointer; }
        .rlx-star { color: #ef4444; }
        .rlx-input, .rlx-select, .rlx-textarea { width: 100%; border: 1px solid rgba(0, 0, 0, 0.18); border-radius: 6px; padding: 14px 14px; font-size: 14px; outline: none; margin-bottom: 18px; }
        .rlx-select { background: #fff; }
        .rlx-textarea { min-height: 120px; resize: none; }
        .rlx-btn { width: 100%; height: 56px; border: none; border-radius: 10px; background: #16a34a; color: #fff; font-weight: 900; letter-spacing: 0.5px; cursor: pointer; transition: transform 180ms ease, opacity 180ms ease; }
        .rlx-btn:hover { transform: translateY(-2px); opacity: 0.95; }
        .rlx-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
        .rlx-msg-success { margin-top: 12px; color: #16a34a; font-weight: 800; font-size: 14px; }
        .rlx-msg-error { margin-top: 12px; color: #dc2626; font-weight: 800; font-size: 14px; }
        @media (max-width: 1200px) { .rlx-cards { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 992px) { .rlx-title-area h1 { font-size: 34px; } .rlx-grid { grid-template-columns: 1fr; min-height: unset; } .rlx-form { padding: 26px; } .rlx-map { min-height: 360px; } .rlx-map iframe { min-height: 360px; } }
        @media (max-width: 576px) { .rlx-cards { grid-template-columns: 1fr; } }
        @media (prefers-reduced-motion: reduce) { .rlx-card, .rlx-card::after, .rlx-card .icon { transition: none !important; animation: none !important; } }
      `}</style>
      
      <style jsx global>{`
         .react-tel-input .form-control { width: 100% !important; height: 50px !important; border-radius: 6px !important; border: 1px solid rgba(0,0,0,0.18) !important; padding-left: 58px !important; font-size: 14px !important; margin-bottom: 18px !important; }
         .react-tel-input .flag-dropdown { border-radius: 6px 0 0 6px !important; border: 1px solid rgba(0,0,0,0.18) !important; border-right: none !important; background: transparent !important; }
         .react-tel-input .selected-flag { border-radius: 6px 0 0 6px !important; padding-left: 12px !important; }
      `}</style>

      <div className="rlx-contact-wrap">
        <div className="container">
          <div className="rlx-title-area">
            <div className="kicker">Contact Our Experts</div>
            <h1>Get a Free Landscaping Quote in Reading, PA</h1>
            <p>
              Whether you need seasonal lawn care, custom hardscaping, or winter snow removal, the Rolax Landscaping team is ready to help. Reach out to us today for fast, reliable service.
            </p>
          </div>

          <div className="rlx-cards">
            {/* ✅ Semantic SEO: Wrapped physical address in an <address> tag */}
            <address className="rlx-card m-0" role="button" tabIndex={0} onClick={openMap} aria-label="Open Google Maps">
              <div className="icon"><FaMapMarkerAlt aria-hidden="true" /></div>
              <h2>Our Location</h2>
              <p style={{ fontStyle: "normal" }}>33 Saratoga Dr, Scarborough, ON</p>
            </address>

            <div className="rlx-card" role="button" tabIndex={0} onClick={callPhone} aria-label="Call Us">
              <div className="icon"><FaPhoneAlt aria-hidden="true" /></div>
              <h2>Phone Number</h2>
              <p>(647)-916-6654</p>
            </div>

            <div className="rlx-card" role="button" tabIndex={0} onClick={sendEmail} aria-label="Email Us">
              <div className="icon"><FaEnvelopeOpen aria-hidden="true" /></div>
              <h2>Email Us</h2>
              <p>{RECEIVER_EMAIL}</p>
            </div>

            <div className="rlx-card" tabIndex={0}>
              <div className="icon"><FaClock aria-hidden="true" /></div>
              <h2>Working Hours</h2>
              <p>Mon - Sat : 09.00 - 18.00</p>
            </div>
          </div>

          <div className="rlx-mainbox">
            <div className="rlx-grid">
              <div className="rlx-map">
                <iframe
                  title="Rolax Landscaping Location in Scarborough"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rlx-form">
                <form onSubmit={onSubmit}>
                  {/* ✅ Technical SEO: Converted divs to REAL labels connected via "id" and "htmlFor" */}
                  <label htmlFor="name" className="rlx-label">Name</label>
                  <input id="name" className="rlx-input" name="name" value={form.name} onChange={onChange} placeholder="Your Name" required />

                  <label htmlFor="phone" className="rlx-label">
                    Phone <span className="rlx-star" aria-hidden="true">*</span>
                  </label>
                  <PhoneInput inputProps={{ id: 'phone', required: true }} country={"ca"} value={form.phone} onChange={onPhoneChange} enableSearch={true} disableSearchIcon={false} />

                  <label htmlFor="email" className="rlx-label">
                    Email <span className="rlx-star" aria-hidden="true">*</span>
                  </label>
                  <input id="email" className="rlx-input" type="email" name="email" value={form.email} onChange={onChange} placeholder="Your Email Address" required />

                  <label htmlFor="service" className="rlx-label">Services</label>
                  <select id="service" className="rlx-select" name="service" value={form.service} onChange={onChange} required>
                    <option value="">Select a Service</option>
                    <option value="Mulch Installation">Mulch Installation</option>
                    <option value="Sod Installation">Sod Installation</option>
                    <option value="Rock Installation">Rock Installation</option>
                    <option value="Snow Removal">Snow Removal</option>
                    <option value="Tree Service">Tree Service</option>
                    <option value="Hardscaping">Hardscaping</option>
                    <option value="Artificial Turf">Artificial Turf</option>
                  </select>

                  <label htmlFor="address" className="rlx-label">Property Address</label>
                  <textarea id="address" className="rlx-textarea" name="address" value={form.address} onChange={onChange} placeholder="Where do you need service?" required />

                  <button className="rlx-btn" type="submit" disabled={loading}>
                    {loading ? "SENDING..." : "REQUEST A QUOTE"}
                  </button>

                  {success && <div className="rlx-msg-success" role="alert">{success}</div>}
                  {error && <div className="rlx-msg-error" role="alert">{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;