// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
// import { CgChevronDown, CgChevronLeft } from "react-icons/cg";

// // Define Types for TypeScript
// type MenuItem = {
//   title: string;
//   path: string;
//   iconClosed?: React.ReactNode;
//   iconOpened?: React.ReactNode;
//   subNav?: MenuItem[];
// };

// const menuData: MenuItem[] = [
//   { title: "Home", path: "/", iconClosed: <CgChevronLeft />, iconOpened: <CgChevronDown /> },
//   { title: "About", path: "/about" },
//   {
//     title: "Services",
//     path: "#",
//     iconClosed: <CgChevronLeft />,
//     iconOpened: <CgChevronDown />,
//     subNav: [
//       { title: "Landscaping Services", path: "/services/landscaping" },
//       { title: "Hardscaping & Patio", path: "/services/hardscaping" },
//       { title: "Sod Installation", path: "/services/sod" },
//       { title: "Mulch Installation", path: "/services/mulch" },
//       { title: "Snow Removal", path: "/services/snow" },
//       { title: "Tree Services", path: "/services/tree" },
//       { title: "Artificial Turf", path: "/services/artificial-turf" },
//     ],
//   },
//   { title: "Service Area", path: "/projects", iconClosed: <CgChevronLeft />, iconOpened: <CgChevronDown /> },
//   { title: "Blog", path: "/blogs", iconClosed: <CgChevronLeft />, iconOpened: <CgChevronDown /> },
//   { title: "Faq", path: "/faq", iconClosed: <CgChevronLeft />, iconOpened: <CgChevronDown /> },
//   { title: "Contact", path: "/contact" },
// ];

// const SubMenu = ({ item }: { item: MenuItem }) => {
//   const [subnav, setSubnav] = useState(false);
//   const showSubnav = () => setSubnav(!subnav);

//   return (
//     <>
//       <div className="sidebar-link" onClick={item.subNav && showSubnav}>
//         <Link href={item.path} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "#fff", textDecoration: "none" }}>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <span className="sidebar-label">{item.title}</span>
//           </div>
//           <div>
//             {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
//           </div>
//         </Link>
//       </div>
//       {subnav &&
//         item.subNav?.map((data, index) => (
//           <Link href={data.path} key={index} className="dropdown-link">
//             <span className="sidebar-label">{data.title}</span>
//           </Link>
//         ))}
//     </>
//   );
// };

// const MobileMenu = () => {
//   const [sidebar, setSidebar] = useState(false);
//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <style jsx>{`
//         .nav-icon { font-size: 2rem; height: 50px; display: flex; align-items: center; margin-left: 20px; color: #000; cursor: pointer; }
//         .sidebar-nav { background-color: rgb(28, 155, 0); width: 300px; height: 100vh; position: fixed; overflow-y: scroll; top: 0; right: -100%; transition: 350ms; z-index: 99999; box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15); }
//         .sidebar-nav.active { right: 0; }
//         .sidebar-wrap { width: 100%; }
        
//         .sidebar-link { display: flex; justify-content: space-between; align-items: center; padding: 20px; height: 50px; font-size: 16px; cursor: pointer; transition: 0.2s; }
//         .sidebar-link:hover { background: rgb(19, 194, 3); }
//         .sidebar-label { margin-left: 16px; color: #fff; font-weight: 400; }
        
//         .dropdown-link { height: 60px; padding-left: 3rem; display: flex; align-items: center; text-decoration: none; color: #fff; font-size: 16px; transition: 0.2s; }
//         .dropdown-link:hover { background: rgb(2, 190, 27); cursor: pointer; }

//         @media (min-width: 992px) { .d-lg-none { display: none; } }
//       `}</style>

//       <div className="nav-icon d-lg-none" style={{ justifyContent: "flex-end" }}>
//         <AiOutlineBars onClick={showSidebar} />
//       </div>

//       <div className={`sidebar-nav ${sidebar ? "active" : ""}`}>
//         <div className="sidebar-wrap">
//           <div className="nav-icon">
//             <AiOutlineClose style={{ color: "white", fontSize: "18px" }} onClick={showSidebar} />
//           </div>
//           {menuData.map((item, index) => (
//             <SubMenu item={item} key={index} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileMenu;


"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";

