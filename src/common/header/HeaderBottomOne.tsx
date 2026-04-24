// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaBars,
//   FaTimes,
//   FaAngleDown,
// } from "react-icons/fa";

// const HeaderBottomOne = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 150);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ================= ACTIVE LOGIC ================= */
//   const checkActive = (path: string) => {
//     if (!pathname) return false;
//     if (pathname === path) return true;
//     if (pathname === `${path}/`) return true;
//     if (path !== "/" && pathname.startsWith(`${path}/`)) return true;
//     return false;
//   };

//   const checkServicesActive = () => {
//     if (!pathname) return false;
//     return (
//       pathname === "/services" ||
//       pathname.startsWith("/services/") ||
//       pathname.startsWith("/service-details/")
//     );
//   };

//   const getActiveStyle = (isActive: boolean) => {
//     return isActive ? { color: "#16a34a" } : {};
//   };

//   return (
//     <>
//       <style jsx>{`
//         /* ================= HEADER ================= */
//         .header-bottom-area {
//           background: #ffffff;
//           border-bottom: 1px solid #f3f4f6;
//           height: 90px;
//           transition: all 0.3s ease;
//           z-index: 999;
//           position: relative;
//         }

//         .header-sticky {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
//           animation: slideDown 0.3s ease-out;
//           z-index: 999; 
//         }

//         @keyframes slideDown {
//           from { transform: translateY(-100%); }
//           to { transform: translateY(0); }
//         }

//         .header-wrapper {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 100%;
//         }

//         /* ================= MAIN MENU (Desktop) ================= */
//         .main-menu nav > ul {
//           display: flex;
//           gap: 40px;
//           list-style: none;
//           margin: 0;
//           padding: 0;
//           height: 100%;
//           align-items: center;
//         }

//         .main-menu nav > ul > li {
//           position: relative;
//           height: 100%;
//           display: flex;
//           align-items: center;
//         }

//         .main-menu nav > ul > li > a {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: 100%;
//           padding: 0 10px;
//           font-size: 16px;
//           font-weight: 700;
//           color: #111827; 
//           text-transform: uppercase;
//           text-decoration: none;
//           line-height: 1;
//           transition: color 0.3s ease;
//         }

//         .main-menu nav > ul > li > a:hover {
//           color: #16a34a !important;
//         }

//         .menu-link-content {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }

//         /* ================= SUB MENU (Desktop) ================= */
//         .submenu {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           min-width: 250px;
//           background: #ffffff;
//           padding: 12px 0;
//           border-top: 3px solid #16a34a;
//           border-radius: 0 0 12px 12px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//           opacity: 0;
//           visibility: hidden;
//           transition: all 0.25s ease;
//           z-index: 99999;
//         }

//         .main-menu nav > ul > li:hover .submenu {
//           opacity: 1;
//           visibility: visible;
//         }

//         .submenu li {
//           list-style: none;
//         }

//         .submenu li a {
//           display: block;
//           padding: 12px 25px;
//           font-size: 15px;
//           font-weight: 600;
//           color: #374151;
//           text-decoration: none;
//           border-bottom: 1px solid rgba(0, 0, 0, 0.05);
//           transition: all 0.25s ease;
//         }

//         .submenu li a:hover {
//           background: #f9fafb;
//           color: #16a34a !important;
//           padding-left: 30px;
//         }

//         /* ================= SOCIAL ================= */
//         .header-social {
//           display: flex;
//           gap: 10px;
//         }

//         .header-social a {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: #16a34a;
//           color: #ffffff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: 0.3s ease;
//         }

//         .header-social a:hover {
//           background: #111827;
//         }

//         /* ================= MOBILE TOGGLE BUTTON ================= */
//         .mobile-bar-icon {
//           display: none;
//           font-size: 24px;
//           cursor: pointer;
//           color: #111827;
//         }

//         @media (max-width: 991px) {
//           .main-menu,
//           .header-social {
//             display: none;
//           }
//           .mobile-bar-icon {
//             display: block;
//           }
//         }
        
//         /* ================= MOBILE MENU DRAWER ================= */
//         .mobile-menu-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.5);
//           z-index: 99998; /* Must be lower than container but higher than header */
//           opacity: ${mobileMenuOpen ? 1 : 0};
//           visibility: ${mobileMenuOpen ? "visible" : "hidden"};
//           transition: all 0.3s ease;
//         }

