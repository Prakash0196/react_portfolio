

// import React from "react";
// import { FooterNav } from "./FooterNav";

// export const Footer = () => {
//   return (
//     <section className="footer">
//       <footer className="py-3 my-4">
//         <ul className="nav justify-content-center border-bottom pb-3 mb-3">
//           <li className="nav-item">
//             <FooterNav nav="Home" />
//           </li>
//           <li className="nav-item">
//           <FooterNav nav="About" />
//           </li>
//           <li className="nav-item">
//           <FooterNav nav="Services" />
//           </li>
//           <li className="nav-item">
//           <FooterNav nav="Blog" />
//           </li>
//           <li className="nav-item">
//           <FooterNav nav="Contact Me" />
//           </li>
//         </ul>
//         <p style={{ textAlign: "center" }}>
//           Copyright 2025 © By Prakash
//         </p>
//       </footer>

//       <div className="container py-2 pb-0 mx-auto foot"></div>
//     </section>
//   );
// };





// import React from "react";
// import { FooterNav } from "./FooterNav";

// export const Footer = () => {
//   return (
//     <section className="footer">
//       <br />
//       <hr />
//       <footer >
//         <div className="container">
//           <div className="row">
//             {[1, 2].map((section) => (
//               <div key={section} className="col-6 col-md-2 gap-4">
//                 <h5>Section</h5>
//                 <ul className="nav flex-column ">
//                   {["Home", "About", "Services", "Project", "Contact"].map((navItem) => (
//                     <li key={navItem} className="nav-item mb-2">
//                       <FooterNav nav={navItem} />
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}

//             <div className="col-md-5 offset-md-1 d-flex  justifyc-content-center items-center ">
//               <form>
//                 <h5>Subscribe to our newsletter</h5>
//                 <p>Monthly digest of what's new and exciting from us.</p>
//                 <div className="d-flex flex-column flex-sm-row w-100 gap-2">
//                   <label htmlFor="newsletter1" className="visually-hidden">
//                     Email address
//                   </label>
//                   <input
//                     id="newsletter1"
//                     type="email"
//                     className="form-control"
//                     placeholder="Email address"
//                   />
//                   <button className="btn btn-primary" type="button">
//                     Subscribe
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
//             <p>© 2025 Company, Inc. All rights reserved.</p>
//             <ul className="list-unstyled d-flex">
//               <li className="ms-3">
//                 <a
//                   className="link-body-emphasis"
//                   href="#"
//                   aria-label="Instagram"
//                 >
//                   <svg className="bi" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
//                     <path d="M8 0C5.8 0 5.5 0 4.3 0.1 3.1 0.2 2.1 0.6 1.3 1.3 0.6 2.1 0.2 3.1 0.1 4.3 0 5.5 0 5.8 0 8s0 2.5 0.1 3.7c0.1 1.2 0.5 2.2 1.3 3 0.8 0.8 1.8 1.2 3 1.3 1.2 0.1 1.5 0.1 3.7 0.1s2.5 0 3.7-0.1c1.2-0.1 2.2-0.5 3-1.3 0.8-0.8 1.2-1.8 1.3-3 0.1-1.2 0.1-1.5 0.1-3.7s0-2.5-0.1-3.7c-0.1-1.2-0.5-2.2-1.3-3-0.8-0.8-1.8-1.2-3-1.3C10.5 0 10.2 0 8 0zM8 1.5c2.1 0 2.3 0 3.1 0.1 0.8 0.1 1.2 0.3 1.5 0.5 0.4 0.3 0.7 0.7 1 1 0.3 0.3 0.4 0.7 0.5 1.5 0.1 0.8 0.1 1 0.1 3.1s0 2.3-0.1 3.1c-0.1 0.8-0.3 1.2-0.5 1.5-0.3 0.4-0.7 0.7-1 1-0.3 0.3-0.7 0.4-1.5 0.5-0.8 0.1-1 0.1-3.1 0.1s-2.3 0-3.1-0.1c-0.8-0.1-1.2-0.3-1.5-0.5-0.4-0.3-0.7-0.7-1-1-0.3-0.3-0.4-0.7-0.5-1.5-0.1-0.8-0.1-1-0.1-3.1s0-2.3 0.1-3.1c0.1-0.8 0.3-1.2 0.5-1.5 0.3-0.4 0.7-0.7 1-1 0.3-0.3 0.7-0.4 1.5-0.5 0.8-0.1 1-0.1 3.1-0.1z" />
//                     <path d="M8 3.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 6.9a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z" />
//                     <circle cx="12.5" cy="3.5" r="1" />
//                   </svg>
//                 </a>
//               </li>
//               <li className="ms-3">
//                 <a
//                   className="link-body-emphasis"
//                   href="#"
//                   aria-label="Facebook"
//                 >
//                   <svg className="bi" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
//                     <path d="M12.5 0H3.5A3.5 3.5 0 0 0 0 3.5v9A3.5 3.5 0 0 0 3.5 16h5.2v-5.7H7.5v-2.2h1.2V6.5c0-1 0.6-1.5 1.4-1.5h1.5v2.2h-1c-.4 0-.5.2-.5.5v1.3h1.7l-.3 2.2h-1.4V16h2.7a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 12.5 0z" />
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </section>
//   );
// };



export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <p>
            Welcome to My Portfolio,
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_2">
          <h4>Menu</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <div className="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          
          <a href="" target="_blank">
            View Resume
          </a>
          <a href="" target="_blank">
            Download Resume
          </a>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code by Prakash</p>
        </div>
      </div>
    </footer>
  );
};
