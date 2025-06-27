import { useEffect, useState } from "react";
import projects from "./Api/Projects.json"
import Aos from "aos";




const Popup = ({ project, onClose }) => {
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
        <a href={project.link} target="_blank" className="read-more-btn" rel="noopener noreferrer">Go to the site</a>
      </div>
    </div>
  );
};

export const Blog = () => {
  const [activePopup, setActivePopup] = useState(null);

    useEffect(()=>{
      Aos.init({ duration: 1000 });
  
    },[])

  const handleOpen = (popupId) => {
    const project = projects.find((proj) => proj.id === popupId);
    setActivePopup(project);
  
    // Save scroll position and freeze scroll
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.dataset.scrollY = scrollY;
    
  };
  
  const handleClose = () => {
    const scrollY = document.body.dataset.scrollY;
  
    // Restore scroll position
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0"));
    document.body.removeAttribute("data-scroll-y");
  
    setActivePopup(null);
  };
  
  

  return (
    <section className="blog py-5">
      <div id="blur" className={activePopup ? "active" : ""}>
        <div className="container py-5" id="blog">
          <h1 className="text-center pb-5">Projects.</h1>

          <div className="row project-blog-card py-5">
            {projects.map((project) => (
              <div className="col-lg-4 blog-item mb-3 blog-scale blog-card-scroll" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" key={project.id}>
                <div className="card">
                  <img src={project.image} style={{ width: "100%" }} className="img-fluid" alt="" />
                  <small className="px-3 py-3 font-weight-bold">Web Design</small>
                  <h5 className="font-weight-bold px-3">{project.title}</h5>
                  <a
                    className="font-weight-bold px-3 pb-4 popup-link read-more-btn"
                    onClick={() => handleOpen(project.id)}
                  >Read More </a>
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
