'use client';

import { useEffect, useRef } from 'react';

const amenities = [
  'Private Plunge Pools',
  'Riverside Kayaking',
  'Stargazing Deck',
  'Open-Air Movie Nights',
  'Barbeque & Bonfires',
  'Farm-Fresh Gourmet Dining',
  'Pet-Friendly Haven',
  'Balinese Garden Pathways',
  'Forest Nature Trails',
  'High-Speed Wi-Fi Workation',
  'Outdoor Jacuzzis',
  '24/7 Resort Concierge',
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const redLineRef = useRef(null);
  const skillHoldersRef = useRef([]);

  useEffect(() => {
    let ticking = false;

    function updateActiveAmenity() {
      const sec = sectionRef.current;
      const redLine = redLineRef.current;
      if (!sec) return;

      const secRect = sec.getBoundingClientRect();
      if (secRect.bottom < 0 || secRect.top > window.innerHeight) {
        skillHoldersRef.current.forEach((el) => {
          if (!el) return;
          const skill = el.querySelector('.skill');
          if (skill) skill.classList.remove('red-active');
        });
        ticking = false;
        return;
      }

      let lineCenterY = window.innerHeight * 0.45;
      if (redLine) {
        const lineRect = redLine.getBoundingClientRect();
        if (lineRect.top > -50 && lineRect.bottom < window.innerHeight + 50) {
          lineCenterY = lineRect.top + lineRect.height / 2;
        }
      }

      let closestSkill = null;
      let minDistance = Infinity;

      skillHoldersRef.current.forEach((holder) => {
        if (!holder) return;
        const skill = holder.querySelector('.skill');
        if (!skill) return;

        const rect = holder.getBoundingClientRect();
        const holderCenterY = rect.top + rect.height / 2;
        const dist = Math.abs(holderCenterY - lineCenterY);

        if (dist < minDistance) {
          minDistance = dist;
          closestSkill = skill;
        }
      });

      const isMobile = window.innerWidth <= 767;
      const maxDistance = isMobile ? 85 : 110;

      skillHoldersRef.current.forEach((holder) => {
        if (!holder) return;
        const skill = holder.querySelector('.skill');
        if (!skill) return;

        if (skill === closestSkill && minDistance <= maxDistance) {
          skill.classList.add('red-active');
        } else {
          skill.classList.remove('red-active');
        }
      });

      ticking = false;
    }

    function onScrollOrResize() {
      if (!ticking) {
        requestAnimationFrame(updateActiveAmenity);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    updateActiveAmenity();

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <div id="amenities" ref={sectionRef} className="section">
      <div className="section-spacing no-margin-bot">
        <div className="line" />
        <div className="container">
          <div className="skills-holder">
            <div
              id="w-node-_5e2b29f7-9294-ecc8-1791-8cf29f210c12-650a2375"
              className="skills-container"
            >
              <div className="h6-style">Amenities</div>
              <div ref={redLineRef} className="red-line" />
            </div>

            <div className="skills-scroll-holder">
              {amenities.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (skillHoldersRef.current[idx] = el)}
                  className="skill-holder"
                >
                  <div className="skill">{item}</div>
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
