'use client';

import { useState, useEffect, useRef } from 'react';

const villas = [
  {
    id: 'canopy-villa',
    title: 'Riverfront Canopy Villa',
    category: '( Private Pool & Canopy Deck )',
    video: '/videos/beach-canopy-pool.mp4',
    poster: '/images/villa-canopy.jpg',
  },
  {
    id: 'plunge-suite',
    title: 'Royal Plunge Pool Suite',
    category: '( Heated Jacuzzi & Solarium )',
    video: '/videos/plunge-pool-suite.mp4',
    poster: '/images/villa-plunge.jpg',
  },
  {
    id: 'sunset-cottage',
    title: 'Sunset Poolside Cottage',
    category: '( Twilight Views & Private Terrace )',
    image: '/images/resort-sunset.webp',
    poster: '/images/resort-sunset.webp',
  },
  {
    id: 'bali-villa',
    title: 'Bali Walkway Villa',
    category: '( Teakwood Veranda & Garden )',
    video: '/videos/bali-walkway.mp4',
    poster: '/images/villa-bali.jpg',
  },
];

export default function SelectedWork() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const itemsRef = useRef([]);

  // 3D Tilt on scroll
  useEffect(() => {
    function handleScroll() {
      const vh = window.innerHeight;
      itemsRef.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = (center - vh * 0.5) / (vh * 0.8);
        if (progress >= -1.2 && progress <= 1.2) {
          const rotX = Math.max(-25, Math.min(25, -progress * 25));
          const translateY = Math.max(-30, Math.min(30, progress * 40));
          el.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(1)}deg) translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="villas" className="section">
      <div className="section-spacing no-margin-bot">
        <div className="container">
          <div className="section-inside">
            <div className="center-text-holder">
              <div className="heading-holder">
                <div className="fade-in-on-scroll">
                  <h1 className="title">Villas & Suites</h1>
                </div>
                <div className="fade-in-on-scroll">
                  <div className="h6-style">2026 LUXURY COLLECTION · KARJAT</div>
                </div>
              </div>
            </div>

            <div className="home-page-projects no-space w-dyn-list">
              <div role="list" className="home-page-projects-list w-dyn-items">
                {villas.map((villa, idx) => {
                  const isHovered = hoveredIdx === idx;
                  return (
                    <div
                      key={villa.id}
                      role="listitem"
                      className="home-page-item w-dyn-item"
                    >
                      <a
                        href="#pricing"
                        ref={(el) => (itemsRef.current[idx] = el)}
                        className="project-item w-inline-block"
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        style={{
                          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        <div
                          className="project-thumbnail-holder"
                          style={{
                            position: 'relative',
                            overflow: 'hidden',
                            transform: isHovered ? 'scale(0.98)' : 'scale(1)',
                            transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          {villa.video ? (
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              poster={villa.poster}
                              className="project-thumbnail"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            >
                              <source src={villa.video} type="video/mp4" />
                            </video>
                          ) : (
                            <img
                              src={villa.image}
                              loading="lazy"
                              alt={villa.title}
                              className="project-thumbnail"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          )}

                          {/* Hover Blur Thumbnail */}
                          <img
                            src={villa.poster}
                            loading="lazy"
                            alt=""
                            className="project-thumbnail blur"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              opacity: isHovered ? 0.85 : 0,
                              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                              transition:
                                'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                              filter: 'blur(20px)',
                            }}
                          />
                        </div>

                        <div
                          className="project-details"
                          style={{
                            width: isHovered ? '90%' : '70%',
                            transition: 'width 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          <div className="project-details-holder">
                            <div className="red-circle" />
                            <div className="project-title-small">{villa.title}</div>
                          </div>
                          <div className="project-category-holder">
                            <div className="project-category">{villa.category}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
