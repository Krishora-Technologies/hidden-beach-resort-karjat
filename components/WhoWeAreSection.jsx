'use client';

import { useState, useEffect, useRef } from 'react';

const keysData = [
  { id: 1, src: '/images/key-01.jpg', cls: '_1', x: -4, y: -6, rot: -19 },
  { id: 2, src: '/images/key-02.jpg', cls: '_2', x: 0, y: -10, rot: 12 },
  { id: 3, src: '/images/key-03.jpg', cls: '_3', x: 6, y: -8, rot: 18 },
  { id: 4, src: '/images/key-04.jpg', cls: '_4', x: 3, y: -7, rot: -15 },
  { id: 5, src: '/images/key-05.jpg', cls: '_5', x: -3, y: -9, rot: 14 },
  { id: 6, src: '/images/key-06.jpg', cls: '_6', x: 6, y: -6, rot: 22 },
];

export default function WhoWeAreSection() {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const keysRef = useRef([]);
  const [btnHover, setBtnHover] = useState(false);

  // SplitText Reading Scroll & Keys Parallax
  useEffect(() => {
    function handleScroll() {
      // 1. Reading scroll
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.split-word');
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

      // 2. Keys scatter parallax
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.top <= vh && rect.bottom >= 0) {
          const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
          const factor = (progress - 0.5) * 2; // -1 to 1

          keysData.forEach((k, idx) => {
            const el = keysRef.current[idx];
            if (el) {
              const xVal = (k.x * factor).toFixed(1);
              const yVal = (k.y * factor).toFixed(1);
              const rotVal = (k.rot * factor).toFixed(1);
              el.style.transform = `translate3d(${xVal}px, ${yVal}px, 0) rotate(${rotVal}deg)`;
            }
          });
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const storyHeading =
    'Tucked away in the Western Ghats, where quiet river waters embrace secluded luxury.';
  const words = storyHeading.split(/\s+/);

  return (
    <div id="story" className="section overflow-hidden">
      <div ref={wrapperRef} className="keys-wrapper">
        <div className="section-spacing">
          <div className="container">
            <div className="section-inside">
              <div className="center-text-holder">
                <div
                  id="w-node-_703161eb-d895-85d7-8730-7e097ce0b852-650a2375"
                  className="gird-paragraph-holder"
                >
                  <div className="fade-in-on-scroll">
                    <div className="h6-style">(The Sanctuary)</div>
                  </div>
                </div>

                <div className="heading-holder">
                  <h1 ref={titleRef} className="animated-title">
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
                  </h1>
                </div>

                {/* 6 Aesthetic detail cutouts & photography */}
                <div className="keys-holder">
                  {keysData.map((k, idx) => (
                    <div
                      key={k.id}
                      ref={(el) => (keysRef.current[idx] = el)}
                      className={`keys-container ${k.cls}`}
                      style={{
                        transition: 'transform 0.15s ease-out',
                      }}
                    >
                      <img
                        src={k.src}
                        loading="lazy"
                        alt={`Resort detail ${k.id}`}
                        className="keys"
                      />
                    </div>
                  ))}
                </div>

                <div className="paragraph-and-button-holder">
                  <div className="fade-in-on-scroll">
                    <p>
                      Hidden Beach Resort by Greenleaf Aqua was designed as an antidote to city chaos.
                      Just two hours from Mumbai and Pune, discover a private haven where mornings
                      begin with cool river mist, afternoons drift beside your plunge pool, and
                      nights glow under clear Karjat skies.
                    </p>
                  </div>

                  <div className="fade-in-on-scroll">
                    <a
                      href="#pricing"
                      className="button w-inline-block"
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
                        Reserve Your Stay
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="line no-margin-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
}
