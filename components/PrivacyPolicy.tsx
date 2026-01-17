
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: January 2026</p>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Welcome to GoGoTrip. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Data We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Data</h2>
            <p className="text-slate-600 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our AI-powered travel planning services, manage our relationship with you, and improve our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Your Legal Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:gogotrip.ai@gmail.com" className="text-blue-600 font-medium hover:underline">gogotrip.ai@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