// Define Types for TypeScript
type MenuItem = {
  title: string;
  path: string;
  iconClosed?: React.ReactNode;
  iconOpened?: React.ReactNode;
  subNav?: MenuItem[];
};

// ✅ UPDATED DATA: Added "Home Remodelling" and fixed all broken paths
const menuData: MenuItem[] = [
  { title: "Home", path: "/", iconClosed: <CgChevronLeft />, iconOpened: <CgChevronDown /> },
  { title: "About", path: "/about" },
  {
    title: "Services",
    path: "#",
    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,
    subNav: [
      { title: "Mulch Installation", path: "/service-details/mulch-installation" },
      { title: "Sod Installation", path: "/service-details/sod-installation" },
      { title: "Landscaping", path: "/service-details/landscaping" },
      { title: "Snow Removal", path: "/service-details/snow-removal" },
      { title: "Tree Services", path: "/service-details/tree-service" },
      { title: "Hardscaping", path: "/service-details/hardscaping" },
      { title: "Artificial Turf", path: "/service-details/artificial-turf" },
      // 👇 NEW LINK ADDED HERE 👇
      { title: "Home Remodelling", path: "/service-details/home-remodelling" },
    ],
  },
  { title: "Service Area", path: "/projects", iconClosed: <CgChevronLeft />, iconOpened: <CgChevronDown /> },
  { title: "Blog", path: "/blogs", iconClosed: <CgChevronLeft />, iconOpened: <CgChevronDown /> },
  { title: "Contact", path: "/contact" },
];

const SubMenu = ({ item }: { item: MenuItem }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div className="sidebar-link" onClick={item.subNav && showSubnav}>
        {/* If it has a subNav, we don't want the parent to navigate, just toggle */}
        {item.subNav ? (
           <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "#fff", textDecoration: "none" }}>
             <div style={{ display: "flex", alignItems: "center" }}>
               <span className="sidebar-label">{item.title}</span>
             </div>
             <div>
               {subnav ? item.iconOpened : item.iconClosed}
             </div>
           </div>
        ) : (
           <Link href={item.path} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "#fff", textDecoration: "none" }}>
             <div style={{ display: "flex", alignItems: "center" }}>
               <span className="sidebar-label">{item.title}</span>
             </div>
           </Link>
        )}
      </div>
      
      {subnav &&
        item.subNav?.map((data, index) => (
          <Link href={data.path} key={index} className="dropdown-link">
            <span className="sidebar-label">{data.title}</span>
          </Link>
        ))}
    </>
  );
};

const MobileMenu = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <style jsx>{`
        .nav-icon { font-size: 2rem; height: 50px; display: flex; align-items: center; margin-left: 20px; color: #000; cursor: pointer; }
        .sidebar-nav { background-color: rgb(28, 155, 0); width: 300px; height: 100vh; position: fixed; overflow-y: scroll; top: 0; right: -100%; transition: 350ms; z-index: 99999; box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15); }
        .sidebar-nav.active { right: 0; }
        .sidebar-wrap { width: 100%; }
        
        .sidebar-link { display: flex; justify-content: space-between; align-items: center; padding: 20px; height: 50px; font-size: 16px; cursor: pointer; transition: 0.2s; }
        .sidebar-link:hover { background: rgb(19, 194, 3); }
        .sidebar-label { margin-left: 16px; color: #fff; font-weight: 400; }
        
        .dropdown-link { height: 60px; padding-left: 3rem; display: flex; align-items: center; text-decoration: none; color: #fff; font-size: 16px; transition: 0.2s; }
        .dropdown-link:hover { background: rgb(2, 190, 27); cursor: pointer; }

        @media (min-width: 992px) { .d-lg-none { display: none; } }
      `}</style>

      {/* Hamburger Icon */}
      <div className="nav-icon d-lg-none" style={{ justifyContent: "flex-end" }}>
        <AiOutlineBars onClick={showSidebar} />
      </div>

      {/* Slide-out Menu */}
      <div className={`sidebar-nav ${sidebar ? "active" : ""}`}>
        <div className="sidebar-wrap">
          <div className="nav-icon">
            <AiOutlineClose style={{ color: "white", fontSize: "18px" }} onClick={showSidebar} />
          </div>
          {menuData.map((item, index) => (
            <SubMenu item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;