// src/layout/layout.jsx

import React,{useContext } from 'react' // BỎ useEffect nếu không dùng
import Navbar from '../shared/components/Navbar/Navbar'
import Footer from '../shared/components/Footer/Footer'
import BackToTop from '../shared/components/BackToTop/BackToTop'
import {AuthContext} from '../context/AuthContext'
import { Routes, Route } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router-dom' // QUAN TRỌNG: Outlet
import { routes } from '../routes/route.config'

function Layout ()  {
    
  return (
    <div className="d-flex flex-column min-vh-100">
        <Navbar/>
        <main className="flex-grow-1">
            <Outlet/> 
        </main>
    
        <BackToTop/>
        <Footer/>    
    </div>
  )
}

function RequireAuth ()  {
    const {currentUser} = useContext(AuthContext)
    if (!currentUser) {
        return <Navigate to="/auth/login" replace />; 
    }


    return (
     !currentUser ?
      (<Navigate to="/auth/login" replace />) 
      : 
      (   
     <div className="d-flex flex-column min-vh-100">
            <Navbar/>
            <main className="flex-grow-1">
                <Outlet/>
            </main>
        
            <BackToTop/>
            <Footer/>    
        </div>)
    )
}

export { Layout, RequireAuth };