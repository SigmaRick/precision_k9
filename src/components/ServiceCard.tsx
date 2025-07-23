import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features?: string[];
  linkPath: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, features = [], linkPath }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      <div className="h-48 sm:h-56 md:h-64 lg:h-72 relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={{ objectPosition: '50% 0%' }}
        />
      </div>
      <div className="p-4 sm:p-6 md:p-8 border-t-4 border-gold flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold text-navy dark:text-gray-100 mb-3 md:mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 flex-1 text-base sm:text-lg leading-relaxed">{description}</p>
        {features.length > 0 && (
          <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                <span className="w-3 h-3 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <Link
          to={linkPath}
          className="mt-4 md:mt-6 inline-block text-gold hover:text-navy dark:hover:text-gray-100 transition-colors duration-300 font-semibold text-base sm:text-lg"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;