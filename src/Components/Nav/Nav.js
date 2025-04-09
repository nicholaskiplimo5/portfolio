import React, {useState} from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import {handleSmoothNavigate} from '../../Functions/Functions';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container navbar header">
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        {isOpen && (
            <ul className="mobile-menu mds-menu">
                <li onClick={() => handleSmoothNavigate("home", setIsOpen)}>Home</li>
                <li onClick={() => handleSmoothNavigate("experience", setIsOpen)}>Experience</li>
                <li onClick={() => handleSmoothNavigate("skills", setIsOpen)}>Skills</li>
                <li onClick={() => handleSmoothNavigate("contact", setIsOpen)}>Contact</li>
            </ul>
        )}
        <Link to={"/"} className="nav-brand fw-bold deco-none name">NICHOLAS K.</Link>
        <ul className="nav fw-bold header_menu">
            <a href="#skills" className="nav-item text-decoration-none">Skills</a>
            <a href="#experience" className="nav-item text-decoration-none">Experience</a>
            <a href="#projects" className="nav-item text-decoration-none">Projects</a>
            <a href="#contact" className="nav-item text-decoration-none">Get In Touch</a>
        </ul>
    </div>
  );
};

export default Nav;
