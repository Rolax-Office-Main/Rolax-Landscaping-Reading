// "use client";
// import React from "react";
// import Image from "next/image";
// import { v4 as uuidv4 } from "uuid";

// // Define the shape of our data for TypeScript
// type ChooseUsItem = {
//   id: string;
//   heading: string;
//   description: string;
//   img: string;
// };

// // Data Array - pointing to public folder paths
// const WhyChooseUsData: ChooseUsItem[] = [
//   {
//     id: uuidv4(),
//     heading: "Free Estimates",
//     description: "Fast, no-obligation estimates for landscaping, tree services, snow removal, and Christmas décor across Toronto and the GTA, helping homeowners and businesses plan with confidence.",
//     img: "/images/why-choose-us/estimate.png",
//   },
//   {
//     id: uuidv4(),
//     heading: "Modern Equipment",
//     description: "We use modern, professional landscaping and snow removal equipment across Toronto and surrounding GTA areas to deliver efficient, safe, and high-quality results year-round.",
//     img: "/images/why-choose-us/equipment.png",
//   },
//   {
//     id: uuidv4(),
//     heading: "Quality Work",
//     description: "Detail-focused landscaping, hardscaping, tree services, and property maintenance in Toronto and the GTA, designed to enhance curb appeal and provide long-term value.",
//     img: "/images/why-choose-us/work.png",
//   },
//   {
//     id: uuidv4(),
//     heading: "Friendly & Reliable Service",
//     description: "Trusted landscaping and snow removal services in Toronto and the GTA, known for friendly service, clear communication, on-time work, and guaranteed customer satisfaction.",
//     img: "/images/why-choose-us/support.png",
//   },
// ];

// const WhyChooseUsItem = ({ heading, description, img }: { heading: string; description: string; img: string }) => {
//   return (
//     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-30">
//       <div className="single-choose-us h-100">
//         <div className="single-choose-us-content">
//           <h3>{heading}</h3>
//           <p>{description}</p>
//         </div>
        
//         <div className="single-choose-us-icon">
//           {/* Using Next.js Image for optimization */}
//           <Image 
//             src={img} 
//             alt={heading} 
//             width={60} 
//             height={60} 
//             style={{ objectFit: "contain" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const WhyChoseUs = () => {
//   return (
//     <>
//       <style jsx>{`
//         /* FIX: Override fixed height so it grows with content */
//         .height-592 {
//           height: auto !important;
//           min-height: 592px;
//         }

//         /* Add spacing between cards on mobile/tablet */
//         .mb-30 {
//           margin-bottom: 30px;
//         }

//         /* Ensure cards look good */
//         .single-choose-us {
//           background: #fff;
//           padding: 30px 20px;
//           border-radius: 5px;
//           transition: .3s;
//           position: relative;
//           overflow: hidden;
//           z-index: 1;
//         }
        
//         .single-choose-us-icon {
//             margin-top: 20px;
//             display: flex;
//             justify-content: flex-end;
//         }

//         .bg-property {
//             background-size: cover;
//             background-position: center;
//             background-repeat: no-repeat;
//         }
        
//         .pt-110 { padding-top: 110px; }
//         .pb-80 { padding-bottom: 80px; }
//         .mb-70 { margin-bottom: 70px; }
        
//         .section-title span {
//             color: #16a34a;
//             font-weight: 700;
//             display: block;
//             margin-bottom: 10px;
//         }
//         .white-color { color: #fff !important; }
//       `}</style>

//       <div 
//         className="height-592 bg-property pt-110 pb-80" 
//         data-overlay="1" 
//         data-opacity="7" 
//         style={{ backgroundImage: `url('/images/why-choose-us/bg-2.jpg')` }}
//       >
//         <div className="container">
//           <div className="row position-relative">
//             <div className="col-xl-12">
//               <div className="section-title text-center mb-70">
//                 <span>Why Choose US</span>
//                 <h2 className="white-color">Experience the Ultimate Level of <br /> Landscaping Services</h2>
//               </div>
//             </div>
//           </div>
          
