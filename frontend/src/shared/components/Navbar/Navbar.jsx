// src/shared/components/Navbar/Navbar.jsx

import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/route.config";
import Account from "../Account/Account";
import "../../../assets/css/layout.css";
import "../../../assets/css/responsive.css";
import logoHomePage from "../../../assets/images/logoW.png";

function Navbar(props) {
  // Lọc ra các link cần hiển thị từ file config
  const navLinks = routes.filter(route => route.showInNav);
  
  // State để quản lý trạng thái đăng nhập
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // ========== THÊM MỚI: Mobile menu ==========
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Kiểm tra trạng thái đăng nhập khi component mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  // ========== THÊM MỚI: Xử lý mobile menu ==========
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
        {/* PHẦN 1: Logo Section (Trái) */}
        <div className="navbar__logo-section">
          <NavLink to="/" className="navbar__link navbar__link--logo text-decoration-none">
            <img className="navbar__logo" src={logoHomePage} alt="logo" />
            <span className="logo__name d-none d-lg-inline">VaniizIT</span>
          </NavLink>
        </div>

        {/* PHẦN 2: Navigation Links (Giữa) */}
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

       
  <div className="navbar__right d-none d-md-flex">

    <>
      <NavLink to="/auth/login" className="border-0 sign-in text-decoration-none">
        Đăng nhập
      </NavLink>
  
  
      <Account user={currentUser} style={{ display: 'none' }} />

   </>

</div>

        {/* Mobile Menu Toggle */}
        <div className="navbar__toggle d-md-none" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* ========== THÊM MỚI: Mobile Menu (đầy đủ menu + login) ========== */}
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

        {!isLoggedIn ? (
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
            <Account user={currentUser} isMobile={true} />
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;