// "use client";
// import React, { useState } from "react";
// import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

// const areas = [
//   "Toronto",
//   "North York",
//   "Scarborough",
//   "Etobicoke",
//   "Mississauga",
//   "Brampton",
//   "Markham",
//   "Vaughan",
//   "Richmond Hill",
//   "Pickering",
//   "Ajax",
//   "Whitby",
// ];

// const ServiceArea = () => {
//   // State to track which area is clicked
//   const [selectedArea, setSelectedArea] = useState<string | null>(null);

//   // Function to handle clicking an area
//   const handleAreaClick = (area: string) => {
//     setSelectedArea(area);
//     // Scroll to top of section smoothly when clicking
//     // We use setTimeout to ensure the DOM has updated if switching views
//     setTimeout(() => {
//         const section = document.querySelector('.service-area-section');
//         if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, 100);
//   };

//   // Function to go back to the list
//   const handleBack = () => {
//     setSelectedArea(null);
//   };

//   return (
//     <section className="service-area-section bg-4 pt-90 pb-90">
//       <style jsx>{`
//         .bg-4 { background-color: #f3f4f6; }
//         .pt-90 { padding-top: 90px; }
//         .pb-90 { padding-bottom: 90px; }
//         .mb-50 { margin-bottom: 50px; }
//         .mb-30 { margin-bottom: 30px; }
//         .mt-40 { margin-top: 40px; }
        
//         .section-title p { color: #6b7280; max-width: 600px; margin: 0 auto; }

//         .service-area-box {
//           display: block;
//           background: #fff;
//           padding: 30px 20px;
//           border-radius: 8px;
//           box-shadow: 0 5px 20px rgba(0,0,0,0.05);
//           transition: all 0.3s ease;
//           cursor: pointer;
//           border: 1px solid transparent;
//           height: 100%;
//         }
//         .service-area-box:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
//           border-color: #16a34a;
//         }
//         .service-area-title {
//           margin: 0;
//           font-size: 18px;
//           font-weight: 700;
//           color: #111827;
//         }
//         .service-area-box:hover .service-area-title {
//           color: #16a34a;
//         }

//         /* Detail View Styles */
//         .detail-card {
//           background: #fff;
//           padding: 40px;
//           border-radius: 12px;
//           box-shadow: 0 10px 40px rgba(0,0,0,0.08);
//           text-align: left;
//           animation: fadeIn 0.4s ease-in-out;
//         }
//         .back-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font-weight: 600;
//           color: #6b7280;
//           cursor: pointer;
//           margin-bottom: 20px;
//           transition: color 0.2s;
//           border: none;
//           background: transparent;
//           padding: 0;
//         }
//         .back-btn:hover {
//           color: #16a34a;
//         }
//         .detail-title {
//           font-size: 32px;
//           font-weight: 800;
//           margin-bottom: 20px;
//           color: #111827;
//         }
//         .detail-text {
//           font-size: 16px;
//           color: #4b5563;
//           line-height: 1.7;
//           margin-bottom: 30px;
//         }
//         .feature-list {
//           list-style: none;
//           padding: 0;
//           margin-bottom: 40px;
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 15px;
//         }
//         .feature-list li {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           font-weight: 500;
//           color: #374151;
//         }
//         .feature-list :global(svg) {
//           color: #16a34a;
//         }
        
//         /* Map Styling */
//         .map-container {
//           width: 100%;
//           height: 400px;
//           background: #f3f4f6;
//           border-radius: 12px;
//           overflow: hidden;
//           border: 1px solid #e5e7eb;
//         }
//         .map-container iframe {
//           width: 100%;
//           height: 100%;
//           border: none;
//         }
        
//         .service-area-note { color: #9ca3af; font-size: 14px; font-style: italic; }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @media(max-width: 768px) {
//           .feature-list { grid-template-columns: 1fr; }
//           .map-container { height: 300px; }
//         }
//       `}</style>

//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-10">
//             <div className="section-title text-center mb-50">
//               {/* Only show intro text if we are in list mode */}
//               {!selectedArea && (
//                 <p>
//                   We provide professional landscaping, tree removal, snow removal,
//                   hardscaping, and property maintenance services across Toronto and
//                   the GTA.
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* CONDITION: If selectedArea is NULL, show the LIST */}
//         {!selectedArea ? (
//           <div className="row text-center">
//             {areas.map((area) => (
//               <div key={area} className="col-xl-3 col-lg-4 col-md-6 mb-30">
//                 <div
//                   className="service-area-box"
//                   onClick={() => handleAreaClick(area)}
//                   aria-label={`View services in ${area}`}
//                 >
//                   <h4 className="service-area-title">{area}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* CONDITION: If selectedArea HAS VALUE, show the DETAILS */
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="detail-card">
                
//                 {/* Back Button */}
//                 <button onClick={handleBack} className="back-btn">
//                   <FaArrowLeft /> Back to Service Areas
//                 </button>

//                 {/* Content */}
//                 <h2 className="detail-title">
//                   Professional Landscaping in <span style={{color: '#16a34a'}}>{selectedArea}</span>
//                 </h2>
                
//                 <p className="detail-text">
//                   Rolax Landscaping is proud to serve the <strong>{selectedArea}</strong> community. 
//                   Our team of experts is familiar with the local soil conditions, climate, and municipal 
//                   regulations of {selectedArea} to ensure your property looks its best year-round.
//                   Whether you need seasonal cleanup, hardscape installation, or regular lawn maintenance, 
//                   we are your trusted local partners.
//                 </p>

//                 <h4 className="mb-3">Services available in {selectedArea}:</h4>
//                 <ul className="feature-list">
//                   <li><FaCheckCircle /> Landscape Design</li>
//                   <li><FaCheckCircle /> Snow Plowing & Removal</li>
//                   <li><FaCheckCircle /> Interlocking & Paving</li>
//                   <li><FaCheckCircle /> Tree Cutting & Pruning</li>
//                   <li><FaCheckCircle /> Sod Installation</li>
//                   <li><FaCheckCircle /> Garden Maintenance</li>
//                 </ul>

//                 {/* Embedded Map Section */}
//                 <h4 className="mb-3">Our Coverage in {selectedArea}</h4>
//                 <div className="map-container">
//                   <iframe
//                     title={`Map of ${selectedArea}`}
//                     width="100%"
//                     height="100%"
//                     loading="lazy"
//                     allowFullScreen
//                     src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedArea + " Ontario Canada")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
//                   ></iframe>
//                 </div>

//               </div>
//             </div>
//           </div>
//         )}

//         <div className="row mt-40">
//           <div className="col-xl-12 text-center">
//             <p className="service-area-note">
//               Don’t see your area listed? Contact us — we may still be able to help.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceArea;





"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

const areas = [
  "Reading",
  "Wyomissing",
  "West Reading",
  "Shillington",
  "Sinking Spring",
  "Laureldale",
  "Muhlenberg",
  "Temple",
  "Fleetwood",
  "Blandon",
  "Birdsboro",
  "Mohnton"
];

const ServiceArea = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const handleAreaClick = (area: string) => {
    setSelectedArea(area);
    setTimeout(() => {
        const section = document.querySelector('.service-area-section');
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  const handleBack = () => {
    setSelectedArea(null);
  };

  return (
    <section className="service-area-section bg-4 pt-90 pb-90">
      <style jsx>{`
        /* Keeping all your exact CSS intact */
        .bg-4 { background-color: #f3f4f6; }
        .pt-90 { padding-top: 90px; }
        .pb-90 { padding-bottom: 90px; }
        .mb-50 { margin-bottom: 50px; }
        .mb-30 { margin-bottom: 30px; }
        .mt-40 { margin-top: 40px; }
        
        .section-title h2 { font-size: 36px; font-weight: 800; color: #111827; margin-bottom: 20px; }
        .section-title p { color: #6b7280; max-width: 600px; margin: 0 auto; line-height: 1.6; }

        .service-area-box { display: block; background: #fff; padding: 30px 20px; border-radius: 8px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: all 0.3s ease; cursor: pointer; border: 1px solid transparent; height: 100%; text-align: center; }
        .service-area-box:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-color: #16a34a; }
        .service-area-title { margin: 0; font-size: 18px; font-weight: 700; color: #111827; }
        .service-area-box:hover .service-area-title { color: #16a34a; }

        .detail-card { background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); text-align: left; animation: fadeIn 0.4s ease-in-out; }
        .back-btn { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; color: #6b7280; cursor: pointer; margin-bottom: 20px; transition: color 0.2s; border: none; background: transparent; padding: 0; }
        .back-btn:hover { color: #16a34a; }
        .detail-title { font-size: 32px; font-weight: 800; margin-bottom: 20px; color: #111827; }
        .detail-text { font-size: 16px; color: #4b5563; line-height: 1.7; margin-bottom: 30px; }
        .feature-list { list-style: none; padding: 0; margin-bottom: 40px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
        .feature-list li { display: flex; align-items: center; gap: 10px; font-weight: 500; color: #374151; }
        .feature-list :global(svg) { color: #16a34a; }
        
        .map-container { width: 100%; height: 400px; background: #f3f4f6; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; }
        .map-container iframe { width: 100%; height: 100%; border: none; }
        
        .service-area-note { color: #9ca3af; font-size: 14px; font-style: italic; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @media(max-width: 768px) { .feature-list { grid-template-columns: 1fr; } .map-container { height: 300px; } }
      `}</style>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="section-title text-center mb-50">
              {!selectedArea && (
                <>
                  <h2>Areas We Serve Around Reading, PA</h2>
                  <p>
                    We provide professional landscaping, tree removal, snow removal,
                    hardscaping, and property maintenance services across Reading,
                    Wyomissing, West Reading, and nearby Berks County communities.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {!selectedArea ? (
          <div className="row text-center">
            {areas.map((area) => (
              <div key={area} className="col-xl-3 col-lg-4 col-md-6 mb-30">
                {/* ✅ Accessibility FIX: Added role and tabIndex so screen readers know this is clickable */}
                <div
                  className="service-area-box"
                  onClick={() => handleAreaClick(area)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleAreaClick(area); }}
                  aria-label={`View services in ${area}`}
                >
                  {/* Changed to H3 to maintain proper document hierarchy under the new H2 */}
                  <h3 className="service-area-title">{area}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="detail-card">
                
                <button onClick={handleBack} className="back-btn" aria-label="Go back to service areas list">
                  <FaArrowLeft aria-hidden="true" /> Back to Service Areas
                </button>

                <h2 className="detail-title">
                  Professional Landscaping in <span style={{color: '#16a34a'}}>{selectedArea}</span>
                </h2>
                
                <p className="detail-text">
                  Rolax Landscaping is proud to serve the <strong>{selectedArea}</strong> community. 
                  Our team is familiar with the local climate, seasonal conditions, and property needs 
                  in and around {selectedArea} to keep your landscape looking its best year-round.
                  Whether you need seasonal cleanup, hardscape installation, or regular lawn maintenance, 
                  we are your trusted local partners.
                </p>

                <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                  Services available in {selectedArea}:
                </h3>
                <ul className="feature-list">
                  <li><FaCheckCircle aria-hidden="true" /> Landscape Design</li>
                  <li><FaCheckCircle aria-hidden="true" /> Snow Plowing & Removal</li>
                  <li><FaCheckCircle aria-hidden="true" /> Interlocking & Paving</li>
                  <li><FaCheckCircle aria-hidden="true" /> Tree Cutting & Pruning</li>
                  <li><FaCheckCircle aria-hidden="true" /> Sod Installation</li>
                  <li><FaCheckCircle aria-hidden="true" /> Garden Maintenance</li>
                </ul>

                <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                  Our Coverage in {selectedArea}
                </h3>
                <div className="map-container">
                  <iframe
                    title={`Google Map of landscaping coverage in ${selectedArea}`}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(`${selectedArea}, Pennsylvania, USA`)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                </div>

              </div>
            </div>
          </div>
        )}

        <div className="row mt-40">
          <div className="col-xl-12 text-center">
            <p className="service-area-note">
              Don’t see your area listed? Contact us — we may still be able to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;