import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
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
              Privacy Policy
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
            
            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Precision K9 Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our services.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-4">Personal Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li>Register for our services</li>
              <li>Contact us via phone, email, or contact forms</li>
              <li>Schedule appointments or consultations</li>
              <li>Participate in our training programs</li>
              <li>Subscribe to our newsletter or marketing communications</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This personal information may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Name and contact information (address, phone number, email)</li>
              <li>Emergency contact information</li>
              <li>Payment information</li>
              <li>Dog information (name, breed, age, health records, behavioral history)</li>
              <li>Veterinarian contact information</li>
              <li>Training goals and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy dark:text-gray-100 mb-4">Automatically Collected Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or source</li>
              <li>Date and time of visits</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Provide and maintain our training and daycare services</li>
              <li>Process payments and manage billing</li>
              <li>Schedule and confirm appointments</li>
              <li>Communicate with you about our services</li>
              <li>Develop customized training plans for your dog</li>
              <li>Ensure the safety and well-being of all dogs in our care</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and website functionality</li>
              <li>Comply with legal obligations</li>
              <li>Contact you in case of emergencies</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li><strong>Veterinary Emergencies:</strong> We may contact your veterinarian if your dog requires medical attention</li>
              <li><strong>Emergency Contacts:</strong> We may contact your designated emergency contacts if necessary</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or legal process</li>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (payment processors, scheduling software, etc.)</li>
              <li><strong>Business Transfers:</strong> Information may be transferred if our business is sold or merged</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">5. Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">6. Data Retention</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. We may also retain information for legal, accounting, or reporting requirements. When information is no longer needed, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">7. Your Privacy Rights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              <li>Access and review the personal information we have about you</li>
              <li>Request corrections to inaccurate or incomplete information</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your personal information</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. You can control cookie settings through your browser preferences, but disabling cookies may affect website functionality.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">9. Third-Party Links</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">10. Children's Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">11. Photography and Media</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We may take photographs or videos of dogs during training sessions or daycare for promotional purposes. These images may be used on our website, social media, or marketing materials. If you do not want your dog photographed, please notify us in writing. You can also request removal of existing photos at any time.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new privacy policy on our website and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated privacy policy.
            </p>

            <h2 className="text-2xl font-bold text-navy dark:text-gray-100 mb-6">13. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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

export default PrivacyPolicyPage;