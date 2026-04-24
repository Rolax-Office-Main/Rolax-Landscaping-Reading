"use client"; 
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbProps = {
  breadcrumbBg: string;
  heading: string;
  description: string;
  currentPage: string;
};

const Breadcrumb = ({ breadcrumbBg, heading, description, currentPage }: BreadcrumbProps) => {
  const pathname = usePathname();
  const siteUrl = "https://rolaxlandscapingcanada.com";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentPage,
        item: `${siteUrl}${pathname === "/" ? "" : pathname}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <style jsx>{`
        .breadcrumb-area {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          z-index: 1;
        }
        /* Overlay logic matching your data-overlay="black" */
        .breadcrumb-area::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          background: #000;
          opacity: 0.7; /* Matches data-opacity="7" */
          z-index: -1;
        }
        .pt-60 { padding-top: 60px; }
        .pb-60 { padding-bottom: 60px; }
        
        .breadcrumb-content-wrapper h2 {
          color: #fff;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .breadcrumb-content-wrapper h1 {
          color: #fff;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .breadcrumb-navigation {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }
        .breadcrumb-navigation ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 10px;
          align-items: center;
        }
        .breadcrumb-item {
          color: #fff;
          font-size: 16px;
          display: flex;
          align-items: center;
        }
        .breadcrumb-item a {
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }
        .breadcrumb-item a:hover {
          color: #16a34a; /* Green hover */
        }
        /* Add separator */
        .breadcrumb-item:not(:last-child)::after {
          content: "›";
          margin-left: 10px;
          font-size: 18px;
          line-height: 1;
        }
        .breadcrumb-item.active {
          color: #16a34a; /* Active color */
        }
      `}</style>

      <div
        className="breadcrumb-area pt-60 pb-60"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 justify-content-center">
              <div className="breadcrumb-content-wrapper text-center">
                <h1>{heading}</h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-navigation">
                <nav aria-label="breadcrumb">
                  <ul>
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {currentPage}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;