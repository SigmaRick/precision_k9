import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface ButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ href, text, variant = 'primary' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  const baseClasses = "inline-block px-6 py-3 rounded-md font-medium transition-all duration-300 text-center transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-gold text-navy hover:bg-gold/90 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-400 focus:ring-gold/50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl",
    secondary: "bg-white/95 text-navy hover:bg-white dark:bg-gray-800/95 dark:text-gray-100 dark:hover:bg-gray-700 focus:ring-navy/20 dark:focus:ring-gray-600/20 border-2 border-white dark:border-gray-600 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl backdrop-blur-sm"
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {text}
    </a>
  );
};

export default Button;