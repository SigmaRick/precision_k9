import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//470202347_122153056748293104_7130663340678832678_n.jpg",
      title: "Elite K9 Training",
      subtitle: "& Handler Services"
    },
    {
      image: "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//505443232_122180680418293104_5464224085595941193_n.jpg",
      title: "Professional Training",
      subtitle: "& Expert Care"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-16 md:pt-20 flex items-center justify-center bg-navy dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 relative overflow-hidden"
    >
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 ${
            index === currentSlide 
              ? 'opacity-30 scale-105' 
              : 'opacity-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `url('${slide.image}')`,
            backgroundAttachment: 'fixed'
          }}
          aria-hidden="true"
        />
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 dark:bg-gray-800/60 dark:hover:bg-gray-700/80 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 dark:bg-gray-800/60 dark:hover:bg-gray-700/80 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gold scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 z-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
            <span className="block mb-2 md:mb-3" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6), 2px 2px 4px rgba(0,0,0,0.9)' }}>{slides[currentSlide].title}</span>
            <span className="block text-gold dark:text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold tracking-wide" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6), 2px 2px 4px rgba(0,0,0,0.9)' }}>
              {slides[currentSlide].subtitle}
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white dark:text-gray-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-4" style={{ textShadow: '0 0 15px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9)' }}>
            <span className="block mb-2 md:mb-3">Professional K9 and handler training in detection, tracking, and obedience.</span>
            <span className="block text-base sm:text-lg md:text-xl text-white/90 dark:text-gray-200/90 font-normal">Serving Clanton, Alabama and surrounding areas.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <Button href="#contact" text="Get Started" />
            <Button href="#services" text="Our Services" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;