'use client';

import { useState, useEffect } from 'react';

export default function CurtainPreloader() {
  const [complete, setComplete] = useState(false);
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [curtainHeights, setCurtainHeights] = useState([100, 100, 100, 100, 100]);
  const [loaderOpacity, setLoaderOpacity] = useState(1);

  useEffect(() => {
    // 1. Fill loading bar
    const progressTimer = setTimeout(() => {
      setLoaderProgress(100);
    }, 150);

    // 2. Fade loading bar & stagger curtain columns upwards
    const curtainTimer = setTimeout(() => {
      setLoaderOpacity(0);

      // Stagger 5 columns
      [0, 1, 2, 3, 4].forEach((idx) => {
        setTimeout(() => {
          setCurtainHeights((prev) => {
            const next = [...prev];
            next[idx] = 0;
            return next;
          });
        }, idx * 75);
      });
    }, 1250);

    // 3. Remove curtains completely from DOM after animation finishes
    const finishTimer = setTimeout(() => {
      setComplete(true);
    }, 2200);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(curtainTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (complete) return null;

  return (
    <div
      className="curtains"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        pointerEvents: 'none',
        opacity: 1,
      }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`curtains-white _${i + 1}`}
          style={{
            flex: 1,
            height: `${curtainHeights[i]}%`,
            backgroundColor: '#ffffff',
            transition: 'height 0.75s cubic-bezier(0.77, 0, 0.175, 1)',
            transformOrigin: 'top center',
          }}
        />
      ))}
      <div
        className="loading-holder"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          opacity: loaderOpacity,
          transition: 'opacity 0.4s ease',
          zIndex: 10,
        }}
      >
        <div
          className="loading-container"
          style={{
            width: '180px',
            height: '2px',
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
            overflow: 'hidden',
          }}
        >
          <div
            className="loading"
            style={{
              height: '100%',
              width: `${loaderProgress}%`,
              backgroundColor: '#000000',
              transition: 'width 1.1s cubic-bezier(0.65, 0, 0.35, 1)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

