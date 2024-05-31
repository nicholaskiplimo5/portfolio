import React from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Text from "./Static/App_text";
import resume from "./Static/Resume/res.pdf";
import { projectData } from "./Static/Data/Data";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsWhatsapp,
  BsDownload,
} from "react-icons/bs";
import "./App.css";
import Demo from "./Static/images/demo.jpg";
import { Link } from "react-router-dom";

const App = () => {
  const Handlechat = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=0791980616&text=Hello&type=phone_number&app_absent=0"
    );
  };
  return (
    <div className=" alert alert-primary">
      <div className=" container">
        <Nav />
        <div class="col-md-12 mt-4 mb-2" role="alert">
          Concider hiring me! Website under dev
          <span className=" badge bg-primary m-2 blink">Open to Job.</span>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2">
            <h3>
              I'm{" "}
              <span className=" text-bg-info fw-bold">
                <Text />
              </span>
            </h3>
            <p>
              Motivated self-learning in Information Technology. Intrested in
              exploring about computer Network, cloud Computing, DevOps and Web
              Development. Now looking for More experience in my field.
            </p>
            <div className=" mb-3">
              <button
                onClick={Handlechat}
                className="btn btn-primary h-25 rounded-5 text-white fw-bold me-2 p-2"
              >
                <span className=" ms-2 me-2"> Hire Me </span>
                <BsWhatsapp className=" me-2" />
              </button>
              <button className="btn btn-primary h-25 rounded-5 text-white fw-bold p-2">
                <Link
                  className="text-decoration-none text-white me-2 ms-2"
                  to={resume}
                >
                  {" "}
                  Download Resume
                </Link>
                <BsDownload className=" me-2" />
              </button>
            </div>
            <div className=" col-md-6">
              <p>Follow Me:</p>
              <ul className="social-icons list-unstyled d-flex g-2">
                <li className=" me-3">
                  <BsFacebook style={{ fill: "blue" }} />
                </li>
                <li className="me-3">
                  <BsGithub style={{ fill: "black" }} />
                </li>
                <li className=" me-3">
                  <BsTwitter style={{ fill: "blue" }} />
                </li>
                <li className=" me-3">
                  <BsWhatsapp style={{ fill: "green" }} />
                </li>
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
        <div className="row mb-5 mt-3">
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
