'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Directional underline hover effect handler
  function handleLinkMouseEnter(e) {
    const line = e.currentTarget.querySelector('.nav-line');
    if (line) {
      line.style.transition = 'width 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0s';
      line.style.transform = 'translateX(0%)';
      line.style.width = '100%';
    }
  }

  function handleLinkMouseLeave(e) {
    const line = e.currentTarget.querySelector('.nav-line');
    if (line) {
      line.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      line.style.transform = 'translateX(100%)';
      setTimeout(() => {
        line.style.transition = 'none';
        line.style.width = '0%';
        line.style.transform = 'translateX(0%)';
      }, 410);
    }
  }

  return (
    <div className="fixed-nav">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="container navbar-container">
          <div className="navbar-holder">
            <div className="navbar-container">
              {/* Brand Wordmark */}
              <Link href="/" aria-current="page" className="brand w-nav-brand w--current">
                <div className="brand-text-holder">
                  <span className="brand-title">Hidden Beach Resort</span>
                  <span className="brand-subtitle">BY GREENLEAF AQUA · KARJAT</span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-menu-link-holder">
                  <div className="nav-menu-link-container">
                    <div className="nav-links">
                      <div
                        className="nav-link-wrapper"
                        onMouseEnter={handleLinkMouseEnter}
                        onMouseLeave={handleLinkMouseLeave}
                      >
                        <a href="#villas" className="nav-link w-nav-link">
                          Villas & Suites
                        </a>
                        <div className="nav-line" />
                      </div>

                      <div
                        className="nav-link-wrapper"
                        onMouseEnter={handleLinkMouseEnter}
                        onMouseLeave={handleLinkMouseLeave}
                      >
                        <a href="#amenities" className="nav-link w-nav-link">
                          Amenities
                        </a>
                        <div className="nav-line" />
                      </div>

                      <div
                        className="nav-link-wrapper"
                        onMouseEnter={handleLinkMouseEnter}
                        onMouseLeave={handleLinkMouseLeave}
                      >
                        <a href="#story" className="nav-link w-nav-link">
                          The Story
                        </a>
                        <div className="nav-line" />
                      </div>

                      <div
                        className="nav-link-wrapper"
                        onMouseEnter={handleLinkMouseEnter}
                        onMouseLeave={handleLinkMouseLeave}
                      >
                        <a href="#reviews" className="nav-link w-nav-link">
                          Reviews
                        </a>
                        <div className="nav-line" />
                      </div>

                      <div
                        className="nav-link-wrapper"
                        onMouseEnter={handleLinkMouseEnter}
                        onMouseLeave={handleLinkMouseLeave}
                      >
                        <a href="#pricing" className="nav-link w-nav-link">
                          Rates & Stay
                        </a>
                        <div className="nav-line" />
                      </div>

                      <div
                        className="nav-link-wrapper"
                        onMouseEnter={handleLinkMouseEnter}
                        onMouseLeave={handleLinkMouseLeave}
                      >
                        <a href="#faq" className="nav-link w-nav-link">
                          FAQ
                        </a>
                        <div className="nav-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Action Button */}
              <div className="navbar-actions">
                <a href="#pricing" className="nav-cta-button">
                  <span>Reserve Stay</span>
                  <div className="nav-cta-dot" />
                </a>

                {/* Mobile Menu Toggle */}
                <div
                  className={`menu-button w-nav-button ${mobileMenuOpen ? 'w--open' : ''}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  role="button"
                  tabIndex={0}
                  aria-label="menu"
                >
                  <div className="hamburger-box">
                    <span className="hamburger-line top" />
                    <span className="hamburger-line bottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
