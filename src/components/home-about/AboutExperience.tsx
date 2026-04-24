"use client";
import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

type ExperienceDataType = {
  id: string;
  heading: string;
  description: string;
};

const AboutExperienceData: ExperienceDataType[] = [
  {
    id: uuidv4(),
    heading: "Mission",
    description: "To deliver high-quality landscaping, hardscaping, and outdoor maintenance services that transform residential and commercial spaces into beautiful, functional environments. We are committed to exceeding customer expectations with professional expertise, personalized care, and reliable service from design through project completion.",
  },
  {
    id: uuidv4(),
    heading: "Vision",
    description: "To be the most trusted and admired landscaping company in Amherst, Buffalo, and the surrounding areas—recognized for creativity, innovation, and a dedication to enhancing outdoor living spaces that enrich people’s connection to nature and community.",
  },
  {
    id: uuidv4(),
    heading: "Goal",
    description: "To consistently achieve customer satisfaction by delivering exceptional workmanship, timely service, and competitive pricing, while building long-lasting relationships and maintaining a reputation for excellence in every project we undertake.",
  },
];

const AboutExperienceItem = ({ heading, description }: { heading: string; description: string }) => {
  return (
    <div className="single-experience mb-30">
      <h4>{heading}</h4>
      <p>{description}</p>
    </div>
  );
};

const AboutExperience = () => {
  return (
    <>
      <style jsx>{`
        .pt-110 { padding-top: 110px; }
        .pb-110 { padding-bottom: 110px; }
        .mb-70 { margin-bottom: 70px; }
        .pl-85 { padding-left: 85px; }
        .pr-0 { padding-right: 0; }
        .mb-30 { margin-bottom: 30px; }
        
        .single-experience h4 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #111827;
        }
        .single-experience p {
          color: #6b7280;
          line-height: 1.6;
        }
        
        .experience-img {
          position: relative;
          height: 100%;
          min-height: 500px;
        }
        .experience-img img {
          border-radius: 6px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .experience-small-block {
          position: absolute;
          bottom: 30px;
          left: -30px;
          background: #16a34a;
          padding: 30px;
          border-radius: 6px;
          max-width: 250px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .experience-small-block h5 {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
        }
        
        .section-title span { color: #16a34a; font-weight: 700; display: block; margin-bottom: 10px; }
        .section-title h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; color: #111827; }

        @media (max-width: 992px) {
          .experience-img { margin-top: 50px; min-height: 400px; }
          .pl-85 { padding-left: 15px; }
          .experience-small-block { left: 0; bottom: -20px; }
          .offset-xl-2 { margin-left: 0; }
        }
      `}</style>

      <div className="experience-area pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>We Have 15 Years of Experience</span>
                <h2>We Have 15+ years of Experience in <br /> Landscape & Gardening Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 offset-xl-2 offset-lg-2 offset-md-2">
              {AboutExperienceData.map((data) => (
                <AboutExperienceItem
                  key={data.id}
                  heading={data.heading}
                  description={data.description}
                />
              ))}
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 pl-85 pr-0">
              <div className="experience-img">
                <Image 
                    src="/images/about/4.jpg" 
                    alt="Rolax Landscaping Reading team experience in landscape and gardening services" 
                    width={800} 
                    height={600}
                    style={{ objectFit: "cover" }}
                />
                <div className="experience-small-block">
                  <h5>We are Since 2010 ! Over 200 Awards </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutExperience;