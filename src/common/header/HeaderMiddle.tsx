// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// // Ensure this path matches your logo location
// const LOGO_PATH = "/images/rolax-logo.jpg";

// const HeaderMiddle = () => {
//   return (
//     <>
//       <style jsx>{`
//         /* --- CONTAINER --- */
//         .header-middle {
//           background: #ffffff;
//           padding: 20px 0;
//           border-bottom: 1px solid #e5e7eb; /* Grey border line */
//         }

//         .hm-row {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 36px;
//         }

//         /* --- LOGO --- */
//         .hm-left {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-width: 400px;
//         }

//         /* --- CENTER GROUP --- */
//         .hm-center {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 36px;
//         }

//         /* --- INFO BLOCKS --- */
//         .hm-block {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           padding-right: 36px;
//           border-right: 1px solid rgba(0, 0, 0, 0.14); /* Divider Line */
//         }

//         /* ICONS */
//         .hm-icon {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           background: #16a34a; /* Green Icon Circle */
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }

//         .hm-icon :global(svg) {
//           color: #fff;
//           width: 27px;
//           height: 27px;
//         }

//         .hm-text {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//         }

//         .hm-title {
//           margin: 0;
//           font-weight: 800;
//           font-size: 16px;
//           color: #1f2937;
//           line-height: 1.2;
//           white-space: nowrap;
//         }

//         .hm-sub {
//           margin: 4px 0 0;
//           font-size: 14px;
//           color: #111827;
//           white-space: nowrap;
//         }

//         /* --- CTA BUTTON AREA --- */
//         .hm-cta {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding-left: 36px;
//           border-left: 1px solid rgba(0, 0, 0, 0.14); /* Divider Line */
//         }

//         /* Button Layout (Colors handled inline) */
//         .hm-btn {
//           font-weight: 800;
//           text-decoration: none;
//           white-space: nowrap;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         /* Hover Effect: Turn Dark on Hover */
//         /* !important is needed to override the inline background color */
//         .hm-btn:hover {
//           background-color: #1f2937 !important; 
//           transform: translateY(-2px);
//           box-shadow: 0 10px 25px rgba(22, 163, 74, 0.35);
//         }

//         /* --- RESPONSIVE --- */
//         @media (max-width: 992px) {
//           .hm-row {
//             flex-wrap: wrap;
//             gap: 20px;
//           }
//           .hm-left, .hm-center, .hm-cta {
//             width: 100%;
//             justify-content: center;
//             padding-left: 0;
//             border-left: none;
//             min-width: auto;
//           }
//           .hm-center {
//             flex-wrap: wrap;
//             gap: 18px;
//           }
//           .hm-block {
//             border-right: none;
//             padding-right: 0;
//           }
//         }
//       `}</style>

//       <div className="header-middle">
//         <div className="container">
//           <div className="hm-row">
            
//             {/* LOGO */}
//             <div className="hm-left">
//               <Link href="/">
//                 <Image 
//                   src={LOGO_PATH}
//                   alt="Rolax Landscaping & Tree Services" 
//                   width={210} 
//                   height={58}
//                   style={{ objectFit: "contain", height: "auto" }}
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* CENTER INFO */}
//             <div className="hm-center">
              
//               <div className="hm-block">
//                 <div className="hm-icon"><FaMapMarkerAlt /></div>
//                 <div className="hm-text">
//                   <p className="hm-title">Location</p>
//                   <p className="hm-sub">Toronto, Canada</p>
//                 </div>
//               </div>

//               <div className="hm-block">
//                 <div className="hm-icon"><FaPhoneAlt /></div>
//                 <div className="hm-text">
//                   <p className="hm-title">Call / WhatsApp Us</p>
//                   <p className="hm-sub">(647)-916-6654</p>
//                 </div>
//               </div>

//               {/* CTA BUTTON */}
//               <div className="hm-cta">
//                 <Link 
//                   href="/contact" 
//                   className="hm-btn"
//                   // 🔥 NUCLEAR FIX: Inline styles + Larger Padding/Font
//                   style={{
//                     backgroundColor: "#16a34a", // Green
//                     color: "#ffffff",           // White Text
//                     borderRadius: "999px",      // Round
//                     padding: "14px 30px",       // ⬆️ BIGGER PADDING
//                     fontSize: "16px",            // ⬆️ BIGGER TEXT
//                     fontWeight: "800"             // Bolder Text
//                   }}
//                 >
//                   GET A QUOTE
//                 </Link>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeaderMiddle;















