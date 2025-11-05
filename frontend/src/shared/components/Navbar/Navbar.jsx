import "./Navbar.css";
import React, { useState } from "react";
import "../../../assets/css/layout.css";
import "../../../assets/css/responsive.css";
import logoHomePage from "../../../assets/images/logoW.png";
function Navbar(props) {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const toggleMenu = () => {
        setIsMenuExpanded(!isMenuExpanded);
    };

    const closeMenu = () => {
        setIsMenuExpanded(false);
    };

    return (
        <nav className={`navbar d-flex align-items-center justify-content-between ${isMenuExpanded ? 'navbar--expanded' : ''}`}>
            <div className="navbar__left">
                <a href="/" className="navbar__link decoration" onClick={closeMenu}>
                    <img className="navbar__logo" src={logoHomePage} alt="logo" />
                    <span className="logo__name d-none d-lg-inline">VaniizIT</span>
                </a>
                <a href="#home" onClick={closeMenu} className="text-decoration-none d-none d-sm-block">Home</a>
                <a href="#about" onClick={closeMenu} className="text-decoration-none d-none d-sm-block">About</a>
                <a href="#contact" onClick={closeMenu} className="text-decoration-none d-none d-sm-block">Contact</a>
                <a href="#agent" onClick={closeMenu} className="text-decoration-none d-none d-sm-block">Agent</a>
            </div>

            <div className="navbar__right d-none d-md-flex">
                <a href="#" onClick={closeMenu} className="border-0 sign-in text-decoration-none d-none d-sm-block ">Sign In</a>
                <a href="#" onClick={closeMenu} className="border-0 sign-up text-decoration-none d-none d-sm-block ">Sign Up</a>
            </div>

             {/* Menu links */}
            <div className={`navbar__menu ${isMenuExpanded ? "active" : ""}`}>
                <a href="#home" onClick={closeMenu}>
                Home
                </a>
                <a href="#about" onClick={closeMenu}>
                About
                </a>
                <a href="#contact" onClick={closeMenu}>
                Contact
                </a>
                <a href="#agent" onClick={closeMenu}>
                Agent
                </a>
                <a href="#" onClick={closeMenu} className="sign-in">
                Sign In
                </a>
                <a href="#" onClick={closeMenu} className="sign-up">
                Sign Up
                </a>
            </div>
          <div className="navbar__toggle d-md-none" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
           
        </nav>
    );
}

export default Navbar;