import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import CinematicSequence from './components/CinematicSequence';
import InteractiveHero from './components/InteractiveHero';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Fade up animations for all editorial rows
    const rows = document.querySelectorAll('.editorial-row');
    rows.forEach((row) => {
      gsap.fromTo(row, 
        { opacity: 0, y: 80 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%', // Trigger when the row is 85% down the viewport
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Fade up for the header
    gsap.fromTo('.section-header',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.section-header', start: 'top 85%' } }
    );
     // Fade up for the final section
    gsap.fromTo('.final-section',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: '.final-section', start: 'top 80%' } }
    );
  }, []);

  return (
    <div className="app">
      <InteractiveHero />

      <CinematicSequence />

      <section className="features-section">
        <div className="section-header">
          <span className="accent-subtitle">BEYOND EXPECTATIONS</span>
          <h2 className="display-title">Designed for India.</h2>
        </div>

        <div className="editorial-features">
          <div className="editorial-row">
            <div className="editorial-content">
              <h3>Never Creasing Finish</h3>
              <p>Constructed with hyper-durable synthetic leather that bends smoothly and bounces back, keeping the silhouette flawless from day one.</p>
            </div>
            <div className="editorial-gap"></div>
          </div>
          
          <div className="editorial-row reverse">
            <div className="editorial-content">
              <h3>SpaceWalk™ Foam</h3>
              <p>Step onto clouds. The three-layered EVA system is tuned precisely for shock absorption, delivering a sensation of weightlessness.</p>
            </div>
            <div className="editorial-gap"></div>
          </div>

          <div className="editorial-row">
            <div className="editorial-content">
              <h3>Tailored to You</h3>
              <p>Specifically engineered with a Roomy Toe Box to perfectly accommodate broader foot profiles, ensuring zero pinching and all-day wearability.</p>
            </div>
            <div className="editorial-gap"></div>
          </div>
        </div>
      </section>

      <section className="final-section">
        {/* Full-bleed lifestyle image */}
        <img
          src={`${import.meta.env.BASE_URL}images/comet_lifestyle.png`}
          alt="Comet X Lows lifestyle"
          className="final-bg-img"
        />
        {/* Dark gradient overlay */}
        <div className="final-overlay" />
        {/* Glassmorphism text card */}
        <div className="final-content">
          <span className="final-label">COMET X LOWS — 2025</span>
          <h1 className="display-giant">Join the<br/>Comet Fleet.</h1>
          <p className="lead-text">Signature comfort, uncompromising style.</p>
          <a
            href="https://www.wearcomet.com/collections/x-lows-men"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-cta"
            style={{ textDecoration: 'none' }}
          >
            Secure Your Pair
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
