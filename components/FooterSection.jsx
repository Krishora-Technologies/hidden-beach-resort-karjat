'use client';

import { useState } from 'react';

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  }

  return (
    <div className="section no-margin-top">
      <div className="section-spacing no-paddings">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-signup-holder">
              <div
                className="title-small"
                style={{ fontSize: '20px', fontFamily: 'var(--cd-serif, serif)' }}
              >
                Stay Connected with Greenleaf Aqua
              </div>
              <p style={{ fontSize: '13px', color: '#687265', margin: '8px 0 16px' }}>
                Receive private invitations to seasonal retreats, weekend specials, and villa upgrades in Karjat.
              </p>
              {subscribed ? (
                <p style={{ color: '#2d6a4f', fontSize: '14px', fontWeight: 500 }}>
                  Thank you for subscribing to our private invitations!
                </p>
              ) : (
                <div className="form-block w-form">
                  <form className="form" onSubmit={handleSubmit}>
                    <input
                      className="text-field w-input"
                      maxLength="256"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="submit"
                      className="button form-button w-button"
                      value="Join"
                    />
                  </form>
                </div>
              )}
            </div>

            <div className="footer-content">
              <div className="footer-block">
                <div className="title-small">Explore</div>
                <div className="nav-link-wrapper">
                  <a href="#villas" className="footer-link">Villas & Suites</a>
                  <div className="nav-line" />
                </div>
                <div className="nav-link-wrapper">
                  <a href="#amenities" className="footer-link">Amenities</a>
                  <div className="nav-line" />
                </div>
                <div className="nav-link-wrapper">
                  <a href="#story" className="footer-link">The Story</a>
                  <div className="nav-line" />
                </div>
                <div className="nav-link-wrapper">
                  <a href="#pricing" className="footer-link">Rates & Packages</a>
                  <div className="nav-line" />
                </div>
                <div className="nav-link-wrapper">
                  <a href="#faq" className="footer-link">FAQ</a>
                  <div className="nav-line" />
                </div>
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
  );
}
