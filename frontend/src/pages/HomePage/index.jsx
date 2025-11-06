import React from 'react';
import HeroSection from './components/HeroSection';
import  FeaturedProperties from "./components/FeaturedProperties"
import ServicesSection from './components/ServicesSection';
import AchievementsSection from './components/AchievementsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from "./components/CTASection";

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
        </div>
    </div>
  );
}

export default HomePage;