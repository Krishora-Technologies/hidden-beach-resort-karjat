'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const heroWrapperRef = useRef(null);
  const heroEditorialRef = useRef(null);
  const scrollCueRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const cardLastRef = useRef(null);

  useEffect(() => {
    const wrapper = heroWrapperRef.current;
    if (!wrapper) return;

    function handleScroll() {
      const rect = wrapper.getBoundingClientRect();
      const totalDist = wrapper.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalDist));

      // 1. Editorial header smoothly fades and lifts
      if (heroEditorialRef.current) {
        const pHeader = Math.max(0, Math.min(1, progress / 0.14));
        heroEditorialRef.current.style.opacity = (1 - pHeader).toFixed(3);
        heroEditorialRef.current.style.transform = `translate3d(0, ${(-pHeader * 32).toFixed(1)}px, 0)`;
        heroEditorialRef.current.style.pointerEvents = pHeader >= 0.7 ? 'none' : 'auto';
      }

      // 2. Active villa indicator in bottom dock
      if (scrollCueRef.current) {
        if (progress < 0.22) {
          scrollCueRef.current.textContent = 'Villa 01 / 05 · Riverfront Canopy';
        } else if (progress < 0.46) {
          scrollCueRef.current.textContent = 'Villa 02 / 05 · Royal Plunge Pool';
        } else if (progress < 0.70) {
          scrollCueRef.current.textContent = 'Villa 03 / 05 · Bali Garden Path';
        } else if (progress < 0.90) {
          scrollCueRef.current.textContent = 'Villa 04 / 05 · Master King Suite';
        } else {
          scrollCueRef.current.textContent = 'Villa 05 / 05 · Twilight Sunset Haven';
        }
      }

      // 3. Card 01 peels away: progress 0.00 -> 0.24 (revealing Card 02)
      if (card1Ref.current) {
        const p1 = Math.max(0, Math.min(1, progress / 0.24));
        const yVal = -p1 * 380;
        const scaleVal = 1 + p1 * 0.12;
        const rotVal = p1 * 6;
        const opVal = Math.max(0, 1 - p1 * 1.5);
        card1Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card1Ref.current.style.opacity = opVal.toFixed(2);
        card1Ref.current.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
      }

      // 4. Card 02 peels away: progress 0.22 -> 0.48 (revealing Card 03)
      if (card2Ref.current) {
        const p2 = Math.max(0, Math.min(1, (progress - 0.22) / 0.26));
        const yVal = -p2 * 380;
        const scaleVal = 1 + p2 * 0.12;
        const rotVal = 4 + p2 * 8;
        const opVal = Math.max(0, 1 - p2 * 1.5);
        card2Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card2Ref.current.style.opacity = opVal.toFixed(2);
        card2Ref.current.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
      }

      // 5. Card 03 peels away: progress 0.46 -> 0.72 (revealing Card 04)
      if (card3Ref.current) {
        const p3 = Math.max(0, Math.min(1, (progress - 0.46) / 0.26));
        const yVal = -p3 * 380;
        const scaleVal = 1 + p3 * 0.12;
        const rotVal = -4 - p3 * 8;
        const opVal = Math.max(0, 1 - p3 * 1.5);
        card3Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card3Ref.current.style.opacity = opVal.toFixed(2);
        card3Ref.current.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
      }

      // 6. Card 04 peels away: progress 0.70 -> 0.94 (revealing Card Last)
      if (card4Ref.current) {
        const p4 = Math.max(0, Math.min(1, (progress - 0.70) / 0.24));
        const yVal = -p4 * 380;
        const scaleVal = 1 + p4 * 0.12;
        const rotVal = -2 + p4 * 8;
        const opVal = Math.max(0, 1 - p4 * 1.5);
        card4Ref.current.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card4Ref.current.style.opacity = opVal.toFixed(2);
        card4Ref.current.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
      }

      // 7. Card Last scales to anchor
      if (cardLastRef.current) {
        const pLast = Math.max(0, Math.min(1, (progress - 0.68) / 0.32));
        const scaleLast = 1 + pLast * 0.06;
        cardLastRef.current.style.transform = `scale(${scaleLast.toFixed(3)})`;
        cardLastRef.current.style.opacity = '1';
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* RESORT OVERVIEW & DETAILED SECTIONS */}
      <div id="resort-overview">
        {/* Navigation Bar */}
        <div className="fixed-nav">
          <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
            <div className="container navbar-container">
              <div className="navbar-holder">
                <div className="navbar-container">
                  <a href="/" aria-current="page" className="brand w-nav-brand w--current">
                    <div className="brand-text-holder">
                      <span className="brand-title">Hidden Beach Resort</span>
                      <span className="brand-subtitle">BY GREENLEAF AQUA · KARJAT</span>
                    </div>
                  </a>

                  <nav role="navigation" className="nav-menu w-nav-menu">
                    <div className="nav-menu-link-holder">
                      <div className="nav-menu-link-container">
                        <div className="nav-links">
                          <div className="nav-link-wrapper">
                            <a href="#villas" className="nav-link w-nav-link">Villas & Suites</a>
                            <div className="nav-line"></div>
                          </div>
                          <div className="nav-link-wrapper">
                            <a href="#amenities" className="nav-link w-nav-link">Amenities</a>
                            <div className="nav-line"></div>
                          </div>
                          <div className="nav-link-wrapper">
                            <a href="#story" className="nav-link w-nav-link">The Story</a>
                            <div className="nav-line"></div>
                          </div>
                          <div className="nav-link-wrapper">
                            <a href="#reviews" className="nav-link w-nav-link">Reviews</a>
                            <div className="nav-line"></div>
                          </div>
                          <div className="nav-link-wrapper">
                            <a href="#pricing" className="nav-link w-nav-link">Rates & Stay</a>
                            <div className="nav-line"></div>
                          </div>
                          <div className="nav-link-wrapper">
                            <a href="#faq" className="nav-link w-nav-link">FAQ</a>
                            <div className="nav-line"></div>
                          </div>
                        </div>

                        {/* Mobile Drawer Quick CTA */}
                        <div className="mobile-menu-cta-holder">
                          <a href="#pricing" className="mobile-menu-reserve-btn">
                            <span>Reserve Your Stay</span>
                            <div className="nav-cta-dot"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>

                  <div className="navbar-actions">
                    <a href="#pricing" className="nav-cta-button">
                      <span>Reserve Stay</span>
                      <div className="nav-cta-dot"></div>
                    </a>
                    <div role="button" tabIndex={0} aria-label="Toggle navigation menu" className="menu-button w-nav-button">
                      <div className="hamburger-box">
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* 500vh HERO CARD DECK SCROLL SECTION */}
        <div className="section hero-showcase-section">
          <div ref={heroWrapperRef} className="hero-section-wrapper">
            <div className="hero-section">
              {/* Ambient Ticker Marquee behind the cards */}
              <div className="hero-text-loop-holder" aria-hidden="true">
                <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
                <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
                <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
                <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
                <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
                <div className="hero-text">Hidden Beach Resort · Greenleaf Aqua Karjat ✦</div>
              </div>

              {/* CLEAN EDITORIAL HERO HEADER */}
              <div ref={heroEditorialRef} className="hero-editorial-top">
                <div className="hero-editorial-badge">
                  <span className="hero-badge-sparkle">✦</span>
                  <span>PRIVATE RIVERFRONT SANCTUARY · KARJAT</span>
                </div>

                <h1 className="hero-editorial-title">
                  Where Quiet River Waters<br />
                  <span className="hero-title-italic">Embrace Secluded Luxury.</span>
                </h1>
              </div>

              <div className="hero-content">
                {/* 5 Layered Cards Deck: Order peels from Card 01 to Card Last */}
                <div className="hero-images-holder">
                  {/* Card Last (z-index 1): The authentic sunset cottage with pool and warm lights */}
                  <div ref={cardLastRef} className="hero-images-container-last">
                    <img
                      src="/images/resort-sunset.webp"
                      loading="eager"
                      alt="Hidden Beach Resort Sunset Cottage & Pool"
                      className="hero-image"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <div className="hero-card-glass-badge">
                      <span className="hero-card-badge-num">05</span>
                      <span className="hero-card-badge-dot">·</span>
                      <span className="hero-card-badge-title">Twilight Sunset Pool Villa</span>
                    </div>
                  </div>

                  {/* Card 01 (z-index 5): Beach canopy & private pool */}
                  <div ref={card1Ref} className="hero-images-container _01">
                    <img
                      src="/images/card-01.jpg"
                      loading="eager"
                      alt="The Riverfront Canopy Pool Villa"
                      className="hero-image"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <div className="hero-card-glass-badge">
                      <span className="hero-card-badge-num">01</span>
                      <span className="hero-card-badge-dot">·</span>
                      <span className="hero-card-badge-title">Riverfront Canopy Pool Villa</span>
                    </div>
                  </div>

                  {/* Card 02 (z-index 4): Plunge pool suite */}
                  <div ref={card2Ref} className="hero-images-container _02">
                    <img
                      src="/images/card-02.jpg"
                      loading="eager"
                      alt="Royal Plunge Pool Suite"
                      className="hero-image"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <div className="hero-card-glass-badge">
                      <span className="hero-card-badge-num">02</span>
                      <span className="hero-card-badge-dot">·</span>
                      <span className="hero-card-badge-title">Royal Plunge Pool Suite</span>
                    </div>
                  </div>

                  {/* Card 03 (z-index 3): Bali walkway & tropical garden */}
                  <div ref={card3Ref} className="hero-images-container _03">
                    <img
                      src="/images/card-03.jpg"
                      loading="eager"
                      alt="Tropical Bali Teakwood Pathway"
                      className="hero-image"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <div className="hero-card-glass-badge">
                      <span className="hero-card-badge-num">03</span>
                      <span className="hero-card-badge-dot">·</span>
                      <span className="hero-card-badge-title">Bali Teakwood Pathway</span>
                    </div>
                  </div>

                  {/* Card 04 (z-index 2): Luxury bedroom suite */}
                  <div ref={card4Ref} className="hero-images-container _04">
                    <img
                      src="/images/card-04.jpg"
                      loading="eager"
                      alt="Master King Bedroom Suite"
                      className="hero-image"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <div className="hero-card-glass-badge">
                      <span className="hero-card-badge-num">04</span>
                      <span className="hero-card-badge-dot">·</span>
                      <span className="hero-card-badge-title">Master King River Suite</span>
                    </div>
                  </div>
                </div>

                {/* BOTTOM HERO DOCK */}
                <div className="hero-bottom-dock">
                  <div className="hero-scroll-cue">
                    <div className="scroll-mouse-icon">
                      <div className="scroll-mouse-wheel"></div>
                    </div>
                    <span ref={scrollCueRef} className="hero-scroll-cue-text">Scroll to explore villas 01 → 05</span>
                  </div>

                  <a href="#villas" className="button w-inline-block hero-primary-btn">
                    <div className="red-circle"></div>
                    <div className="button-text">Explore Villas</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS & AMENITIES MARQUEE */}
        <div className="section overflow-hidden">
          <div className="section-spacing">
            <div className="container">
              <div className="section-inside">
                <div className="grid-title">
                  <div className="grid-title-holder">
                    <h3 className="animated-title">
                      Curated with pure attention to nature, secluded river luxury, and barefoot relaxation.
                    </h3>
                  </div>
                  <div id="w-node-_40c7b465-0b64-c4e8-61ee-98350ac02c59-650a2375" className="gird-paragraph-holder">
                    <div className="fade-in-on-scroll">
                      <div className="h6-style">(Why guests love us)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="partners-holder">
              <div className="partner-container">
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Private Riverfront Access</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Heated Plunge Pools</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> 100% Pet Friendly</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> 2 Hrs From Mumbai & Pune</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Farm-To-Table Dining</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Riverside Bonfires</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Forest Canopy Trails</span>
                </div>
              </div>
              <div className="partner-container" aria-hidden="true">
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Private Riverfront Access</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Heated Plunge Pools</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> 100% Pet Friendly</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> 2 Hrs From Mumbai & Pune</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Farm-To-Table Dining</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Riverside Bonfires</span>
                </div>
                <div className="partner">
                  <span><span className="partner-sparkle">✦</span> Forest Canopy Trails</span>
                </div>
              </div>
            </div>

            <div className="line no-margin-bottom"></div>
          </div>
        </div>

        {/* SELECTED VILLAS & SUITES (Interactive Video & Visual Showcase) */}
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
                    {/* Villa 1: Riverfront Canopy Villa */}
                    <div role="listitem" className="home-page-item w-dyn-item">
                      <a href="#pricing" className="project-item w-inline-block">
                        <div className="project-thumbnail-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="/images/villa-canopy.jpg"
                            className="project-thumbnail"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          >
                            <source src="/videos/beach-canopy-pool.mp4" type="video/mp4" />
                          </video>
                          <img
                            src="/images/villa-canopy.jpg"
                            loading="lazy"
                            alt="The Riverfront Canopy Villa"
                            className="project-thumbnail blur"
                          />
                        </div>
                        <div className="project-details">
                          <div className="project-details-holder">
                            <div className="red-circle"></div>
                            <div className="project-title-small">Riverfront Canopy Villa</div>
                          </div>
                          <div className="project-category-holder">
                            <div className="project-category">( Private Pool & Canopy Deck )</div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Villa 2: Royal Plunge Pool Suite */}
                    <div role="listitem" className="home-page-item w-dyn-item">
                      <a href="#pricing" className="project-item w-inline-block">
                        <div className="project-thumbnail-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="/images/villa-plunge.jpg"
                            className="project-thumbnail"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          >
                            <source src="/videos/plunge-pool-suite.mp4" type="video/mp4" />
                          </video>
                          <img
                            src="/images/villa-plunge.jpg"
                            loading="lazy"
                            alt="Royal Plunge Pool Suite"
                            className="project-thumbnail blur"
                          />
                        </div>
                        <div className="project-details">
                          <div className="project-details-holder">
                            <div className="red-circle"></div>
                            <div className="project-title-small">Royal Plunge Pool Suite</div>
                          </div>
                          <div className="project-category-holder">
                            <div className="project-category">( Heated Jacuzzi & Solarium )</div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Villa 3: Sunset Poolside Cottage */}
                    <div role="listitem" className="home-page-item w-dyn-item">
                      <a href="#pricing" className="project-item w-inline-block">
                        <div className="project-thumbnail-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                          <img
                            src="/images/resort-sunset.webp"
                            loading="lazy"
                            alt="Sunset Poolside Cottage"
                            className="project-thumbnail"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <img
                            src="/images/resort-sunset.webp"
                            loading="lazy"
                            alt="Sunset Poolside Cottage"
                            className="project-thumbnail blur"
                          />
                        </div>
                        <div className="project-details">
                          <div className="project-details-holder">
                            <div className="red-circle"></div>
                            <div className="project-title-small">Sunset Poolside Cottage</div>
                          </div>
                          <div className="project-category-holder">
                            <div className="project-category">( Twilight Views & Private Terrace )</div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Villa 4: Bali Walkway Teakwood Villa */}
                    <div role="listitem" className="home-page-item w-dyn-item">
                      <a href="#pricing" className="project-item w-inline-block">
                        <div className="project-thumbnail-holder" style={{ position: 'relative', overflow: 'hidden' }}>
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster="/images/villa-bali.jpg"
                            className="project-thumbnail"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          >
                            <source src="/videos/bali-walkway.mp4" type="video/mp4" />
                          </video>
                          <img
                            src="/images/villa-bali.jpg"
                            loading="lazy"
                            alt="Bali Walkway Teakwood Villa"
                            className="project-thumbnail blur"
                          />
                        </div>
                        <div className="project-details">
                          <div className="project-details-holder">
                            <div className="red-circle"></div>
                            <div className="project-title-small">Bali Walkway Villa</div>
                          </div>
                          <div className="project-category-holder">
                            <div className="project-category">( Teakwood Veranda & Garden )</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AMENITIES TICKER MARQUEE */}
        <div id="amenities" className="section">
          <div className="section-spacing no-margin-bot">
            <div className="line"></div>
            <div className="container">
              <div className="skills-holder">
                <div id="w-node-_5e2b29f7-9294-ecc8-1791-8cf29f210c12-650a2375" className="skills-container">
                  <div className="h6-style">Amenities</div>
                  <div className="red-line"></div>
                </div>
                <div className="skills-scroll-holder">
                  <div className="skill-holder"><div className="skill">Private Plunge Pools</div></div>
                  <div className="skill-holder"><div className="skill">Riverside Kayaking</div></div>
                  <div className="skill-holder"><div className="skill">Stargazing Deck</div></div>
                  <div className="skill-holder"><div className="skill">Open-Air Movie Nights</div></div>
                  <div className="skill-holder"><div className="skill">Barbeque & Bonfires</div></div>
                  <div className="skill-holder"><div className="skill">Farm-Fresh Gourmet Dining</div></div>
                  <div className="skill-holder"><div className="skill">Pet-Friendly Haven</div></div>
                  <div className="skill-holder"><div className="skill">Balinese Garden Pathways</div></div>
                  <div className="skill-holder"><div className="skill">Forest Nature Trails</div></div>
                  <div className="skill-holder"><div className="skill">High-Speed Wi-Fi Workation</div></div>
                  <div className="skill-holder"><div className="skill">Outdoor Jacuzzis</div></div>
                  <div className="skill-holder"><div className="skill">24/7 Resort Concierge</div></div>
                  <div className="skill-holder"><div className="skill">Private Plunge Pools</div></div>
                  <div className="skill-holder"><div className="skill">Riverside Kayaking</div></div>
                  <div className="skill-holder"><div className="skill">Stargazing Deck</div></div>
                  <div className="skill-holder"><div className="skill">Open-Air Movie Nights</div></div>
                  <div className="skill-holder"><div className="skill">Barbeque & Bonfires</div></div>
                </div>
              </div>
            </div>
            <div className="line no-margin-bottom"></div>
          </div>
        </div>

        {/* THE STORY & KEYS SECTION */}
        <div id="story" className="section overflow-hidden">
          <div className="keys-wrapper">
            <div className="section-spacing">
              <div className="container">
                <div className="section-inside">
                  <div className="center-text-holder">
                    <div id="w-node-_703161eb-d895-85d7-8730-7e097ce0b852-650a2375" className="gird-paragraph-holder">
                      <div className="fade-in-on-scroll">
                        <div className="h6-style">(The Sanctuary)</div>
                      </div>
                    </div>
                    <div className="heading-holder">
                      <h1 className="animated-title">
                        Tucked away in the Western Ghats, where quiet river waters embrace secluded luxury.
                      </h1>
                    </div>

                    {/* 6 Aesthetic detail cutouts & photography */}
                    <div className="keys-holder">
                      <div className="keys-container _1"><img src="/images/key-01.jpg" loading="lazy" alt="Resort detail 1" className="keys" /></div>
                      <div className="keys-container _2"><img src="/images/key-02.jpg" loading="lazy" alt="Resort detail 2" className="keys" /></div>
                      <div className="keys-container _3"><img src="/images/key-03.jpg" loading="lazy" alt="Resort detail 3" className="keys" /></div>
                      <div className="keys-container _4"><img src="/images/key-04.jpg" loading="lazy" alt="Resort detail 4" className="keys" /></div>
                      <div className="keys-container _5"><img src="/images/key-05.jpg" loading="lazy" alt="Resort detail 5" className="keys" /></div>
                      <div className="keys-container _6"><img src="/images/key-06.jpg" loading="lazy" alt="Resort detail 6" className="keys" /></div>
                    </div>

                    <div className="paragraph-and-button-holder">
                      <div className="fade-in-on-scroll">
                        <p>
                          Hidden Beach Resort by Greenleaf Aqua was designed as an antidote to city chaos. Just two hours from Mumbai and Pune, discover a private haven where mornings begin with cool river mist, afternoons drift beside your plunge pool, and nights glow under clear Karjat skies.
                        </p>
                      </div>
                      <div className="fade-in-on-scroll">
                        <a href="#pricing" className="button w-inline-block">
                          <div className="red-circle"></div>
                          <div className="button-text">Reserve Your Stay</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line no-margin-bottom"></div>
              </div>
            </div>
          </div>
        </div>

        {/* GUEST REVIEWS SECTION */}
        <div id="reviews" className="section overflow-hidden">
          <div className="section-spacing no-margin-bot">
            <div className="container">
              <div className="section-inside">
                <div className="grid-title">
                  <div className="grid-title-holder">
                    <h2 className="animated-title">Guest Stories.</h2>
                  </div>
                  <div id="w-node-c2590e11-9952-23c7-28ee-23c417db07ed-650a2375" className="gird-paragraph-holder">
                    <div className="h6-style">(Reviews & Ratings)</div>
                  </div>
                </div>

                <div className="testimonail-grid">
                  <div className="testimonail-item">
                    <div className="review-card-header">
                      <div className="review-stars">
                        <span>★★★★★</span>
                        <span className="review-rating-score">5.0</span>
                      </div>
                      <span className="review-villa-tag">Canopy Pool Villa</span>
                    </div>
                    <div className="testimonail">
                      “The private plunge pool villa right on the river edge was sheer magic. The morning mist and birdsong felt like a remote Bali retreat, just two hours from Mumbai. Food and service were phenomenal.”
                    </div>
                    <div className="profile-holder">
                      <img loading="lazy" src="/images/resort-sunset.webp" alt="Guest" className="profile-image" />
                      <div className="profile-content">
                        <div className="profile-title">Aanya & Rohan Sharma</div>
                        <div className="profile-job">Mumbai · Weekend Getaway</div>
                      </div>
                    </div>
                  </div>

                  <div className="testimonail-item">
                    <div className="review-card-header">
                      <div className="review-stars">
                        <span>★★★★★</span>
                        <span className="review-rating-score">5.0</span>
                      </div>
                      <span className="review-villa-tag">Family Suite</span>
                    </div>
                    <div className="testimonail">
                      “Greenleaf Aqua has outdone themselves. Pristine river, delectable local Maharashtrian & Continental food, and unmatched peace. Our kids loved the plunge pool and didn't want to leave!”
                    </div>
                    <div className="profile-holder">
                      <img loading="lazy" src="/images/villa-canopy.jpg" alt="Guest" className="profile-image" />
                      <div className="profile-content">
                        <div className="profile-title">Vikram & Sunita Mehta</div>
                        <div className="profile-job">Pune · Family Retreat</div>
                      </div>
                    </div>
                  </div>

                  <div className="testimonail-item">
                    <div className="review-card-header">
                      <div className="review-stars">
                        <span>★★★★★</span>
                        <span className="review-rating-score">5.0</span>
                      </div>
                      <span className="review-villa-tag">Riverfront Cottage</span>
                    </div>
                    <div className="testimonail">
                      “Celebrated our anniversary at the Riverfront Cottage. The sunset over the water is breathtaking, and the private bonfire with stargazing made it completely unforgettable.”
                    </div>
                    <div className="profile-holder">
                      <img loading="lazy" src="/images/villa-plunge.jpg" alt="Guest" className="profile-image" />
                      <div className="profile-content">
                        <div className="profile-title">Pooja & Kabir Singhania</div>
                        <div className="profile-job">Thane · Anniversary Stay</div>
                      </div>
                    </div>
                  </div>

                  <div className="testimonail-item">
                    <div className="review-card-header">
                      <div className="review-stars">
                        <span>★★★★★</span>
                        <span className="review-rating-score">5.0</span>
                      </div>
                      <span className="review-villa-tag">100% Pet Friendly</span>
                    </div>
                    <div className="testimonail">
                      “Best pet-friendly luxury resort near Mumbai. Our golden retriever loved running along the riverside lawns, and the staff treated us like royalty. We’re definitely coming back!”
                    </div>
                    <div className="profile-holder">
                      <img loading="lazy" src="/images/villa-bali.jpg" alt="Guest" className="profile-image" />
                      <div className="profile-content">
                        <div className="profile-title">Dr. Neha Kulkarni</div>
                        <div className="profile-job">Navi Mumbai · Pet Vacation</div>
                      </div>
                    </div>
                  </div>

                  <div className="testimonail-item">
                    <div className="review-card-header">
                      <div className="review-stars">
                        <span>★★★★★</span>
                        <span className="review-rating-score">5.0</span>
                      </div>
                      <span className="review-villa-tag">Executive Workation</span>
                    </div>
                    <div className="testimonail">
                      “The workation setup is seamless—blazing fast Wi-Fi, peaceful desk views over the river, and taking dips in the plunge pool between meetings. Productive yet deeply relaxing.”
                    </div>
                    <div className="profile-holder">
                      <img loading="lazy" src="/images/villa-interior.jpg" alt="Guest" className="profile-image" />
                      <div className="profile-content">
                        <div className="profile-title">Aditya Sen</div>
                        <div className="profile-job">Tech Founder · 5-Day Workation</div>
                      </div>
                    </div>
                  </div>

                  <div className="testimonail-item">
                    <div className="review-card-header">
                      <div className="review-stars">
                        <span>★★★★★</span>
                        <span className="review-rating-score">5.0</span>
                      </div>
                      <span className="review-villa-tag">Riverfront Sanctuary</span>
                    </div>
                    <div className="testimonail">
                      “Immaculate hygiene, stunning architecture, and warm hospitality. The sunset views from the cottage deck and fresh farm breakfasts are truly therapy for the soul.”
                    </div>
                    <div className="profile-holder">
                      <img loading="lazy" src="/images/card-01.jpg" alt="Guest" className="profile-image" />
                      <div className="profile-content">
                        <div className="profile-title">Siddharth & Priya Rao</div>
                        <div className="profile-job">Mumbai · Annual Rejuvenation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="line no-margin-bottom"></div>
          </div>
        </div>

        {/* RATES & STAY PACKAGES SECTION */}
        <div id="pricing" className="section overflow-hidden">
          <div className="section-spacing no-margin-bot">
            <div className="container">
              <div className="section-inside">
                <div className="center-text-holder">
                  <div id="w-node-a957d6d2-6d61-4549-71ae-7b2c7e985214-650a2375" className="gird-paragraph-holder">
                    <div className="fade-in-on-scroll">
                      <div className="h6-style">(Rates & Packages)</div>
                    </div>
                  </div>
                  <div className="heading-holder">
                    <div className="fade-in-on-scroll">
                      <h1 className="title">Villa Stay Packages</h1>
                    </div>
                  </div>
                </div>

                <div className="pricing-content">
                  {/* Package 1: Weekday Serenity */}
                  <div id="w-node-a359571e-b000-3a55-e41f-c9bda3c80d7b-650a2375" className="pricing-table-holder">
                    <div className="pricing-header-holder">
                      <div className="pricing-heading-content">
                        <p className="paragraph-xl">Weekday Serenity</p>
                      </div>
                      <div className="pricing-header">
                        <span className="h3-style">₹7,500</span>
                        <div className="pricing-description">/ night</div>
                      </div>
                    </div>
                    <div className="pricing-list-holder-center">
                      <div className="list-holder-2">
                        <p className="paragraph-xl">Package Inclusions</p>
                        <ul role="list" className="w-list-unstyled">
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">Garden View Cottage (Up to 2 adults)</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">All 3 meals included (Farm-to-table buffet)</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">Access to main infinity swimming pool</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">Riverbank trail & nature walks</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">High-speed fiber Wi-Fi for workation</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-button-holder white-border">
                      <div className="center-top"><p>Instant booking confirmation</p></div>
                      <a href="https://wa.me/?text=Hello%2C%20I%20want%20to%20book%20the%20Weekday%20Serenity%20package%20at%20Hidden%20Beach%20Resort" target="_blank" className="button w-inline-block">
                        <div className="red-circle"></div>
                        <div className="button-text">Book Weekday</div>
                      </a>
                    </div>
                  </div>

                  {/* Package 2: Weekend Luxury (BEST SELLER) */}
                  <div id="w-node-a359571e-b000-3a55-e41f-c9bda3c80dad-650a2375" className="pricing-table-holder middle">
                    <div className="pricing-header-holder">
                      <div className="pricing-heading-content">
                        <p className="paragraph-xl white-text">MOST POPULAR</p>
                      </div>
                      <div className="pricing-header white-text">
                        <span className="h3-style white-text">₹12,500</span>
                        <div className="pricing-description white-text">/ night</div>
                      </div>
                    </div>
                    <div className="pricing-list-holder-center">
                      <div className="list-holder-2">
                        <p className="paragraph-xl-2 white">Package Inclusions</p>
                        <ul role="list" className="w-list-unstyled">
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d30565afe06efb8ee1ce29_Check%2002.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text white-text">Private Plunge Pool Villa</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d30565afe06efb8ee1ce29_Check%2002.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text white-text">All gourmet meals & evening high tea</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d30565afe06efb8ee1ce29_Check%2002.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text white-text">Live Riverside Barbeque & Bonfire night</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d30565afe06efb8ee1ce29_Check%2002.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text white-text">Complimentary river kayaking session</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d30565afe06efb8ee1ce29_Check%2002.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text white-text">Late check-out subject to availability</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d30565afe06efb8ee1ce29_Check%2002.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text white-text">Pet welcome kit & open play access</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-button-holder">
                      <div className="center-top"><p className="white-text">Best for couples & luxury weekend escapes</p></div>
                      <a href="https://wa.me/?text=Hello%2C%20I%20want%20to%20reserve%20the%20Weekend%20Luxury%20Villa%20at%20Hidden%20Beach%20Resort" target="_blank" className="button secondary w-inline-block">
                        <div className="red-circle"></div>
                        <div className="button-text">Reserve Weekend</div>
                      </a>
                    </div>
                  </div>

                  {/* Package 3: Entire Resort Buyout */}
                  <div id="w-node-be3cbd87-1e6d-4fe7-f190-e6796e3dfe4d-650a2375" className="pricing-table-holder">
                    <div className="pricing-header-holder">
                      <div className="pricing-heading-content">
                        <p className="paragraph-xl">Estate Buyout</p>
                      </div>
                      <div className="pricing-header">
                        <span className="h3-style">₹48,000</span>
                        <div className="pricing-description">/ night</div>
                      </div>
                    </div>
                    <div className="pricing-list-holder-center">
                      <div className="list-holder-2">
                        <p className="paragraph-xl">Package Inclusions</p>
                        <ul role="list" className="w-list-unstyled">
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">Exclusive buyout for up to 25 guests</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">All luxury villas, cottages & lawns private</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">Dedicated private chef & personalized menu</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">Sound system, open-air cinema & campfire</div>
                            </div>
                          </li>
                          <li>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder"><img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg" alt="" className="check-icon" /></div>
                              <div className="check-list-text">Ideal for weddings, birthdays & reunions</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-button-holder white-border">
                      <div className="center-top"><p>Tailored luxury concierge service</p></div>
                      <a href="https://wa.me/?text=Hello%2C%20I%20am%20inquiring%20about%20the%20Estate%20Buyout%20at%20Hidden%20Beach%20Resort" target="_blank" className="button w-inline-block">
                        <div className="red-circle"></div>
                        <div className="button-text">Enquire Buyout</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="line no-margin-bottom"></div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div id="faq" className="section">
          <div className="section-spacing">
            <div className="container no-paddings">
              <div className="section-inside">
                <div className="grid-title">
                  <div className="grid-title-holder">
                    <h3 className="animated-title">Frequently Asked Questions</h3>
                  </div>
                  <div id="w-node-d476ee15-75eb-ce5d-ccc5-e3d709c18635-e157b279" className="gird-paragraph-holder">
                    <div className="h6-style">(FAQ)</div>
                  </div>
                </div>

                <div className="questions-holder">
                  <div className="questions-container">
                    <div className="question">
                      <div className="question-text">How do we reach Hidden Beach Resort from Mumbai or Pune?</div>
                      <img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d144a90d497ed4650a24ab_Plus%20Icon.svg" alt="Plus Icon" className="question-icon" />
                    </div>
                    <div className="answer-holder">
                      <p className="answer-text">
                        The resort is situated in Karjat, Maharashtra. Driving from Navi Mumbai takes around 1 hour 45 minutes; from Western/South Mumbai it takes approximately 2 hours via the Mumbai-Pune Expressway (exiting at Khalapur or Chowk). From Pune, it takes about 2 hours via the expressway. The road is scenic, paved, and fully accessible for all vehicles.
                      </p>
                    </div>
                  </div>

                  <div className="questions-container">
                    <div className="question">
                      <div className="question-text">Which villas have private plunge pools?</div>
                      <img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d144a90d497ed4650a24ab_Plus%20Icon.svg" alt="Plus Icon" className="question-icon" />
                    </div>
                    <div className="answer-holder">
                      <p className="answer-text">
                        Our Royal Plunge Pool Suites and Riverfront Canopy Villas feature their own private, temperature-controlled plunge pools right outside your bedroom door. All guests also have full access to the resort’s infinity pool that directly overlooks the calm river.
                      </p>
                    </div>
                  </div>

                  <div className="questions-container">
                    <div className="question">
                      <div className="question-text">Is the resort pet-friendly?</div>
                      <img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d144a90d497ed4650a24ab_Plus%20Icon.svg" alt="Plus Icon" className="question-icon" />
                    </div>
                    <div className="answer-holder">
                      <p className="answer-text">
                        Yes, 100%! We welcome dogs, cats, and pets of all sizes. The resort features sprawling grassy lawns, secure perimeter fencing, and riverside walking paths where your furry companions can run and play freely. Pet meals can also be prepared upon request.
                      </p>
                    </div>
                  </div>

                  <div className="questions-container">
                    <div className="question">
                      <div className="question-text">What meals and cuisine are served at the resort?</div>
                      <img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d144a90d497ed4650a24ab_Plus%20Icon.svg" alt="Plus Icon" className="question-icon" />
                    </div>
                    <div className="answer-holder">
                      <p className="answer-text">
                        Our stay packages include all three meals plus evening tea and snacks. We prepare authentic Maharashtrian dishes, fresh river catch, delicious North Indian curries, and Continental favorites using fresh organic vegetables sourced from nearby farms. Live barbeque and riverside candlelit setups can be arranged upon request.
                      </p>
                    </div>
                  </div>

                  <div className="questions-container">
                    <div className="question">
                      <div className="question-text">What activities are available during our stay?</div>
                      <img loading="lazy" src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d144a90d497ed4650a24ab_Plus%20Icon.svg" alt="Plus Icon" className="question-icon" />
                    </div>
                    <div className="answer-holder">
                      <p className="answer-text">
                        Guests can enjoy river kayaking, morning birdwatching trails, swimming in the infinity pool, outdoor badminton and volleyball, evening acoustic bonfires, and open-air stargazing cinema sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LUXURY FOOTER */}
        <div className="section no-margin-top">
          <div className="section-spacing no-paddings">
            <div className="container">
              <div className="footer-wrapper">
                <div className="footer-signup-holder">
                  <div className="title-small" style={{ fontSize: '20px', fontFamily: 'var(--cd-serif, serif)' }}>
                    Stay Connected with Greenleaf Aqua
                  </div>
                  <p style={{ fontSize: '13px', color: '#687265', margin: '8px 0 16px' }}>
                    Receive private invitations to seasonal retreats, weekend specials, and villa upgrades in Karjat.
                  </p>
                  <div className="form-block w-form">
                    <form className="form">
                      <input className="text-field w-input" maxLength="256" name="email" placeholder="Enter your email" type="email" required />
                      <input type="submit" className="button form-button w-button" value="Join" />
                    </form>
                  </div>
                </div>

                <div className="footer-content">
                  <div className="footer-block">
                    <div className="title-small">Explore</div>
                    <div className="nav-link-wrapper"><a href="#villas" className="footer-link">Villas & Suites</a><div className="nav-line"></div></div>
                    <div className="nav-link-wrapper"><a href="#amenities" className="footer-link">Amenities</a><div className="nav-line"></div></div>
                    <div className="nav-link-wrapper"><a href="#story" className="footer-link">The Story</a><div className="nav-line"></div></div>
                    <div className="nav-link-wrapper"><a href="#pricing" className="footer-link">Rates & Packages</a><div className="nav-line"></div></div>
                    <div className="nav-link-wrapper"><a href="#faq" className="footer-link">FAQ</a><div className="nav-line"></div></div>
                  </div>

                  <div className="footer-block">
                    <div className="title-small">Contact & Location</div>
                    <div style={{ fontSize: '13px', lineHeight: 1.6, color: '#444' }}>
                      <p style={{ margin: '4px 0' }}><strong>Hidden Beach Resort</strong></p>
                      <p style={{ margin: '4px 0' }}>By Greenleaf Aqua Hospitality</p>
                      <p style={{ margin: '4px 0' }}>Riverside, Karjat, Maharashtra 410201</p>
                      <p style={{ margin: '4px 0' }}>WhatsApp: +91 98200 00000</p>
                      <p style={{ margin: '4px 0' }}>Email: stay@greenleafaqua.com</p>
                    </div>
                  </div>

                  <div className="footer-block">
                    <div className="title-small">Distances</div>
                    <div style={{ fontSize: '13px', lineHeight: 1.6, color: '#666' }}>
                      <p style={{ margin: '4px 0' }}>Navi Mumbai: ~1.5 Hours</p>
                      <p style={{ margin: '4px 0' }}>Mumbai (Bandra/BKC): ~2 Hours</p>
                      <p style={{ margin: '4px 0' }}>Pune (Baner/Hinjewadi): ~2 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-divider">
                <div className="footer-copyright-holder">
                  <div className="footer-copyright-center">
                    © 2026 Hidden Beach Resort by Greenleaf Aqua. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
