import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';
import ServicesDropdown from './ServicesDropdown';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMenu: () => void;
  MenuIcon: React.ElementType;
  XIcon: React.ElementType;
}

const Header: React.FC<HeaderProps> = ({ 
  mobileMenuOpen, 
  toggleMenu, 
  MenuIcon, 
  XIcon 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-navy dark:bg-gray-900 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg py-1 md:py-2' : 'py-2 md:py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center md:grid md:grid-cols-12 md:gap-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="https://wkddnyxqlsewacuexjyi.supabase.co/storage/v1/object/public/images//ed4db815-59c3-486c-9301-a40cc2459757.png"
              alt="Precision K9 Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
            <span className="text-base sm:text-lg md:text-2xl font-bold text-white dark:text-gray-100 group-hover:text-gold transition-colors whitespace-nowrap">
              Precision K9
            </span>
          </Link>
          
          {/* Centered Phone Number - Desktop */}
          <div className="hidden md:flex justify-center md:col-span-4 md:col-start-5">
            <a 
              href="tel:205-247-6588" 
              className="flex items-center space-x-2 md:space-x-3 text-white dark:text-gray-100 hover:text-gold transition-colors duration-300 font-bold text-lg md:text-2xl bg-gold/10 hover:bg-gold/20 dark:bg-gold/20 dark:hover:bg-gold/30 px-4 md:px-6 py-2 md:py-3 rounded-lg border border-gold/30"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span>205.247.6588</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 justify-end items-center md:col-span-4 md:col-start-9">
            <NavLink href="#events" label="Events" />
            <ServicesDropdown />
            <NavLink href="#about" label="About" />
            <NavLink href="#contact" label="Contact" />
            <ThemeToggle />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white dark:text-gray-100 hover:text-gold focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        
        {/* Sigma AI Credit - Bottom of Header */}
        <div className="hidden md:flex justify-center pt-1 md:pt-2 pb-1">
          <a 
            href="https://www.sigmacybercorp.com/sigma-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 dark:text-cyan-300 hover:text-cyan-300 dark:hover:text-cyan-200 transition-colors duration-300 text-xs md:text-sm font-medium shadow-lg hover:shadow-cyan-400/20"
          >
            Powered by Sigma AI
          </a>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 max-h-80 overflow-y-auto">
            <a 
              href="tel:205-247-6588" 
              className="flex items-center justify-center space-x-2 text-white dark:text-gray-100 hover:text-gold transition-colors duration-300 font-bold text-base sm:text-lg bg-gold/10 hover:bg-gold/20 dark:bg-gold/20 dark:hover:bg-gold/30 px-4 sm:px-5 py-3 rounded-lg border border-gold/30"
              onClick={toggleMenu}
            >
              <Phone className="w-5 h-5" />
              <span>205.247.6588</span>
            </a>
            <div className="flex justify-center">
              <a 
                href="https://www.sigmacybercorp.com/sigma-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 dark:text-cyan-300 hover:text-cyan-300 dark:hover:text-cyan-200 transition-colors duration-300 text-sm font-medium"
              >
                Powered by Sigma AI
              </a>
            </div>
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <NavLink href="#events" label="Events" onClick={toggleMenu} />
            <ServicesDropdown onClick={toggleMenu} />
            <NavLink href="#about" label="About" onClick={toggleMenu} />
            <NavLink href="#contact" label="Contact" onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;