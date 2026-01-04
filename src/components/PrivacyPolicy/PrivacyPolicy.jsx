import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className="w-full bg-base-100 dark:bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent mb-4 sm:mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use our
            food review platform.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
          <p>
            We may collect the following information when you register or interact
            with our platform:
          </p>
          <ul className="list-disc pl-6">
            <li>Name and email address</li>
            <li>Profile photo</li>
            <li>Food reviews and favorites</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul className="list-disc pl-6">
            <li>Provide and maintain the platform</li>
            <li>Personalize your experience</li>
            <li>Analyze and improve our services</li>
            <li>Send important notifications and updates</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">3. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your personal data from unauthorized access, use, or disclosure.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Sharing of Information</h2>
          <p>
            We do not sell or rent your personal information. We may share
            information with trusted third parties to provide services, comply
            with legal obligations, or protect our rights.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            You can contact us anytime to update your information or ask questions
            regarding this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated effective date.
          </p>

          <p className="mt-6">
            By using our platform, you agree to this Privacy Policy and consent to
            the collection and use of your information as described.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
