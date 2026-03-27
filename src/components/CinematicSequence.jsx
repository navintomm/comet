import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CinematicSequence.css';

gsap.registerPlugin(ScrollTrigger);

const CinematicSequence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  const frameCount = 240;
  const currentFrame = (index) =>
    `/images/herosection/frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const images = [];
    const animationState = { frame: 0 };
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          canvas.width = images[0].width || 1920;
          canvas.height = images[0].height || 1080;
          render();
        }
        if (loadedCount === frameCount) setImagesLoaded(true);
      };
    }

    function render() {
      if (images[animationState.frame]) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[animationState.frame], 0, 0, canvas.width, canvas.height);
      }
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=800%',
        scrub: 1,
        pin: true,
      },
    });

    // Canvas frame scrub
    tl.to(animationState, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: render,
      duration: 10,
    }, 0);

    // ── TEXT 1: COMET X LOWS ── center, slide up + skew in
    tl.fromTo(text1Ref.current,
      { opacity: 0, y: 60, skewX: 4 },
      { opacity: 1, y: 0, skewX: 0, duration: 1, ease: 'power3.out' }, 0);
    tl.to(text1Ref.current,
      { opacity: 0, y: -40, skewX: -3, duration: 0.7, ease: 'power2.in' }, 1.5);

    // ── TEXT 2: Flawless Form ── slide from LEFT with skew
    tl.fromTo(text2Ref.current,
      { opacity: 0, x: -100, skewX: 6 },
      { opacity: 1, x: 0, skewX: 0, duration: 1.1, ease: 'power3.out' }, 2.5);
    tl.fromTo('#cine-v-label-2',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 2.8);
    tl.fromTo('#cine-sub-2',
      { opacity: 0, filter: 'blur(6px)', y: 8 },
      { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power2.out' }, 3.3);
    tl.to(text2Ref.current,
      { opacity: 0, x: 60, skewX: -4, duration: 0.6, ease: 'power2.in' }, 4.0);

    // ── TEXT 3: Zero Gravity ── slide from RIGHT with skew
    tl.fromTo(text3Ref.current,
      { opacity: 0, x: 100, skewX: -6 },
      { opacity: 1, x: 0, skewX: 0, duration: 1.1, ease: 'power3.out' }, 4.5);
    tl.fromTo('#cine-v-label-3',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 4.8);
    tl.fromTo('#cine-sub-3',
      { opacity: 0, filter: 'blur(6px)', y: 8 },
      { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power2.out' }, 5.3);
    tl.to(text3Ref.current,
      { opacity: 0, x: -60, skewX: 4, duration: 0.6, ease: 'power2.in' }, 6.0);

    // ── TEXT 4: Roomy Toe Box ── slide from LEFT with skew
    tl.fromTo(text4Ref.current,
      { opacity: 0, x: -100, skewX: 6 },
      { opacity: 1, x: 0, skewX: 0, duration: 1.1, ease: 'power3.out' }, 6.5);
    tl.fromTo('#cine-v-label-4',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 6.8);
    tl.fromTo('#cine-sub-4',
      { opacity: 0, filter: 'blur(6px)', y: 8 },
      { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power2.out' }, 7.3);
    tl.to(text4Ref.current,
      { opacity: 0, x: 60, skewX: -4, duration: 0.6, ease: 'power2.in' }, 8.0);

    // ── TEXT 5: Final CTA ── slow fade + rise
    tl.fromTo(text5Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, 8.5);

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <div className="sequence-container" ref={containerRef}>
      {!imagesLoaded && (
        <div className="loading-simple">Loading Product Experience...</div>
      )}

      <canvas ref={canvasRef} className="sequence-canvas" />


      {/* ── 2: Flawless Form (LEFT panel) ── */}
      <div className="cine-layer cine-left" ref={text2Ref}>
        {/* Vertical label rotated 90° — reads bottom-to-top */}
        <span className="cine-vertical" id="cine-v-label-2">NEVER CREASING</span>
        <div className="cine-main-block">
          <h2 className="cine-title">Flawless<br />Form</h2>
          <p className="cine-sub" id="cine-sub-2">
            Engineered synthetic leather that resists creasing, keeping your sneakers pristine day after day.
          </p>
        </div>
      </div>

      {/* ── 3: Zero Gravity (RIGHT panel) ── */}
      <div className="cine-layer cine-right" ref={text3Ref}>
        <div className="cine-main-block cine-main-block--right">
          <h2 className="cine-title">Zero Gravity<br />Comfort</h2>
          <p className="cine-sub" id="cine-sub-3">
            A signature three-layered airy sole system delivering unbelievable shock absorption.
          </p>
        </div>
        {/* Vertical label on the right side */}
        <span className="cine-vertical" id="cine-v-label-3">SPACEWALK™ SOLE</span>
      </div>

      {/* ── 4: Roomy Toe Box (LEFT panel) ── */}
      <div className="cine-layer cine-left" ref={text4Ref}>
        <span className="cine-vertical" id="cine-v-label-4">TAILORED FIT</span>
        <div className="cine-main-block">
          <h2 className="cine-title">Roomy<br />Toe Box</h2>
          <p className="cine-sub" id="cine-sub-4">
            Custom-crafted for wider profiles, ensuring continuous breathability and zero pinching.
          </p>
        </div>
      </div>

      {/* ── 5: Final CTA — centered with explicit style override ── */}
      <div
        className="cine-layer"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0.5rem',
        }}
        ref={text5Ref}
      >
        <span className="cine-subtitle" style={{ justifyContent: 'center' }}>COMET X LOWS</span>
        <h1 className="cine-headline" style={{ textAlign: 'center', fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
          Defy<br />Gravity
        </h1>
        <a
          href="https://www.wearcomet.com/collections/x-lows-men"
          target="_blank"
          rel="noopener noreferrer"
          className="apple-cta"
        >
          Experience Comet ↗
        </a>
      </div>
    </div>
  );
};

export default CinematicSequence;
