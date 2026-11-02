'use client';

import { useState } from 'react';

const packages = [
  {
    id: 'weekday',
    name: 'Weekday Serenity',
    price: '₹7,500',
    unit: '/ night',
    isMiddle: false,
    tag: null,
    inclusions: [
      'Garden View Cottage (Up to 2 adults)',
      'All 3 meals included (Farm-to-table buffet)',
      'Access to main infinity swimming pool',
      'Riverbank trail & nature walks',
      'High-speed fiber Wi-Fi for workation',
    ],
    note: 'Instant booking confirmation',
    ctaText: 'Book Weekday',
    waText: 'Hello, I want to book the Weekday Serenity package at Hidden Beach Resort',
  },
  {
    id: 'weekend',
    name: 'Weekend Luxury',
    price: '₹12,500',
    unit: '/ night',
    isMiddle: true,
    tag: 'MOST POPULAR',
    inclusions: [
      'Private Plunge Pool Villa',
      'All gourmet meals & evening high tea',
      'Live Riverside Barbeque & Bonfire night',
      'Complimentary river kayaking session',
      'Late check-out subject to availability',
      'Pet welcome kit & open play access',
    ],
    note: 'Best for couples & luxury weekend escapes',
    ctaText: 'Reserve Weekend',
    waText: 'Hello, I want to reserve the Weekend Luxury Villa at Hidden Beach Resort',
  },
  {
    id: 'buyout',
    name: 'Estate Buyout',
    price: '₹48,000',
    unit: '/ night',
    isMiddle: false,
    tag: null,
    inclusions: [
      'Exclusive buyout for up to 25 guests',
      'All luxury villas, cottages & lawns private',
      'Dedicated private chef & personalized menu',
      'Sound system, open-air cinema & campfire',
      'Ideal for weddings, birthdays & reunions',
    ],
    note: 'Tailored luxury concierge service',
    ctaText: 'Enquire Buyout',
    waText: 'Hello, I am inquiring about the Estate Buyout at Hidden Beach Resort',
  },
];

export default function PricingSection() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div id="pricing" className="section overflow-hidden">
      <div className="section-spacing no-margin-bot">
        <div className="container">
          <div className="section-inside">
            <div className="center-text-holder">
              <div
                id="w-node-a957d6d2-6d61-4549-71ae-7b2c7e985214-650a2375"
                className="gird-paragraph-holder"
              >
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
              {packages.map((pkg, idx) => {
                const isHovered = hoveredBtn === idx;
                const waUrl = `https://wa.me/?text=${encodeURIComponent(pkg.waText)}`;

                return (
                  <div
                    key={pkg.id}
                    className={`pricing-table-holder ${pkg.isMiddle ? 'middle' : ''}`}
                  >
                    <div className="pricing-header-holder">
                      <div className="pricing-heading-content">
                        <p
                          className={`paragraph-xl ${pkg.isMiddle ? 'white-text' : ''}`}
                        >
                          {pkg.tag || pkg.name}
                        </p>
                      </div>
                      <div
                        className={`pricing-header ${pkg.isMiddle ? 'white-text' : ''}`}
                      >
                        <span
                          className={`h3-style ${pkg.isMiddle ? 'white-text' : ''}`}
                        >
                          {pkg.price}
                        </span>
                        <div
                          className={`pricing-description ${pkg.isMiddle ? 'white-text' : ''}`}
                        >
                          {pkg.unit}
                        </div>
                      </div>
                    </div>

                    <div className="pricing-list-holder-center">
                      <div className="list-holder-2">
                        <p
                          className={`paragraph-xl ${pkg.isMiddle ? 'paragraph-xl-2 white' : ''}`}
                        >
                          Package Inclusions
                        </p>
                        <ul role="list" className="w-list-unstyled">
                          {pkg.inclusions.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <div className="checked-list-holder">
                                <div className="check-icon-holder">
                                  <span
                                    style={{
                                      color: '#ff282b',
                                      fontWeight: 'bold',
                                      fontSize: '14px',
                                    }}
                                  >
                                    ✓
                                  </span>
                                </div>
                                <div
                                  className={`check-list-text ${pkg.isMiddle ? 'white-text' : ''}`}
                                >
                                  {item}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`pricing-button-holder ${!pkg.isMiddle ? 'white-border' : ''}`}
                    >
                      <div className="center-top">
                        <p className={pkg.isMiddle ? 'white-text' : ''}>{pkg.note}</p>
                      </div>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`button ${pkg.isMiddle ? 'secondary' : ''} w-inline-block`}
                        onMouseEnter={() => setHoveredBtn(idx)}
                        onMouseLeave={() => setHoveredBtn(null)}
                        style={{ position: 'relative', overflow: 'hidden' }}
                      >
                        <div
                          className="red-circle"
                          style={{
                            transform: isHovered ? 'scale(40)' : 'scale(1)',
                            transition: isHovered
                              ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                              : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        />
                        <div
                          className="button-text"
                          style={{
                            transform: isHovered
                              ? 'translate3d(-10px, 0, 0)'
                              : 'translate3d(0, 0, 0)',
                            color: isHovered && !pkg.isMiddle ? '#000000' : undefined,
                            transition:
                              'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease',
                          }}
                        >
                          {pkg.ctaText}
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="line no-margin-bottom" />
      </div>
    </div>
  );
}
