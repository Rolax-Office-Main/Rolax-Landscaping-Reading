// "use client";   
// import React from "react";
// import Link from "next/link";

// const Cta = () => {
//   return (
//     <>
//       <style jsx>{`
//         .cta-area {
//             background-color: #111827; /* Dark bg */
//         }
//         .pt-60 { padding-top: 60px; }
//         .pb-60 { padding-bottom: 60px; }
        
//         .cta-wrapper h2 {
//             color: #fff;
//             font-size: 30px;
//             font-weight: 700;
//         }
//         .cta-wrapper span {
//             color: #16a34a;
//             margin-left: 10px;
//         }
//         .cta-wrapper a {
//             color: #16a34a;
//             text-decoration: none;
//             transition: 0.3s;
//         }
//         .cta-wrapper a:hover {
//             color: #fff;
//             text-decoration: underline;
//         }
        
//         @media (max-width: 768px) {
//             .cta-wrapper h2 { font-size: 22px; line-height: 1.5; }
//             .cta-wrapper span { display: block; margin-left: 0; margin-top: 5px; }
//         }
//       `}</style>

//       <div className="cta-area pt-60 pb-60">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="cta-wrapper text-center">
//                 <h2>
//                   Get a Professional Services, 
//                   <span>
//                     Call us Now. <Link href="tel:+16479166654">647-916-6654</Link>
//                   </span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cta;





"use client";   
import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <style jsx>{`
        .cta-area { 
          background:
            radial-gradient(circle at 10% 10%, rgba(22,163,74,0.22), transparent 34%),
            radial-gradient(circle at 90% 90%, rgba(255,107,53,0.22), transparent 36%),
            #111827;
          position: relative;
          overflow: hidden;
        }
        .cta-area::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(10,14,23,0.86), rgba(17,24,39,0.76));
          pointer-events: none;
        }
        .pt-60 { padding-top: 68px; }
        .pb-60 { padding-bottom: 68px; }
        .cta-wrapper { position: relative; z-index: 1; }
        .cta-kicker { display: inline-block; padding: 7px 12px; background: rgba(255,255,255,0.13); border: 1px solid rgba(255,255,255,0.2); color: #e8f5e9; border-radius: 999px; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 14px; }
        .cta-wrapper h2 { color: #fff; font-size: 34px; font-weight: 800; margin: 0; letter-spacing: -0.02em; }
        .cta-wrapper span { color: #86efac; margin-left: 8px; }
        .cta-actions { margin-top: 24px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
        .cta-btn, .cta-link { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 22px; border-radius: 999px; font-weight: 700; text-decoration: none; transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease; }
        .cta-btn { background: linear-gradient(135deg, #16a34a, #15803d); color: #fff; box-shadow: 0 14px 24px rgba(22,163,74,0.3); }
        .cta-btn:hover { transform: translateY(-2px); color: #fff; box-shadow: 0 20px 28px rgba(22,163,74,0.4); }
        .cta-link { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.22); }
        .cta-link:hover { background: rgba(255,255,255,0.18); color: #fff; }
        @media (max-width: 768px) {
            .pt-60 { padding-top: 56px; }
            .pb-60 { padding-bottom: 56px; }
            .cta-wrapper h2 { font-size: 26px; line-height: 1.35; }
            .cta-wrapper span { display: block; margin-left: 0; margin-top: 5px; }
            .cta-actions { gap: 10px; }
            .cta-btn, .cta-link { width: 100%; max-width: 320px; }
        }
      `}</style>

      <div className="cta-area pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-wrapper text-center">
                <div className="cta-kicker">24/7 Support • Free Estimates</div>
                {/* ✅ SEO & UX FIX: Improved grammar and injected high-value keywords */}
                <h2>
                  Ready for Expert Landscaping & Property Maintenance? 
                  <span>
                    Reading • Wyomissing • West Reading
                  </span>
                </h2>
                <div className="cta-actions">
                  <Link 
                    href="tel:+16479166654" 
                    aria-label="Call Rolax Landscaping at 647-916-6654"
                    className="cta-btn"
                  >
                    Call (647) 916-6654
                  </Link>
                  <Link href="/contact" className="cta-link" aria-label="Request a free landscaping quote">
                    Request Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;