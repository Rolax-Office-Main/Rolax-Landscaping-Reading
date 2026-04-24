"use client";
import React from "react";
import { FaLeaf, FaThLarge, FaTree, FaSnowflake } from "react-icons/fa";

const ServicesHighlights = () => {
  return (
    <>
      <style jsx>{`
        .sh-wrap {
          background: #fff;
          padding: 70px 0;
        }

        .sh-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }

        .sh-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 10px;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 34px 18px;
          text-decoration: none;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
          cursor: default; /* Changed to default since they aren't links yet */
        }

        .sh-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 22px 60px rgba(0,0,0,0.12);
          border-color: rgba(22,163,74,0.35);
        }

        .sh-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        /* Target the SVG icon directly */
        .sh-icon :global(svg) {
          width: 34px;
          height: 34px;
          color: #16a34a;
        }

        .sh-title {
          margin: 0;
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 0.5px;
          color: #111827;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .sh-title span {
          display: block;
        }

        @media (max-width: 1200px) {
          .sh-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 576px) {
          .sh-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="sh-wrap">
        <div className="container">
          <div className="sh-grid">
            <div className="sh-card">
              <div className="sh-icon">
                <FaLeaf />
              </div>
              <h3 className="sh-title">
                <span>LANDSCAPING</span>
                <span>& MULCHING</span>
              </h3>
            </div>

            <div className="sh-card">
              <div className="sh-icon">
                <FaThLarge />
              </div>
              <h3 className="sh-title">
                <span>HARDSCAPING</span>
                <span>& PAVING</span>
              </h3>
            </div>

            <div className="sh-card">
              <div className="sh-icon">
                <FaTree />
              </div>
              <h3 className="sh-title">
                <span>TREE SERVICES</span>
              </h3>
            </div>

            <div className="sh-card">
              <div className="sh-icon">
                <FaSnowflake />
              </div>
              <h3 className="sh-title">
                <span>SNOW</span>
                <span>PLOWING</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesHighlights;