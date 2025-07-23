import React from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: "Evaluation",
      description: "This is how we like to start! It gives you an opportunity to have you and your dog meet a trainer to determine where we need to start.",
      imageUrl: "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//489289588_122169895616293104_8526300065570804371_n.jpg",
      features: [
        "Meet our professional trainers",
        "Behavioral assessment and evaluation",
        "Customized training plan recommendation",
        "Discuss your specific goals and concerns"
      ],
      linkPath: "/services/evaluation"
    },
    {
      title: "Day Training",
      description: "This program is private lessons, and allows us more one on one time with your dog and can achieve obedience much faster.",
      imageUrl: "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//487956918_122169347534293104_1659712244540075194_n.jpg",
      features: [
        "Private one-on-one training sessions",
        "Faster results through focused attention",
        "Basic obedience and behavioral modification",
        "Owner education and support"
      ],
      linkPath: "/services/day-training"
    },
    {
      title: "Off-Leash Training",
      description: "A dog that is reliable and that can be trusted is one of the best feelings to have as a dog owner. This is one of our most popular training programs that delivers excellent results.",
      imageUrl: "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//505336647_122180624762293104_3968230874507719343_n.jpg",
      features: [
        "Reliable recall from any distance",
        "Complete trust and freedom",
        "Advanced obedience commands",
        "Real-world application training"
      ],
      linkPath: "/services/off-leash-training"
    },
    {
      title: "Doggy Daycare",
      description: "We offer a unique environment to give your pup the care and attention they deserve during the day.",
      imageUrl: "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//492418764_122173776656293104_3242729791780007936_n.jpg",
      features: [
        "Games, Personal Interaction & quiet time",
        "Exercise and action packed setting",
        "Indoor & Outdoor setting",
        "Energy Outlet for lively dogs",
        "Constant Supervision",
        "Assistant with puppy potty training"
      ],
      linkPath: "/services/doggy-daycare"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
            We offer a unique training style to give you and your pup the relationship you've always wanted!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              features={service.features}
              linkPath={service.linkPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;