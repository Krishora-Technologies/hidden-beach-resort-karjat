'use client';

import { useEffect, useRef } from 'react';

const reviews = [
  {
    stars: '★★★★★',
    score: '5.0',
    tag: 'Canopy Pool Villa',
    quote:
      '“The private plunge pool villa right on the river edge was sheer magic. The morning mist and birdsong felt like a remote Bali retreat, just two hours from Mumbai. Food and service were phenomenal.”',
    image: '/images/resort-sunset.webp',
    name: 'Aanya & Rohan Sharma',
    role: 'Mumbai · Weekend Getaway',
  },
  {
    stars: '★★★★★',
    score: '5.0',
    tag: 'Family Suite',
    quote:
      '“Greenleaf Aqua has outdone themselves. Pristine river, delectable local Maharashtrian & Continental food, and unmatched peace. Our kids loved the plunge pool and didn’t want to leave!”',
    image: '/images/villa-canopy.jpg',
    name: 'Vikram & Sunita Mehta',
    role: 'Pune · Family Retreat',
  },
  {
    stars: '★★★★★',
    score: '5.0',
    tag: 'Riverfront Cottage',
    quote:
      '“Celebrated our anniversary at the Riverfront Cottage. The sunset over the water is breathtaking, and the private bonfire with stargazing made it completely unforgettable.”',
    image: '/images/villa-plunge.jpg',
    name: 'Pooja & Kabir Singhania',
    role: 'Thane · Anniversary Stay',
  },
  {
    stars: '★★★★★',
    score: '5.0',
    tag: '100% Pet Friendly',
    quote:
      '“Best pet-friendly luxury resort near Mumbai. Our golden retriever loved running along the riverside lawns, and the staff treated us like royalty. We’re definitely coming back!”',
    image: '/images/villa-bali.jpg',
    name: 'Dr. Neha Kulkarni',
    role: 'Navi Mumbai · Pet Vacation',
  },
  {
    stars: '★★★★★',
    score: '5.0',
    tag: 'Executive Workation',
    quote:
      '“The workation setup is seamless—blazing fast Wi-Fi, peaceful desk views over the river, and taking dips in the plunge pool between meetings. Productive yet deeply relaxing.”',
    image: '/images/villa-interior.jpg',
    name: 'Aditya Sen',
    role: 'Tech Founder · 5-Day Workation',
  },
  {
    stars: '★★★★★',
    score: '5.0',
    tag: 'Riverfront Sanctuary',
    quote:
      '“Immaculate hygiene, stunning architecture, and warm hospitality. The sunset views from the cottage deck and fresh farm breakfasts are truly therapy for the soul.”',
    image: '/images/card-01.jpg',
    name: 'Siddharth & Priya Rao',
    role: 'Mumbai · Annual Rejuvenation',
  },
];

export default function TestimonialsSection() {
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

  const headingText = 'Guest Stories.';
  const words = headingText.split(/\s+/);

  return (
    <div id="reviews" className="section overflow-hidden">
      <div className="section-spacing no-margin-bot">
        <div className="container">
          <div className="section-inside">
            <div className="grid-title">
              <div className="grid-title-holder">
                <h2 ref={titleRef} className="animated-title">
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
                </h2>
              </div>
              <div
                id="w-node-c2590e11-9952-23c7-28ee-23c417db07ed-650a2375"
                className="gird-paragraph-holder"
              >
                <div className="h6-style">(Reviews & Ratings)</div>
              </div>
            </div>

            <div className="testimonail-grid">
              {reviews.map((r, idx) => (
                <div key={idx} className="testimonail-item">
                  <div className="review-card-header">
                    <div className="review-stars">
                      <span>{r.stars}</span>
                      <span className="review-rating-score">{r.score}</span>
                    </div>
                    <span className="review-villa-tag">{r.tag}</span>
                  </div>

                  <div className="testimonail">{r.quote}</div>

                  <div className="profile-holder">
                    <img
                      loading="lazy"
                      src={r.image}
                      alt={r.name}
                      className="profile-image"
                    />
                    <div className="profile-content">
                      <div className="profile-title">{r.name}</div>
                      <div className="profile-job">{r.role}</div>
                    </div>
                  </div>
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
