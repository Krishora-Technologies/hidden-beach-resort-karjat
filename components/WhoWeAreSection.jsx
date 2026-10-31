'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const keysData = [
  { id: 1, src: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f721deea35389ccefbbf_Keys%201.avif', cls: '_1', x: -4, y: -6, rot: -19 },
  { id: 2, src: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f7218a42e83168255817_Keys%206.avif', cls: '_2', x: 0, y: -10, rot: 12 },
  { id: 3, src: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f7212eb0ac6549c67e31_Keys%205.avif', cls: '_3', x: 6, y: -8, rot: 18 },
  { id: 4, src: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f721e58c58a4e79802ce_Keys%204.avif', cls: '_4', x: 3, y: -7, rot: -15 },
  { id: 5, src: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f721c59aee920800b5df_Keys%202.avif', cls: '_5', x: -3, y: -9, rot: 14 },
  { id: 6, src: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d2f7219fd506c24419ae39_Keys%203.avif', cls: '_6', x: 6, y: -6, rot: 22 },
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

  const headingText = 'As a hands-on agency, we design digital experiences tailored for ambitious brands.';
  const words = headingText.split(' ');

  return (
    <div className="section overflow-hidden">
      <div ref={wrapperRef} className="keys-wrapper">
        <div className="section-spacing">
          <div className="container">
            <div className="section-inside">
              <div className="center-text-holder">
                <div id="w-node-_703161eb-d895-85d7-8730-7e097ce0b852-650a2375" className="gird-paragraph-holder">
                  <div className="fade-in-on-scroll">
                    <div className="h6-style">(Who are we)</div>
                  </div>
                </div>

                <div className="heading-holder">
                  <h1 ref={titleRef} className="animated-title">
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
                  </h1>
                </div>

                {/* 3D Floating Keys */}
                <div className="keys-holder">
                  {keysData.map((k, idx) => (
                    <div
                      key={k.id}
                      ref={(el) => (keysRef.current[idx] = el)}
                      className={`keys-container ${k.cls}`}
                      style={{ transition: 'transform 0.15s ease-out' }}
                    >
                      <img src={k.src} loading="lazy" alt={`Key ${k.id}`} className="keys" />
                    </div>
                  ))}
                </div>

                <div className="paragraph-and-button-holder">
                  <div className="fade-in-on-scroll">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                      tristique.
                    </p>
                  </div>
                  <div className="fade-in-on-scroll">
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
            <div className="line no-margin-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
}

