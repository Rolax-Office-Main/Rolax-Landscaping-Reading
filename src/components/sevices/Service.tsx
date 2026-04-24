
// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { v4 as uuidv4 } from "uuid";
// import { FaLongArrowAltRight } from "react-icons/fa";

// type ServiceDataType = {
//   id: string;
//   heading: string;
//   description: string;
//   img: string;
//   serviceLink: string;
// };

// const ServiceData: ServiceDataType[] = [
//   {
//     id: uuidv4(),
//     heading: "Landscaping Services in Toronto",
//     description: "Professional landscaping and mulch installation services across Toronto. We improve curb appeal with expert lawn care, planting, edging, and seasonal landscape maintenance.",
//     img: "/images/service/landscape.png",
//     serviceLink: "/service-details/landscaping",
//   },
//   {
//     id: uuidv4(),
//     heading: "Home Remodelling & Renovation",
//     description: "Complete home renovation services including kitchens, bathrooms, basements, and interior upgrades. We transform your living space with modern design and quality craftsmanship.",
//     img: "/images/service/remodel.png", 
//     serviceLink: "/service-details/home-remodelling",
//   },
//   {
//     id: uuidv4(),
//     heading: "Hardscaping Contractors in Toronto",
//     description: "Trusted hardscaping contractors in Toronto specializing in patios, paver walkways, retaining walls, and custom outdoor living spaces built for durability.",
//     img: "/images/service/hardscape.png",
//     serviceLink: "/service-details/hardscaping",
//   },
//   {
//     id: uuidv4(),
//     heading: "Professional Tree Services in Toronto",
//     description: "Licensed tree services across Toronto including tree removal, trimming, pruning, and emergency cleanup to keep properties safe and healthy.",
//     img: "/images/service/treeremoval.png",
//     serviceLink: "/service-details/tree-service",
//   },
//   {
//     id: uuidv4(),
//     heading: "Snow Plowing & Snow Removal Services in Toronto",
//     description: "Reliable residential and commercial snow plowing services across Toronto. Fast-response snow removal to keep driveways and walkways safe.",
//     img: "/images/service/snow.png",
//     serviceLink: "/service-details/snow-removal",
//   },
// ];

// const ServiceItem = ({ img, heading, description, serviceLink }: Omit<ServiceDataType, "id">) => {
//   return (
//     <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
//       <div className="single-service h-100">
//         <div className="service-icon">
//           <Image src={img} alt={heading} width={60} height={60} style={{ objectFit: "contain" }} />
//         </div>
//         <h3>{heading}</h3>
//         <p>{description}</p>
//         <Link href={serviceLink} className="read-more">
//           Read More <FaLongArrowAltRight />
//         </Link>
//       </div>
//     </div>
//   );
// };

// const Service = () => {
//   return (
//     <>
//       <style jsx>{`
//         /* 1. BACKGROUND COLOR MATCH */
//         .service-area { 
//           background-color: #fdfcf0; 
//           padding: 110px 0;
//         }

//         /* 2. SECTION TITLE */
//         .section-title { 
//             margin-bottom: 70px;
//             text-align: center;
//         }

//         .section-title span { 
//             color: #16a34a; 
//             font-weight: 700; 
//             display: block; 
//             margin-bottom: 10px; 
//             text-transform: uppercase;
//         }

//         .section-title h2 { 
//             font-size: 36px; 
//             font-weight: 800; 
//             color: #111827; 
//             margin-bottom: 25px; 
//         }

//         .section-title p { 
//             max-width: 1000px; 
//             margin: 0 auto; 
//             color: #6b7280; 
//             line-height: 1.8; 
//             font-size: 16px;
//         }

//         /* 3. SERVICE CARDS */
//         .single-service {
//           background: #ffffff;
//           padding: 40px 30px;
//           border-radius: 6px;
//           transition: all 0.4s ease;
//           display: flex;
//           flex-direction: column;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.03);
//           height: 100%;
//         }
        
//         .single-service:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 15px 35px rgba(0,0,0,0.08);
//         }

//         .service-icon { margin-bottom: 25px; }

