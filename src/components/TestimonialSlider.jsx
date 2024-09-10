import React, { useState } from 'react';
import '../styles/TestimonialSlider.css';

const testimonials = [
  { name: "John Doe", text: "This was the best vacation of my life! Paris is magical." },
  { name: "Jane Smith", text: "Santorini is heaven on Earth. The beaches and views are incredible!" },
  { name: "Samuel Green", text: "Exploring the Swiss Alps was a dream come true. Highly recommend this travel site!" },
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonial-slider">
      <h2>What Our Travelers Say</h2>
      <div className="testimonial-container">
        <button className="prev" onClick={prevTestimonial}>❮</button>
        <div className="testimonial">
          <p>{testimonials[currentIndex].text}</p>
          <h4>- {testimonials[currentIndex].name}</h4>
        </div>
        <button className="next" onClick={nextTestimonial}>❯</button>
      </div>
    </section>
  );
}

export default TestimonialSlider;
