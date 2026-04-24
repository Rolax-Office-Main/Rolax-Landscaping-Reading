"use client";
import React from "react";

const HeaderTop = () => {
  return (
    <>
      <style jsx>{`
        .offer-bar {
          background: #000;
          padding: 10px 0;
          overflow: hidden;
          position: relative;
        }
        .offer-track {
          display: flex;
          width: max-content;
          animation: offer-marquee 18s linear infinite;
        }
        .offer-text {
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          white-space: nowrap;
          padding-left: 100vw;
        }
        @keyframes offer-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @media (max-width: 768px) {
          .offer-text { font-size: 12px; }
        }
      `}</style>

      <div className="offer-bar">
        <div className="offer-track">
          <div className="offer-text">
            ● 10% OFF on Any Services 💥 in Reading & Surrounding Areas – FREE Estimations included
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;