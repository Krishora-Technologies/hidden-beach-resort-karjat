'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How does it all work?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    q: 'Can you help me process claims?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    q: 'How will you keep my data safe?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
  {
    q: 'What data sources do you use?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0); // First open by default

  function toggleFAQ(idx) {
    setOpenIdx(openIdx === idx ? null : idx);
  }

  return (
    <div id="faq" className="section">
      <div className="section-spacing">
        <div className="container no-paddings">
          <div className="section-inside">
            <div className="grid-title">
              <div className="grid-title-holder">
                <h3 className="animated-title">Frequently asked questions</h3>
              </div>
              <div id="w-node-d476ee15-75eb-ce5d-ccc5-e3d709c18635-e157b279" className="gird-paragraph-holder">
                <div className="h6-style">(FAQ)</div>
              </div>
            </div>

            <div className="questions-holder">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="questions-container"
                    onClick={() => toggleFAQ(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="question">
                      <div className="question-text">{faq.q}</div>
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d144a90d497ed4650a24ab_Plus%20Icon.svg"
                        alt="Toggle Icon"
                        className="question-icon"
                        style={{
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      />
                    </div>
                    <div
                      className="answer-holder"
                      style={{
                        maxHeight: isOpen ? '280px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition:
                          'max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease',
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