"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// Ensure this path matches your logo location
const LOGO_PATH = "/images/rolax-logo.jpg";

const HeaderMiddle = () => {
  return (
    <>
      <style jsx>{`
        /* --- CONTAINER --- */
        .header-middle {
          background: #ffffff;
          padding: 15px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .hm-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 36px;
        }

        /* --- LOGO --- */
        .hm-left {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 400px;
        }

        /* --- CENTER GROUP --- */
        .hm-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 36px;
        }

        /* --- INFO BLOCKS --- */
        .hm-block {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-right: 36px;
          border-right: 1px solid rgba(0, 0, 0, 0.14);
        }

        /* ICONS */
        .hm-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
          font-size: 24px;
          transition: 0.3s;
        }
        
        .hm-icon:hover {
            background: #111827;
        }

        .hm-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hm-title {
          margin: 0;
          font-weight: 800;
          font-size: 16px;
          color: #1f2937;
          line-height: 1.2;
          white-space: nowrap;
        }

        .hm-sub {
          margin: 4px 0 0;
          font-size: 14px;
          color: #111827;
          white-space: nowrap;
        }

        /* --- CTA BUTTON CONTAINER --- */
        .hm-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 36px;
          border-left: 1px solid rgba(0, 0, 0, 0.14);
        }

        /* --- MOBILE RESPONSIVE --- */
        @media (max-width: 992px) {
          .header-middle { padding: 10px 0; }
          .hm-row { flex-direction: column; gap: 15px; }
          
          /* Logo */
          .hm-left { min-width: auto; width: 100%; border: none; padding: 0; }
          .hm-left img { max-width: 180px; }

          /* Center Group */
          .hm-center {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          /* Hide Text */
          .hm-text, .hm-title, .hm-sub, .hm-block:first-child { display: none; }

          /* Reset Borders */
          .hm-block, .hm-cta { border: none; padding: 0; display: block; }
          
          /* Smaller Icons */
          .hm-icon { width: 45px; height: 45px; font-size: 20px; }
        }
      `}</style>

      <div className="header-middle">
        <div className="container">
          <div className="hm-row">
            
            {/* LOGO */}
            <div className="hm-left">
              <Link href="/">
                <Image 
                  src={LOGO_PATH}
                  alt="Rolax Landscaping" 
                  width={210} 
                  height={58}
                  style={{ objectFit: "contain", height: "auto" }}
                  priority
                />
              </Link>
            </div>

            {/* CENTER INFO & ACTIONS */}
            <div className="hm-center">
              
              {/* Location (Desktop Only) */}
              <div className="hm-block">
                <div className="hm-icon"><FaMapMarkerAlt /></div>
                <div className="hm-text">
                  <p className="hm-title">Location</p>
                  <p className="hm-sub">Reading, PA</p>
                </div>
              </div>

              {/* Call Button */}
              <div className="hm-block">
                <a href="tel:+16479166654" aria-label="Call Us">
                   <div className="hm-icon"><FaPhoneAlt /></div>
                </a>
                <div className="hm-text">
                  <p className="hm-title">Call Us</p>
                  <p className="hm-sub">(647)-916-6654</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="hm-block" style={{border: 'none', paddingRight: 0}}>
                <a href="https://wa.me/16479166654" target="_blank" aria-label="WhatsApp Us">
                   <div className="hm-icon" style={{background: '#25D366'}}><FaWhatsapp /></div>
                </a>
                <div className="hm-text">
                   <p className="hm-title">WhatsApp</p>
                   <p className="hm-sub">Chat Now</p>
                </div>
              </div>

              {/* CTA BUTTON - NUCLEAR FIX WITH INLINE STYLES */}
              <div className="hm-cta">
                <Link 
                  href="/contact" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#16a34a', // 🔥 Force Green
                    color: '#ffffff',           // 🔥 Force White
                    borderRadius: '999px',
                    padding: '12px 24px',
                    textDecoration: 'none',
                    fontWeight: '800',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  GET A QUOTE
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMiddle;