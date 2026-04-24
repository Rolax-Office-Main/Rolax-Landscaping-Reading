// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const HomeAbout = () => {
//   return (
//     <>
//       <div className="about-area gray-bg-2 pt-200 pb-160">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-6 col-lg-6 col-md-6">
//               <div className="about-img-style-1">
//                 {/* Updated to use Next.js Image */}
//                 <Image 
//                   src="/images/about/about.jpg" 
//                   alt="About Rolax Landscaping" 
//                   width={570} // Estimated width based on standard layouts
//                   height={570}
//                   style={{ width: "100%", height: "auto" }} // Responsive scaling
//                 />
//                 <div className="about-award">
//                   <h3>We Are Since 2010! Over 200 Awards</h3>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-xl-6 col-lg-6 col-md-6">
//               <div className="about-text-wrapper pt-30">
//                 <div className="section-title mb-40">
//                   <span>We are Committed to Landscape Service</span>
//                   <h3 className="mb-30">
//                     Rolax Landscaping is a trusted provider of high-quality landscaping, hardscaping, tree service, and snow plowing services in Toronto
//                   </h3>
//                   <p>
//                     Rolax Landscaping is a professional landscaping company serving Toronto and the Greater Toronto Area (GTA), providing reliable services for both residential and commercial properties. We specialize in landscaping, hardscaping, tree services, and snow plowing, using expert craftsmanship, modern equipment, and proven techniques to enhance outdoor spaces year-round. From custom landscape design, paver and interlock installation, and lawn maintenance to dependable snow removal and seasonal property care, we are committed to delivering high-quality results, improved curb appeal, and personalized service you can trust across Toronto and surrounding areas.
//                   </p>
//                 </div>
                
//                 {/* Updated to use Next.js Link */}
//                 <Link href="/contact" className="l-btn">
//                   Appointment
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomeAbout;







import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <>
      <div className="about-area gray-bg-2 pt-200 pb-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="about-img-style-1">
                {/* ✅ SEO: Upgraded Alt Text. Highly descriptive for Google Image Search */}
                <Image 
                  src="/images/about/about.jpg" 
                    alt="Rolax Landscaping crew performing professional hardscaping and lawn maintenance in Reading" 
                  width={570} 
                  height={570}
                  style={{ width: "100%", height: "auto" }} 
                />
                <div className="about-award">
                  {/* Minor grammar tweak for better trust/readability */}
                  <h3>Trusted Since 2010! Over 200 Awards</h3>
                </div>
              </div>
            </div>
            
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="about-text-wrapper pt-30">
                <div className="section-title mb-40">
                  {/* ✅ SEO: Added a semantic <strong> tag to give this sub-text a little extra weight */}
                  <span className="d-block mb-2">
                    <strong>Committed to Premium Property Care</strong>
                  </span>
                  
                  {/* ✅ SEO: Changed from a massive <h3> to a clean, keyword-rich <h2> */}
                  <h2 className="mb-30">
                    Expert Landscaping & Snow Plowing in Reading, PA
                  </h2>
                  
                  {/* ✅ UX/SEO: Split your text into two paragraphs. Huge blocks of text cause users to leave early (High Bounce Rate). Short paragraphs keep them reading! */}
                  <p className="mb-3">
                    Rolax Landscaping Reading is a professional company serving Reading, Wyomissing, West Reading, and nearby Berks County communities. We provide highly reliable services for both residential and commercial properties. We specialize in custom landscaping, hardscaping, tree services, and dependable snow plowing. 
                  </p>
                  <p>
                    Using expert craftsmanship, modern equipment, and proven techniques, we enhance outdoor spaces year-round. From paver and interlock installation to lawn maintenance and seasonal property care, we are committed to delivering high-quality results, improved curb appeal, and personalized service you can trust.
                  </p>
                </div>
                
                {/* ✅ UX/SEO: Upgraded CTA text. "Appointment" is a bit dry. Action verbs drive more clicks! */}
                <Link href="/contact" className="l-btn">
                  Book Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;