//         .single-service h3 {
//           font-size: 20px;
//           font-weight: 700;
//           margin-bottom: 15px;
//           color: #111827;
//         }

//         .single-service p {
//           margin-bottom: 25px;
//           color: #6b7280;
//           flex-grow: 1;
//           line-height: 1.6;
//         }

//         .read-more {
//           color: #16a34a; 
//           font-weight: 700;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           text-decoration: none;
//         }

//         /* 4. THE LARGE CARD */
//         .single-service-large {
//           background: #ffffff; 
//           padding: 50px;
//           border-radius: 6px;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.03);
//           border-top: 5px solid #16a34a; 
//           text-align: center; /* Centered Text looks better in the middle box */
//         }
        
//         .single-service-large h3 {
//           font-size: 32px;
//           color: #111827;
//           font-weight: 700;
//           margin-bottom: 20px;
//         }

//         .single-service-large h3 span { color: #16a34a; }

//         .single-service-large p {
//           color: #6b7280;
//           margin-bottom: 35px;
//           font-size: 16px;
//           line-height: 1.7;
//         }

//         .l-btn {
//           background: #16a34a;
//           color: #fff;
//           padding: 16px 40px;
//           border-radius: 30px;
//           font-weight: 700;
//           text-decoration: none;
//           display: inline-block;
//           width: fit-content;
//           margin: 0 auto; /* Centers the button */
//           transition: 0.3s;
//         }
//         .l-btn:hover { background: #111827; }

//         .mb-30 { margin-bottom: 30px; }
//       `}</style>

//       <div className="service-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="section-title">
//                 <span>Our Services</span>
//                 <h2>We are the leaders in Landscaping in Toronto.</h2>
//                 <p>
//                   With years of hands-on experience and proven expertise, we deliver exceptional landscaping, tree, and snow removal services to customers across Canada. Our goal is to exceed expectations by providing reliable, high-quality workmanship that leaves every customer impressed.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* ROW 1: The Service Cards */}
//           <div className="row">
//             {ServiceData.map((data) => (
//               <ServiceItem
//                 key={data.id}
//                 img={data.img}
//                 heading={data.heading}
//                 description={data.description}
//                 serviceLink={data.serviceLink}
//               />
//             ))}
//           </div>
          
//           {/* ROW 2: The Large Centered Box (New Row) */}
//           <div className="row justify-content-center mt-4">
//             <div className="col-xl-8 col-lg-10 col-md-12 mb-30">
//               <div className="single-service-large">
//                 <h3>
//                   Professional Landscaping Services <br />
//                   <span>You Can Trust in Toronto</span>
//                 </h3>
//                 <p>
//                   Rolax Landscaping provides high-quality landscaping services for residential and commercial properties across Toronto and surrounding areas. From lawn care and mulch installation to hardscaping, tree services, and snow plowing, our experienced team delivers reliable results with attention to detail and customer satisfaction.
//                 </p>
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

// export default Service;








"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

type ServiceDataType = {
  id: number;
  heading: string;
  description: string;
  img: string;
  serviceLink: string;
  primary: boolean;
};

// ✅ SEO: Removed repetitive "in Toronto" from headings to avoid keyword stuffing penalties. 
// Naturally integrated GTA, Buffalo, and specific service keywords into the descriptions instead.
const ServiceData: ServiceDataType[] = [
  {
    id: 1,
    heading: "Expert Landscaping",
    description: "Professional landscaping, mulch installation, and lawn care. We improve curb appeal with expert planting, edging, and seasonal maintenance across the GTA and Buffalo.",
    img: "/images/project/landscape.jpg",
    serviceLink: "/service-details/landscaping",
    primary: true,
  },
  {
    id: 2,
    heading: "Custom Hardscaping",
    description: "Trusted hardscaping contractors specializing in interlock patios, paver walkways, retaining walls, and custom outdoor living spaces built for Canadian weather.",
    img: "/images/project/hardscape.jpg",
    serviceLink: "/service-details/hardscaping",
    primary: true,
  },
  {
    id: 3,
    heading: "Home Remodelling",
    description: "Complete home renovation services including kitchens, bathrooms, basements, and interior upgrades. We transform living spaces with modern design and quality craftsmanship.",
    img: "/images/project/fence.jpg",
    serviceLink: "/service-details/home-remodelling",
    primary: true,
  },
  {
    id: 4,
    heading: "Professional Tree Service",
    description: "Licensed arborists providing safe tree removal, stump grinding, trimming, pruning, and emergency storm cleanup to keep your property safe and healthy.",
    img: "/images/project/tree-removal.jpg",
    serviceLink: "/service-details/tree-service",
    primary: true,
  },
  {
    id: 5,
    heading: "Other Services",
    description: "We also provide snow removal, sod installation, mulch installation, and artificial turf solutions tailored for residential and commercial properties.",
    img: "/images/project/snow-removal.jpeg",
    serviceLink: "/services",
    primary: false,
  },
];

