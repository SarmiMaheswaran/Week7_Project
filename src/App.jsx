import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TestimonialSlider from './components/TestimonialSlider';
import AnimatedStats from './components/AnimatedStats';
import CTASection from './components/CTASection';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <TestimonialSlider />
      <AnimatedStats />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