//           <div className="row position-relative">
//             {WhyChooseUsData.map((data) => (
//               <WhyChooseUsItem
//                 key={data.id}
//                 heading={data.heading}
//                 description={data.description}
//                 img={data.img}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WhyChoseUs;



"use client";
import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

// Define the shape of our data for TypeScript
type ChooseUsItem = {
  id: string;
  heading: string;
  description: string;
  img: string;
};

// ✅ SEO FIX: Removed repetitive location keywords to avoid keyword stuffing penalties.
// Made the descriptions read naturally while still including rich service keywords.
const WhyChooseUsData: ChooseUsItem[] = [
  {
    id: uuidv4(),
    heading: "Free Estimates",
    description: "Fast, no-obligation quotes for landscaping, tree services, snow removal, and Christmas décor. We help homeowners and commercial properties plan with confidence.",
    img: "/images/why-choose-us/estimate.png",
  },
  {
    id: uuidv4(),
    heading: "Modern Equipment",
    description: "We utilize state-of-the-art machinery and professional tools to deliver efficient, safe, and high-quality results year-round, no matter the weather.",
    img: "/images/why-choose-us/equipment.png",
  },
  {
    id: uuidv4(),
    heading: "Quality Workmanship",
    description: "Detail-focused hardscaping, softscaping, and property maintenance designed to elevate your curb appeal and provide durable, long-term value.",
    img: "/images/why-choose-us/work.png",
  },
  {
    id: uuidv4(),
    heading: "Reliable Service",
    description: "Known for our clear communication, punctual arrival, friendly crew, and a steadfast commitment to 100% customer satisfaction.",
    img: "/images/why-choose-us/support.png",
  },
];

const WhyChooseUsItem = ({ heading, description, img }: { heading: string; description: string; img: string }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-30">
      <div className="single-choose-us h-100">
        <div className="single-choose-us-content">
          {/* H3 is perfect here for maintaining document structure */}
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '15px' }}>{heading}</h3>
          <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{description}</p>
        </div>
        
        <div className="single-choose-us-icon">
          <Image 
            src={img} 
            alt={`${heading} Icon`} 
            width={60} 
            height={60} 
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

const WhyChoseUs = () => {
  return (
    <>
      <style jsx>{`
        .height-592 { height: auto !important; min-height: 592px; }
        .mb-30 { margin-bottom: 30px; }
        .single-choose-us { background: #fff; padding: 30px 20px; border-radius: 5px; transition: .3s; position: relative; overflow: hidden; z-index: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .single-choose-us-icon { margin-top: 20px; display: flex; justify-content: flex-end; }
        .bg-property { background-size: cover; background-position: center; background-repeat: no-repeat; }
        .pt-110 { padding-top: 110px; }
        .pb-80 { padding-bottom: 80px; }
        .mb-70 { margin-bottom: 70px; }
        .section-title span { color: #16a34a; font-weight: 700; display: block; margin-bottom: 10px; text-transform: uppercase; }
        .white-color { color: #fff !important; }
      `}</style>

      <div 
        className="height-592 bg-property pt-110 pb-80" 
        data-overlay="1" 
        data-opacity="7" 
        style={{ backgroundImage: `url('/images/why-choose-us/bg-2.jpg')` }}
      >
        <div className="container">
          <div className="row position-relative">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Why Choose Us</span>
                {/* ✅ SEO FIX: Moved the location keywords here to the main H2 tag! */}
                <h2 className="white-color">
                  Experience the Ultimate Level of <br /> Landscaping in Reading & the Surrounding Area
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row position-relative">
            {WhyChooseUsData.map((data) => (
              <WhyChooseUsItem
                key={data.id}
                heading={data.heading}
                description={data.description}
                img={data.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoseUs;