import React from 'react';
import HeroSection from '../../features/About/components/HeroSection';
import StatsSection from '../../features/About/components/StatsSection';
import StorySection from '../../features/About/components/StorySection';
import TimelineSection from '../../features/About/components/TimelineSection';
import ServicesSection from '../../features/About/components/ServicesSection';
import ValuesSection from '../../features/About/components/ValuesSection';
import CTASection from '../../features/About/components/CTASection';
import {
  heroData,
  statsData,
  storyData,
  timelineData,
  servicesData,
  valuesData,
  ctaData
} from '../../features/About/services/aboutData';
import 'antd/dist/reset.css';

const About = () => {
  const handleCTAClick = () => {
    console.log('Navigate to contact page');
    // Add navigation logic here
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
     

      <HeroSection {...heroData} />
      <StatsSection stats={statsData} />
      <StorySection {...storyData} />
      <TimelineSection {...timelineData} />
      <ServicesSection {...servicesData} />
      <ValuesSection {...valuesData} />
      <CTASection {...ctaData} onButtonClick={handleCTAClick} />
    </div>
  );
};

export default About;