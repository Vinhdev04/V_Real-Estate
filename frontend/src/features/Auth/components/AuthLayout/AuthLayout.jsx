import React from 'react';
// import "../../styles/Login.css"

export default function AuthLayout({ title, children }) {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
       

       
          {children}
        
      </div>
    </div>
  );
}