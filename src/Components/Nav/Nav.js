import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container navbar header">
      <Link to={"/"} style={{color:"orange", fontSize:"20px", fontFamily:"Pacifico"}} className="nav-brand fw-bold deco-none">NICHOLAS K.</Link>
      <ul class="nav fw-bold header_menu">
        <Link to={"#about"} className="nav-item">About</Link>
        <Link to={"/projects"} className="nav-item text-decoration-none">Projects</Link>
        <Link to={"/reach_out"} className="nav-item text-decoration-none">Get In Touch</Link>
      </ul>
    </div>
  );
};

export default Nav;
