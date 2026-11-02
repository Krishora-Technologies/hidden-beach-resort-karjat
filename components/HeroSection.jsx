'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const heroWrapperRef = useRef(null);
  const heroEditorialRef = useRef(null);
  const scrollCueRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const cardLastRef = useRef(null);
  const [btnHover, setBtnHover] = useState(false);

  useEffect(() => {
    const wrapper = heroWrapperRef.current;
    if (!wrapper) return;

    let ticking = false;
    let wrapperTop = 0;
    let totalDist = 1;
    let isMobile = false;
    let currentCueLabel = '';

    function measure() {
      if (!heroWrapperRef.current) return;
      const rect = heroWrapperRef.current.getBoundingClientRect();
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      wrapperTop = rect.top + scrollY;
      totalDist = Math.max(1, heroWrapperRef.current.offsetHeight - window.innerHeight);
      isMobile = window.innerWidth <= 767;
    }

    measure();
    window.addEventListener('resize', measure, { passive: true });

    function updateCards() {
      ticking = false;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const progress = Math.max(0, Math.min(1, (scrollY - wrapperTop) / totalDist));

      // 1. Editorial header smoothly fades and lifts
      if (heroEditorialRef.current) {
        if (progress > 0.2) {
          if (heroEditorialRef.current.style.visibility !== 'hidden') {
            heroEditorialRef.current.style.visibility = 'hidden';
            heroEditorialRef.current.style.pointerEvents = 'none';
          }
        } else {
          if (heroEditorialRef.current.style.visibility !== 'visible') {
            heroEditorialRef.current.style.visibility = 'visible';
          }
          const pHeader = progress / 0.14;
          heroEditorialRef.current.style.opacity = (1 - pHeader).toFixed(3);
          heroEditorialRef.current.style.transform = `translate3d(0, ${(-pHeader * 28).toFixed(1)}px, 0)`;
          heroEditorialRef.current.style.pointerEvents = pHeader >= 0.7 ? 'none' : 'auto';
        }
      }

      // 2. Active villa indicator in bottom dock
      if (scrollCueRef.current) {
        let label = 'Villa 01 / 05 · Riverfront Canopy';
        if (progress >= 0.90) label = 'Villa 05 / 05 · Twilight Sunset Haven';
        else if (progress >= 0.70) label = 'Villa 04 / 05 · Master King Suite';
        else if (progress >= 0.46) label = 'Villa 03 / 05 · Bali Garden Path';
        else if (progress >= 0.22) label = 'Villa 02 / 05 · Royal Plunge Pool';

        if (currentCueLabel !== label) {
          currentCueLabel = label;
          scrollCueRef.current.textContent = label;
        }
      }

      const travelY = isMobile ? 220 : 380;

      // 3. Card 01 peels away: progress 0.00 -> 0.24
      if (card1Ref.current) {
        const p1 = Math.max(0, Math.min(1, progress / 0.24));
        if (p1 >= 1) {
          if (card1Ref.current.style.visibility !== 'hidden') {
            card1Ref.current.style.visibility = 'hidden';
            card1Ref.current.style.pointerEvents = 'none';
          }
        } else {
          if (card1Ref.current.style.visibility !== 'visible') {
            card1Ref.current.style.visibility = 'visible';
          }
          const yVal = -p1 * travelY;
          const scaleVal = 1 + p1 * 0.10;
          const rotVal = p1 * (isMobile ? 3 : 6);
          const opVal = Math.max(0, 1 - p1 * 1.5);
          card1Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
          card1Ref.current.style.opacity = opVal.toFixed(2);
          card1Ref.current.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
        }
      }

      // 4. Card 02 peels away: progress 0.22 -> 0.48
      if (card2Ref.current) {
        const p2 = Math.max(0, Math.min(1, (progress - 0.22) / 0.26));
        if (p2 <= 0) {
          card2Ref.current.style.visibility = 'visible';
          card2Ref.current.style.transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
          card2Ref.current.style.opacity = '1';
          card2Ref.current.style.pointerEvents = 'auto';
        } else if (p2 >= 1) {
          if (card2Ref.current.style.visibility !== 'hidden') {
            card2Ref.current.style.visibility = 'hidden';
            card2Ref.current.style.pointerEvents = 'none';
          }
        } else {
          if (card2Ref.current.style.visibility !== 'visible') {
            card2Ref.current.style.visibility = 'visible';
          }
          const yVal = -p2 * travelY;
          const scaleVal = 1 + p2 * 0.10;
          const rotVal = -p2 * (isMobile ? 2 : 5);
          const opVal = Math.max(0, 1 - p2 * 1.5);
          card2Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
          card2Ref.current.style.opacity = opVal.toFixed(2);
          card2Ref.current.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
        }
      }

      // 5. Card 03 peels away: progress 0.46 -> 0.72
      if (card3Ref.current) {
        const p3 = Math.max(0, Math.min(1, (progress - 0.46) / 0.26));
        if (p3 <= 0) {
          card3Ref.current.style.visibility = 'visible';
          card3Ref.current.style.transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
          card3Ref.current.style.opacity = '1';
          card3Ref.current.style.pointerEvents = 'auto';
        } else if (p3 >= 1) {
          if (card3Ref.current.style.visibility !== 'hidden') {
            card3Ref.current.style.visibility = 'hidden';
            card3Ref.current.style.pointerEvents = 'none';
          }
        } else {
          if (card3Ref.current.style.visibility !== 'visible') {
            card3Ref.current.style.visibility = 'visible';
          }
          const yVal = -p3 * travelY;
          const scaleVal = 1 + p3 * 0.10;
          const rotVal = (isMobile ? 1 : 2) + p3 * (isMobile ? 3 : 5);
          const opVal = Math.max(0, 1 - p3 * 1.5);
          card3Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
          card3Ref.current.style.opacity = opVal.toFixed(2);
          card3Ref.current.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
        }
      }

      // 6. Card 04 peels away: progress 0.70 -> 0.94
      if (card4Ref.current) {
        const p4 = Math.max(0, Math.min(1, (progress - 0.70) / 0.24));
        if (p4 <= 0) {
          card4Ref.current.style.visibility = 'visible';
          card4Ref.current.style.transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
          card4Ref.current.style.opacity = '1';
          card4Ref.current.style.pointerEvents = 'auto';
        } else if (p4 >= 1) {
          if (card4Ref.current.style.visibility !== 'hidden') {
            card4Ref.current.style.visibility = 'hidden';
            card4Ref.current.style.pointerEvents = 'none';
          }
        } else {
          if (card4Ref.current.style.visibility !== 'visible') {
            card4Ref.current.style.visibility = 'visible';
          }
          const yVal = -p4 * travelY;
          const scaleVal = 1 + p4 * 0.10;
          const rotVal = -(isMobile ? 1 : 2) + p4 * (isMobile ? 4 : 8);
          const opVal = Math.max(0, 1 - p4 * 1.5);
          card4Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
          card4Ref.current.style.opacity = opVal.toFixed(2);
          card4Ref.current.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
        }
      }

      // 7. Card Last scales into prominence
      if (cardLastRef.current) {
        const pLast = Math.max(0, Math.min(1, (progress - 0.68) / 0.32));
        const scaleLast = 1 + pLast * 0.05;
        cardLastRef.current.style.transform = `scale(${scaleLast.toFixed(3)}) translateZ(0)`;
        cardLastRef.current.style.opacity = '1';
      }
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateCards);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateCards();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div className="section hero-showcase-section">
      <div ref={heroWrapperRef} className="hero-section-wrapper">
        <div className="hero-section">
          {/* Ambient Ticker Marquee behind the cards */}
          <div className="hero-text-loop-holder" aria-hidden="true">
            <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
            <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
            <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
            <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
            <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
            <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
          </div>

          {/* EDITORIAL HERO HEADER */}
          <div ref={heroEditorialRef} className="hero-editorial-top">
            <div className="hero-editorial-badge">
              <span className="hero-badge-sparkle">✦</span>
              <span>PRIVATE RIVERFRONT SANCTUARY · KARJAT</span>
            </div>

            <h1 className="hero-editorial-title">
              Where Quiet River Waters<br />
              <span className="hero-title-italic">Embrace Secluded Luxury.</span>
            </h1>
          </div>

          <div className="hero-content">
            {/* 5 Layered Cards Deck: Order peels from Card 01 to Card Last */}
            <div className="hero-images-holder">
              {/* Card Last (z-index 1): Sunset cottage with pool */}
              <div ref={cardLastRef} className="hero-images-container-last">
                <img
                  src="/images/resort-sunset.webp"
                  loading="eager"
                  alt="Hidden Beach Resort Sunset Cottage & Pool"
                  className="hero-image"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div className="hero-card-glass-badge">
                  <span className="hero-card-badge-num">05</span>
                  <span className="hero-card-badge-dot">·</span>
                  <span className="hero-card-badge-title">Twilight Sunset Pool Villa</span>
                </div>
              </div>

              {/* Card 01 (z-index 5): Canopy Pool Villa */}
              <div ref={card1Ref} className="hero-images-container _01">
                <img
                  src="/images/card-01.jpg"
                  loading="eager"
                  alt="The Riverfront Canopy Pool Villa"
                  className="hero-image"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div className="hero-card-glass-badge">
                  <span className="hero-card-badge-num">01</span>
                  <span className="hero-card-badge-dot">·</span>
                  <span className="hero-card-badge-title">Riverfront Canopy Pool Villa</span>
                </div>
              </div>

              {/* Card 02 (z-index 4): Plunge pool suite */}
              <div ref={card2Ref} className="hero-images-container _02">
                <img
                  src="/images/card-02.jpg"
                  loading="eager"
                  alt="Royal Plunge Pool Suite"
                  className="hero-image"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div className="hero-card-glass-badge">
                  <span className="hero-card-badge-num">02</span>
                  <span className="hero-card-badge-dot">·</span>
                  <span className="hero-card-badge-title">Royal Plunge Pool Suite</span>
                </div>
              </div>

              {/* Card 03 (z-index 3): Bali walkway & tropical garden */}
              <div ref={card3Ref} className="hero-images-container _03">
                <img
                  src="/images/card-03.jpg"
                  loading="eager"
                  alt="Tropical Bali Teakwood Pathway"
                  className="hero-image"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div className="hero-card-glass-badge">
                  <span className="hero-card-badge-num">03</span>
                  <span className="hero-card-badge-dot">·</span>
                  <span className="hero-card-badge-title">Bali Teakwood Pathway</span>
                </div>
              </div>

              {/* Card 04 (z-index 2): Luxury bedroom suite */}
              <div ref={card4Ref} className="hero-images-container _04">
                <img
                  src="/images/card-04.jpg"
                  loading="eager"
                  alt="Master King Bedroom Suite"
                  className="hero-image"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div className="hero-card-glass-badge">
                  <span className="hero-card-badge-num">04</span>
                  <span className="hero-card-badge-dot">·</span>
                  <span className="hero-card-badge-title">Master King River Suite</span>
                </div>
              </div>
            </div>

            {/* BOTTOM HERO DOCK */}
            <div className="hero-bottom-dock">
              <div className="hero-scroll-cue">
                <div className="scroll-mouse-icon">
                  <div className="scroll-mouse-wheel" />
                </div>
                <span ref={scrollCueRef} className="hero-scroll-cue-text">
                  Scroll to explore villas 01 → 05
                </span>
              </div>

              <a
                href="#villas"
                className="button w-inline-block hero-primary-btn"
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <div
                  className="red-circle"
                  style={{
                    transform: btnHover ? 'scale(40)' : 'scale(1)',
                    transition: btnHover
                      ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                      : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
                <div
                  className="button-text"
                  style={{
                    transform: btnHover ? 'translate3d(-10px, 0, 0)' : 'translate3d(0, 0, 0)',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  Explore Villas
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
