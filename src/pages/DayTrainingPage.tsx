import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const DayTrainingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//490631295_122171861972293104_1121289945442851665_n.jpg')",
            backgroundPosition: '50% 30%'
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-gold hover:text-white transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Day Training Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Intensive, personalized training sessions that deliver faster results through focused one-on-one attention with your dog.
            </p>
            <button
              onClick={() => {
                const contact = document.querySelector('#contact');
                if (contact) {
                  window.scrollTo({
                    top: contact.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Day Training
            </button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12 text-center">
              Why Choose Day Training?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Target className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Focused Attention</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Private lessons allow for concentrated, uninterrupted training sessions tailored specifically to your dog's needs.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Clock className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Faster Results</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Intensive training sessions mean your dog learns commands and behaviors more quickly than traditional group classes.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Award className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Professional Expertise</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Work directly with our experienced trainers who can address specific behavioral issues and training goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Details */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-8">
                  What's Included in Day Training
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Basic Obedience Commands
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Sit, stay, come, down, heel, and other essential commands for daily life.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Behavioral Modification
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Address specific issues like jumping, pulling, excessive barking, or aggression.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Leash Training
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Proper walking techniques and leash manners for enjoyable walks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Owner Education
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Learn how to maintain and reinforce training at home for lasting results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//487956918_122169347534293104_1659712244540075194_n.jpg"
                  alt="Day training session"
                  className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12 text-center">
              Training Schedule & Process
            </h2>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">Typical Session Structure</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Warm-up and assessment (10 minutes)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Focused training exercises (45 minutes)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Cool-down and reinforcement (15 minutes)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Owner consultation (15 minutes)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">Program Options</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      <h4 className="font-semibold text-navy dark:text-gray-100 mb-2">Basic Package</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">4 sessions over 2 weeks</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      <h4 className="font-semibold text-navy dark:text-gray-100 mb-2">Standard Package</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">8 sessions over 4 weeks</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      <h4 className="font-semibold text-navy dark:text-gray-100 mb-2">Intensive Package</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">12 sessions over 6 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-navy dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Intensive Training?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Give your dog the focused attention they need to succeed with our day training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:205-247-6588"
                className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Call 205.247.6588
              </a>
              <a 
                href="mailto:precisionk9services@icloud.com"
                className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DayTrainingPage;