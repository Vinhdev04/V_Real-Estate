import React from 'react';
import HeroSection from './features/HeroSection';
import  FeaturedProperties from "./features/FeaturedProperties"
import ServicesSection from './features/ServicesSection';
import AchievementsSection from './features/AchievementsSection';
import TestimonialsSection from './features/TestimonialsSection';
import CTASection from "./features/CTASection";
import BackToTop from "../../shared/components/BackToTop/BackToTop";

/**
 * HomePage Component
 * Trang chủ của ứng dụng V_RealEstate
 */
function HomePage() {
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