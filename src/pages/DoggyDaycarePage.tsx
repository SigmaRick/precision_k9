import React from 'react';
import { ArrowLeft, CheckCircle, Heart, Users, Shield, Clock, Play, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoggyDaycarePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//481922288_122165516390293104_5156440426743301058_n.jpg')",
            backgroundPosition: 'center center',
            backgroundSize: '30%'
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
              Premium Doggy Daycare
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              A unique environment where your pup receives the care, attention, and socialization they deserve while you're away.
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
              Enroll Your Dog
            </button>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12 text-center">
              What Makes Our Daycare Special
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Heart className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Personal Attention</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every dog receives individual attention and care tailored to their personality and needs.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Shield className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Constant Supervision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Professional staff provides continuous monitoring to ensure safety and proper socialization.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <Home className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Indoor & Outdoor</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Spacious indoor and outdoor areas provide variety and comfort in all weather conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-8">
                  What's Included in Our Daycare
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Games, Personal Interaction & Quiet Time
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Balanced activities that include playtime, one-on-one attention, and rest periods.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Exercise and Action-Packed Setting
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        High-energy activities and exercise to keep your dog physically fit and mentally stimulated.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Energy Outlet for Lively Dogs
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Perfect for high-energy dogs who need extra stimulation and exercise during the day.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-2">
                        Assistance with Puppy Potty Training
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Continued reinforcement of house training for puppies and young dogs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//492418764_122173776656293104_3242729791780007936_n.jpg"
                  alt="Dogs playing at daycare"
                  className="w-full h-[28rem] md:h-[32rem] lg:h-[36rem] object-cover object-top rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12 text-center">
              A Typical Day at Our Daycare
            </h2>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <Clock className="w-8 h-8 text-gold" />
                  <div>
                    <h3 className="text-lg font-bold text-navy dark:text-gray-100">Morning Arrival (7:00 AM - 9:00 AM)</h3>
                    <p className="text-gray-600 dark:text-gray-300">Welcome, health check, and settling in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <Play className="w-8 h-8 text-gold" />
                  <div>
                    <h3 className="text-lg font-bold text-navy dark:text-gray-100">Morning Play (9:00 AM - 11:00 AM)</h3>
                    <p className="text-gray-600 dark:text-gray-300">Interactive games and socialization</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <Heart className="w-8 h-8 text-gold" />
                  <div>
                    <h3 className="text-lg font-bold text-navy dark:text-gray-100">Rest & Individual Attention (11:00 AM - 1:00 PM)</h3>
                    <p className="text-gray-600 dark:text-gray-300">Quiet time, lunch, and one-on-one interaction</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <Users className="w-8 h-8 text-gold" />
                  <div>
                    <h3 className="text-lg font-bold text-navy dark:text-gray-100">Afternoon Activities (1:00 PM - 4:00 PM)</h3>
                    <p className="text-gray-600 dark:text-gray-300">Exercise, training reinforcement, and group play</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <Home className="w-8 h-8 text-gold" />
                  <div>
                    <h3 className="text-lg font-bold text-navy dark:text-gray-100">Wind Down & Pickup (4:00 PM - 6:00 PM)</h3>
                    <p className="text-gray-600 dark:text-gray-300">Calm activities and preparation for home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Your Dog */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12 text-center">
              Benefits for Your Dog
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">Physical Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Regular exercise and activity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Improved fitness and health</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Better sleep patterns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Reduced destructive behavior at home</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">Mental & Social Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Enhanced socialization skills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Mental stimulation and enrichment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Reduced separation anxiety</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    <span className="text-gray-600 dark:text-gray-300">Continued training reinforcement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-12 text-center">
              Enrollment Requirements
            </h2>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Health Requirements</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Current vaccinations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Flea and tick prevention</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Spayed/neutered (6+ months)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Health certificate from vet</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-4">Behavioral Requirements</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Non-aggressive toward people and dogs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Basic house training</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Comfortable with other dogs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">Evaluation session required</span>
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
              Give Your Dog the Best Day Ever
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Enroll in our premium daycare program and give your dog the socialization, exercise, and care they deserve.
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

export default DoggyDaycarePage;