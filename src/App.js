import React, {useState} from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Text from "./Static/App_text";
import resume from "./Static/Resume/res.pdf";
import {projectData, socialData,handleSocialIcons} from "./Static/Data/Data";
import {BsDownload } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import "./App.css";
import {Link, useNavigate} from "react-router-dom";
import ModalView from "./Components/ModalView";

const App = () => {
  const navigate= useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function handleRedirection() {
    navigate("/projects");
  }

  return (
      <div className=" alert alert-primary">
        <div className=" container">
          <Nav />
          <div className="col-md-12 mt-4 mb-2" role="alert">
            Current Employer:
            <span className=" badge bg-primary m-2">Turnkey Africa Ltd. [Software Engineer]</span>
          </div>
          <div className="row">
            <div className="col-md-6 mt-2">
              <h3>
                {" "}
                <span className=" text-bg-info fw-bold">
                <Text />
              </span>
              </h3>
              <p>
                Results-driven Software Engineer with 2+ years of experience in building and supporting enterprise systems. Skilled in Oracle ERP, Java, Spring Boot, and database management. I specialize in API development, system integration, enterprise reporting, and performance optimization. Passionate about delivering scalable solutions that drive business success, with hands-on experience in DevOps, CI/CD pipelines, cloud technologies, technical documentation, and user training.
              </p>
              <div className=" mb-3">
                <button onClick={handleRedirection} className="btn btn-primary h-25 rounded-5 text-white fw-bold me-2 p-2">
                  <span className=" ms-2 me-2">Check My Projects </span>
                  <FaArrowRight className=" me-2" />
                </button>
                <button className="btn btn-primary h-25 rounded-5 text-white fw-bold p-2" onClick={()=> setIsOpen(true)}>
                  <span className=" ms-2 me-2"> View Resume  </span> <BsDownload className=" me-2" />
                </button>
                <ModalView isOpen={isOpen} url={resume} onClose={()=> setIsOpen(false)} />
              </div>
              <div className=" col-md-6">
                <p>Follow Me:</p>
                <ul className="social-icons list-unstyled d-flex g-2">
                  {socialData.map((soc) => (
                     <li className=" me-3" key={soc.id} onClick={() => handleSocialIcons(soc.name)}>
                       {soc.icon}
                     </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img
                  className=" img-fluid rounded-3"
                  src="https://media.istockphoto.com/id/1356364287/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.jpg?s=1024x1024&w=is&k=20&c=T3xezeQ1n3oB5mefJ3FePQlFnxyXaYOIAhnUHJWwra8="
                  alt=""
              />
            </div>
          </div>

          <About />

          {/* Section: Projects */}
          <div className="row mb-5 mt-3" id={" "}>
            <p className=" heading">My Projects</p>
            <div className="project-list">

              {projectData.map((project) => (
                  <div className="project" key={project.id}>
                    <img src={project.imgage} alt="" />
                    <div className="p_layer">
                      <h3>{project.title}</h3>
                      <p>
                        {project.description}
                      </p>
                      <Link className="project_btn" to={"/projects"}>
                        +
                      </Link>
                    </div>
                  </div>
              ))}

            </div>
          </div>

          <Contact />
          <Footer />
        </div>
      </div>
  );
};

export default App;
