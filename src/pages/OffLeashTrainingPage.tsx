import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Target, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const OffLeashTrainingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/3"></div>
        <div 
          className="absolute inset-0 bg-contain bg-no-repeat opacity-80"
          style={{ 
            backgroundImage: "url('https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//502416254_122179154750293104_4506285315441703959_n.jpg')",
            backgroundPosition: '75% 20%'
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
              Off-Leash Training
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Experience the ultimate freedom and trust with your dog. Our off-leash training creates reliable, well-behaved companions you can trust anywhere.
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
              Start Off-Leash Training
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12 text-center">
              The Ultimate Dog Training Experience
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Shield className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Complete Trust</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Develop an unbreakable bond of trust where your dog responds reliably to your commands, even without a leash.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Target className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Precision Control</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Achieve precise control and communication with your dog in any environment or situation.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Zap className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Freedom & Confidence</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Enjoy the freedom of hiking, playing, and exploring with your dog while maintaining complete confidence in their behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-8">
                  Our Off-Leash Training Method
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-navy font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Foundation Building
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Start with solid on-leash obedience and establish clear communication patterns.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-navy font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Gradual Transition
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Slowly introduce off-leash work in controlled environments with increasing distractions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-navy font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Real-World Application
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Practice in various environments to ensure reliability in all situations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-navy font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Maintenance Training
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Learn how to maintain and reinforce off-leash reliability for life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//505336647_122180624762293104_3968230874507719343_n.jpg"
                  alt="Off-leash training session"
                  className="w-full h-[28rem] md:h-[32rem] lg:h-[36rem] object-cover object-top rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12 text-center">
              Skills Your Dog Will Master
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">Core Commands</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Reliable recall from any distance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Stay command with duration and distance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Heel position without leash</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Place command for boundaries</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">Advanced Skills</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Impulse control around distractions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Proper greeting behavior</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Environmental awareness and safety</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Emergency stop and redirect commands</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12">
              Why Off-Leash Training is Our Most Popular Program
            </h2>
            
            <div className="bg-gold/10 dark:bg-gold/20 rounded-2xl p-8 mb-12">
              <blockquote className="text-xl md:text-2xl text-navy dark:text-gray-100 font-medium italic mb-6">
                "A dog that is reliable and that can be trusted is one of the best feelings to have as a dog owner."
              </blockquote>
              <p className="text-gray-600 dark:text-gray-300">
                This program delivers excellent results and transforms the relationship between you and your dog, creating a bond built on mutual trust and respect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-2">95% Success Rate</h3>
                <p className="text-gray-600 dark:text-gray-300">Most dogs achieve reliable off-leash behavior</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-2">Lifetime Skills</h3>
                <p className="text-gray-600 dark:text-gray-300">Training that lasts for your dog's entire life</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-2">Proven Methods</h3>
                <p className="text-gray-600 dark:text-gray-300">Time-tested techniques that deliver results</p>
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
              Ready for the Ultimate Training Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our most popular program and experience the joy of a truly reliable, off-leash companion.
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

export default OffLeashTrainingPage;