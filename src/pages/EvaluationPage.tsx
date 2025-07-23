import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const EvaluationPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-600 to-slate-700 dark:from-slate-700 dark:to-slate-800 text-white relative overflow-hidden pt-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-gold hover:text-white transition-colors pt-8 md:pt-12 mb-6 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="max-w-4xl flex flex-col justify-center pb-8 md:pb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Dog Training Evaluation
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                The perfect starting point for your dog training journey. Get to know our trainers and let us assess your dog's unique needs.
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
                Schedule Your Evaluation
              </button>
            </div>
            
            <div className="relative lg:block flex justify-center lg:justify-end lg:h-auto h-64 sm:h-80 md:h-96 lg:-mt-8 xl:-mt-12">
              <img 
                src="https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//489339574_122170774910293104_1706078980938073534_n.jpg"
                alt="Dog training evaluation session"
                className="w-full max-w-md lg:max-w-none h-full lg:h-[36rem] xl:h-[40rem] object-cover object-top lg:rounded-none lg:rounded-l-2xl rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:rounded-none lg:rounded-l-2xl rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12 text-center">
              What to Expect During Your Evaluation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Users className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Meet Your Trainer</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Get acquainted with our professional trainers and discuss your dog's specific needs and behavioral challenges.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Behavioral Assessment</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We'll observe your dog's current behavior patterns, temperament, and training level to create a customized plan.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Star className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Personalized Plan</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Receive a tailored training recommendation based on your dog's unique personality and your training goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-8">
                  Why Start with an Evaluation?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Determine Starting Point
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Every dog is unique. Our evaluation helps us understand where your dog is currently and where they need to go.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Build Trust
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Allow your dog to meet our trainers in a low-pressure environment and establish a positive relationship.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Customized Approach
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Get a training plan specifically designed for your dog's personality, age, and current skill level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//489289588_122169895616293104_8526300065570804371_n.jpg"
                  alt="Dog training evaluation session"
                  className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12">
              Our Evaluation Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-navy">1</span>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Initial Consultation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Discuss your goals, concerns, and your dog's history with our experienced trainers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-navy">2</span>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Hands-On Assessment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Watch your dog interact with our trainers and assess their current training level and temperament.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-navy">3</span>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Customized Plan</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive a detailed training recommendation tailored specifically to your dog's needs.
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your evaluation today and take the first step toward a better relationship with your dog.
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

export default EvaluationPage;