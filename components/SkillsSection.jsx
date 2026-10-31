'use client';

import { useEffect, useRef } from 'react';

const skills = [
  'Webflow Developer',
  'Web Designer',
  'Content Writter',
  'Video Creator',
  'Visual Editor',
  'Photoshoping',
  'Animator',
  'Designer',
  'Motion Designer',
  'Photo Editor',
  'Web Designer',
  'UI/UX Designer',
  'Movie Maker',
  'Webflow Developer',
  'Web Designer',
  'Content Writter',
  'Video Creator',
  'Visual Editor',
  'Photoshoping',
];

export default function SkillsSection() {
  const scrollHolderRef = useRef(null);

  useEffect(() => {
    let pos = 0;
    let animId;
    const el = scrollHolderRef.current;
    if (!el) return;

    function tick() {
      pos -= 0.7;
      const child = el.firstElementChild;
      const w = child ? child.offsetWidth * 5 : 600;
      if (Math.abs(pos) >= w) pos = 0;
      el.style.transform = `translate3d(${pos.toFixed(1)}px, 0, 0)`;
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="section">
      <div className="section-spacing no-margin-bot">
        <div className="line" />
        <div className="container">
          <div className="skills-holder" style={{ overflow: 'hidden' }}>
            <div id="w-node-_5e2b29f7-9294-ecc8-1791-8cf29f210c12-650a2375" className="skills-container">
              <div className="h6-style">Skills </div>
              <div className="red-line" />
            </div>

            <div
              ref={scrollHolderRef}
              className="skills-scroll-holder"
              style={{ display: 'flex', whiteSpace: 'nowrap' }}
            >
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-holder">
                  <div className="skill">{skill}</div>
                </div>
              ))}
              {skills.map((skill, idx) => (
                <div key={`dup-${idx}`} className="skill-holder">
                  <div className="skill">{skill}</div>
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

