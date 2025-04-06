import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container navbar header">
      <Link to={"/"} style={{color:"black", fontSize:"20px", fontFamily:"cadibri"}} className="nav-brand fw-bold deco-none">NICHOLAS K.</Link>
        <ul className="nav fw-bold header_menu">
            <a href="#projects" className="nav-item text-decoration-none">Projects</a>
            <a href="#contact" className="nav-item text-decoration-none">Get In Touch</a>
        </ul>
    </div>
  );
};

export default Nav;
