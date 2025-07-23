import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-gold hover:text-navy dark:hover:text-gray-100 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-gray-100 mb-6">
              Terms of Use
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            
            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              By accessing and using the services of Precision K9 Services ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">2. Service Description</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Precision K9 Services provides professional dog training services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Dog training evaluations</li>
              <li>Day training programs</li>
              <li>Off-leash training</li>
              <li>Doggy daycare services</li>
              <li>Private training sessions</li>
              <li>Group training classes</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">3. Client Responsibilities</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a client of Precision K9 Services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Provide accurate and complete information about your dog's health, behavior, and training history</li>
              <li>Ensure your dog is up-to-date on all required vaccinations</li>
              <li>Disclose any aggressive behavior or bite history</li>
              <li>Follow all training instructions and recommendations provided by our trainers</li>
              <li>Maintain consistency in training methods at home</li>
              <li>Arrive on time for scheduled appointments</li>
              <li>Provide proper equipment as recommended by trainers</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">4. Health and Safety Requirements</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For the safety of all dogs and people involved in our programs:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>All dogs must be current on vaccinations (DHPP, Rabies, Bordetella)</li>
              <li>Dogs must be free of fleas, ticks, and other parasites</li>
              <li>Dogs showing signs of illness will not be admitted to group settings</li>
              <li>Aggressive dogs may be dismissed from programs at our discretion</li>
              <li>Dogs must be spayed/neutered if over 6 months old (daycare requirement)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">5. Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Payment is due at the time services are rendered unless other arrangements have been made</li>
              <li>We accept cash, check, and major credit cards</li>
              <li>Returned checks will incur a $35 fee</li>
              <li>Package deals must be paid in full before services begin</li>
              <li>Refunds are handled on a case-by-case basis</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">6. Cancellation Policy</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>24-hour notice is required for cancellations</li>
              <li>Cancellations with less than 24-hour notice may be charged the full session fee</li>
              <li>No-shows will be charged the full session fee</li>
              <li>Emergency cancellations will be handled on a case-by-case basis</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">7. Limitation of Liability</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              While we take every precaution to ensure the safety of your dog, Precision K9 Services cannot be held liable for any injury, illness, or death that may occur during training sessions or daycare. Dog training and socialization involve inherent risks. By using our services, you acknowledge these risks and agree to hold Precision K9 Services harmless from any claims arising from your dog's participation in our programs.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">8. Training Results</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              While we strive to achieve the best possible results for every dog, we cannot guarantee specific outcomes. Training success depends on many factors including the dog's temperament, age, health, and the owner's consistency in following training protocols. Results may vary, and some dogs may require additional training sessions.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">9. Photography and Media Release</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              By using our services, you grant Precision K9 Services permission to photograph or video your dog during training sessions or daycare for promotional purposes, including but not limited to our website, social media, and marketing materials. If you do not wish your dog to be photographed, please notify us in writing.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">10. Termination of Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Precision K9 Services reserves the right to terminate services at any time if we determine that a dog poses a safety risk to other dogs, people, or property, or if the client fails to comply with these terms of use. In such cases, refunds will be prorated based on services already provided.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">11. Modifications to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Precision K9 Services reserves the right to modify these terms at any time. Clients will be notified of any significant changes. Continued use of our services after modifications constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">12. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>Precision K9 Services</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                608 Jackson Ave, Clanton, AL
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Phone: <a href="tel:205-247-6588" className="text-gold hover:underline">205.247.6588</a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Email: <a href="mailto:precisionk9services@icloud.com" className="text-gold hover:underline">precisionk9services@icloud.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUsePage;