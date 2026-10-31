'use client';

import { useEffect, useRef } from 'react';

const logos = [
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b1878d0af8f0609033_Logo%2002.svg',
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b1af280dd7bb8b0883_Logo%2002-1.svg',
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b17d1d1b4ad15349c4_Logo%206.svg',
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b1f1fc97b5be607f6b_Logo%2010.svg',
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b120c3edb107541f2e_Logo%2004.svg',
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b17d1d1b4ad15349c4_Logo%206.svg',
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b1f1fc97b5be607f6b_Logo%2010.svg',
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b1878d0af8f0609033_Logo%2002.svg',
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b1af280dd7bb8b0883_Logo%2002-1.svg',
  'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2d7b17d1d1b4ad15349c4_Logo%206.svg',
];

export default function PartnersSection() {
  const titleRef = useRef(null);
  const marqueeRef = useRef(null);

  // SplitText Reading Scroll
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    function handleScroll() {
      const words = el.querySelectorAll('.split-word');
      const vh = window.innerHeight;
      const trigger = vh * 0.78;
      words.forEach((word) => {
        const top = word.getBoundingClientRect().top;
        if (top < trigger) {
          const factor = Math.min(1, Math.max(0.18, (trigger - top) / 160));
          word.style.opacity = factor.toFixed(2);
        } else {
          word.style.opacity = '0.18';
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous Partner Logo Ticker
  useEffect(() => {
    let pos = 0;
    let animId;
    const el = marqueeRef.current;
    if (!el) return;

    function tick() {
      pos -= 0.65;
      const child = el.firstElementChild;
      const w = child ? child.offsetWidth : 1200;
      if (Math.abs(pos) >= w) pos = 0;
      el.style.transform = `translate3d(${pos.toFixed(1)}px, 0, 0)`;
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const headingText = 'We team up with visionary brands to create work that leaves a lasting mark.';
  const words = headingText.split(' ');

  return (
    <div className="section overflow-hidden">
      <div className="section-spacing">
        <div className="container">
          <div className="section-inside">
            <div className="grid-title">
              <div className="grid-title-holder">
                <h3 ref={titleRef} className="animated-title">
                  {words.map((w, i) => (
                    <span
                      key={i}
                      className="split-word"
                      style={{
                        display: 'inline-block',
                        opacity: 0.18,
                        transition: 'opacity 0.25s ease',
                        marginRight: '0.25em',
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </h3>
              </div>
              <div id="w-node-_40c7b465-0b64-c4e8-61ee-98350ac02c59-650a2375" className="gird-paragraph-holder">
                <div className="fade-in-on-scroll">
                  <div className="h6-style">(they love us btw)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Logo Ticker */}
        <div className="partners-holder" style={{ overflow: 'hidden' }}>
          <div ref={marqueeRef} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            <div className="partner-container" style={{ display: 'flex', flexShrink: 0 }}>
              {logos.map((src, i) => (
                <div key={i} className="partner">
                  <img src={src} loading="lazy" alt="Partner Logo" className="partner-logo" />
                </div>
              ))}
            </div>
            <div className="partner-container" style={{ display: 'flex', flexShrink: 0 }}>
              {logos.map((src, i) => (
                <div key={`dup-${i}`} className="partner">
                  <img src={src} loading="lazy" alt="Partner Logo" className="partner-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="line no-margin-bottom" />
      </div>
    </div>
  );
}

