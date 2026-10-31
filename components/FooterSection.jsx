'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  }

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
    <div id="contact" className="section">
      <div className="footer-holder">
        <div className="footer-container">
          <div className="container">
            <div className="footer-wrapper">
              {/* Newsletter & Socials */}
              <div className="footer-signup-holder">
                <div className="title-small">Join our newsletter</div>
                <div className="form-block w-form">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="form">
                      <input
                        className="text-field w-input"
                        maxLength={256}
                        name="email"
                        placeholder="Email@example.com"
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="submit"
                        className="button form-button w-button"
                        value="Sign up"
                        style={{ cursor: 'pointer' }}
                      />
                    </form>
                  ) : (
                    <div className="success-message w-form-done" style={{ display: 'block' }}>
                      <div>
                        <span>Thank you!</span> We&#x27;ll reach out soon
                      </div>
                    </div>
                  )}
                </div>

                <div className="social-media-holder">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-media-container w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d144a90d497ed4650a23d0_Instagram%20Icon.svg"
                      loading="lazy"
                      alt="Instagram"
                      className="social-media-image"
                    />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-media-container w-inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d144a90d497ed4650a2487_Twitter%20Icon.svg"
                      loading="lazy"
                      alt="Twitter"
                      className="social-media-image"
                    />
                  </a>
                  <a href="mailto:email@dummy.com" className="social-media-container w-inline-block">
                    <img
                      src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d144a90d497ed4650a2419_Mail%20Icon.svg"
                      loading="lazy"
                      alt="Email"
                      className="social-media-image"
                    />
                  </a>
                </div>
              </div>

              {/* Navigation Columns */}
              <div className="footer-content">
                {/* Column 1: Company */}
                <div id="w-node-e92bf484-a605-4132-f141-4518468af7e2-468af7d9" className="footer-block">
                  <div className="title-small">Company</div>
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Work V1', href: '#work' },
                    { label: 'Work V2', href: '#work' },
                    { label: 'Work V3', href: '#work' },
                    { label: 'Blog', href: '#testimonials' },
                    { label: 'Contact', href: '#contact' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="nav-link-wrapper"
                      onMouseEnter={handleLinkMouseEnter}
                      onMouseLeave={handleLinkMouseLeave}
                    >
                      <Link href={item.href} className="footer-link">
                        {item.label}
                      </Link>
                      <div className="nav-line" style={{ width: '0%', transform: 'translateX(0%)' }} />
                    </div>
                  ))}
                </div>

                {/* Column 2: Social media */}
                <div id="w-node-e92bf484-a605-4132-f141-4518468af7ef-468af7d9" className="footer-block">
                  <div className="title-small">Social media</div>
                  {[
                    { label: 'Instagram', href: 'https://instagram.com' },
                    { label: 'Facebook', href: 'https://fb.com' },
                    { label: 'Linkedin', href: 'https://linkedin.com' },
                    { label: 'Twitter', href: 'https://twitter.com' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="nav-link-wrapper"
                      onMouseEnter={handleLinkMouseEnter}
                      onMouseLeave={handleLinkMouseLeave}
                    >
                      <a href={item.href} target="_blank" rel="noreferrer" className="footer-link">
                        {item.label}
                      </a>
                      <div className="nav-line" style={{ width: '0%', transform: 'translateX(0%)' }} />
                    </div>
                  ))}
                </div>

                {/* Column 3: Webflow stuff */}
                <div id="w-node-e92bf484-a605-4132-f141-4518468af7fa-468af7d9" className="footer-block">
                  <div className="title-small">Webflow stuff</div>
                  {[
                    { label: 'Style Guide', href: '#pricing' },
                    { label: 'Licensing', href: '#pricing' },
                    { label: 'Instructions', href: '#pricing' },
                    { label: 'Change Log', href: '#pricing' },
                    { label: 'GET TEMPLATE', href: '#pricing', isLast: true },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="nav-link-wrapper"
                      onMouseEnter={handleLinkMouseEnter}
                      onMouseLeave={handleLinkMouseLeave}
                    >
                      <Link href={item.href} className={`footer-link ${item.isLast ? 'last' : ''}`}>
                        {item.label}
                      </Link>
                      <div className="nav-line" style={{ width: '0%', transform: 'translateX(0%)' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright & Divider */}
            <div className="footer-divider">
              <div className="footer-copyright-holder">
                <div className="footer-copyright-center">
                  Created by{' '}
                  <a href="http://madebyoversight.com/" target="_blank" rel="noreferrer" className="dark-link">
                    OVERSIGHT
                  </a>
                </div>
              </div>
              <div className="footer-copyright-holder">
                <div className="footer-copyright-center">
                  Powered by{' '}
                  <a href="https://webflow.com/" target="_blank" rel="noreferrer" className="dark-link">
                    WEBFLOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

