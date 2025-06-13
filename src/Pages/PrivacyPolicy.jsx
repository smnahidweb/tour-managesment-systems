import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div>
            <div>
  <section className="max-w-5xl mx-auto px-4 py-16 text-[var(--TEXT-COLOR)]">
    <h2 className="text-4xl font-extrabold mb-6 text-center text-[var(--HEADING-TITLE-TEXT)]">
      Privacy Policy
    </h2>
    <p className="text-lg mb-10 text-center text-[var(--TEXT-COLOR)]">
      TourNest values your privacy. This policy outlines how we collect, use, and protect your personal information.
    </p>

    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">1. Information We Collect</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Personal details like name, email, phone number during registration or booking.</li>
          <li>Payment information during checkout (processed securely via third-party providers).</li>
          <li>Usage data such as IP address, browser type, and pages visited (for analytics).</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">2. How We Use Your Information</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>To process bookings and communicate important tour updates.</li>
          <li>To enhance your user experience on TourNest.</li>
          <li>To send promotional updates (only if you opt-in).</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">3. Data Sharing & Third Parties</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>We do not sell your personal data.</li>
          <li>We may share necessary information with trusted tour guides or payment gateways.</li>
          <li>Legal obligations may require us to disclose certain data to authorities.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">4. Data Security</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>We use industry-standard encryption and authentication tools to protect your data.</li>
          <li>Access to your personal data is limited to authorized personnel only.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">5. Your Rights</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>You can request to view, update, or delete your personal information.</li>
          <li>You can unsubscribe from promotional emails at any time.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">6. Cookies</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>We use cookies to remember your preferences and improve performance.</li>
          <li>You can disable cookies through your browser settings if you prefer.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">7. Policy Updates</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>This policy may be updated occasionally. Changes will be posted here.</li>
          <li>Continued use of TourNest signifies your acceptance of the current policy.</li>
        </ul>
      </div>
    </div>

    <div className="mt-10 text-center text-sm text-[var(--TEXT-COLOR)]">
      <p>
        For questions about this policy, please email us at{' '}
        <span className="text-green-600 font-medium">privacy@tournest.com</span>
      </p>
    </div>
  </section>
</div>

        </div>
    );
};

export default PrivacyPolicy;