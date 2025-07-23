import React from 'react';
import { Facebook, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuickLinkClick = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const target = document.querySelector(sectionId);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const target = document.querySelector(sectionId);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    }
  };
  
  return (
    <footer className="bg-navy dark:bg-gray-900 py-8 md:py-12 text-white/80 dark:text-gray-300/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://wkddnyxqlsewacuexjyi.supabase.co/storage/v1/object/public/images//ed4db815-59c3-486c-9301-a40cc2459757.png"
                  alt="Precision K9 Logo"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-xl font-bold text-gold dark:text-yellow-400">Precision K9 Services</h3>
              </div>
              <p className="text-white/70 dark:text-gray-400 leading-relaxed">
                Professional dog training and premium daycare services in Clanton, Alabama. 
                Transforming relationships between dogs and their owners through expert training.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gold dark:text-yellow-400 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleQuickLinkClick('#events')}
                  className="block text-white/70 dark:text-gray-400 hover:text-gold dark:hover:text-yellow-400 transition-colors"
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => handleQuickLinkClick('#services')}
                  className="block text-white/70 dark:text-gray-400 hover:text-gold dark:hover:text-yellow-400 transition-colors"
                >
                  Our Services
                </button>
                <button
                  onClick={() => handleQuickLinkClick('#about')}
                  className="block text-white/70 dark:text-gray-400 hover:text-gold dark:hover:text-yellow-400 transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleQuickLinkClick('#contact')}
                  className="block text-white/70 dark:text-gray-400 hover:text-gold dark:hover:text-yellow-400 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gold dark:text-yellow-400 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white dark:text-gray-200 font-medium">Address</p>
                    <p className="text-white/70 dark:text-gray-400">608 Jackson Ave<br />Clanton, AL</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gold dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white dark:text-gray-200 font-medium">Phone</p>
                    <a 
                      href="tel:205-247-6588" 
                      className="text-white/70 dark:text-gray-400 hover:text-gold dark:hover:text-yellow-400 transition-colors"
                    >
                      205.247.6588
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gold dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white dark:text-gray-200 font-medium">Email</p>
                    <a 
                      href="mailto:precisionk9services@icloud.com" 
                      className="text-white/70 dark:text-gray-400 hover:text-gold dark:hover:text-yellow-400 transition-colors break-all"
                    >
                      precisionk9services@icloud.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Hours */}
            <div className="space-y-6">
              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-gold dark:text-yellow-400 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61558793127882" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-gold/20 dark:bg-gray-800/50 dark:hover:bg-gold/20 rounded-lg transition-all duration-300 hover:scale-110 group"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5 text-white group-hover:text-gold dark:group-hover:text-yellow-400 transition-colors" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@precisionk9llc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-gold/20 dark:bg-gray-800/50 dark:hover:bg-gold/20 rounded-lg transition-all duration-300 hover:scale-110 group"
                    aria-label="Follow us on TikTok"
                  >
                    <MessageCircle className="w-5 h-5 text-white group-hover:text-gold dark:group-hover:text-yellow-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-lg font-bold text-gold dark:text-yellow-400 mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white dark:text-gray-200">Monday - Friday:</span>
                    <span className="text-white/70 dark:text-gray-400">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white dark:text-gray-200">Saturday:</span>
                    <span className="text-white/70 dark:text-gray-400">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white dark:text-gray-200">Sunday:</span>
                    <span className="text-white/70 dark:text-gray-400">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 dark:border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <p className="text-white/60 dark:text-gray-400 text-sm text-center md:text-left">
                  © {currentYear} Precision K9 Services. All rights reserved.
                </p>
                <div className="flex space-x-4 text-sm">
                  <Link 
                    to="/terms-of-use" 
                    className="text-white/60 dark:text-gray-400 hover:text-gold dark:hover:text-yellow-400 transition-colors"
                  >
                    Terms of Use
                  </Link>
                  <span className="text-white/40 dark:text-gray-500">|</span>
                  <Link 
                    to="/privacy-policy" 
                    className="text-white/60 dark:text-gray-400 hover:text-gold dark:hover:text-yellow-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <a 
                href="https://www.sigmacybercorp.com/sigma-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 dark:text-cyan-300 hover:text-cyan-300 dark:hover:text-cyan-200 transition-colors duration-300 text-sm font-medium"
              >
                Powered by Sigma AI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;