//         .mobile-menu-container {
//           position: fixed;
//           top: 0; 
//           left: 0; 
//           width: 300px; 
//           height: 100vh;
//           background: #fff; 
//           padding: 30px; 
//           z-index: 99999; /* Must be highest */
//           transform: ${mobileMenuOpen ? "translateX(0)" : "translateX(-100%)"};
//           transition: transform 0.3s ease;
//           overflow-y: auto;
//           box-shadow: 2px 0 10px rgba(0,0,0,0.1);
//         }

//         .mobile-header-top {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 30px;
//           border-bottom: 1px solid #eee;
//           padding-bottom: 15px;
//         }
        
//         .mobile-close-btn {
//           font-size: 22px;
//           cursor: pointer;
//           color: #333;
//         }

//         .mobile-nav ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .mobile-nav li {
//           border-bottom: 1px solid #f3f3f3;
//         }

//         .mobile-nav li a {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 15px 0;
//           font-size: 16px;
//           font-weight: 600;
//           color: #111827;
//           text-decoration: none;
//         }

//         .mobile-submenu {
//           background: #f9f9f9;
//           padding-left: 20px;
//           display: ${mobileSubMenuOpen ? "block" : "none"};
//         }
        
//         .mobile-submenu li a {
//           font-size: 14px;
//           padding: 12px 0;
//           font-weight: 500;
//         }
//       `}</style>

//       {/* HEADER BAR */}
//       <div className={`header-bottom-area ${isSticky ? "header-sticky" : ""}`}>
//         <div className="container">
//           <div className="header-wrapper">
            
//             {/* Desktop Menu */}
//             <div className="main-menu">
//               <nav>
//                 <ul>
//                   <li><Link href="/" style={getActiveStyle(checkActive("/"))}>HOME</Link></li>
                  
//                   <li>
//                     <Link href="/services" style={getActiveStyle(checkServicesActive())}>
//                       <span className="menu-link-content">SERVICES <FaAngleDown /></span>
//                     </Link>
//                     <ul className="submenu">
//                       <li><Link href="/service-details/mulch-installation">Mulch Installation</Link></li>
//                       <li><Link href="/service-details/sod-installation">Sod Installation</Link></li>
//                       <li><Link href="/service-details/landscaping">Landscaping</Link></li>
//                       <li><Link href="/service-details/snow-removal">Snow Removal</Link></li>
//                       <li><Link href="/service-details/tree-service">Tree Service</Link></li>
//                       <li><Link href="/service-details/hardscaping">Hardscaping</Link></li>
//                       <li><Link href="/service-details/artificial-turf">Artificial Turf</Link></li>
//                     </ul>
//                   </li>

//                   <li><Link href="/projects" style={getActiveStyle(checkActive("/projects"))}>SERVICE AREAS</Link></li>
//                   <li><Link href="/about" style={getActiveStyle(checkActive("/about"))}>ABOUT US</Link></li>
//                   <li><Link href="/contact" style={getActiveStyle(checkActive("/contact"))}>CONTACT US</Link></li>
//                   <li><Link href="/blogs" style={getActiveStyle(checkActive("/blogs"))}>BLOG</Link></li>
//                 </ul>
//               </nav>
//             </div>

//             {/* Social Icons (Desktop) */}
//             <div className="header-social">
//               <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
//               <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
//               <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
//             </div>

//             {/* Hamburger Icon (Mobile) */}
//             <div className="mobile-bar-icon" onClick={() => setMobileMenuOpen(true)}>
//               <FaBars />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ========================================= */}
//       {/* 🟢 MOBILE SIDEBAR (Required) 🟢 */}
//       {/* ========================================= */}
      
//       {/* Overlay Background */}
//       <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />

//       {/* Mobile Sidebar Container */}
//       <div className="mobile-menu-container">
//         <div className="mobile-header-top">
//           <span style={{fontWeight: 'bold', fontSize: '18px'}}>MENU</span>
//           <div className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
//             <FaTimes />
//           </div>
//         </div>

//         <nav className="mobile-nav">
//           <ul>
//             <li>
//                <Link href="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
//             </li>

