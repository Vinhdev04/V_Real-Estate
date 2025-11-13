// src/shared/components/Navbar/Navbar.jsx

import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/route.config";
import AccountDropdown from "../Account/Account";
import "../../../assets/css/layout.css";
import "../../../assets/css/responsive.css";
import logoHomePage from "../../../assets/images/logoW.png";

function Navbar(props) {
  // Lọc ra các link cần hiển thị từ file config
  const navLinks = routes.filter(route => route.showInNav);
  
  // State để quản lý trạng thái đăng nhập
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Kiểm tra trạng thái đăng nhập khi component mount
  useEffect(() => {
    // TODO: Replace với logic kiểm tra thực tế từ localStorage hoặc context
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  return (
    <nav className="navbar d-flex align-items-center justify-content-between">
      <div className="navbar__left">
        <NavLink to="/" className="navbar__link navbar__link--logo text-decoration-none">
          <img className="navbar__logo" src={logoHomePage} alt="logo" />
          <span className="logo__name d-none d-lg-inline">VaniizIT</span>
        </NavLink>

        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="text-decoration-none d-none d-sm-block"
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="navbar__right d-none d-md-flex">
      
          <>
            <NavLink 
              to="/auth/login" 
              className="border-0 sign-in text-decoration-none d-none d-sm-block"
            >
              Đăng nhập
            </NavLink>
            <NavLink 
              to="/auth/register" 
              className="border-0 sign-up text-decoration-none d-none d-sm-block"
            >
              Đăng ký
            </NavLink>
          </>
       
          <AccountDropdown user={currentUser} />
       
      </div>

      {/* <div className="navbar__right d-none d-md-flex">
        {!isLoggedIn ? (
          <>
            <NavLink 
              to="/auth/login" 
              className="border-0 sign-in text-decoration-none d-none d-sm-block"
            >
              Đăng nhập
            </NavLink>
            <NavLink 
              to="/auth/register" 
              className="border-0 sign-up text-decoration-none d-none d-sm-block"
            >
              Đăng ký
            </NavLink>
          </>
        ) : (
          <AccountDropdown user={currentUser} />
        )}
      </div> */}

      <div className="navbar__toggle d-md-none">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;