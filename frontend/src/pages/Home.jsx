import React from 'react';
import HeroSection from '../features/Home/components/HeroSection';
import  FeaturedProperties from "../features/Home/components/FeaturedProperties"
import ServicesSection from '../features/Home/components/ServicesSection';
import AchievementsSection from '../features/Home/components/AchievementsSection';
import TestimonialsSection from '../features/Home/components/TestimonialsSection';
import CTASection from "../features/Home/components/CTASection";
import BackToTop from "../shared/components/BackToTop/BackToTop";
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
/**
 * HomePage Component
 * Trang chủ của ứng dụng V_RealEstate
 */
function HomePage() {
  const {currentUser} = useContext(AuthContext);
  console.log("currentUser",currentUser);
  return (
    <div className="container-fluid">
        <div className="">
          <HeroSection />
          <FeaturedProperties/>
          <ServicesSection/>
          <AchievementsSection/>
          <TestimonialsSection/>
          <CTASection/>
          <BackToTop/>
        </div>
    </div>
  );
}

export default HomePage;