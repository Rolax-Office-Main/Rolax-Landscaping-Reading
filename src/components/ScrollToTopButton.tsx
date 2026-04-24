// // src/components/ScrollToTopButton.tsx
// "use client"; // <--- This magic line allows it to run in the browser

// import ScrollToTop from "react-scroll-to-top";
// import { FaLevelUpAlt } from "react-icons/fa";

// export default function ScrollToTopButton() {
//   return (
//     <ScrollToTop 
//       className="scrollUp" 
//       smooth 
//       top={1500} 
//       component={<FaLevelUpAlt />} 
//     />
//   );
// }
// src/components/ScrollToTopButton.tsx
"use client";

import ScrollToTop from "react-scroll-to-top";
import { FaLevelUpAlt } from "react-icons/fa";

export default function ScrollToTopButton() {
  return (
    <ScrollToTop
      smooth
      top={1500}
      className="scrollUp"
      component={<FaLevelUpAlt size={18} />}
      style={{
        backgroundColor: "#22c55e",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
      }}
    />
  );
}
