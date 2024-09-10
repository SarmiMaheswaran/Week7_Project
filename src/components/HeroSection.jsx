import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Your Next Adventure</h1>
        <p>Explore stunning destinations and embark on unforgettable journeys.</p>
        <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
          Explore Destinations
        </button>
      </div>
    </section>
  );
}

export default HeroSection;