//             {/* Mobile Dropdown */}
//             <li>
//               <div 
//                 style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', cursor: 'pointer', fontWeight: 600}} 
//                 onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
//               >
//                 SERVICES <FaAngleDown style={{transform: mobileSubMenuOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s'}} />
//               </div>
//               <ul className="mobile-submenu">
//                 <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>All Services</Link></li>
//                 <li><Link href="/service-details/mulch-installation" onClick={() => setMobileMenuOpen(false)}>Mulch Installation</Link></li>
//                 <li><Link href="/service-details/sod-installation" onClick={() => setMobileMenuOpen(false)}>Sod Installation</Link></li>
//                 <li><Link href="/service-details/landscaping" onClick={() => setMobileMenuOpen(false)}>Landscaping</Link></li>
//                 <li><Link href="/service-details/snow-removal" onClick={() => setMobileMenuOpen(false)}>Snow Removal</Link></li>
//                 <li><Link href="/service-details/tree-service" onClick={() => setMobileMenuOpen(false)}>Tree Service</Link></li>
//                 <li><Link href="/service-details/hardscaping" onClick={() => setMobileMenuOpen(false)}>Hardscaping</Link></li>
//                 <li><Link href="/service-details/artificial-turf" onClick={() => setMobileMenuOpen(false)}>Artificial Turf</Link></li>
//               </ul>
//             </li>

//             <li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>SERVICE AREAS</Link></li>
//             <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link></li>
//             <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link></li>
//             <li><Link href="/blogs" onClick={() => setMobileMenuOpen(false)}>BLOG</Link></li>
//           </ul>
//         </nav>

//         {/* Mobile Socials */}
//         <div style={{marginTop: '30px', display: 'flex', gap: '15px'}}>
//            <a href="#" style={{width:'35px', height:'35px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><FaFacebookF/></a>
//            <a href="#" style={{width:'35px', height:'35px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><FaInstagram/></a>
//            <a href="#" style={{width:'35px', height:'35px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><FaYoutube/></a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeaderBottomOne;






// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaBars,
//   FaTimes,
//   FaAngleDown,
// } from "react-icons/fa";

// const HeaderBottomOne = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 150);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ================= ACTIVE LOGIC ================= */
//   const checkActive = (path: string) => {
//     if (!pathname) return false;
//     if (pathname === path) return true;
//     if (pathname === `${path}/`) return true;
//     if (path !== "/" && pathname.startsWith(`${path}/`)) return true;
//     return false;
//   };

//   const checkServicesActive = () => {
//     if (!pathname) return false;
//     return (
//       pathname === "/services" ||
//       pathname.startsWith("/services/") ||
//       pathname.startsWith("/service-details/")
//     );
//   };

//   const getActiveStyle = (isActive: boolean) => {
//     return isActive ? { color: "#16a34a" } : {};
//   };

//   return (
//     <>
//       <style jsx>{`
//         /* ================= HEADER ================= */
//         .header-bottom-area {
//           background: #ffffff;
//           border-bottom: 1px solid #f3f4f6;
//           height: 90px;
//           transition: all 0.3s ease;
//           z-index: 999;
//           position: relative;
//         }

//         .header-sticky {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
//           animation: slideDown 0.3s ease-out;
//           z-index: 999; 
//           background: #ffffff; /* Ensure sticky has background */
//         }

//         @keyframes slideDown {
//           from { transform: translateY(-100%); }
//           to { transform: translateY(0); }
//         }

//         .header-wrapper {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 100%;
//         }

//         /* ================= MAIN MENU (Desktop) ================= */
//         .main-menu nav > ul {
//           display: flex;
//           gap: 40px;
//           list-style: none;
//           margin: 0;
//           padding: 0;
//           height: 100%;
//           align-items: center;
//         }

//         .main-menu nav > ul > li {
//           position: relative;
//           height: 100%;
//           display: flex;
//           align-items: center;
//         }

//         .main-menu nav > ul > li > a {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: 100%;
//           padding: 0 10px;
//           font-size: 16px;
//           font-weight: 700;
//           color: #111827; 
//           text-transform: uppercase;
//           text-decoration: none;
//           line-height: 1;
//           transition: color 0.3s ease;
//         }

//         .main-menu nav > ul > li > a:hover {
//           color: #16a34a !important;
//         }

//         .menu-link-content {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }

//         /* ================= SUB MENU (Desktop) ================= */
//         .submenu {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           min-width: 250px;
//           background: #ffffff;
//           padding: 12px 0;
//           border-top: 3px solid #16a34a;
//           border-radius: 0 0 12px 12px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//           opacity: 0;
//           visibility: hidden;
//           transition: all 0.25s ease;
//           z-index: 99999;
//         }

