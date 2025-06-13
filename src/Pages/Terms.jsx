import React from 'react';

const Terms = () => {
    return (
        <div>
  <section className="max-w-5xl mx-auto px-4 py-16 text-[var(--TEXT-COLOR)]">
    <h2 className="text-4xl font-extrabold mb-6 text-center text-[var(--HEADING-TITLE-TEXT)]">
      Terms & Conditions
    </h2>
    <p className="text-lg mb-10 text-center text-[var(--TEXT-COLOR)]">
      Please read the following terms carefully before using TourNest services.
    </p>

    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">1. Booking & Payments</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>All bookings must be made through the TourNest platform.</li>
          <li>Full payment or partial deposit is required to confirm bookings.</li>
          <li>Confirmed prices will not change after booking.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">2. Cancellations & Refunds</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Cancellations must be made 72+ hours in advance for a full refund.</li>
          <li>No refund is available for cancellations within 72 hours of the tour.</li>
          <li>Tours canceled by us due to emergencies will be refunded or rescheduled.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">3. User Responsibilities</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Ensure your information is accurate while booking or registering.</li>
          <li>Respect all tour rules and local guidelines.</li>
          <li>TourNest is not responsible for lost belongings or injuries.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">4. Tour Modifications</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Itineraries may change due to weather or safety concerns.</li>
          <li>Users will be notified of any significant changes.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">5. Reviews & Community Conduct</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Users may leave honest reviews, but offensive content will be removed.</li>
          <li>Reviews may be featured on our site or social media.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">6. Data Privacy</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Your data is only used for bookings and communication.</li>
          <li>We do not share personal data without consent.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">7. Limitation of Liability</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>TourNest connects users with tour guides and providers.</li>
          <li>We are not liable for third-party transportation, hotel, or delays.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">8. Updates to Terms</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>We may update these terms anytime with or without prior notice.</li>
          <li>Continued use means acceptance of updated terms.</li>
        </ul>
      </div>
    </div>

    <div className="mt-10 text-center text-sm text-[var(--TEXT-COLOR)]">
      <p>
        For any questions, contact us at{' '}
        <span className="text-green-600 font-medium">support@tournest.com</span>
      </p>
    </div>
  </section>
</div>

    );
};

export default Terms;