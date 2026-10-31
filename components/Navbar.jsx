'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
              {/* Brand Logo */}
              <Link href="/" aria-current="page" className="brand w-nav-brand w--current">
                <img
                  src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15482083838825968dcbb_Logo.png"
                  loading="lazy"
                  sizes="(max-width: 563px) 98vw, 552px"
                  srcSet="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15482083838825968dcbb_Logo-p-500.png 500w, https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d15482083838825968dcbb_Logo.png 552w"
                  alt="Legion Logo"
                  className="brand-image"
                />
              </Link>

              {/* Navigation Menu */}
              <nav
                role="navigation"
                className={`nav-menu w-nav-menu ${mobileMenuOpen ? 'w--nav-menu-open' : ''}`}
                style={
                  mobileMenuOpen
                    ? { display: 'block', transform: 'translateY(0px)', opacity: 1 }
                    : {}
                }
              >
                <div className="nav-menu-link-holder">
                  <div className="nav-menu-link-container">
                    <div className="nav-links">
                      {/* Home */}
                      <div
                        className="nav-link-wrapper"
                        onMouseEnter={handleLinkMouseEnter}
                        onMouseLeave={handleLinkMouseLeave}
                      >
                        <Link href="/" className="nav-link w-nav-link w--current">
                          Home
                        </Link>
                        <div className="nav-line" style={{ width: '0%', transform: 'translateX(0%)' }} />
                      </div>

                      {/* Work Dropdown */}
                      <div
                        ref={dropdownRef}
                        className={`dropdown w-dropdown ${dropdownOpen ? 'w--open' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setDropdownOpen(!dropdownOpen);
                        }}
                      >
                        <div className="dropdown-toggle w-dropdown-toggle" style={{ cursor: 'pointer' }}>
                          <div className="nav-link">Work</div>
                          <img
                            src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68e02226ded4e133d82c4d3b_Arrow%20Down.svg"
                            loading="lazy"
                            alt="Dropdown Arrow"
                            className="drop-down-icon"
                            style={{
                              transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                          />
                        </div>
                        <nav
                          className={`dropdown-list w-dropdown-list ${dropdownOpen ? 'w--open' : ''}`}
                          style={{
                            display: dropdownOpen ? 'block' : 'none',
                            opacity: dropdownOpen ? 1 : 0,
                            transform: dropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
                            transition: 'opacity 0.25s ease, transform 0.25s ease',
                          }}
                        >
                          <div
                            className="nav-link-wrapper"
                            onMouseEnter={handleLinkMouseEnter}
                            onMouseLeave={handleLinkMouseLeave}
                          >
                            <Link href="#work" className="nav-link w-nav-link">
                              Work V1
                            </Link>
                            <div className="nav-line" />
                          </div>
                          <div
                            className="nav-link-wrapper mid"
                            onMouseEnter={handleLinkMouseEnter}
                            onMouseLeave={handleLinkMouseLeave}
                          >
                            <Link href="#work" className="nav-link w-nav-link">
                              Work V2
                            </Link>
                            <div className="nav-line" />
                          </div>
                          <div
                            className="nav-link-wrapper"
                            onMouseEnter={handleLinkMouseEnter}
                            onMouseLeave={handleLinkMouseLeave}
                          >
                            <Link href="#work" className="nav-link w-nav-link">
                              Work V3
                            </Link>
                            <div className="nav-line" />
                          </div>
                        </nav>
                      </div>

                      {/* Blog */}
                      <div
                        className="nav-link-wrapper"
                        onMouseEnter={handleLinkMouseEnter}
                        onMouseLeave={handleLinkMouseLeave}
                      >
                        <Link href="#testimonials" className="nav-link w-nav-link">
                          Blog
                        </Link>
                        <div className="nav-line" />
                      </div>

                      {/* Contact */}
                      <div
                        className="nav-link-wrapper"
                        onMouseEnter={handleLinkMouseEnter}
                        onMouseLeave={handleLinkMouseLeave}
                      >
                        <Link href="#contact" className="nav-link w-nav-link">
                          Contact
                        </Link>
                        <div className="nav-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Hamburger Mobile Button */}
              <div
                className={`menu-button w-nav-button ${mobileMenuOpen ? 'w--open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ cursor: 'pointer' }}
                aria-label="menu"
              >
                <div className="icon w-icon-nav-menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

