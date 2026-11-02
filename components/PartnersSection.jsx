'use client';

import { useEffect, useRef } from 'react';

const resortHighlights = [
  'Private Riverfront Access',
  'Heated Plunge Pools',
  '100% Pet Friendly',
  '2 Hrs From Mumbai & Pune',
  'Farm-To-Table Dining',
  'Riverside Bonfires',
  'Forest Canopy Trails',
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

  // Continuous Partner Highlight Ticker
  useEffect(() => {
    let pos = 0;
    let lastTime = performance.now();
    let animId;
    const holders = marqueeRef.current ? marqueeRef.current.querySelectorAll('.partner-container') : [];
    if (!holders.length) return;

    let totalW = holders[0].scrollWidth || 600;

    function tick(now) {
      const currentTime = now || performance.now();
      const dt = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;

      pos -= 45 * dt;
      if (totalW > 0 && Math.abs(pos) >= totalW) {
        pos += totalW;
      }

      holders.forEach((h) => {
        h.style.transform = `translate3d(${pos.toFixed(2)}px, 0, 0)`;
      });

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const headingText =
    'Curated with pure attention to nature, secluded river luxury, and barefoot relaxation.';
  const words = headingText.split(/\s+/);

  return (
    <div className="section overflow-hidden">
      <div className="section-spacing">
        <div className="container">
          <div className="section-inside">
            <div className="grid-title">
              <div className="grid-title-holder">
                <h3 ref={titleRef} className="animated-title">
                  {words.map((w, idx) => (
                    <span
                      key={idx}
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
              <div
                id="w-node-_40c7b465-0b64-c4e8-61ee-98350ac02c59-650a2375"
                className="gird-paragraph-holder"
              >
                <div className="fade-in-on-scroll">
                  <div className="h6-style">(Why guests love us)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={marqueeRef} className="partners-holder">
          <div className="partner-container">
            {resortHighlights.map((item, idx) => (
              <div key={idx} className="partner">
                <span>
                  <span className="partner-sparkle">✦</span> {item}
                </span>
              </div>
            ))}
          </div>
          <div className="partner-container" aria-hidden="true">
            {resortHighlights.map((item, idx) => (
              <div key={`dup-${idx}`} className="partner">
                <span>
                  <span className="partner-sparkle">✦</span> {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="line no-margin-bottom" />
      </div>
    </div>
  );
}
