import React, { useEffect, useState } from "react";
import projects from "./Api/Projects.json"
import { NavLink } from "react-router-dom";
import AOS from "aos";
import { useNavigate } from "react-router-dom";



const Popup = ({ project, onClose }) => {

  AOS.init({ duration: 2000 });
  

  if (!project) return null;
  return (
    <div className="popup active">
      <button type="button" className="btn btn-danger popup-link" onClick={onClose}>
        Close
      </button>
      <hr />
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <div className="py-2 pt-3">
        <h3>About the Project</h3>
        <p>{project.about}</p>
      </div>
      <div className="pl-20">
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}><strong>{feature}</strong></li>
          ))}
        </ul>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Go to the site</a>
      </div>
    </div>
  );
};

export const Project = () => {
  const [activePopup, setActivePopup] = useState(null);

  // const handleOpen = (popupId) => {
  //   const project = projects.find((proj) => proj.id === popupId);
  //   setActivePopup(project);

  //   // Save scroll position and freeze scroll
  //   const scrollY = window.scrollY;
  //   document.body.style.position = "fixed";
  //   document.body.style.top = `-${scrollY}px`;
  //   document.body.dataset.scrollY = scrollY;

  // };

  //   const handleNavigateToProjects = () => {
  //   window.scrollTo(0, 0); // ✅ Scroll to top
  //   navigate("/project");  // ✅ Navigate
  // };

  // const handleClose = () => {
  //   const scrollY = document.body.dataset.scrollY;

  //   // Restore scroll position
  //   document.body.style.position = "";
  //   document.body.style.top = "";
  //   window.scrollTo(0, parseInt(scrollY || "0"));
  //   document.body.removeAttribute("data-scroll-y");

  //   setActivePopup(null);
  // };

  const handleOpen = (popupId) => {
  const project = projects.find((proj) => proj.id === popupId);
  setActivePopup(project);
};

const handleClose = () => {
  setActivePopup(null);
};

useEffect(() => {
  if (activePopup) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll'); 
  }
  return () => {
      document.body.classList.remove('no-scroll');
    };
}, [activePopup]);


  return (
    <section className="blog py-5">
      <div id="blur" className={activePopup ? "active" : ""}>
        <div className="container py-5" id="blog">
          <h1 className="text-center pb-5">Projects.</h1>

          <div style={{ display: "flex", alignItems: "center", position: "relative", width: "100%" }}>
            <p style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              margin: 0
            }}>
              scroll right to see more --
            </p>

            <NavLink
              to="/project"
              style={{
                marginLeft: "auto",
                textDecoration: "none",
                color: "inherit"
              }}
            >
              <button type="submit" className="btn1 my-4">See All Projects</button>
            </NavLink>
          </div>


          <div className="row blog-card py-5"  >
            {projects.map((project) => (
              <div className="col-lg-4 blog-item mb-3 blog-scale blog-card-scroll"  key={project.id}>
                <div className="card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" >
                  <img src={project.image} style={{ width: "100%" }} className="img-fluid" alt="" />
                  <small className="px-3 py-3 font-weight-bold">Web Design</small>
                  <h5 className="font-weight-bold px-3">{project.title}</h5>
                  <a
                    className="font-weight-bold px-3 pb-4 popup-link"
                    onClick={() => handleOpen(project.id)}
                    
                  >
                    <u>Read More</u>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activePopup && <Popup project={activePopup} onClose={handleClose} />}
    </section>
  );
};
