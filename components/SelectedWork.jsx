'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 'filmmaker-project-5',
    title: 'The Old Man',
    category: '( Color-Grading )',
    image:
      'https://cdn.prod.website-files.com/68d144a90d497ed4650a23aa/68d2ece48311a6b2b76069d5_Solitary%20Journey%20Scene.jpg',
  },
  {
    id: 'filmmaker-project-4',
    title: 'Music Video',
    category: '( Animation )',
    image:
      'https://cdn.prod.website-files.com/68d144a90d497ed4650a23aa/68d2ecf185481440543b0beb_Twilight%20Serenity%20at%20a%20Local%20Eatery.jpg',
  },
  {
    id: 'filmmaker-project-3',
    title: 'Documentary on Nature',
    category: '( Production )',
    image:
      'https://cdn.prod.website-files.com/68d144a90d497ed4650a23aa/68d2ecfd214471ad09baeb20_Moody%20Stairwell%20Portrait.jpg',
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
          const rotX = Math.max(-20, Math.min(20, -progress * 20));
          const translateY = Math.max(-25, Math.min(25, progress * 35));
          el.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(1)}deg) translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="work" className="section">
      <div className="section-spacing no-margin-bot">
        <div className="container">
          <div className="section-inside">
            {/* Header */}
            <div className="center-text-holder">
              <div className="heading-holder">
                <div className="fade-in-on-scroll">
                  <h1 className="title">Selected Work</h1>
                </div>
                <div className="fade-in-on-scroll">
                  <div className="h6-style">2025 - BEST</div>
                </div>
              </div>
            </div>

            {/* Projects List */}
            <div className="home-page-projects no-space w-dyn-list">
              <div role="list" className="home-page-projects-list w-dyn-items">
                {projects.map((proj, idx) => {
                  const isHovered = hoveredIdx === idx;
                  return (
                    <div
                      key={proj.id}
                      ref={(el) => (itemsRef.current[idx] = el)}
                      role="listitem"
                      className="home-page-item w-dyn-item"
                      style={{ transition: 'transform 0.15s ease-out' }}
                    >
                      <Link
                        href="#work"
                        className="project-item w-inline-block"
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                      >
                        <div
                          className="project-thumbnail-holder"
                          style={{
                            transform: isHovered ? 'scale(0.98)' : 'scale(1)',
                            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          <img
                            src={proj.image}
                            loading="lazy"
                            alt={proj.title}
                            className="project-thumbnail"
                          />
                          <img
                            src={proj.image}
                            loading="lazy"
                            alt={proj.title}
                            className="project-thumbnail blur"
                            style={{
                              opacity: isHovered ? 0.85 : 0,
                              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                              transition:
                                'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                          />
                        </div>

                        <div
                          className="project-details"
                          style={{
                            width: isHovered ? '90%' : '70%',
                            transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          <div className="project-details-holder">
                            <div className="red-circle" />
                            <div className="project-title-small">{proj.title}</div>
                          </div>
                          <div className="project-category-holder">
                            <div className="project-category">{proj.category}</div>
                          </div>
                        </div>
                      </Link>
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

