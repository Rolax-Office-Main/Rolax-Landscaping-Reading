// "use client";
// import React from "react";

// const ContactMap = () => {
//   const businessName = "Rolax Landscaping Canada";
//   const address = "33 Saratoga Drive, Scarborough, ON M1P 4H8";

//   // Standard Google Maps Embed URL
//   const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

//   // Standard Google Maps Directions URL
//   const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

//   return (
//     <>
//       <style jsx>{`
//   .find-us-area {
//     background-color: #fdfcf0; /* Same consistent cream background */
//     padding: 100px 0;
//   }
//   .contact-info-box {
//     background: #ffffff;
//     padding: 30px;
//     border-radius: 8px;
//     display: flex;
//     align-items: center;
//     gap: 20px;
//     margin-bottom: 20px;
//     box-shadow: 0 5px 15px rgba(0,0,0,0.02);
//   }
//   .info-icon {
//     width: 60px;
//     height: 60px;
//     background: #16a34a; /* Green icon background */
//     color: #fff;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 24px;
//     flex-shrink: 0;
//   }
//   .info-text h4 {
//     font-size: 18px;
//     font-weight: 700;
//     margin-bottom: 5px;
//     color: #111827;
//   }
//   .info-text p {
//     margin: 0;
//     color: #6b7280;
//   }
//   .map-container {
//     border-radius: 15px;
//     overflow: hidden;
//     border: 10px solid #ffffff; /* White thick border around the map */
//     box-shadow: 0 10px 30px rgba(0,0,0,0.05);
//   }
// `}</style>

//       <section className="contact-map-area bg-4 pt-90 pb-90">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-10">
//               <div className="section-title text-center mb-30">
//                 <span>Find Us</span>
//                 <h2>{businessName}</h2>
//                 <p style={{ marginTop: 10, color: "#6b7280" }}>{address}</p>
//                 <a
//                   href={directionsUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="btn-theme"
//                   style={{ marginTop: 10 }}
//                 >
//                   Get Directions
//                 </a>
//               </div>

//               <div
//                 className="contact-map-wrapper"
//                 style={{
//                   borderRadius: 12,
//                   overflow: "hidden",
//                   border: "1px solid rgba(0,0,0,0.08)",
//                   boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
//                 }}
//               >
//                 <iframe
//                   title={`${businessName} Map`}
//                   src={mapSrc}
//                   width="100%"
//                   height="420"
//                   style={{ border: 0, display: "block" }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactMap;



"use client";
import React from "react";

const ContactMap = () => {
  const businessName = "Rolax Landscaping Reading";
  const address = "33 Saratoga Drive, Scarborough, ON M1P 4H8";

  // ✅ BUG FIX: Fixed syntax by adding '$' and using the standard Google Maps format
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <>
      <style jsx>{`
        .find-us-area { background-color: #fdfcf0; padding: 100px 0; }
        .section-title span { color: #16a34a; font-weight: 700; display: block; margin-bottom: 10px; text-transform: uppercase; }
        .section-title h2 { font-size: 36px; font-weight: 800; color: #111827; }
        .btn-theme { background: #16a34a; color: #fff; padding: 12px 30px; border-radius: 30px; font-weight: 700; text-decoration: none; display: inline-block; transition: 0.3s; }
        .btn-theme:hover { background: #111827; color: #fff; }
      `}</style>

      <section className="find-us-area pt-90 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="section-title text-center mb-30">
                <span>Find Us</span>
                <h2>Visit Our Landscaping Office</h2>
                
                {/* ✅ Semantic SEO: Wrapped address string in an <address> tag */}
                <address style={{ marginTop: 10, color: "#6b7280", fontStyle: "normal", fontSize: "18px" }}>
                  {address}
                </address>
                
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-theme"
                  style={{ marginTop: 10 }}
                  aria-label="Get driving directions to Rolax Landscaping in Google Maps"
                >
                  Get Directions
                </a>
              </div>

              <div
                className="contact-map-wrapper"
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                }}
              >
                <iframe
                  title={`Google Map Location for ${businessName}`}
                  src={mapSrc}
                  width="100%"
                  height="420"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;