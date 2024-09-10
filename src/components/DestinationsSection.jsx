

import React, { useState } from 'react';
import '../styles/DestinationsSection.css';
import ParisImage from '../assets/images/paris.jpeg';
import NewYorkImage from '../assets/images/newyork.jpeg';
import TokyoImage from '../assets/images/tokyo.jpeg';

import MaldivesImage from '../assets/images/maldives.jpeg';
import BaliImage from '../assets/images/bali.jpeg';
import SantoriniImage from '../assets/images/santorini.jpeg';
import AmazonImage from '../assets/images/amazon.jpeg';
import SwissAlpsImage from '../assets/images/swissalps.jpeg';
import YosemiteImage from '../assets/images/yosemite.jpeg';

const destinationsData = [
  { name: 'Paris', image: ParisImage, description: 'The city of lights and romance.', category: 'City' },
  { name: 'New York', image: NewYorkImage, description: 'The city that never sleeps.', category: 'City' },
  { name: 'Tokyo', image: TokyoImage, description: 'A bustling metropolis with rich culture.', category: 'City' },
  { name: 'Maldives', image: MaldivesImage, description: 'A tropical paradise with stunning beaches.', category: 'Beach' },
  { name: 'Bali', image: BaliImage, description: 'An Indonesian island known for its forested volcanic mountains.', category: 'Beach' },
  { name: 'Santorini', image: SantoriniImage, description: 'A picturesque island with stunning sunsets.', category: 'Beach' },
  { name: 'Amazon Rainforest', image: AmazonImage, description: 'A vast jungle full of biodiversity.', category: 'Nature' },
  { name: 'Swiss Alps', image: SwissAlpsImage, description: 'Magnificent mountain ranges perfect for skiing and hiking.', category: 'Nature' },
  { name: 'Yosemite', image: YosemiteImage, description: 'A famous national park with towering waterfalls and giant sequoias.', category: 'Nature' }
];

function DestinationsSection() {
  const [category, setCategory] = useState('All');

  const filteredDestinations = category === 'All'
    ? destinationsData
    : destinationsData.filter(destination => destination.category === category);

  return (
    <section className="destinations-section">
      <h2>Popular Destinations</h2>
      
      <div className="filter-buttons">
        <button onClick={() => setCategory('All')}>All</button>
        <button onClick={() => setCategory('City')}>City</button>
        <button onClick={() => setCategory('Beach')}>Beach</button>
        <button onClick={() => setCategory('Nature')}>Nature</button>
      </div>

      <div className="destination-list">
        {filteredDestinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default DestinationsSection;


            