//         .main-menu nav > ul > li:hover .submenu {
//           opacity: 1;
//           visibility: visible;
//         }

//         .submenu li {
//           list-style: none;
//         }

//         .submenu li a {
//           display: block;
//           padding: 12px 25px;
//           font-size: 15px;
//           font-weight: 600;
//           color: #374151;
//           text-decoration: none;
//           border-bottom: 1px solid rgba(0, 0, 0, 0.05);
//           transition: all 0.25s ease;
//         }

//         .submenu li a:hover {
//           background: #f9fafb;
//           color: #16a34a !important;
//           padding-left: 30px;
//         }

//         /* ================= SOCIAL ================= */
//         .header-social {
//           display: flex;
//           gap: 10px;
//         }

//         .header-social a {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: #16a34a;
//           color: #ffffff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: 0.3s ease;
//         }

//         .header-social a:hover {
//           background: #111827;
//         }

//         /* ================= MOBILE TOGGLE BUTTON ================= */
//         .mobile-bar-icon {
//           display: none;
//           font-size: 24px;
//           cursor: pointer;
//           color: #111827;
//         }

//         @media (max-width: 991px) {
//           .main-menu,
//           .header-social {
//             display: none;
//           }
//           .mobile-bar-icon {
//             display: block;
//           }
//         }
        
//         /* ================= MOBILE MENU DRAWER ================= */
//         .mobile-menu-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.5);
//           z-index: 99998; 
//           opacity: ${mobileMenuOpen ? 1 : 0};
//           visibility: ${mobileMenuOpen ? "visible" : "hidden"};
//           transition: all 0.3s ease;
//         }

//         .mobile-menu-container {
//           position: fixed;
//           top: 0; 
//           left: 0; 
//           width: 300px; 
//           height: 100vh;
//           background: #ffffff !important; /* Force White Background */
//           padding: 30px; 
//           z-index: 99999; 
//           transform: ${mobileMenuOpen ? "translateX(0)" : "translateX(-100%)"};
//           transition: transform 0.3s ease;
//           overflow-y: auto;
//           box-shadow: 2px 0 10px rgba(0,0,0,0.1);
//         }

//         .mobile-header-top {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 30px;
//           border-bottom: 1px solid #eee;
//           padding-bottom: 15px;
//           background: #ffffff !important; /* Force White */
//         }
        
//         /* Force dark text for "MENU" */
//         .mobile-header-top span {
//             color: #111827 !important;
//         }
        
//         .mobile-close-btn {
//           font-size: 22px;
//           cursor: pointer;
//           color: #333 !important; /* Force Dark Color */
//         }

//         .mobile-nav ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .mobile-nav li {
//           border-bottom: 1px solid #f3f3f3;
//         }

//         .mobile-nav li a {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 15px 0;
//           font-size: 16px;
//           font-weight: 600;
//           color: #111827 !important; /* 🔥 CRITICAL: Forces Text Black */
//           text-decoration: none;
//         }
        
//         /* Dropdown toggle text force color */
//         .mobile-nav div {
//              color: #111827 !important;
//         }

//         .mobile-submenu {
//           background: #f9f9f9 !important; /* Force Light Gray */
//           padding-left: 20px;
//           display: ${mobileSubMenuOpen ? "block" : "none"};
//         }
        
//         .mobile-submenu li a {
//           font-size: 14px;
//           padding: 12px 0;
//           font-weight: 500;
//           color: #374151 !important; /* Force Dark Gray */
//         }
//       `}</style>

//       {/* HEADER BAR */}
//       <div className={`header-bottom-area ${isSticky ? "header-sticky" : ""}`}>
//         <div className="container">
//           <div className="header-wrapper">
            
//             {/* Desktop Menu */}
//             <div className="main-menu">
//               <nav>
//                 <ul>
//                   <li><Link href="/" style={getActiveStyle(checkActive("/"))}>HOME</Link></li>
                  
//                   <li>
//                     <Link href="/services" style={getActiveStyle(checkServicesActive())}>
//                       <span className="menu-link-content">SERVICES <FaAngleDown /></span>
//                     </Link>
//                     <ul className="submenu">
//                       <li><Link href="/service-details/mulch-installation">Mulch Installation</Link></li>
//                       <li><Link href="/service-details/sod-installation">Sod Installation</Link></li>
//                       <li><Link href="/service-details/landscaping">Landscaping</Link></li>
//                       <li><Link href="/service-details/snow-removal">Snow Removal</Link></li>
//                       <li><Link href="/service-details/tree-service">Tree Service</Link></li>
//                       <li><Link href="/service-details/hardscaping">Hardscaping</Link></li>
//                       <li><Link href="/service-details/artificial-turf">Artificial Turf</Link></li>
//                     </ul>
//                   </li>

//                   <li><Link href="/projects" style={getActiveStyle(checkActive("/projects"))}>SERVICE AREAS</Link></li>
//                   <li><Link href="/about" style={getActiveStyle(checkActive("/about"))}>ABOUT US</Link></li>
//                   <li><Link href="/contact" style={getActiveStyle(checkActive("/contact"))}>CONTACT US</Link></li>
//                   <li><Link href="/blogs" style={getActiveStyle(checkActive("/blogs"))}>BLOG</Link></li>
//                 </ul>
//               </nav>
//             </div>

//             {/* Social Icons (Desktop) */}
//             <div className="header-social">
//               <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
//               <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
//               <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
//             </div>

//             {/* Hamburger Icon (Mobile) */}
//             <div className="mobile-bar-icon" onClick={() => setMobileMenuOpen(true)}>
//               <FaBars />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ========================================= */}
//       {/* 🟢 MOBILE SIDEBAR (Required) 🟢 */}
//       {/* ========================================= */}
      
//       {/* Overlay Background */}
//       <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />

//       {/* Mobile Sidebar Container */}
//       <div className="mobile-menu-container">
//         <div className="mobile-header-top">
//           <span style={{fontWeight: 'bold', fontSize: '18px'}}>MENU</span>
//           <div className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
//             <FaTimes />
//           </div>
//         </div>

//         <nav className="mobile-nav">
//           <ul>
//             <li>
//                <Link href="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
//             </li>

//             {/* Mobile Dropdown */}
//             <li>
//               <div 
//                 style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', cursor: 'pointer', fontWeight: 600}} 
//                 onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
//               >
//                 SERVICES <FaAngleDown style={{transform: mobileSubMenuOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s'}} />
//               </div>
//               <ul className="mobile-submenu">
//                 <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>All Services</Link></li>
//                 <li><Link href="/service-details/mulch-installation" onClick={() => setMobileMenuOpen(false)}>Mulch Installation</Link></li>
//                 <li><Link href="/service-details/sod-installation" onClick={() => setMobileMenuOpen(false)}>Sod Installation</Link></li>
//                 <li><Link href="/service-details/landscaping" onClick={() => setMobileMenuOpen(false)}>Landscaping</Link></li>
//                 <li><Link href="/service-details/snow-removal" onClick={() => setMobileMenuOpen(false)}>Snow Removal</Link></li>
//                 <li><Link href="/service-details/tree-service" onClick={() => setMobileMenuOpen(false)}>Tree Service</Link></li>
//                 <li><Link href="/service-details/hardscaping" onClick={() => setMobileMenuOpen(false)}>Hardscaping</Link></li>
//                 <li><Link href="/service-details/artificial-turf" onClick={() => setMobileMenuOpen(false)}>Artificial Turf</Link></li>
//               </ul>
//             </li>

//             <li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>SERVICE AREAS</Link></li>
//             <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link></li>
//             <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link></li>
//             <li><Link href="/blogs" onClick={() => setMobileMenuOpen(false)}>BLOG</Link></li>
//           </ul>
//         </nav>

//         {/* Mobile Socials */}
//         <div style={{marginTop: '30px', display: 'flex', gap: '15px'}}>
//            <a href="#" style={{width:'35px', height:'35px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><FaFacebookF/></a>
//            <a href="#" style={{width:'35px', height:'35px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><FaInstagram/></a>
//            <a href="#" style={{width:'35px', height:'35px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><FaYoutube/></a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeaderBottomOne;



"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
  FaAngleDown,
} from "react-icons/fa";

