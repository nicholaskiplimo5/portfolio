import React from "react";
import "./about.css";
import { BsCheckCircleFill } from "react-icons/bs";
import {experiences, skillData} from "../../Static/Data/Data";

const About = () => {
  return (
      <section className="about mt-4" id="about">
        <div className=" section-title mt-4">
          <h2>Work Experience</h2>
          <p>
            My Work Experience and Expertise in the field of Computing and Information.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
                className=" img-fluid rounded-3"
                src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="work-experience">
              {experiences.map((job, index) => (
                  <div key={index} className="job">
                    <div className="job-header">
                              <span> {job.title} · <span className="company">{job.company}</span>
                              </span>
                      <span className="job-duration">{job.duration}</span>
                    </div>
                    <p className="job-description">{job.description}</p>
                    <div className="skills-used">
                      {job.skills.map((skill, i) => (
                          <span key={i} className="skill-badge-css">{skill}</span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* skills */}
        <section className=" skills mt-3" id="skills">
          <div className='section-title mt-4'>
            <h2>SKILLS</h2>
            <p>
              I have knowledge in the following technologies. But i am not
              limited to this, I am flexible to learn new skills and technolgies
            </p>
            <div className="row">
              <div className="about-category">
                {skillData.map((skill) => (
                    <div className=" card rounded-5 ms-2 bg-transparent">
                      <img className="image-center" src={skill.icon} alt=""/>
                      <h5 className="card-title ms-3">{skill.skill}</h5>
                      <div className=" card-body">
                        {skill.tech.map((tch) => (
                            <ul className=" list-unstyled about-category" key={1}>
                              <div><BsCheckCircleFill/></div>
                              <div>
                                <li>{tch} </li>
                              </div>
                            </ul>
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
  );
};

export default About;
