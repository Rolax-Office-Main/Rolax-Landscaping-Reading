import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Cta from "@/components/cta/Cta";
import { locationsData, toLocationSlug } from "@/data/locations";

export const metadata: Metadata = {
  title: "Service Locations | Rolax Landscaping Reading PA",
  description: "Explore all Reading, PA area locations we serve including Wyomissing, West Reading, Shillington, and 22 more communities.",
  keywords: [
    "service locations Reading PA",
    "landscaping services near me",
    "Wyomissing landscaping",
    "West Reading landscaping",
    "Berks County landscape contractors",
  ],
  alternates: {
    canonical: "https://rolaxlandscapingcanada.com/locations/",
  },
  openGraph: {
    title: "Service Locations | Rolax Landscaping Reading PA",
    description: "Explore all Reading, PA area locations we serve.",
    url: "https://rolaxlandscapingcanada.com/locations/",
    type: "website",
    images: [
      {
        url: "/final.jpg",
        width: 1200,
        height: 630,
        alt: "Rolax Landscaping Service Locations",
      },
    ],
  },
};

export default function Locations() {
  const primaryLocations = locationsData.filter((loc) => loc.type === "Primary");
  const surroundingLocations = locationsData.filter((loc) => loc.type === "Surrounding");
  const additionalLocations = locationsData.filter((loc) => loc.type === "Additional");

  return (
    <>
      <style>{`
        .locations-wrapper {
          padding: 80px 0;
          background: #fdfcf0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h1 {
          font-size: 42px;
          font-weight: 900;
          color: #111827;
          margin-bottom: 15px;
        }

        .section-header p {
          font-size: 18px;
          color: #4b5563;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .locations-section {
          margin-bottom: 70px;
        }

        .section-title {
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-title span {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #16a34a;
        }

        .locations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .location-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fdfb 100%);
          border-radius: 20px;
          padding: 0;
          box-shadow: 
            0 2px 8px rgba(22, 163, 74, 0.06),
            0 8px 24px rgba(15, 23, 42, 0.08),
            0 16px 40px rgba(15, 23, 42, 0.04);
          border: 1px solid rgba(22, 163, 74, 0.15);
          transition: all 0.45s cubic-bezier(0.23, 1, 0.320, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        .location-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #16a34a 0%, #22c55e 100%);
        }

        .location-card:hover {
          transform: translateY(-12px);
          box-shadow: 
            0 4px 12px rgba(22, 163, 74, 0.12),
            0 20px 48px rgba(15, 23, 42, 0.12),
            0 24px 56px rgba(15, 23, 42, 0.06);
          border-color: rgba(22, 163, 74, 0.35);
        }

        .location-card h3 {
          font-size: 24px;
          font-weight: 800;
          color: #111827;
          margin: 0;
          padding: 28px 28px 8px;
          letter-spacing: -0.3px;
        }

        .location-card p {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.8;
          margin: 0;
          padding: 0 28px 24px;
          flex-grow: 1;
        }

        .location-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          border: none;
          transition: all 0.3s ease;
          width: fit-content;
          margin: 0 28px 28px 28px;
          box-shadow: 0 4px 12px rgba(22, 163, 74, 0.25);
          position: relative;
        }

        .location-cta::after {
          content: '→';
          transition: transform 0.3s ease;
        }

        .location-cta:hover {
          background: linear-gradient(135deg, #15803d 0%, #16a34a 100%);
          box-shadow: 0 8px 20px rgba(22, 163, 74, 0.35);
          transform: translateX(2px);
        }

        .location-cta:hover::after {
          transform: translateX(4px);
        }

        .badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 28px 28px 0 28px;
          margin-bottom: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .badge-primary {
          background: linear-gradient(135deg, #d1fae5 0%, #bbf7d0 100%);
          color: #065f46;
          border: 1px solid rgba(22, 163, 74, 0.2);
        }

        .badge-surrounding {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          color: #92400e;
          border: 1px solid rgba(217, 119, 6, 0.2);
        }

        .badge-additional {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          color: #1e40af;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 60px;
          padding-top: 60px;
          border-top: 2px solid #e5e7eb;
        }

        .stat-box {
          text-align: center;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 900;
          color: #16a34a;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .locations-grid {
            grid-template-columns: 1fr;
          }

          .section-header h1 {
            font-size: 32px;
          }

          .section-title {
            font-size: 22px;
          }
        }
      `}</style>

      <Breadcrumb
        breadcrumbBg="/images/breadcrumb/1.jpg"
        heading="Service Locations"
        description="Find professional landscaping services in your area"
        currentPage="Locations"
      />

      <div className="locations-wrapper">
        <div className="container">
          <div className="section-header">
            <h1>We Serve 26+ Reading Area Communities</h1>
            <p>
              From Reading to Birdsboro, our professional landscaping team is ready to serve your property. Whether you need seasonal maintenance, snow removal, or complete landscape design, we&apos;re here for you.
            </p>
          </div>

          {/* Primary Service Area */}
          <div className="locations-section">
            <h2 className="section-title">
              <span></span> Primary Service Areas
            </h2>
            <div className="locations-grid">
              {primaryLocations.map((location) => (
                <div key={location.name} className="location-card">
                  <span className="badge badge-primary">Primary Area</span>
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <Link href={`/locations/${toLocationSlug(location.name)}/`} className="location-cta">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Surrounding Communities */}
          <div className="locations-section">
            <h2 className="section-title">
              <span></span> Surrounding Communities
            </h2>
            <div className="locations-grid">
              {surroundingLocations.map((location) => (
                <div key={location.name} className="location-card">
                  <span className="badge badge-primary">Primary Area</span>
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <Link href={`/locations/${toLocationSlug(location.name)}/`} className="location-cta">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Larger Towns */}
          <div className="locations-section">
            <h2 className="section-title">
              <span></span> Additional Service Towns
            </h2>
            <div className="locations-grid">
              {additionalLocations.map((location) => (
                <div key={location.name} className="location-card">
                  <span className="badge badge-primary">Primary Area</span>
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                  <Link href={`/locations/${toLocationSlug(location.name)}/`} className="location-cta">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat-box">
              <div className="stat-number">26</div>
              <div className="stat-label">Service Locations</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>

      <Cta />
    </>
  );
}
