import React, { useEffect, useState } from 'react';
import "../styles/about.css";

const HeroSection = ({ title, subtitle }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-section">

      <div 
        className="hero-section__bg-circle hero-section__bg-circle--top-left"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      <div 
        className="hero-section__bg-circle hero-section__bg-circle--bottom-right"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      />

  
      <div className="hero-section__floating-icon hero-section__floating-icon--home">
        🏠
      </div>
      
      <div className="hero-section__floating-icon hero-section__floating-icon--building">
        🏢
      </div>
      
      <div className="hero-section__floating-icon hero-section__floating-icon--key">
        🗝️
      </div>


      <div className="hero-section__content">
        <div className="hero-section__icon-wrapper">
          <span className="hero-section__main-icon">
            🏙️
          </span>
        </div>
        
        <h1 className="hero-section__title">
          {title}
        </h1>
        
        <p className="hero-section__subtitle">
          {subtitle}
        </p>

        <div className="hero-section__divider" />
      </div>

   
      <svg 
        className="hero-section__wave"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
        <path 
          fill="#ffffff" 
          fillOpacity="0.3" 
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default HeroSection;