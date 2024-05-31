import React from "react";
import "./styles.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Demo from "../../Static/images/demo.jpg";
import { projectData } from "../../Static/Data/Data";
import { Link } from "react-router-dom";

const myWork = () => {
  return (
    <div className="container">
      <Nav />
      <div className="blog alert-info" id="blog">
        <div className=" text-center">
          <h3 className="title">My Projects</h3>
          <p>
            This are the projects have been doing while learning and in the
            field.
          </p>
        </div>
        <div className="row d-flex flex-column">
          <div className=" col-lg-3">
            <div className="card ">
              {projectData.map((proj) => (
                <div className=" card-body">
                  <img className=" card-img" src={proj.imgage} alt="" />
                  <h2 className=" title">{proj.title}</h2>
                  <p>{proj.description}</p>
                  <div className=" text-muted g-2">
                    <h5>Techologies:</h5>
                    <ul className="list-unstyled" key={proj.id}>
                      <li className="badge bg-info me-2">
                        {proj.technologies[0]}
                      </li>
                      <li className="badge bg-info me-2">
                        {proj.technologies[1]}
                      </li>
                      <li className="badge bg-info me-2">
                        {proj.technologies[2]}
                      </li>
                      <li className="badge bg-info me-2">
                        {proj.technologies[3]}
                      </li>
                    </ul>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <button className="btn btn-primary fw-bold"><Link className=" text-decoration-none">View Code</Link></button>
                    </div>
                    <div className="col-lg-6">
                      <button className="btn btn-primary fw-bold"><Link className=" text-decoration-none">Demo</Link></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default myWork;
