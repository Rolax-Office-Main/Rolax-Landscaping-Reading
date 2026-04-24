// import React from "react";
// import type { Metadata } from "next";
// import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
// import Cta from "@/components/cta/Cta";
// import WhyChoseUs from "@/components/why-chose-us/WhyChoseUs";
// import ServiceArea from "@/components/service-area/ServiceArea";

// export const metadata: Metadata = {
//   title: "Service Areas | Rolax Landscaping Toronto & GTA",
//   description: "Discover all areas we serve in Toronto, Scarborough, and surrounding GTA communities. Professional landscaping services near you.",
//   keywords: ["service areas", "Toronto landscaping", "Scarborough", "GTA", "service coverage"],
// };

// const Project = () => {
//   return (
//     <>
//       <Breadcrumb
//         breadcrumbBg="/images/breadcrumb/1.jpg"
//         heading="Service Area"
//         description="Areas We Proudly Serve"
//         currentPage="Service Area"
//       />
      
//       {/* The Interactive Map/List Component we built earlier */}
//       <ServiceArea />
      
//       <Cta />
      
//       <WhyChoseUs />
//     </>
//   );
// };

// export default Project;


import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Cta from "@/components/cta/Cta";
import WhyChoseUs from "@/components/why-chose-us/WhyChoseUs";
import ProjectSection from "@/components/home-project/Project";

export const metadata: Metadata = {
  title: "Landscaping Projects in Reading, PA | Rolax Portfolio",
  description: "Explore completed landscaping, tree service, and snow removal projects from Rolax Landscaping Reading across the Reading area.",
  keywords: [
    "landscaping projects Reading PA",
    "hardscaping portfolio Reading",
    "tree service case studies",
    "snow removal project gallery",
    "Rolax Landscaping Reading projects",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com/projects/",
  },
  openGraph: {
    title: "Landscaping Projects in Reading, PA | Rolax Portfolio",
    description: "Explore completed landscaping, tree service, and snow removal projects from Rolax Landscaping Reading.",
    url: "https://rolaxlandscapingcanada.com/projects/",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Rolax Landscaping Reading Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping Projects in Reading, PA | Rolax Portfolio",
    description: "Explore completed landscaping, tree service, and snow removal projects from Rolax Landscaping Reading.",
    images: ["/final.jpg"],
  },
};

const Project = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading="Our Landscaping Projects"
        description="Real project outcomes for landscaping, tree service, and snow removal in the Reading area"
        currentPage="Projects"
      />
      
      <ProjectSection />
      
      <WhyChoseUs />
      
      <Cta />
    </>
  );
};

export default Project;