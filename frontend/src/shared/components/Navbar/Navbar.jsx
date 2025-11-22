import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/route.config";
import Account from "../Account/Account";
import "../../../assets/css/layout.css";
import "../../../assets/css/responsive.css";
import logoHomePage from "../../../assets/images/logoW.png";
import { onAuthChange } from "../../../utils/authEvents.js"; // ← Thêm import

function Navbar(props) {
  const navLinks = routes.filter(route => route.showInNav);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ HÀM KIỂM TRA TRẠNG THÁI ĐĂNG NHẬP
  const checkAuthStatus = () => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setIsLoggedIn(true);
        setCurrentUser(parsedUser);
        console.log('✅ User đã đăng nhập:', parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error);
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    } else {
      setIsLoggedIn(false);
      setCurrentUser(null);
      console.log('❌ Chưa đăng nhập');
    }
  };

  // ✅ KIỂM TRA KHI COMPONENT MOUNT
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // ✅ LẮNG NGHE SỰ THAY ĐỔI AUTH STATE
  useEffect(() => {
    const cleanup = onAuthChange(() => {
      console.log('🔄 Auth state changed, updating Navbar...');
      checkAuthStatus();
    });

    return cleanup; // Cleanup listener khi unmount
  }, []);

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
        {/* PHẦN 1: Logo */}
        <div className="navbar__logo-section">
          <NavLink to="/" className="navbar__link navbar__link--logo text-decoration-none">
            <img className="navbar__logo" src={logoHomePage} alt="logo" />
            <span className="logo__name d-none d-lg-inline">VaniizIT</span>
          </NavLink>
        </div>

        {/* PHẦN 2: Navigation Links */}
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

        {/* PHẦN 3: Login / Account */}
        <div className="navbar__right d-none d-md-flex align-items-center gap-3">
          {!isLoggedIn ? (
            <NavLink to="/auth/login" className="border-0 sign-in text-decoration-none">
              Đăng nhập
            </NavLink>
          ) : (
            <Account user={currentUser} />
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar__toggle d-md-none" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Mobile Menu */}
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