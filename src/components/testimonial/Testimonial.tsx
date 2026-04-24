// "use client";
// import React from "react";
// import Slider from "react-slick";
// import { FaStar } from "react-icons/fa";
// import { v4 as uuidv4 } from "uuid";

// // 1. Define the Data Type
// type TestimonialDataType = {
//   id: string;
//   name: string;
//   description: string;
// };

// // 2. The Data
// const TestimonialData: TestimonialDataType[] = [
//   {
//     id: uuidv4(),
//     name: "Ashwini Arunan",
//     description:
//       "Friendly and respectful team. They cleaned up my backyard perfectly and the property looked amazing after. I’ll definitely hire Rolax Landscaping again for regular lawn care.",
//   },
//   {
//     id: uuidv4(),
//     name: "Cindy Hanley",
//     description:
//       "Great people to work with. They scheduled quickly and finished the job within two days. The crew was professional, the managers checked in, and the final result matched the quote exactly.",
//   },
//   {
//     id: uuidv4(),
//     name: "Jack McNaughton",
//     description:
//       "Very impressed with their work ethic and attention to detail. The team was on time, tidy, and easy to communicate with. Highly recommend Rolax Landscaping.",
//   },
//   {
//     id: uuidv4(),
//     name: "ASURAN ROY",
//     description:
//       "They paid close attention to detail and made sure we were satisfied before finishing. We hired Rolax Landscaping for a cleanup and light landscaping, and the results were excellent.",
//   },
//   {
//     id: uuidv4(),
//     name: "Jack",
//     description:
//       "Excellent communication from estimate to completion. Pricing was fair with no upselling. They worked around my schedule, cleaned up all debris, and left the yard looking great. Will use again next season.",
//   },
// ];

// // 3. The Item Component
// const TestimonialItem = ({ name, description }: { name: string; description: string }) => {
//   return (
//     <div className="single-testimonial">
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <div className="star-rating">
//         <FaStar />
//         <FaStar />
//         <FaStar />
//         <FaStar />
//         <FaStar />
//       </div>
//     </div>
//   );
// };

// // 4. The Main Component
// const Testimonial = () => {
//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <style jsx>{`
//   .testimonial-area {
//     background-color: #fdfcf0; /* Matches your site exactly */
//     padding: 110px 0;
//   }
//   .testimonial-wrapper {
//     max-width: 1100px;
//     margin: 0 auto;
//   }
//   .single-testimonial {
//     background: #ffffff;
//     padding: 40px;
//     border-radius: 10px;
//     box-shadow: 0 10px 30px rgba(0,0,0,0.04);
//     position: relative;
//   }
//   .testimonial-icon {
//     color: #ffb900; /* The specific Gold/Yellow for stars and quotes */
//     font-size: 30px;
//     margin-bottom: 20px;
//   }
//   .testimonial-content p {
//     font-size: 18px;
//     line-height: 1.8;
//     color: #4b5563;
//     font-style: italic;
//     margin-bottom: 25px;
//   }
//   .testimonial-author h4 {
//     font-size: 20px;
//     font-weight: 700;
//     color: #111827;
//     margin: 0;
//   }
//   .stars {
//     color: #ffb900;
//     margin-bottom: 10px;
//     display: block;
//   }
// `}</style>

//       <div className="testimonial-area bg-4 pt-90 pb-110">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="section-title text-center mb-70">
//                 <span>Happy Customers</span>
//                 <h2>
//                   What Our Customer Says <br /> About Our Services
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <Slider {...settings} className="testimonial-slider">
//               {TestimonialData.map((data) => (
//                 <TestimonialItem
//                   key={data.id}
//                   name={data.name}
//                   description={data.description}
//                 />
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;








"use client";
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import Script from "next/script"; // Added for Review Schema

// 1. Define the Data Type
type TestimonialDataType = {
  id: string;
  name: string;
  description: string;
};

