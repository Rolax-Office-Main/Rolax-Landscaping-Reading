"use client";
import React from "react";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

type ProjectDataType = {
  id: string;
  slug: string;
  img: string;
  heading: string;
  description: string;
  btnLink: string;
};

// Data with Public Image Paths
const ProjectData: ProjectDataType[] = [
  {
    id: uuidv4(),
    slug: "landscaping-backyard-revamp-scarborough",
    img: "/images/project/landscape.jpg",
    heading: "Landscaping",
    description: "Professional landscaping services across Reading and nearby communities, creating beautiful, functional outdoor spaces for residential and commercial properties.",
    btnLink: "/projects/landscaping-backyard-revamp-scarborough",
  },
  {
    id: uuidv4(),
    slug: "safe-tree-removal-reading",
    img: "/images/project/tree-removal.jpg",
    heading: "Tree Removal",
    description: "Professional tree removal services in the Reading area with safe cutting, trimming, and complete cleanup for residential and commercial properties.",
    btnLink: "/projects/safe-tree-removal-reading",
  },
  {
    id: uuidv4(),
    slug: "commercial-snow-removal-route-reading",
    img: "/images/project/snow-removal.jpeg",
    heading: "Snow Removal",
    description: "Dependable snow removal services in Reading and nearby communities, keeping driveways, sidewalks, parking areas, and commercial properties clear and accessible in winter.",
    btnLink: "/projects/commercial-snow-removal-route-reading",
  },
];

const ProjectItem = ({ img, heading, description, btnLink }: { img: string; heading: string; description: string; btnLink: string }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
      <div className="single-project">
        <div className="single-project-img bg-property bg-hover-style-1" style={{ backgroundImage: `url(${img})` }}>
          <div className="single-project-img-icon">
            <Link href={btnLink} aria-label={`View details about ${heading}`}>
              <FaAngleDoubleRight />
            </Link>
          </div>
        </div>
        <div className="single-project-content">
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <>
      <style jsx>{`
        .pt-110 { padding-top: 110px; }
        .pb-110 { padding-bottom: 110px; }
        .mb-70 { margin-bottom: 70px; }
        .mb-60 { margin-bottom: 60px; }
        .mb-30 { margin-bottom: 30px; }

        .single-project {
          position: relative;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .single-project-img {
          height: 300px;
          background-size: cover;
          background-position: center;
          position: relative;
          border-radius: 6px;
          transition: 0.3s;
        }

        .single-project-img::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(22, 163, 74, 0.7); /* Green overlay */
          opacity: 0;
          transition: 0.3s;
          border-radius: 6px;
        }

        .single-project:hover .single-project-img::before {
          opacity: 1;
        }

        .single-project-img-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: 0.3s;
          z-index: 2;
        }

        .single-project:hover .single-project-img-icon {
          transform: translate(-50%, -50%) scale(1);
        }

        .single-project-img-icon a {
          width: 50px;
          height: 50px;
          line-height: 50px;
          background: #fff;
          color: #16a34a;
          border-radius: 50%;
          text-align: center;
          display: inline-block;
          font-size: 18px;
        }

        .single-project-content {
          padding-top: 25px;
        }
        .single-project-content h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #111827;
        }
        .single-project-content p {
          margin-bottom: 0;
          color: #6b7280;
        }

        .l-btn {
            background-color: #16a34a;
            color: #fff;
            padding: 15px 35px;
            border-radius: 30px;
            font-weight: 700;
            text-decoration: none;
            display: inline-block;
            transition: 0.3s;
        }
        .l-btn:hover { background-color: #111827; }

        .section-title span { color: #16a34a; font-weight: 700; display: block; margin-bottom: 10px; }
        .section-title h2 { font-size: 36px; font-weight: 800; margin-bottom: 20px; color: #111827; }
      `}</style>

      <div className="project-area pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Our Projects</span>
                <h2>Showcasing completed landscaping and property care projects</h2>
              </div>
            </div>
          </div>
          <div className="row mb-60">
            {ProjectData.map((data) => (
              <ProjectItem
                key={data.id}
                img={data.img}
                heading={data.heading}
                description={data.description}
                btnLink={data.btnLink}
              />
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="project-btn text-center">
                <Link href="/projects" className="l-btn">
                  Explore More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;