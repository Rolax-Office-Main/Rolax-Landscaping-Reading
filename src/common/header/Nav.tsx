// "use client";
// import React, { useMemo, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FaChevronDown } from "react-icons/fa";

// const Nav = () => {
//   const pathname = usePathname();
//   const [openServices, setOpenServices] = useState(false);

//   const servicesItems = useMemo(() => [
//     { label: "Mulch Installation", path: "/services/mulch" },
//     { label: "Sod Installation", path: "/services/sod" },
//     { label: "Landscaping", path: "/services/landscaping" },
//     { label: "Snow Removal", path: "/services/snow" },
//     { label: "Tree Service", path: "/services/tree" },
//     { label: "Hardscaping", path: "/services/hardscaping" },
//     { label: "Artificial Turf", path: "/services/artificial-turf" },
//   ], []);

//   const isActive = (path: string) => pathname === path;
//   // Adjusted logic to ensure Services is active if on /services OR sub-pages
//   const isServicesActive = pathname === "/services" || pathname?.startsWith("/services/");

//   return (
//     <>
//       <style jsx>{`
//         .main-menu { display: flex; justify-content: center; }
//         .main-menu ul { list-style: none; display: flex; align-items: center; gap: 25px; margin: 0; padding: 0; }
//         .main-menu li { position: relative; height: 100%; }
        
//         .main-menu a { text-decoration: none; font-weight: 700; font-size: 14px; letter-spacing: 0.5px; color: #111827; padding: 24px 0; display: inline-flex; align-items: center; gap: 5px; transition: color 0.3s ease; white-space: nowrap; }
//         .main-menu a:hover, .main-menu a.active { color: #16a34a; }
        
//         .menu-arrow { font-size: 11px; margin-top: 2px; transition: transform 300ms ease; }
        
//         /* Dropdown logic */
//         .has-dropdown:hover .dropdown, .has-dropdown.open .dropdown { opacity: 1; transform: translateY(0); pointer-events: auto; }
//         .has-dropdown:hover .menu-arrow, .has-dropdown.open .menu-arrow { transform: rotate(180deg); }
        
//         .has-dropdown .dropdown { position: absolute; top: 100%; margin-top: -10px !important; left: -25px; width: max-content; min-width: 240px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; border-top: 5px solid #16a34a; box-shadow: 0 20px 40px rgba(0,0,0,0.18); padding: 15px 0; display: flex; flex-direction: column; gap: 2px; opacity: 0; transform: translateY(15px); pointer-events: none; transition: opacity 300ms ease, transform 300ms ease; z-index: 9999; }
        
//         /* Invisible bridge to keep menu open when moving mouse down */
//         .has-dropdown .dropdown::before { content: ''; position: absolute; top: -25px; left: 0; width: 100%; height: 25px; background: transparent; display: block; }
        
//         .has-dropdown .dropdown a { width: 100%; margin: 0; padding: 12px 25px; border-radius: 0; border-left: 4px solid transparent; font-weight: 700; font-size: 15px; color: #374151; display: flex; align-items: center; transition: all 0.2s ease-in-out; }
//         .has-dropdown .dropdown a:hover, .has-dropdown .dropdown a.active { background: #f0fdf4; color: #16a34a; padding-left: 32px; border-left: 4px solid #16a34a; }
        
//         @media (max-width: 991px) { .main-menu { display: none; } }
//       `}</style>

//       <div className="main-menu">
//         <nav>
//           <ul>
//             <li><Link href="/" className={isActive("/") ? "active" : ""}>HOME</Link></li>
            
//             <li className={`has-dropdown ${openServices ? "open" : ""}`}
//                 onMouseEnter={() => setOpenServices(true)}
//                 onMouseLeave={() => setOpenServices(false)}>
                
//               {/* THE FIXED LINK */}
//               <Link href="/services" 
//                     className={isServicesActive ? "active" : ""}
//                     onClick={() => setOpenServices(false)}>
//                 SERVICES <FaChevronDown className="menu-arrow" />
//               </Link>
              
//               <div className="dropdown">
//                 {servicesItems.map((s) => (
//                   <Link key={s.path} href={s.path} 
//                         className={isActive(s.path) ? "active" : ""}
//                         onClick={() => setOpenServices(false)}>
//                     {s.label}
//                   </Link>
//                 ))}
//               </div>
//             </li>

//             <li><Link href="/projects" className={isActive("/projects") ? "active" : ""}>SERVICE AREAS</Link></li>
//             <li><Link href="/about" className={isActive("/about") ? "active" : ""}>ABOUT US</Link></li>
//             <li><Link href="/contact" className={isActive("/contact") ? "active" : ""}>CONTACT US</Link></li>
//             <li><Link href="/blogs" className={isActive("/blogs") ? "active" : ""}>BLOG</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Nav;