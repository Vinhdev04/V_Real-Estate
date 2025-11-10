// Đường dẫn: src/shared/components/Navbar/Navbar.jsx

import "./Navbar.css";
import React from "react";
import { NavLink, Link } from "react-router-dom"; // <-- Dùng cả NavLink và Link
import { routes } from "../../../routes/route.config"; // <-- Import cấu hình
import "../../../assets/css/layout.css";
import "../../../assets/css/responsive.css";
import logoHomePage from "../../../assets/images/logoW.png";

function Navbar(props) {
  // Lọc ra các link cần hiển thị từ file config
  const navLinks = routes.filter(route => route.showInNav);

  return (
    <nav className="navbar d-flex align-items-center justify-content-between ">
      <div className="navbar__left">
      
        <Link to="/" className="navbar__link navbar__link--logo text-decoration-none">
          <img className="navbar__logo" src={logoHomePage} alt="logo" />
          <span className="logo__name d-none d-lg-inline">VaniizIT</span>
        </Link>

      
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
    
        <NavLink to="/auth/login" className="border-0 sign-in text-decoration-none d-none d-sm-block ">
          Đăng nhập
        </NavLink>
        <NavLink to="/auth/register" className="border-0 sign-up text-decoration-none d-none d-sm-block ">
          Đăng ký
        </NavLink>
      </div>

   
      {/* <div className="navbar__menu"> ... </div>
      */}

      <div className="navbar__toggle d-md-none">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;