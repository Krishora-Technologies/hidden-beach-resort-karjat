'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const wrapperRef = useRef(null);
  const card4Ref = useRef(null);
  const card3Ref = useRef(null);
  const card2Ref = useRef(null);
  const card1Ref = useRef(null);
  const cardLastRef = useRef(null);
  const marqueeRef = useRef(null);
  const [btnHover, setBtnHover] = useState(false);

  // 1. Continuous Marquee Ticker
  useEffect(() => {
    let marqueePos = 0;
    let animId;
    const el = marqueeRef.current;
    if (!el) return;

    function tick() {
      marqueePos -= 0.85;
      const child = el.firstElementChild;
      const w = child ? child.offsetWidth : 450;
      if (Math.abs(marqueePos) >= w) marqueePos = 0;
      el.style.transform = `translate3d(${marqueePos.toFixed(1)}px, 0, 0)`;
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  // 2. 500vh Card Scrub Interaction
  useEffect(() => {
    function handleScroll() {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const totalDist = wrapper.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalDist));

      // Card 04 peels away: progress 0.00 -> 0.25
      if (card4Ref.current) {
        const p4 = Math.max(0, Math.min(1, progress / 0.25));
        const yVal = -p4 * 340;
        const scaleVal = 1 + p4 * 0.15;
        const rotVal = -2 + p4 * 8;
        const opVal = Math.max(0, 1 - p4 * 1.5);
        card4Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card4Ref.current.style.opacity = opVal.toFixed(2);
      }

      // Card 03 peels away: progress 0.22 -> 0.50
      if (card3Ref.current) {
        const p3 = Math.max(0, Math.min(1, (progress - 0.22) / 0.25));
        const yVal = -p3 * 340;
        const scaleVal = 1 + p3 * 0.15;
        const rotVal = -4 - p3 * 8;
        const opVal = Math.max(0, 1 - p3 * 1.5);
        card3Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card3Ref.current.style.opacity = opVal.toFixed(2);
      }

      // Card 02 peels away: progress 0.47 -> 0.75
      if (card2Ref.current) {
        const p2 = Math.max(0, Math.min(1, (progress - 0.47) / 0.25));
        const yVal = -p2 * 340;
        const scaleVal = 1 + p2 * 0.15;
        const rotVal = 4 + p2 * 8;
        const opVal = Math.max(0, 1 - p2 * 1.5);
        card2Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card2Ref.current.style.opacity = opVal.toFixed(2);
      }

      // Card 01 peels away: progress 0.72 -> 1.00
      if (card1Ref.current) {
        const p1 = Math.max(0, Math.min(1, (progress - 0.72) / 0.25));
        const yVal = -p1 * 340;
        const scaleVal = 1 + p1 * 0.15;
        const rotVal = p1 * 6;
        const opVal = Math.max(0, 1 - p1 * 1.5);
        card1Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card1Ref.current.style.opacity = opVal.toFixed(2);
      }

      // Card Last zooms subtly
      if (cardLastRef.current) {
        const pLast = Math.max(0, Math.min(1, (progress - 0.7) / 0.3));
        const scaleLast = 1 + pLast * 0.06;
        cardLastRef.current.style.transform = `scale(${scaleLast.toFixed(3)})`;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section">
      <div ref={wrapperRef} className="hero-section-wrapper" style={{ height: '500vh' }}>
        <div className="hero-section" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          {/* Infinite Marquee Loop */}
          <div ref={marqueeRef} className="hero-text-loop-holder" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="hero-text">
                Legion Design Creative Agency
              </div>
            ))}
          </div>

          <div className="hero-content">
            {/* Pinned 3D Stacked Cards Deck */}
            <div className="hero-images-holder" style={{ perspective: '1500px' }}>
              {/* Bottom Card */}
              <div ref={cardLastRef} className="hero-images-container-last">
                <img
                  src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b08f2ad5eb7b55226ed_Blurred%20Motion%20at%20Modern%20Bus%20Stop.jpg"
                  loading="eager"
                  sizes="(max-width: 4800px) 100vw, 4800px"
                  srcSet="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b08f2ad5eb7b55226ed_Blurred%20Motion%20at%20Modern%20Bus%20Stop-p-500.jpg 500w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b08f2ad5eb7b55226ed_Blurred%20Motion%20at%20Modern%20Bus%20Stop-p-800.jpg 800w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b08f2ad5eb7b55226ed_Blurred%20Motion%20at%20Modern%20Bus%20Stop-p-1080.jpg 1080w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b08f2ad5eb7b55226ed_Blurred%20Motion%20at%20Modern%20Bus%20Stop-p-1600.jpg 1600w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b08f2ad5eb7b55226ed_Blurred%20Motion%20at%20Modern%20Bus%20Stop-p-2000.jpg 2000w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b08f2ad5eb7b55226ed_Blurred%20Motion%20at%20Modern%20Bus%20Stop-p-2600.jpg 2600w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b08f2ad5eb7b55226ed_Blurred%20Motion%20at%20Modern%20Bus%20Stop-p-3200.jpg 3200w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b08f2ad5eb7b55226ed_Blurred%20Motion%20at%20Modern%20Bus%20Stop.jpg 4800w"
                  alt="Modern Bus Stop"
                  className="hero-image"
                />
              </div>

              {/* Card 01 */}
              <div ref={card1Ref} className="hero-images-container _01">
                <img
                  src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b087597ae9ef0e7ddad_Serene%20Urban%20Setting%20with%20Elderly%20Man%20(1).avif"
                  loading="eager"
                  sizes="(max-width: 4800px) 100vw, 4800px"
                  srcSet="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b087597ae9ef0e7ddad_Serene%20Urban%20Setting%20with%20Elderly%20Man%20(1)-p-500.avif 500w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b087597ae9ef0e7ddad_Serene%20Urban%20Setting%20with%20Elderly%20Man%20(1)-p-800.avif 800w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b087597ae9ef0e7ddad_Serene%20Urban%20Setting%20with%20Elderly%20Man%20(1)-p-1080.avif 1080w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b087597ae9ef0e7ddad_Serene%20Urban%20Setting%20with%20Elderly%20Man%20(1)-p-1600.avif 1600w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b087597ae9ef0e7ddad_Serene%20Urban%20Setting%20with%20Elderly%20Man%20(1)-p-2000.avif 2000w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b087597ae9ef0e7ddad_Serene%20Urban%20Setting%20with%20Elderly%20Man%20(1)-p-2600.avif 2600w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b087597ae9ef0e7ddad_Serene%20Urban%20Setting%20with%20Elderly%20Man%20(1).avif 4800w"
                  alt="Elderly Man"
                  className="hero-image"
                />
              </div>

              {/* Card 02 */}
              <div ref={card2Ref} className="hero-images-container _02">
                <img
                  src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b081bdd0ec1cde572de_Solitary%20Journey%20Scene.avif"
                  loading="eager"
                  sizes="(max-width: 4800px) 100vw, 4800px"
                  srcSet="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b081bdd0ec1cde572de_Solitary%20Journey%20Scene-p-500.avif 500w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b081bdd0ec1cde572de_Solitary%20Journey%20Scene-p-800.avif 800w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b081bdd0ec1cde572de_Solitary%20Journey%20Scene-p-1080.avif 1080w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b081bdd0ec1cde572de_Solitary%20Journey%20Scene-p-1600.avif 1600w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b081bdd0ec1cde572de_Solitary%20Journey%20Scene-p-2000.avif 2000w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b081bdd0ec1cde572de_Solitary%20Journey%20Scene.avif 4800w"
                  alt="Solitary Journey"
                  className="hero-image"
                />
              </div>

              {/* Card 03 */}
              <div ref={card3Ref} className="hero-images-container _03">
                <img
                  src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07f6d1b42571e8a6a6_Moody%20Stairwell%20Portrait.avif"
                  loading="eager"
                  sizes="(max-width: 4800px) 100vw, 4800px"
                  srcSet="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07f6d1b42571e8a6a6_Moody%20Stairwell%20Portrait-p-500.avif 500w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07f6d1b42571e8a6a6_Moody%20Stairwell%20Portrait-p-800.avif 800w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07f6d1b42571e8a6a6_Moody%20Stairwell%20Portrait-p-1080.avif 1080w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07f6d1b42571e8a6a6_Moody%20Stairwell%20Portrait-p-1600.avif 1600w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07f6d1b42571e8a6a6_Moody%20Stairwell%20Portrait-p-2000.avif 2000w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07f6d1b42571e8a6a6_Moody%20Stairwell%20Portrait.avif 4800w"
                  alt="Moody Stairwell"
                  className="hero-image"
                />
              </div>

              {/* Card 04 */}
              <div ref={card4Ref} className="hero-images-container _04">
                <img
                  src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07afd35109d0cc6568_Twilight%20Serenity%20at%20a%20Local%20Eatery.avif"
                  loading="eager"
                  sizes="(max-width: 4800px) 100vw, 4800px"
                  srcSet="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07afd35109d0cc6568_Twilight%20Serenity%20at%20a%20Local%20Eatery-p-500.avif 500w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07afd35109d0cc6568_Twilight%20Serenity%20at%20a%20Local%20Eatery-p-800.avif 800w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07afd35109d0cc6568_Twilight%20Serenity%20at%20a%20Local%20Eatery-p-1080.avif 1080w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07afd35109d0cc6568_Twilight%20Serenity%20at%20a%20Local%20Eatery-p-1600.avif 1600w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07afd35109d0cc6568_Twilight%20Serenity%20at%20a%20Local%20Eatery-p-2000.avif 2000w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15b07afd35109d0cc6568_Twilight%20Serenity%20at%20a%20Local%20Eatery.avif 4800w"
                  alt="Twilight Serenity"
                  className="hero-image"
                />
              </div>
            </div>

            {/* Subtitle & Interactive Button */}
            <div className="hero-paragraph-holder">
              <p className="title-pargraph">Legion Design Creative Agency</p>
              <Link
                href="#contact"
                className="button w-inline-block"
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
                style={{ overflow: 'hidden', position: 'relative' }}
              >
                <div
                  className="red-circle"
                  style={{
                    transform: btnHover ? 'scale(40)' : 'scale(1)',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
                <div
                  className="button-text"
                  style={{
                    transform: btnHover ? 'translate3d(-10px, 0, 0)' : 'translate3d(0, 0, 0)',
                    color: btnHover ? '#000000' : '#ffffff',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease',
                  }}
                >
                  Learn More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

