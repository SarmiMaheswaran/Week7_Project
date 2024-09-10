import React, { useEffect, useState } from 'react';
import '../styles/AnimatedStats.css';

function AnimatedStats() {
  const [stats, setStats] = useState({ destinations: 0, travelers: 0, tours: 0 });

  useEffect(() => {
    const updateStats = () => {
      if (stats.destinations < 120) setStats(prev => ({ ...prev, destinations: prev.destinations + 1 }));
      if (stats.travelers < 5000) setStats(prev => ({ ...prev, travelers: prev.travelers + 100 }));
      if (stats.tours < 150) setStats(prev => ({ ...prev, tours: prev.tours + 1 }));
    };
    const interval = setInterval(updateStats, 50);
    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section className="animated-stats">
      <div className="stat">
        <h2>{stats.destinations}</h2>
        <p>Destinations</p>
      </div>
      <div className="stat">
        <h2>{stats.travelers}</h2>
        <p>Happy Travelers</p>
      </div>
      <div className="stat">
        <h2>{stats.tours}</h2>
        <p>Unique Tours</p>
      </div>
    </section>
  );
}

export default AnimatedStats;