const ServiceItem = ({ img, heading, description, serviceLink, primary }: Omit<ServiceDataType, "id">) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-30" role="listitem">
      <div className="single-service h-100">
        {primary ? <span className="service-badge">Primary Service</span> : null}
        <div className="service-media">
          <Image src={img} alt={`${heading} service photo`} width={480} height={300} className="service-media-img" />
        </div>
        <span className="service-kicker">Rolax Signature</span>
        <h3>{heading}</h3>
        <p>{description}</p>
        
        {/* ✅ Technical SEO / Accessibility: Added aria-label. "Read More" alone is bad for screen readers; they need to know what they are reading more about! */}
        <Link href={serviceLink} className="read-more" aria-label={`Read more about ${heading} services`}>
          Explore {heading} <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

const Service = () => {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rolax Landscaping Premium Offerings",
    itemListElement: ServiceData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.heading,
        description: service.description,
        url: `https://rolaxlandscapingcanada.com${service.serviceLink}`,
      },
    })),
  };

  return (
    <>
      <style jsx>{`
        .service-area { background:
          radial-gradient(circle at 15% 15%, rgba(22,163,74,0.08), transparent 38%),
          radial-gradient(circle at 90% 0%, rgba(255,107,53,0.08), transparent 28%),
          #fdfcf0;
          padding: 110px 0;
        }
        .section-title { margin-bottom: 70px; text-align: center; }
        .section-title span { color: #16a34a; font-weight: 700; display: block; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.06em; }
        .section-title h2 { font-size: 40px; font-weight: 900; color: #111827; margin-bottom: 20px; letter-spacing: -0.03em; }
        .section-title p { max-width: 980px; margin: 0 auto; color: #4b5563; line-height: 1.85; font-size: 16px; }
        .single-service { position: relative; overflow: hidden; background: linear-gradient(165deg, #ffffff, #f9fffb); padding: 22px; border-radius: 20px; transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease; display: flex; flex-direction: column; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08); border: 1px solid rgba(22, 163, 74, 0.12); height: 100%; }
        .single-service::after { content: ""; position: absolute; inset: 0; background: linear-gradient(130deg, rgba(22,163,74,0.06), transparent 45%); opacity: 0; transition: opacity 0.35s ease; pointer-events: none; }
        .single-service:hover { transform: translateY(-10px); box-shadow: 0 26px 44px rgba(15, 23, 42, 0.14); border-color: rgba(22,163,74,0.32); }
        .single-service:hover::after { opacity: 1; }
        .service-badge { position: absolute; top: 14px; right: 14px; z-index: 3; margin-bottom: 0; padding: 7px 12px; border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #065f46; background: #d1fae5; border: 1px solid rgba(5, 150, 105, 0.25); }
        .service-media { margin: -22px -22px 18px; border-radius: 20px 20px 0 0; height: 190px; background: #eaf4ee; overflow: hidden; border-bottom: 1px solid rgba(22,163,74,0.15); }
        .service-media-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.45s ease; }
        .single-service:hover .service-media-img { transform: scale(1.05); }
        .service-kicker { color: #047857; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px; }
        .single-service h3 { font-size: 22px; font-weight: 800; margin-bottom: 12px; color: #111827; letter-spacing: -0.02em; }
        .single-service p { margin-bottom: 24px; color: #4b5563; flex-grow: 1; line-height: 1.75; }
        .read-more { margin-top: auto; color: #0f5132; font-weight: 800; display: inline-flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; border: 1px solid rgba(22, 163, 74, 0.28); border-radius: 10px; padding: 10px 14px; background: #f4fff8; transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease; }
        .single-service:hover .read-more { background: #16a34a; color: #ffffff; border-color: #16a34a; }
        .read-more :global(svg) { transition: transform 0.2s ease; }
        .single-service:hover .read-more :global(svg) { transform: translateX(4px); }
        .single-service-large { background: linear-gradient(180deg, #ffffff 0%, #f8fff9 100%); padding: 54px 44px; border-radius: 18px; height: 100%; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 14px 30px rgba(15,23,42,0.1); border-top: 5px solid #16a34a; text-align: center; }
        .single-service-large h3 { font-size: 34px; color: #111827; font-weight: 800; margin-bottom: 18px; letter-spacing: -0.02em; }
        .single-service-large h3 span { color: #16a34a; }
        .single-service-large p { color: #4b5563; margin-bottom: 30px; font-size: 16px; line-height: 1.8; }
        .l-btn { background: linear-gradient(135deg, #16a34a, #15803d); color: #fff; padding: 16px 40px; border-radius: 999px; font-weight: 800; text-decoration: none; display: inline-block; width: fit-content; margin: 0 auto; transition: transform 0.25s ease, box-shadow 0.25s ease; box-shadow: 0 14px 24px rgba(22,163,74,0.32); }
        .l-btn:hover { transform: translateY(-2px); box-shadow: 0 18px 30px rgba(22,163,74,0.4); color: #fff; }
        .mb-30 { margin-bottom: 30px; }
        @media (max-width: 991px) {
          .service-area { padding: 86px 0; }
          .section-title { margin-bottom: 54px; }
          .section-title h2 { font-size: 34px; }
          .single-service-large { padding: 42px 28px; }
          .single-service-large h3 { font-size: 30px; }
        }
        @media (max-width: 575px) {
          .service-area { padding: 74px 0; }
          .section-title h2 { font-size: 30px; line-height: 1.2; }
          .single-service { padding: 18px; }
          .service-media { margin: -18px -18px 16px; height: 170px; }
          .single-service h3 { font-size: 20px; }
          .single-service-large { padding: 34px 20px; }
          .single-service-large h3 { font-size: 26px; }
          .l-btn { width: 100%; text-align: center; }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <section className="service-area" aria-labelledby="premium-offerings-heading">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title">
                <span>Our Premium Offerings</span>
                {/* ✅ SEO: Upgraded H2 to act as the location anchor for all the cards below it */}
                <h2 id="premium-offerings-heading">Top-Rated Landscaping, Hardscaping & Tree Services in Reading, PA</h2>
                <p>
                  With years of hands-on experience and proven expertise, we deliver exceptional landscaping, hardscaping, home remodelling, and tree care services for residential and commercial properties. Our goal is to exceed expectations through reliable scheduling, clean workmanship, and long-term value.
                </p>
              </div>
            </div>
          </div>
          
          {/* ROW 1: The Service Cards */}
          <div className="row" role="list" aria-label="Premium landscaping and property services">
            {ServiceData.map((data) => (
              <ServiceItem
                key={data.id}
                img={data.img}
                heading={data.heading}
                description={data.description}
                serviceLink={data.serviceLink}
                primary={data.primary}
              />
            ))}
          </div>
          
          {/* ROW 2: The Large Centered Box (New Row) */}
          <div className="row justify-content-center mt-4">
            <div className="col-xl-8 col-lg-10 col-md-12 mb-30">
              <div className="single-service-large">
                <h3>
                  Comprehensive Property Care <br />
                  <span>You Can Trust</span>
                </h3>
                <p>
                  Rolax Landscaping provides high-quality outdoor solutions for residential and commercial properties. From lush lawn care and vibrant mulch installation to durable hardscaping and rapid-response snow plowing, our experienced team delivers reliable results with unmatched attention to detail.
                </p>
                {/* ✅ UX/SEO: Stronger Action Verb CTA */}
                <Link href="/contact" className="l-btn">
                  Get Your Free Estimate
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Service;