const HeaderBottomOne = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= ACTIVE LOGIC ================= */
  const checkActive = (path: string) => {
    if (!pathname) return false;
    if (pathname === path) return true;
    if (pathname === `${path}/`) return true;
    if (path !== "/" && pathname.startsWith(`${path}/`)) return true;
    return false;
  };

  const checkServicesActive = () => {
    if (!pathname) return false;
    return (
      pathname === "/services" ||
      pathname.startsWith("/services/") ||
      pathname.startsWith("/service-details/")
    );
  };

  const getActiveStyle = (isActive: boolean) => {
    return isActive ? { color: "#16a34a" } : {};
  };

  /* ================= INLINE STYLES FOR MOBILE ================= */
  // We use inline styles to FORCE visibility on mobile devices
  const mobileLinkStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "15px 0",
    fontSize: "16px",
    fontWeight: "700",
    color: "#111827", // 🔥 FORCED DARK COLOR
    textDecoration: "none",
    borderBottom: "1px solid #f3f3f3",
  };

  const mobileSubLinkStyle = {
    display: "block",
    padding: "12px 0",
    fontSize: "14px",
    fontWeight: "500",
    color: "#4b5563", // 🔥 FORCED GRAY COLOR
    textDecoration: "none",
    paddingLeft: "10px",
  };

  return (
    <>
      <style jsx>{`
        /* ================= HEADER (DESKTOP) ================= */
        .header-bottom-area {
          background: #ffffff;
          border-bottom: 1px solid #f3f4f6;
          height: 90px;
          transition: all 0.3s ease;
          z-index: 999;
          position: relative;
        }

        .header-sticky {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          animation: slideDown 0.3s ease-out;
          z-index: 999; 
          background: #ffffff;
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }

        .header-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        /* ================= MAIN MENU (Desktop) ================= */
        .main-menu nav > ul {
          display: flex;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
          height: 100%;
          align-items: center;
        }

        .main-menu nav > ul > li {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .main-menu nav > ul > li > a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 0 10px;
          font-size: 15px;
          font-weight: 700;
          color: #111827; 
          text-transform: uppercase;
          text-decoration: none;
          line-height: 1;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .main-menu nav > ul > li > a:hover {
          color: #16a34a !important;
        }

        .menu-link-content {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .menu-link-content svg {
          transition: transform 0.3s ease;
        }

        .main-menu nav > ul > li:hover > a .menu-link-content svg {
          transform: rotate(180deg);
        }

        /* ================= SUB MENU (Desktop) ================= */
        .submenu {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          min-width: 460px;
          background: linear-gradient(160deg, #ffffff 0%, #f6fcf8 100%);
          padding: 14px;
          border: 1px solid rgba(22, 163, 74, 0.16);
          border-radius: 18px;
          box-shadow:
            0 12px 28px rgba(15, 23, 42, 0.10),
            0 26px 52px rgba(15, 23, 42, 0.14);
          backdrop-filter: blur(3px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: all 0.24s ease;
          z-index: 99999;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
          overflow: hidden;
        }

        .submenu::before {
          content: "";
          position: absolute;
          top: -8px;
          left: 34px;
          width: 14px;
          height: 14px;
          background: #ffffff;
          border-top: 1px solid rgba(22, 163, 74, 0.2);
          border-left: 1px solid rgba(22, 163, 74, 0.2);
          transform: rotate(45deg);
        }

        .submenu::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #16a34a 0%, #22c55e 40%, #16a34a 100%);
        }

        .main-menu nav > ul > li:hover .submenu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .submenu li {
          list-style: none;
          margin-bottom: 0;
          opacity: 0;
          transform: translateY(5px);
          transition: all 0.22s ease;
        }

        .main-menu nav > ul > li:hover .submenu li {
          opacity: 1;
          transform: translateY(0);
        }

        .submenu li a {
          display: block;
          position: relative;
          padding: 14px 34px 14px 34px;
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          text-decoration: none;
          border-radius: 12px;
          border: 1px solid rgba(15, 23, 42, 0.05);
          background: rgba(255, 255, 255, 0.8);
          transition: all 0.22s ease;
          line-height: 1.3;
        }

        .submenu li a::before {
          content: "";
          position: absolute;
          left: 14px;
          top: 50%;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #86efac;
          box-shadow: 0 0 0 4px rgba(134, 239, 172, 0.2);
          transform: translateY(-50%);
          transition: all 0.22s ease;
        }

        .submenu li a::after {
          content: ">";
          position: absolute;
          right: 13px;
          top: 50%;
          color: #16a34a;
          font-size: 14px;
          font-weight: 800;
          opacity: 0;
          transform: translate(-3px, -50%);
          transition: all 0.22s ease;
        }

        .submenu li a:hover {
          background: #f2fbf6;
          color: #16a34a !important;
          border-color: rgba(22, 163, 74, 0.24);
          transform: translateX(3px);
          box-shadow: 0 8px 16px rgba(22, 163, 74, 0.11);
        }

        .submenu li a:hover::before {
          background: #16a34a;
          box-shadow: 0 0 0 5px rgba(22, 163, 74, 0.2);
        }

        .submenu li a:hover::after {
          opacity: 1;
          transform: translate(0, -50%);
        }

        .main-menu nav > ul > li:hover .submenu li:nth-child(1) { transition-delay: 0.01s; }
        .main-menu nav > ul > li:hover .submenu li:nth-child(2) { transition-delay: 0.03s; }
        .main-menu nav > ul > li:hover .submenu li:nth-child(3) { transition-delay: 0.05s; }
        .main-menu nav > ul > li:hover .submenu li:nth-child(4) { transition-delay: 0.07s; }
        .main-menu nav > ul > li:hover .submenu li:nth-child(5) { transition-delay: 0.09s; }
        .main-menu nav > ul > li:hover .submenu li:nth-child(6) { transition-delay: 0.11s; }
        .main-menu nav > ul > li:hover .submenu li:nth-child(7) { transition-delay: 0.13s; }
        .main-menu nav > ul > li:hover .submenu li:nth-child(8) { transition-delay: 0.15s; }

        @media (max-width: 1200px) {
          .submenu {
            min-width: 360px;
            grid-template-columns: 1fr;
          }
        }

        /* ================= SOCIAL ================= */
        .header-social {
          display: flex;
          gap: 10px;
        }

        .header-social a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #16a34a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }

        .header-social a:hover {
          background: #111827;
        }

        /* ================= MOBILE TOGGLE BUTTON ================= */
        .mobile-bar-icon {
          display: none;
          font-size: 24px;
          cursor: pointer;
          color: #111827;
        }

        @media (max-width: 991px) {
          .main-menu,
          .header-social {
            display: none;
          }
          .mobile-bar-icon {
            display: block;
          }
        }
        
        /* ================= MOBILE MENU DRAWER ================= */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 99998; 
          opacity: ${mobileMenuOpen ? 1 : 0};
          visibility: ${mobileMenuOpen ? "visible" : "hidden"};
          transition: all 0.3s ease;
        }

        .mobile-menu-container {
          position: fixed;
          top: 0; 
          left: 0; 
          width: 300px; 
          height: 100vh;
          background: #ffffff !important; 
          padding: 30px; 
          z-index: 99999; 
          transform: ${mobileMenuOpen ? "translateX(0)" : "translateX(-100%)"};
          transition: transform 0.3s ease;
          overflow-y: auto;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        }

        .mobile-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
        }
        
        /* Force Menu Text Color */
        .mobile-header-top span {
            color: #111827 !important;
        }
        
        .mobile-close-btn {
          font-size: 22px;
          cursor: pointer;
          color: #333;
        }

        .mobile-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-nav li {
          /* Borders handled in inline styles now */
        }

        .mobile-submenu {
          background: #f9f9f9;
          padding-left: 20px;
          display: ${mobileSubMenuOpen ? "block" : "none"};
        }
      `}</style>

      {/* HEADER BAR */}
      <div className={`header-bottom-area ${isSticky ? "header-sticky" : ""}`}>
        <div className="container">
          <div className="header-wrapper">
            
            {/* Desktop Menu */}
            <div className="main-menu">
              <nav>
                <ul>
                  <li><Link href="/" style={getActiveStyle(checkActive("/"))}>HOME</Link></li>
                  
                  <li>
                    <Link href="/services" style={getActiveStyle(checkServicesActive())}>
                      <span className="menu-link-content">SERVICES <FaAngleDown /></span>
                    </Link>
                    <ul className="submenu">
                      <li><Link href="/service-details/mulch-installation">Mulch Installation</Link></li>
                      <li><Link href="/service-details/sod-installation">Sod Installation</Link></li>
                      <li><Link href="/service-details/landscaping">Landscaping</Link></li>
                      <li><Link href="/service-details/snow-removal">Snow Removal</Link></li>
                      <li><Link href="/service-details/tree-service">Tree Service</Link></li>
                      <li><Link href="/service-details/hardscaping">Hardscaping</Link></li>
                      <li><Link href="/service-details/artificial-turf">Artificial Turf</Link></li>
                      <li><Link href="/service-details/home-remodelling">Home Remodelling</Link></li>
                    </ul>
                  </li>

                  <li><Link href="/locations" style={getActiveStyle(checkActive("/locations"))}>LOCATIONS</Link></li>
                  <li><Link href="/about" style={getActiveStyle(checkActive("/about"))}>ABOUT US</Link></li>
                  <li><Link href="/contact" style={getActiveStyle(checkActive("/contact"))}>QUOTE</Link></li>
                  <li><Link href="/blogs" style={getActiveStyle(checkActive("/blogs"))}>BLOG</Link></li>
                </ul>
              </nav>
            </div>

            {/* Social Icons (Desktop) */}
            <div className="header-social">
              <a href="https://www.facebook.com/rolaxlandscaping" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/rolaxlandscaping" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com/@rolaxlandscaping" target="_blank" rel="noreferrer"><FaYoutube /></a>
            </div>

            {/* Hamburger Icon (Mobile) */}
            <div className="mobile-bar-icon" onClick={() => setMobileMenuOpen(true)}>
              <FaBars />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* 🟢 MOBILE SIDEBAR (Required) 🟢 */}
      {/* ========================================= */}
      
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(false)} />

      <div className={`mobile-menu-container ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-header-top">
          <span style={{fontWeight: 'bold', fontSize: '18px'}}>MENU</span>
          <div className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
            <FaTimes />
          </div>
        </div>

        <nav className="mobile-nav">
          <ul>
            <li>
               <Link href="/" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>HOME</Link>
            </li>

            {/* Mobile Dropdown */}
            <li>
              <div 
                style={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '15px 0', 
                    cursor: 'pointer', 
                    fontWeight: 700,
                    color: '#111827', // Dark color for "SERVICES" toggle
                    borderBottom: "1px solid #f3f3f3"
                }} 
                onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
              >
                SERVICES <FaAngleDown style={{transform: mobileSubMenuOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s'}} />
              </div>
              <ul className="mobile-submenu">
                <li><Link href="/services" onClick={() => setMobileMenuOpen(false)} style={mobileSubLinkStyle}>All Services</Link></li>
                <li><Link href="/service-details/mulch-installation" onClick={() => setMobileMenuOpen(false)} style={mobileSubLinkStyle}>Mulch Installation</Link></li>
                <li><Link href="/service-details/sod-installation" onClick={() => setMobileMenuOpen(false)} style={mobileSubLinkStyle}>Sod Installation</Link></li>
                <li><Link href="/service-details/landscaping" onClick={() => setMobileMenuOpen(false)} style={mobileSubLinkStyle}>Landscaping</Link></li>
                <li><Link href="/service-details/snow-removal" onClick={() => setMobileMenuOpen(false)} style={mobileSubLinkStyle}>Snow Removal</Link></li>
                <li><Link href="/service-details/tree-service" onClick={() => setMobileMenuOpen(false)} style={mobileSubLinkStyle}>Tree Service</Link></li>
                <li><Link href="/service-details/hardscaping" onClick={() => setMobileMenuOpen(false)} style={mobileSubLinkStyle}>Hardscaping</Link></li>
                <li><Link href="/service-details/artificial-turf" onClick={() => setMobileMenuOpen(false)} style={mobileSubLinkStyle}>Artificial Turf</Link></li>
                <li><Link href="/service-details/home-remodelling" onClick={() => setMobileMenuOpen(false)} style={mobileSubLinkStyle}>Home Remodelling</Link></li>
              </ul>
            </li>

            <li><Link href="/locations" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>LOCATIONS</Link></li>
            <li><Link href="/about" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>ABOUT US</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>QUOTE</Link></li>
            <li><Link href="/blogs" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>BLOG</Link></li>
          </ul>
        </nav>

        {/* Mobile Socials */}
        <div style={{marginTop: '30px', display: 'flex', gap: '15px'}}>
            <a href="https://www.facebook.com/rolaxlandscaping" target="_blank" rel="noreferrer" style={{width:'35px', height:'35px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><FaFacebookF/></a>
            <a href="https://www.instagram.com/rolaxlandscaping" target="_blank" rel="noreferrer" style={{width:'35px', height:'35px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><FaInstagram/></a>
            <a href="https://www.youtube.com/@rolaxlandscaping" target="_blank" rel="noreferrer" style={{width:'35px', height:'35px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}><FaYoutube/></a>
        </div>
      </div>
    </>
  );
};

export default HeaderBottomOne;