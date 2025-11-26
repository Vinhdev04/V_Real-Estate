// src/shared/components/Navbar/Navbar.jsx

import "./Navbar.css";
import "../Account/Account.css";
import React, { useState, useEffect, useContext } from "react"; // Thêm useContext
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/route.config";
import Account from "../Account/Account";
// ... (các imports css khác)
import logoHomePage from "../../../assets/images/logoW.png";
import { onAuthChange } from "../../../utils/authEvents.js"; 
import { AuthContext } from '../../../context/AuthContext'; 

function Navbar(props) {
const publicLayoutRoute = routes.find(route => route.element.type.name === 'Layout');
  

  const navLinks = publicLayoutRoute && publicLayoutRoute.children
    ? publicLayoutRoute.children
        .filter(route => route.showInNav)
        .map(link => ({
            ...link,
            // router Home "/" con nguoc lai la (/about,/properties,/team-group,...)
            path: link.index ? '/' : `/${link.path}`,
        }))
    : [];

  
  const { currentUser } = useContext(AuthContext); 


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dùng currentUser để xác định trạng thái đăng nhập
  const isAuthenticated = !!currentUser; 

 

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (isMobileMenuOpen) {
      navbar?.classList.add('navbar--expanded');
      document.body.style.overflow = 'hidden';
    } else {
      navbar?.classList.remove('navbar--expanded');
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="navbar">
   
        <div className="navbar__logo-section">
          <NavLink to="/" className="navbar__link navbar__link--logo text-decoration-none">
            <img className="navbar__logo" src={logoHomePage} alt="logo" />
            <span className="logo__name d-none d-lg-inline">VaniizIT</span>
          </NavLink>
        </div>

     
        <div className="navbar__center d-none d-md-flex">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="text-decoration-none"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

 
        <div className="gap-3 navbar__right d-none d-md-flex align-items-center">
          {!isAuthenticated ? ( 
            <>
              <NavLink to="/auth/login" className="border-0 sign-in text-decoration-none">
              Đăng nhập
              </NavLink>
              <NavLink to="/auth/register" className="border-0 sign-in text-decoration-none">
                Đăng ký
              </NavLink>
            </>
          ) : (
        
            <Account /> 
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar__toggle d-md-none" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>


      <div className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="text-decoration-none"
            onClick={closeMobileMenu}
          >
            {link.name}
          </NavLink>
        ))}

        {!isAuthenticated ? ( 
          <>
            <NavLink to="/auth/login" className="sign-in" onClick={closeMobileMenu}>
              Đăng nhập
            </NavLink>
            <NavLink to="/auth/register" className="sign-up" onClick={closeMobileMenu}>
              Đăng ký
            </NavLink>
          </>
        ) : (
          <div style={{ padding: "14px 30px", borderTop: "1px solid #eee" }}>
            <Account isMobile={true} /> 
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;