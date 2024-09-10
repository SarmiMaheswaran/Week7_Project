import React from 'react';
import '../styles/CTASection.css';

function CTASection() {
  return (
    <section className="cta-section">
      <h2>Ready for Your Next Adventure?</h2>
      <p>Book your dream vacation today and start exploring the world!</p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Book Now</button>
    </section>
  );
}

export default CTASection;
