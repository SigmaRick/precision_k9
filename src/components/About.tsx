import React from 'react';
import { Award, Shield, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-5 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7516375/pexels-photo-7516375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
        }}
        aria-hidden="true"
      ></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-navy/5 dark:bg-gray-600/5 rounded-full translate-x-24 translate-y-24"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy dark:text-gray-100 mb-6 tracking-tight px-4">
              About Precision K9 Services
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Transforming relationships between dogs and their owners through expert training and compassionate care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
            <div className="space-y-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-gray-100 mb-4 md:mb-6 flex items-center">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-gold mr-3" />
                  Our Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  At Precision K9 Services, we offer a unique training style to give you and your pup the relationship you've always wanted! Our professional dog training programs are designed to create reliable, well-behaved companions through proven techniques and personalized attention.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-gray-100 mb-4 md:mb-6 flex items-center">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-gold mr-3" />
                  Our Commitment
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  Based in Clanton, Alabama, we prioritize safety, expertise, and results. Our training methods focus on building strong bonds between dogs and their owners through compassionate guidance and professional excellence.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-gray-100 mb-4 md:mb-6 flex items-center">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-gold mr-3" />
                  Our Approach
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  From private lessons to group classes, and our premium doggy daycare services, we're committed to helping every dog reach their full potential in a safe and supportive environment.
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-gray-100 mb-4 md:mb-6 flex items-center">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-gold mr-3" />
                  Our Promise
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  We believe every dog deserves the opportunity to be their best self, and every owner deserves to experience the joy of a well-trained, happy companion. That's the Precision K9 difference.
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="bg-navy dark:bg-gray-800 rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold dark:text-yellow-400">100+</div>
                <div className="text-white/90 dark:text-gray-200/90 text-base md:text-lg font-medium">Dogs Trained</div>
                <div className="text-white/70 dark:text-gray-300/70 text-sm md:text-base">Successfully transformed relationships</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold dark:text-yellow-400">5★</div>
                <div className="text-white/90 dark:text-gray-200/90 text-base md:text-lg font-medium">Client Satisfaction</div>
                <div className="text-white/70 dark:text-gray-300/70 text-sm md:text-base">Consistently excellent results</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold dark:text-yellow-400">24/7</div>
                <div className="text-white/90 dark:text-gray-200/90 text-base md:text-lg font-medium">Support Available</div>
                <div className="text-white/70 dark:text-gray-300/70 text-sm md:text-base">We're here when you need us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;