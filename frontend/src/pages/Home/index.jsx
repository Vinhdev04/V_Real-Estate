import React from 'react';
import HeroSection from '../../features/HomePage/components/HeroSection';
import  FeaturedProperties from "../../features/HomePage/components/FeaturedProperties"
import ServicesSection from '../../features/HomePage/components/ServicesSection';
import AchievementsSection from '../../features/HomePage/components/AchievementsSection';
import TestimonialsSection from '../../features/HomePage/components/TestimonialsSection';
import CTASection from "../../features/HomePage/components/CTASection";
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