import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const UpcomingEvents: React.FC = () => {
  // Placeholder events - you can replace these with actual event data
  const events = [
    {
      id: 1,
      title: "Hands On Training Workshop",
      date: "September 27, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Precision K9 Training Facility",
      image: "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//4849e47b-7d8a-4e6a-96a4-5b56a429ae7c.jfif",
      description: "Open to all dogs and handlers",
      bulletPoints: [
        "Interactive training demonstrations",
        "Hands-on practice with professional trainers",
        "Suitable for all skill levels and dog breeds",
        "Learn advanced techniques and problem-solving methods",
        "Q&A sessions with experienced handlers",
        "Networking opportunities with fellow dog enthusiasts"
      ]
    },
    {
      id: 2,
      title: "Professional Dog Training",
      date: "Daily",
      time: "9:00 AM - 5:00 PM",
      location: "Precision K9 Training Facility",
      image: "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//514109699_122183370920293104_8031255791133465523_n.jpg",
      description: "Comprehensive training programs tailored to your dog's specific needs and your training goals.",
      bulletPoints: [
        "Puppy Training",
        "Basic Obedience",
        "Advanced Obedience",
        "Socialization Training",
        "And More!!!"
      ]
    },
    {
      id: 3,
      title: "Basic Obedience Workshop",
      date: "June 28, 2025",
      time: "Starts at 8:00 AM",
      location: "Precision K9 Training Facility",
      image: "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//505835633_122180811950293104_7893802924800694600_n%20(2).jpg",
      description: "Learn fundamental training techniques for your dog in this hands-on workshop.",
      bulletPoints: [
        "Basic commands: sit, stay, come, down",
        "Leash training and walking etiquette",
        "House training reinforcement",
        "Positive reinforcement techniques",
        "Problem behavior correction",
        "Interactive Q&A with trainers"
      ]
    }
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-4">Upcoming Events</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Join us for specialized training workshops, seminars, and community events designed to enhance your dog training journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 md:hover:-translate-y-3 h-full flex flex-col"
            >
              <div className={`relative overflow-hidden flex-shrink-0 ${
                event.id === 1 || event.id === 3
                  ? 'h-52 sm:h-64 md:h-88 lg:h-96' 
                  : 'h-52 sm:h-64 md:h-88 lg:h-96'
              }`}>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className={`w-full h-full transition-transform duration-500 hover:scale-105 ${
                    event.id === 1 || event.id === 3
                      ? 'object-cover object-top' 
                      : 'object-cover object-top'
                  }`}
                />
                <div className="absolute top-4 right-4 bg-gold text-navy px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                  Event
                </div>
              </div>
              
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="border-b border-gold/20 pb-4 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-navy dark:text-gray-100 leading-tight text-center">{event.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-1">{event.description}</p>
                
                {/* Bullet Points for first event */}
                {event.bulletPoints && (
                  <div className="mb-4 sm:mb-6">
                    <ul className="space-y-2">
                      {event.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                          <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 mt-2"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className={`space-y-2 sm:space-y-3 ${event.bulletPoints ? 'mb-4 sm:mb-6' : 'mb-4 sm:mb-6'}`}>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-gold flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  {event.time && (
                  <div className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-gold flex-shrink-0 mt-0.5" />
                    <span>{event.time}</span>
                  </div>
                  )}
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-gold flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
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
                  className="w-full bg-gold text-navy dark:bg-yellow-500 dark:text-gray-900 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:bg-gold/90 dark:hover:bg-yellow-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold text-sm sm:text-base shadow-lg hover:shadow-xl mt-auto"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4 px-4 text-sm sm:text-base">
            Don't see an event that fits your needs? Contact us about custom training sessions.
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
            className="inline-block bg-navy text-white dark:bg-gray-600 dark:text-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-300 hover:bg-navy/90 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy dark:focus:ring-gray-500 text-sm sm:text-base"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;