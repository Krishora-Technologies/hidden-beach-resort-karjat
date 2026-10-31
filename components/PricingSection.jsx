'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingSection() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  return (
    <div id="pricing" className="section overflow-hidden">
      <div className="section-spacing no-margin-bot">
        <div className="container">
          <div className="section-inside">
            <div className="center-text-holder">
              <div id="w-node-a957d6d2-6d61-4549-71ae-7b2c7e985214-650a2375" className="gird-paragraph-holder">
                <div className="fade-in-on-scroll">
                  <div className="h6-style">(Pricing)</div>
                </div>
              </div>
              <div className="heading-holder">
                <div className="fade-in-on-scroll">
                  <h1 className="title">Fair Prices</h1>
                </div>
              </div>
            </div>

            <div className="pricing-content">
              {/* Starter */}
              <div id="w-node-a359571e-b000-3a55-e41f-c9bda3c80d7b-650a2375" className="pricing-table-holder">
                <div className="pricing-header-holder">
                  <div className="pricing-heading-content">
                    <p className="paragraph-xl">Starter</p>
                  </div>
                  <div className="pricing-header">
                    <span className="h3-style">Free</span>
                  </div>
                </div>
                <div className="pricing-list-holder-center">
                  <div className="list-holder-2">
                    <p className="paragraph-xl">What you will get</p>
                    <ul role="list" className="w-list-unstyled">
                      {['Single user', 'Limited features', 'Multiple users', 'Expanded features', 'Premium support'].map(
                        (feat, i) => (
                          <li key={i}>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder">
                                <img
                                  loading="lazy"
                                  src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg"
                                  alt="Check"
                                  className="check-icon"
                                />
                              </div>
                              <div className="check-list-text">{feat}</div>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <div className="pricing-button-holder white-border">
                  <div className="center-top">
                    <p>14-day money-back guarantee</p>
                  </div>
                  <Link
                    href="#contact"
                    className="button w-inline-block"
                    onMouseEnter={() => setHover1(true)}
                    onMouseLeave={() => setHover1(false)}
                    style={{ overflow: 'hidden', position: 'relative' }}
                  >
                    <div
                      className="red-circle"
                      style={{
                        transform: hover1 ? 'scale(40)' : 'scale(1)',
                        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                    <div
                      className="button-text"
                      style={{
                        transform: hover1 ? 'translate3d(-10px, 0, 0)' : 'translate3d(0, 0, 0)',
                        color: hover1 ? '#000000' : '#ffffff',
                        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease',
                      }}
                    >
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>

              {/* BEST Middle Card */}
              <div id="w-node-a359571e-b000-3a55-e41f-c9bda3c80dad-650a2375" className="pricing-table-holder middle">
                <div className="pricing-header-holder">
                  <div className="pricing-heading-content">
                    <p className="paragraph-xl white-text">BEST</p>
                  </div>
                  <div className="pricing-header white-text">
                    <span className="h3-style white-text">$500</span>
                    <div className="pricing-description white-text">/ month</div>
                  </div>
                </div>
                <div className="pricing-list-holder-center">
                  <div className="list-holder-2">
                    <p className="paragraph-xl-2 white">What you will get</p>
                    <ul role="list" className="w-list-unstyled">
                      {[
                        'Advanced employee directory',
                        'Project management',
                        'Resource scheduling',
                        'Version control',
                        'Team collaboration',
                        'Version control',
                        'Project management',
                      ].map((feat, i) => (
                        <li key={i}>
                          <div className="checked-list-holder">
                            <div className="check-icon-holder">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d30565afe06efb8ee1ce29_Check%2002.svg"
                                alt="Check"
                                className="check-icon"
                              />
                            </div>
                            <div className="check-list-text white-text">{feat}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pricing-button-holder">
                  <div className="center-top">
                    <p className="white-text">14-day money-back guarantee</p>
                  </div>
                  <Link
                    href="#contact"
                    className="button secondary w-inline-block"
                    onMouseEnter={() => setHover2(true)}
                    onMouseLeave={() => setHover2(false)}
                    style={{ overflow: 'hidden', position: 'relative' }}
                  >
                    <div
                      className="red-circle"
                      style={{
                        transform: hover2 ? 'scale(40)' : 'scale(1)',
                        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                    <div
                      className="button-text"
                      style={{
                        transform: hover2 ? 'translate3d(-10px, 0, 0)' : 'translate3d(0, 0, 0)',
                        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>

              {/* Enterprise */}
              <div id="w-node-be3cbd87-1e6d-4fe7-f190-e6796e3dfe4d-650a2375" className="pricing-table-holder">
                <div className="pricing-header-holder">
                  <div className="pricing-heading-content">
                    <p className="paragraph-xl">Enterprise</p>
                  </div>
                  <div className="pricing-header">
                    <span className="h3-style">$5000</span>
                    <div className="pricing-description">/ month</div>
                  </div>
                </div>
                <div className="pricing-list-holder-center">
                  <div className="list-holder-2">
                    <p className="paragraph-xl">What you will get</p>
                    <ul role="list" className="w-list-unstyled">
                      {['Single user', 'Limited features', 'Multiple users', 'Expanded features', 'Premium support'].map(
                        (feat, i) => (
                          <li key={i}>
                            <div className="checked-list-holder">
                              <div className="check-icon-holder">
                                <img
                                  loading="lazy"
                                  src="https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d305659995e56b041c4104_Check%2001.svg"
                                  alt="Check"
                                  className="check-icon"
                                />
                              </div>
                              <div className="check-list-text">{feat}</div>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <div className="pricing-button-holder white-border">
                  <div className="center-top">
                    <p>14-day money-back guarantee</p>
                  </div>
                  <Link
                    href="#contact"
                    className="button w-inline-block"
                    onMouseEnter={() => setHover3(true)}
                    onMouseLeave={() => setHover3(false)}
                    style={{ overflow: 'hidden', position: 'relative' }}
                  >
                    <div
                      className="red-circle"
                      style={{
                        transform: hover3 ? 'scale(40)' : 'scale(1)',
                        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                    <div
                      className="button-text"
                      style={{
                        transform: hover3 ? 'translate3d(-10px, 0, 0)' : 'translate3d(0, 0, 0)',
                        color: hover3 ? '#000000' : '#ffffff',
                        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease',
                      }}
                    >
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line no-margin-bottom" />
      </div>
    </div>
  );
}

