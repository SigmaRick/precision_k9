import React from 'react';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import UpcomingEvents from '../components/UpcomingEvents';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <VideoSection />
      <UpcomingEvents />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;