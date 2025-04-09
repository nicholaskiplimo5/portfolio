import React, { useState } from "react";
import "./styles.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { projectData } from "../../Static/Data/Data";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProNav from "../Nav/ProNav";


const MyWork = () => {
    const [showMore, setShowMore] = useState({});

    const toggleShowMore = (id) => {
        setShowMore((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };


    return (
        <div className="container">
            <ProNav />
            <div className="blog alert-info" id="blog">
                <div className="text-center">
                    <h3 className="title">My Projects</h3>
                    <p>
                        These are the projects I have been doing while learning and in the
                        field.
                    </p>
                </div>
                <div className="row">
                    {projectData.map((proj) => (
                        <div className="card" key={proj.id}>
                            <div className="card-body">
                                <img className="card-img" src={proj.imgage} alt="" />
                                <h2 className="title">{proj.title}</h2>
                                <p className={`card-description ${showMore[proj.id] ? "show-more" : ""}`}>
                                    {proj.description}
                                </p>
                                {proj.description.length > 100 && (
                                    <span className="show-more" onClick={() => toggleShowMore(proj.id)}>
                                        {showMore[proj.id] ? "Show Less" : "Show More"}
                                    </span>
                                )}
                                <div className="text-muted g-2">
                                    <h5>Technologies:</h5>
                                    <ul className="list-unstyled">
                                        {proj.technologies.map((tech, index) => (
                                            <li className="badge bg-info me-2" key={index}>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-6">
                                        <Link className="text-decoration-none" to={proj.link_github}>
                                            View Code <FaArrowRight />
                                        </Link>
                                    </div>
                                    <div className="col-lg-6">
                                        <Link className="text-decoration-none" to={proj.link_demo}>
                                            Demo <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyWork;