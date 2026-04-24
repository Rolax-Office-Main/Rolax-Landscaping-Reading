import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Rolax Landscaping Reading",
  description: "The page you are looking for could not be found. Return to the Rolax Landscaping Reading homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h1 style={{ fontSize: "80px", fontWeight: 700, color: "#16a34a", marginBottom: "0" }}>
        404
      </h1>
      <h2 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px" }}>
        Page Not Found
      </h2>
      <p style={{ fontSize: "16px", color: "#555", maxWidth: "480px", marginBottom: "32px" }}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let us help you get back on track.
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            backgroundColor: "#16a34a",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Back to Home
        </Link>
        <Link
          href="/services"
          style={{
            backgroundColor: "transparent",
            color: "#16a34a",
            padding: "12px 28px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: 600,
            border: "2px solid #16a34a",
          }}
        >
          View Services
        </Link>
        <Link
          href="/contact"
          style={{
            backgroundColor: "transparent",
            color: "#333",
            padding: "12px 28px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: 600,
            border: "2px solid #333",
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
