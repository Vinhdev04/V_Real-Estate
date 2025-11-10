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
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '120px 20px',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '500px'
    }} className="hero-section">
      
      {/* Animated background circles */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        transform: `translateY(${scrollY * 0.3}px)`,
        transition: 'transform 0.1s ease-out'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        transform: `translateY(${scrollY * -0.2}px)`,
        transition: 'transform 0.1s ease-out'
      }} />

      {/* Floating property icons */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '15%',
        fontSize: '80px',
        opacity: 0.15,
        animation: 'float 6s ease-in-out infinite',
        animationDelay: '0s'
      }}>
        🏠
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '12%',
        fontSize: '70px',
        opacity: 0.15,
        animation: 'float 7s ease-in-out infinite',
        animationDelay: '1s'
      }}>
        🏢
      </div>
      
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '8%',
        fontSize: '60px',
        opacity: 0.1,
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '2s'
      }}>
        🏗️
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block',
          marginBottom: '20px',
          animation: 'scaleIn 0.8s ease-out'
        }}>
          <span style={{
            fontSize: '80px',
            display: 'block',
            animation: 'float 4s ease-in-out infinite'
          }}>
            🏙️
          </span>
        </div>
        
        <h1 className="fade-in-up" style={{ 
          fontSize: 52, 
          fontWeight: 'bold', 
          marginBottom: 25,
          textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
          letterSpacing: '1px'
        }}>
          {title}
        </h1>
        
        <p className="fade-in-up" style={{ 
          fontSize: 22, 
          maxWidth: 850, 
          margin: '0 auto',
          lineHeight: 1.8,
          animationDelay: '0.2s',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          {subtitle}
        </p>

        {/* Decorative line */}
        <div style={{
          width: '120px',
          height: '4px',
          background: 'white',
          margin: '30px auto 0',
          borderRadius: '2px',
          opacity: 0.8,
          animation: 'scaleIn 1s ease-out',
          animationDelay: '0.4s',
          boxShadow: '0 2px 10px rgba(255,255,255,0.3)'
        }} />
      </div>

      {/* Bottom wave decoration */}
      <svg style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '80px',
        opacity: 0.3
      }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default HeroSection;