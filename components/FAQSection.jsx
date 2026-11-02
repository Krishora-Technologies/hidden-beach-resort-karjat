'use client';

import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'How do we reach Hidden Beach Resort from Mumbai or Pune?',
    a: 'The resort is situated in Karjat, Maharashtra. Driving from Navi Mumbai takes around 1 hour 45 minutes; from Western/South Mumbai it takes approximately 2 hours via the Mumbai-Pune Expressway (exiting at Khalapur or Chowk). From Pune, it takes about 2 hours via the expressway. The road is scenic, paved, and fully accessible for all vehicles.',
  },
  {
    q: 'Which villas have private plunge pools?',
    a: 'Our Royal Plunge Pool Suites and Riverfront Canopy Villas feature their own private, temperature-controlled plunge pools right outside your bedroom door. All guests also have full access to the resort’s infinity pool that directly overlooks the calm river.',
  },
  {
    q: 'Is the resort pet-friendly?',
    a: 'Yes, 100%! We welcome dogs, cats, and pets of all sizes. The resort features sprawling grassy lawns, secure perimeter fencing, and riverside walking paths where your furry companions can run and play freely. Pet meals can also be prepared upon request.',
  },
  {
    q: 'What meals and cuisine are served at the resort?',
    a: 'Our stay packages include all three meals plus evening tea and snacks. We prepare authentic Maharashtrian dishes, fresh river catch, delicious North Indian curries, and Continental favorites using fresh organic vegetables sourced from nearby farms. Live barbeque and riverside candlelit setups can be arranged upon request.',
  },
  {
    q: 'What activities are available during our stay?',
    a: 'Guests can enjoy river kayaking, morning birdwatching trails, swimming in the infinity pool, outdoor badminton and volleyball, evening acoustic bonfires, and open-air stargazing cinema sessions.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);
  const titleRef = useRef(null);

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

  function toggleFAQ(idx) {
    setOpenIdx(openIdx === idx ? null : idx);
  }

  const headingText = 'Frequently Asked Questions';
  const words = headingText.split(/\s+/);

  return (
    <div id="faq" className="section">
      <div className="section-spacing">
        <div className="container no-paddings">
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
                id="w-node-d476ee15-75eb-ce5d-ccc5-e3d709c18635-e157b279"
                className="gird-paragraph-holder"
              >
                <div className="h6-style">(FAQ)</div>
              </div>
            </div>

            <div className="questions-holder">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`questions-container ${isOpen ? 'is-open' : ''}`}
                    onClick={() => toggleFAQ(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="question">
                      <div className="question-text">{faq.q}</div>
                      <span
                        className="question-icon"
                        style={{
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                          fontSize: '22px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        +
                      </span>
                    </div>

                    <div
                      className="answer-holder"
                      style={{
                        maxHeight: isOpen ? '300px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition:
                          'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, margin-top 0.3s ease',
                      }}
                    >
                      <p className="answer-text">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
