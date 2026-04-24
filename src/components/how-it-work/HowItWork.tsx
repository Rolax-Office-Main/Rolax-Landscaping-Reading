// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Nav from "react-bootstrap/Nav";
// import Tab from "react-bootstrap/Tab";
// import { FaPlus } from "react-icons/fa";

// const HowItWork = () => {
//   return (
//     <>
//       {/* If you need specific CSS for this component that isn't in main.css, 
//          you can add a <style jsx> block here. 
//          For now, I assume 'works-menu', 'works-icon', etc. are in your global css.
//       */}
      
//       <div className="how-it-works bg-4 pt-110 pb-110">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-12">
//               <div className="section-title text-center mb-70">
//                 <span>See How it Works!</span>
//                 <h2>Our process is simple but efficient</h2>
//               </div>
//             </div>
//           </div>

//           <Tab.Container defaultActiveKey="first">
//             {/* ICONS */}
//             <div className="row">
//               <div className="works-menu text-center mb-50 w-100">
//                 <Nav variant="pills" className="justify-content-center">
//                   <Nav.Item>
//                     <Nav.Link eventKey="first">
//                       <span className="works-icon">
//                         <Image 
//                           src="/images/how-it-works/consulting.png" 
//                           alt="Start Consultation" 
//                           width={50} 
//                           height={50} 
//                           style={{ width: "auto", height: "auto" }}
//                         />
//                       </span>
//                     </Nav.Link>
//                   </Nav.Item>

//                   <Nav.Item>
//                     <Nav.Link eventKey="second">
//                       <span className="works-icon">
//                         <Image 
//                           src="/images/how-it-works/quotation.png" 
//                           alt="Give Quotation" 
//                           width={50} 
//                           height={50}
//                           style={{ width: "auto", height: "auto" }}
//                         />
//                       </span>
//                     </Nav.Link>
//                   </Nav.Item>

//                   <Nav.Item>
//                     <Nav.Link eventKey="third">
//                       <span className="works-icon">
//                         <Image 
//                           src="/images/how-it-works/start.png" 
//                           alt="Start Project" 
//                           width={50} 
//                           height={50} 
//                           style={{ width: "auto", height: "auto" }}
//                         />
//                       </span>
//                     </Nav.Link>
//                   </Nav.Item>

//                   <Nav.Item>
//                     <Nav.Link eventKey="four">
//                       <span className="works-icon">
//                         <Image 
//                           src="/images/how-it-works/success.png" 
//                           alt="Complete Work" 
//                           width={50} 
//                           height={50} 
//                           style={{ width: "auto", height: "auto" }}
//                         />
//                       </span>
//                     </Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//               </div>
//             </div>

//             {/* CONTENT: ONE PHOTO PER ICON */}
//             <Tab.Content>
//               <Tab.Pane eventKey="first">
//                 <div className="row justify-content-center">
//                   <div className="col-xl-4 col-lg-5 col-md-6">
//                     <div className="works-content-wrapper text-center">
//                       <h3>Start Consultation</h3>
//                       <div className="works-img bg-hover-style-1">
//                         <Image 
//                           src="/images/how-it-works/1.jpg" 
//                           alt="Start Consultation" 
//                           width={400} 
//                           height={300}
//                           style={{ width: "100%", height: "auto" }}
//                         />
//                         <Link href="/contact" className="works-link">
//                           <FaPlus />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Tab.Pane>

//               <Tab.Pane eventKey="second">
//                 <div className="row justify-content-center">
//                   <div className="col-xl-4 col-lg-5 col-md-6">
//                     <div className="works-content-wrapper text-center">
//                       <h3>Give Quotation</h3>
//                       <div className="works-img bg-hover-style-1">
//                         <Image 
//                           src="/images/how-it-works/2.jpg" 
//                           alt="Give Quotation" 
//                           width={400} 
//                           height={300}
//                           style={{ width: "100%", height: "auto" }}
//                         />
//                         <Link href="/contact" className="works-link">
//                           <FaPlus />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Tab.Pane>

//               <Tab.Pane eventKey="third">
//                 <div className="row justify-content-center">
//                   <div className="col-xl-4 col-lg-5 col-md-6">
//                     <div className="works-content-wrapper text-center">
//                       <h3>Start Project</h3>
//                       <div className="works-img bg-hover-style-1">
//                         <Image 
//                           src="/images/how-it-works/3.jpg" 
//                           alt="Start Project" 
//                           width={400} 
//                           height={300}
//                           style={{ width: "100%", height: "auto" }}
//                         />
//                         <Link href="/contact" className="works-link">
//                           <FaPlus />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Tab.Pane>

//               <Tab.Pane eventKey="four">
//                 <div className="row justify-content-center">
//                   <div className="col-xl-4 col-lg-5 col-md-6">
//                     <div className="works-content-wrapper text-center">
//                       <h3>Complete Work</h3>
//                       <div className="works-img bg-hover-style-1">
//                         <Image 
//                           src="/images/how-it-works/4.jpg" 
//                           alt="Complete Work" 
//                           width={400} 
//                           height={300}
//                           style={{ width: "100%", height: "auto" }}
//                         />
//                         <Link href="/contact" className="works-link">
//                           <FaPlus />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Tab.Pane>
//             </Tab.Content>
//           </Tab.Container>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HowItWork;


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { FaPlus } from "react-icons/fa";

const HowItWork = () => {
  return (
    <div className="how-it-works bg-4 pt-110 pb-110">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title text-center mb-70">
              <span>See How it Works!</span>
              <h2>Our process is simple but efficient</h2>
            </div>
          </div>
        </div>

        <Tab.Container defaultActiveKey="first">
          {/* ICON MENU */}
          <div className="row">
            <div className="works-menu text-center mb-50 w-100">
              <Nav variant="pills" className="justify-content-center gap-3">
                {[
                  { key: "first", img: "consulting.png", alt: "Start Consultation" },
                  { key: "second", img: "quotation.png", alt: "Give Quotation" },
                  { key: "third", img: "start.png", alt: "Start Project" },
                  { key: "four", img: "success.png", alt: "Complete Work" },
                ].map((item) => (
                  <Nav.Item key={item.key}>
                    <Nav.Link eventKey={item.key}>
                      <span className="works-icon">
                        <Image
                          src={`/images/how-it-works/${item.img}`}
                          alt={item.alt}
                          width={50}
                          height={50}
                        />
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
          </div>

          {/* TAB CONTENT */}
          <Tab.Content>
            {[
              {
                key: "first",
                title: "Start Consultation",
                img: "1.jpg",
              },
              {
                key: "second",
                title: "Give Quotation",
                img: "2.jpg",
              },
              {
                key: "third",
                title: "Start Project",
                img: "3.jpg",
              },
              {
                key: "four",
                title: "Complete Work",
                img: "4.jpg",
              },
            ].map((item) => (
              <Tab.Pane eventKey={item.key} key={item.key}>
                <div className="row justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="works-content-wrapper text-center">
                      <h3>{item.title}</h3>

                      <div className="works-img bg-hover-style-1">
                        <Image
                          src={`/images/how-it-works/${item.img}`}
                          alt={item.title}
                          width={320}
                          height={240}
                        />

                        <Link href="/contact" className="works-link">
                          <FaPlus />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default HowItWork;