// 2. The Data
const TestimonialData: TestimonialDataType[] = [
  {
    id: uuidv4(),
    name: "Ashwini Arunan",
    description:
      "Friendly and respectful team. They cleaned up my backyard perfectly and the property looked amazing after. I’ll definitely hire Rolax Landscaping again for regular lawn care.",
  },
  {
    id: uuidv4(),
    name: "Cindy Hanley",
    description:
      "Great people to work with. They scheduled quickly and finished the job within two days. The crew was professional, the managers checked in, and the final result matched the quote exactly.",
  },
  {
    id: uuidv4(),
    name: "Jack McNaughton",
    description:
      "Very impressed with their work ethic and attention to detail. The team was on time, tidy, and easy to communicate with. Highly recommend Rolax Landscaping.",
  },
  {
    id: uuidv4(),
    name: "ASURAN ROY",
    description:
      "They paid close attention to detail and made sure we were satisfied before finishing. We hired Rolax Landscaping for a cleanup and light landscaping, and the results were excellent.",
  },
  {
    id: uuidv4(),
    name: "Jack",
    description:
      "Excellent communication from estimate to completion. Pricing was fair with no upselling. They worked around my schedule, cleaned up all debris, and left the yard looking great. Will use again next season.",
  },
];

// 3. The Item Component
const TestimonialItem = ({ name, description }: { name: string; description: string }) => {
  return (
    <div className="single-testimonial">
      {/* ✅ Technical SEO / Accessibility: Added an aria-label so screen readers announce the 5-star rating */}
      <div className="star-rating mb-3 text-warning" aria-label="5 out of 5 stars">
        <FaStar aria-hidden="true" />
        <FaStar aria-hidden="true" />
        <FaStar aria-hidden="true" />
        <FaStar aria-hidden="true" />
        <FaStar aria-hidden="true" />
      </div>
      
      {/* ✅ Semantic SEO: Wrapped the review in a <blockquote> and author in a <cite> */}
      <blockquote className="testimonial-content">
        <p>&ldquo;{description}&rdquo;</p>
      </blockquote>
      <cite className="testimonial-author d-block mt-3" style={{ fontStyle: "normal" }}>
        <p>{name}</p>
      </cite>
    </div>
  );
};

// 4. The Main Component
const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 520,
    autoplay: true,
    autoplaySpeed: 4200,
    pauseOnHover: true,
    cssEase: "ease-out",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // ✅ Advanced SEO: Aggregate Rating Schema. This tells Google you are a 5-star business!
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rolax Landscaping Reading",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "120" // Keep in sync with homepage schema
    }
  };

  return (
    <>
      {/* Injecting Schema Markup */}
      <Script
        id="testimonial-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <style jsx>{`
        .testimonial-area {
          background:
            radial-gradient(circle at 12% 0%, rgba(22,163,74,0.08), transparent 30%),
            radial-gradient(circle at 86% 100%, rgba(255,107,53,0.07), transparent 28%),
            #fdfcf0;
          padding: 110px 0;
        }
        .testimonial-wrapper { max-width: 1100px; margin: 0 auto; }
        .single-testimonial { background: #ffffff; padding: 34px; border-radius: 16px; box-shadow: 0 16px 36px rgba(15,23,42,0.08); position: relative; margin: 0 12px; border: 1px solid transparent; transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease; }
        .single-testimonial:hover { transform: translateY(-6px); box-shadow: 0 22px 42px rgba(15,23,42,0.12); border-color: rgba(22,163,74,0.24); }
        .testimonial-content p { font-size: 17px; line-height: 1.8; color: #4b5563; font-style: italic; margin-bottom: 0; }
        .testimonial-author p { font-size: 20px; font-weight: 700; color: #111827; margin: 0; }
        .star-rating svg { color: #ffb900; margin-right: 4px; font-size: 18px; }
        .section-title span { color: #16a34a; font-weight: 700; display: block; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.06em; }
        .section-title h2 { font-size: 38px; font-weight: 900; color: #111827; letter-spacing: -0.03em; }
        :global(.testimonial-slider .slick-dots li button:before) { color: #16a34a; opacity: 0.36; }
        :global(.testimonial-slider .slick-dots li.slick-active button:before) { color: #16a34a; opacity: 1; }
        @media (max-width: 991px) {
          .testimonial-area { padding: 84px 0; }
          .section-title h2 { font-size: 32px; }
          .single-testimonial { padding: 28px; }
        }
        @media (max-width: 575px) {
          .testimonial-area { padding: 70px 0; }
          .section-title h2 { font-size: 28px; }
          .testimonial-content p { font-size: 16px; }
          .testimonial-author p { font-size: 18px; }
        }
      `}</style>

      <div className="testimonial-area bg-4 pt-90 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Happy Customers</span>
                <h2>
                  What Our Reading Area Customers <br /> Say About Our Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Slider {...settings} className="testimonial-slider">
              {TestimonialData.map((data) => (
                <TestimonialItem
                  key={data.id}
                  name={data.name}
                  description={data.description}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;