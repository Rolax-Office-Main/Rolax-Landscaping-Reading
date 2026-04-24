
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

const ServiceItem = ({ img, heading, description, serviceLink, primary, num }: Omit<ServiceDataType, "id"> & { num: string }) => {
  return (
    <div className="svc-card" role="listitem">
      <div className="svc-inner">
        <Image src={img} alt={`${heading} service`} fill sizes="(max-width:768px) 100vw, 50vw" className="svc-img" />
        <div className="svc-gradient" />
        <span className="svc-num">{num}</span>
        {primary && <span className="svc-badge">&#9733; Signature</span>}
        <div className="svc-content">
          <h3 className="svc-title">{heading}</h3>
          <p className="svc-desc">{description}</p>
          <Link
            href={serviceLink}
            aria-label={`Read more about ${heading}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "13px",
              textDecoration: "none",
              padding: "10px 18px",
              borderRadius: "10px",
              letterSpacing: "0.03em",
              transition: "background 0.25s ease, border-color 0.25s ease",
            }}
            className="svc-link"
          >
            Explore <FaLongArrowAltRight />
          </Link>
        </div>
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
        /* ── Section wrapper ─────────────────── */
        .service-area {
          background: #0d1a12;
          padding: 110px 0;
          position: relative;
        }
        .service-area::before {
          content: "";
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 15% 30%, rgba(22,163,74,0.12), transparent),
            radial-gradient(ellipse 50% 40% at 85% 70%, rgba(22,163,74,0.08), transparent);
          pointer-events: none;
        }

        /* ── Section header ─────────────────────── */
        .section-title { margin-bottom: 72px; text-align: center; position: relative; z-index: 2; }
        .section-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(22,163,74,0.15); border: 1px solid rgba(22,163,74,0.35);
          color: #4ade80; font-size: 11.5px; font-weight: 800; letter-spacing: 0.16em;
          text-transform: uppercase; border-radius: 999px; padding: 7px 20px;
          margin-bottom: 22px;
        }
        .section-pill::before { content: ""; display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 6px #4ade80; }
        .section-title h2 { font-size: 44px; font-weight: 900; color: #f8fafc; margin-bottom: 18px; letter-spacing: -0.035em; line-height: 1.16; }
        .section-title h2 em { font-style: normal; color: #4ade80; }
        .section-title p { max-width: 640px; margin: 0 auto; color: rgba(255,255,255,0.58); line-height: 1.85; font-size: 16px; }
        .title-divider { display: flex; align-items: center; justify-content: center; gap: 12px; margin: 26px auto 0; max-width: 220px; }
        .title-divider-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(74,222,128,0.4)); }
        .title-divider-line-r { flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(74,222,128,0.4)); }
        .title-divider-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; flex-shrink: 0; box-shadow: 0 0 8px #4ade80; }

        /* ── Bento grid ───────────────────────────── */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 20px;
          position: relative; z-index: 2;
        }
        .svc-card { border-radius: 20px; overflow: hidden; position: relative; }
        .svc-card:nth-child(1) { grid-column: span 2; grid-row: span 1; }
        .svc-card:nth-child(4) { grid-column: span 2; grid-row: span 1; }
        .svc-inner { position: relative; width: 100%; height: 380px; overflow: hidden; border-radius: 20px; cursor: pointer; }
        .svc-card:nth-child(1) .svc-inner,
        .svc-card:nth-child(4) .svc-inner { height: 380px; }
        .svc-img { object-fit: cover; transition: transform 0.65s cubic-bezier(0.22,1,0.36,1) !important; }
        .svc-card:hover .svc-img { transform: scale(1.07) !important; }
        .svc-gradient {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(180deg,
            rgba(0,0,0,0.05) 0%,
            rgba(0,0,0,0.15) 35%,
            rgba(5,30,15,0.82) 100%);
          transition: opacity 0.35s ease;
        }
        .svc-card:hover .svc-gradient { opacity: 0.95; }
        .svc-num {
          position: absolute; top: 20px; right: 22px; z-index: 3;
          font-size: 72px; font-weight: 900; line-height: 1;
          color: rgba(255,255,255,0.07); letter-spacing: -0.04em;
          pointer-events: none; user-select: none;
          transition: color 0.35s ease;
        }
        .svc-card:hover .svc-num { color: rgba(74,222,128,0.12); }
        .svc-badge {
          position: absolute; top: 18px; left: 18px; z-index: 4;
          padding: 5px 12px; border-radius: 999px; font-size: 10.5px; font-weight: 800;
          letter-spacing: 0.09em; text-transform: uppercase;
          color: #f0fdf4; background: rgba(22,163,74,0.7);
          border: 1px solid rgba(74,222,128,0.35); backdrop-filter: blur(6px);
        }
        .svc-content {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 4;
          padding: 28px 28px 26px;
          transform: translateY(8px);
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1);
        }
        .svc-card:hover .svc-content { transform: translateY(0); }
        .svc-title { font-size: 24px; font-weight: 900; color: #ffffff; margin: 0 0 8px; letter-spacing: -0.025em; line-height: 1.2; }
        .svc-desc {
          color: rgba(255,255,255,0.75); font-size: 14px; line-height: 1.72;
          margin: 0 0 18px;
          max-height: 0; overflow: hidden;
          transition: max-height 0.42s cubic-bezier(0.22,1,0.36,1), margin 0.3s ease, opacity 0.35s ease;
          opacity: 0;
        }
        .svc-card:hover .svc-desc { max-height: 120px; opacity: 1; }
        .svc-link:hover { background: rgba(22,163,74,0.8) !important; border-color: rgba(74,222,128,0.6) !important; }

        /* ── CTA banner ──────────────────────────── */
        .cta-banner {
          position: relative; overflow: hidden; margin-top: 64px; z-index: 2;
          background: linear-gradient(130deg, #052e16 0%, #14532d 50%, #166534 100%);
          border-radius: 24px; padding: 58px 56px;
          display: flex; align-items: center; justify-content: space-between; gap: 36px;
          border: 1px solid rgba(74,222,128,0.15);
          box-shadow: 0 24px 56px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .cta-banner::before {
          content: ""; position: absolute;
          width: 580px; height: 580px; border-radius: 50%;
          background: rgba(255,255,255,0.03);
          top: -260px; right: -80px; pointer-events: none;
        }
        .cta-banner::after {
          content: ""; position: absolute;
          width: 350px; height: 350px; border-radius: 50%;
          background: rgba(74,222,128,0.05);
          bottom: -170px; left: -40px; pointer-events: none;
        }
        .cta-banner-text { position: relative; z-index: 2; }
        .cta-banner-eyebrow { color: rgba(255,255,255,0.55); font-size: 11.5px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; margin: 0 0 12px; }
        .cta-banner-text h3 { font-size: 36px; font-weight: 900; color: #ffffff; margin: 0; letter-spacing: -0.025em; line-height: 1.2; }
        .cta-banner-text h3 span { color: #86efac; }
        .cta-banner-actions { position: relative; z-index: 2; display: flex; gap: 14px; flex-wrap: wrap; flex-shrink: 0; align-items: center; }
        .mb-30 { margin-bottom: 30px; }
        @media (max-width: 1200px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-card:nth-child(1),
          .svc-card:nth-child(4) { grid-column: span 1; }
        }
        @media (max-width: 991px) {
          .service-area { padding: 86px 0; }
          .section-title { margin-bottom: 54px; }
          .section-title h2 { font-size: 34px; }
          .svc-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .svc-card:nth-child(1) { grid-column: span 2; }
          .svc-card:nth-child(4) { grid-column: span 1; }
          .cta-banner { flex-direction: column; padding: 46px 32px; text-align: center; }
          .cta-banner-text h3 { font-size: 28px; }
          .cta-banner-actions { justify-content: center; }
        }
        @media (max-width: 575px) {
          .service-area { padding: 74px 0; }
          .section-title h2 { font-size: 28px; line-height: 1.2; }
          .svc-grid { grid-template-columns: 1fr; gap: 14px; }
          .svc-card:nth-child(1),
          .svc-card:nth-child(4) { grid-column: span 1; }
          .svc-inner { height: 300px !important; }
          .svc-desc { max-height: 100px !important; opacity: 1 !important; }
          .svc-content { transform: translateY(0) !important; }
          .cta-banner { padding: 38px 22px; }
          .cta-banner-text h3 { font-size: 24px; }
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
                <div className="section-pill">Our Premium Offerings</div>
                <h2 id="premium-offerings-heading">
                  Top-Rated Landscaping, Hardscaping<br />&amp; <em>Tree Services</em> in Reading, PA
                </h2>
                <p>With years of hands-on experience we deliver exceptional landscaping, hardscaping, home remodelling, and tree care for residential and commercial properties — reliable scheduling, clean workmanship, and long-term value.</p>
                <div className="title-divider">
                  <span className="title-divider-line" />
                  <span className="title-divider-dot" />
                  <span className="title-divider-line-r" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bento Grid: Card 1 (double-wide), 2, 3, Card 4 (double-wide), 5 */}
          <div className="svc-grid" role="list" aria-label="Premium landscaping and property services">
            {ServiceData.map((data, i) => (
              <ServiceItem
                key={data.id}
                img={data.img}
                heading={data.heading}
                description={data.description}
                serviceLink={data.serviceLink}
                primary={data.primary}
                num={String(i + 1).padStart(2, "0")}
              />
            ))}
          </div>
          
          {/* CTA Banner */}
          <div className="cta-banner">
            <div className="cta-banner-text">
              <p className="cta-banner-eyebrow">Serving Reading, PA &amp; 26+ Surrounding Communities</p>
              <h3>Comprehensive Property Care<br /><span>You Can Trust</span></h3>
            </div>
            <div className="cta-banner-actions">
              <Link
                href="/contact"
                style={{
                  background: "#ffffff",
                  color: "#052e16",
                  padding: "16px 38px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  transition: "all 0.28s ease",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                Get Your Free Estimate
              </Link>
              <Link
                href="/services"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  padding: "16px 38px",
                  borderRadius: "14px",
                  fontWeight: 800,
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "inline-block",
                  border: "1.5px solid rgba(255,255,255,0.28)",
                  transition: "all 0.28s ease",
                  whiteSpace: "nowrap",
                }}
              >
                View All Services
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Service;