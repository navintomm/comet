import React from 'react';
import './InteractiveHero.css';

/* Comet wordmark — faithful to brand: bold, lowercase 'e' */
const CometLogo = ({ color = '#fff', height = 26 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 148 36"
    fill="none"
    aria-label="Comet"
    role="img"
    style={{ display: 'block' }}
  >
    <text
      x="0"
      y="30"
      fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      fontSize="34"
      fontWeight="900"
      letterSpacing="-1.5"
      fill={color}
    >
      COmeT
    </text>
  </svg>
);

const InteractiveHero = () => {
  return (
    <section className="interactive-hero">

      {/* ── Top Nav: logo + shop link ── */}
      <nav className="hero-nav">
        <CometLogo color="#fff" height={26} />
        <a
          href="https://www.wearcomet.com/collections/x-lows-men"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-nav-cta"
        >
          Shop Now
        </a>
      </nav>

      {/* Ambient Particles */}
      <div className="particles-layer">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* ── Full-viewport model image ── */}
      <div className="hero-image-layer">
        <img
          src={`${import.meta.env.BASE_URL}images/hero_model_sneakers.png`}
          alt="Comet X Lifestyle"
          className="hero-model-img"
        />
      </div>

      {/* ── Bottom gradient fade for text readability ── */}
      <div className="hero-bottom-fade" />

      {/* ── Text: anchored BOTTOM-LEFT, fashion editorial style ── */}
      <div className="hero-text-layer">
        <span className="comet-label">X LOWS — 2025</span>
        <h1 className="hero-headline">Defy<br/>Gravity</h1>
        <p className="hero-subtext">Engineered for the bold. Designed for the streets of India.</p>
      </div>

      {/* ── Vertical scroll hint (right side) ── */}
      <div className="scroll-hint">
        <span>EXPLORE</span>
        <div className="hint-line"></div>
      </div>
    </section>
  );
};

export default InteractiveHero;
