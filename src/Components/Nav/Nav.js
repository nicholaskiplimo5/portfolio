import React, {useState} from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import {handleSmoothNavigate, nav_links} from '../../Functions/Functions';

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
            {nav_links.map(({ id, label }) => (
                <a key={id} href={id} className="nav-item text-decoration-none">
                    {label}
                </a>
            ))}
        </ul>
    </div>
  );
};

export default Nav;
