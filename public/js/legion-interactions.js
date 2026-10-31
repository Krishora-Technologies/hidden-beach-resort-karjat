/**
 * Legion Creative Agency - 1-to-1 Webflow IX3 Animation Engine
 * Reconstructed with exact easing, timings, keyframes and interactions
 * matching https://ovo-legion.webflow.io/
 */

(function () {
  'use strict';

  if (window.__LEGION_ANIMATIONS_INITIALIZED__) {
    return;
  }
  window.__LEGION_ANIMATIONS_INITIALIZED__ = true;

  // Standard Webflow IX3 cubic bezier easings
  const EASE_OUT_EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const EASE_IN_OUT_EXPO = 'cubic-bezier(0.87, 0, 0.13, 1)';
  const EASE_CURTAIN = 'cubic-bezier(0.77, 0, 0.175, 1)';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLegionAnimations);
  } else {
    initLegionAnimations();
  }

  function initLegionAnimations() {
    initCurtainPreloader();
    initHeroCardScroll();
    initHeroMarquee();
    initPartnerMarquee();
    initSplitTextReadingScroll();
    initButtonHoverEffects();
    initNavLinkHoverEffects();
    initProjectCardHoverEffects();
    initKeysScrollParallax();
    initSkillsScroll();
    initFaqAccordion();
    initDropdownAndNav();
    initScrollIntersectionReveals();
  }

  // =========================================================================
  // 1. INTRO PRELOADER & CURTAIN LIFT REVEAL
  // =========================================================================
  function initCurtainPreloader() {
    const loader = document.querySelector('.loading');
    const loaderHolder = document.querySelector('.loading-holder');
    const curtainsParent = document.querySelector('.curtains');
    const curtains = document.querySelectorAll('.curtains-white');
    const heroImageLast = document.querySelector('.hero-images-container-last');
    const heroImages = document.querySelectorAll('.hero-images-container');

    if (!curtainsParent) return;

    // Direct section jump via URL hash (e.g. #y=2500)
    if (location.hash && location.hash.startsWith('#y=')) {
      const y = parseInt(location.hash.replace('#y=', ''));
      if (!isNaN(y)) {
        curtainsParent.style.display = 'none';
        curtainsParent.style.pointerEvents = 'none';
        if (heroImageLast) {
          heroImageLast.style.opacity = '1';
          heroImageLast.style.width = window.innerWidth > 991 ? '45%' : '80%';
          heroImageLast.style.height = window.innerWidth > 991 ? '55%' : '65%';
        }
        heroImages.forEach(img => {
          img.style.opacity = '1';
          img.style.width = window.innerWidth > 991 ? '45%' : '80%';
          img.style.height = window.innerWidth > 991 ? '55%' : '65%';
        });
        setTimeout(() => { window.scrollTo(0, y); }, 50);
        setTimeout(() => { window.scrollTo(0, y); }, 300);
        return;
      }
    }

    // Show initial curtain state
    curtainsParent.style.opacity = '1';
    curtainsParent.style.display = 'flex';
    curtains.forEach(c => { 
      c.style.height = '100%';
      c.style.transform = 'translateY(0%)';
    });

    // Dismiss instantly if user scrolls
    const dismissOnScroll = () => {
      if (window.scrollY > 20) {
        curtainsParent.style.display = 'none';
        curtainsParent.style.pointerEvents = 'none';
        window.removeEventListener('scroll', dismissOnScroll);
      }
    };
    window.addEventListener('scroll', dismissOnScroll, { passive: true });

    // 1. Fill loading progress bar
    if (loader) {
      loader.style.width = '0%';
      loader.style.opacity = '1';
      setTimeout(() => {
        loader.style.transition = 'width 0.8s cubic-bezier(0.65, 0, 0.35, 1)';
        loader.style.width = '100%';
      }, 100);
    }

    // 2. Fade loader and stagger curtain columns upwards
    setTimeout(() => {
      if (loaderHolder) {
        loaderHolder.style.transition = 'opacity 0.3s ease';
        loaderHolder.style.opacity = '0';
      }

      curtains.forEach((col, idx) => {
        setTimeout(() => {
          col.style.transition = `height 0.6s ${EASE_CURTAIN}, transform 0.6s ${EASE_CURTAIN}`;
          col.style.height = '0%';
          col.style.transform = 'translateY(-100%)';
        }, idx * 60);
      });

      // 3. Hero card deck enters and fans out into perspective
      setTimeout(() => {
        const isDesktop = window.innerWidth > 991;
        const targetWidth = isDesktop ? '45%' : '80%';
        const targetHeight = isDesktop ? '55%' : '65%';

        if (heroImageLast) {
          heroImageLast.style.transition = `all 0.8s ${EASE_OUT_EXPO}`;
          heroImageLast.style.width = targetWidth;
          heroImageLast.style.height = targetHeight;
          heroImageLast.style.opacity = '1';
        }

        heroImages.forEach((img, i) => {
          setTimeout(() => {
            img.style.transition = `all 0.7s ${EASE_OUT_EXPO}`;
            img.style.opacity = '1';
            img.style.width = targetWidth;
            img.style.height = targetHeight;
          }, i * 100);
        });
      }, 300);

      // 4. Remove curtains from DOM render tree
      setTimeout(() => {
        curtainsParent.style.display = 'none';
        curtainsParent.style.pointerEvents = 'none';
      }, 750);
    }, 950);
  }

  // =========================================================================
  // 2. 500VH PINNED HERO CARD DECK SCROLL
  // =========================================================================
  function initHeroCardScroll() {
    const heroWrapper = document.querySelector('.hero-section-wrapper');
    const heroSection = document.querySelector('.hero-section');
    const card1 = document.querySelector('.hero-images-container._01');
    const card2 = document.querySelector('.hero-images-container._02');
    const card3 = document.querySelector('.hero-images-container._03');
    const card4 = document.querySelector('.hero-images-container._04');
    const cardLast = document.querySelector('.hero-images-container-last');

    if (!heroWrapper || !heroSection) return;

    // Remove any interfering CSS transition during scroll scrubbing
    const allCards = [card1, card2, card3, card4, cardLast].filter(Boolean);
    allCards.forEach(c => { c.style.transition = 'none'; });

    function onScroll() {
      const rect = heroWrapper.getBoundingClientRect();
      const totalDist = heroWrapper.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;

      // Calculate progress 0.0 to 1.0 through the 500vh hero section
      const progress = Math.max(0, Math.min(1, -rect.top / totalDist));

      // Order of reveal: FIRST TO LAST so every card is visible in sequence:
      // Card 01 peels away first (z-index 5): progress 0.00 -> 0.25 (revealing Card 02)
      // Card 02 peels away next  (z-index 4): progress 0.23 -> 0.49 (revealing Card 03)
      // Card 03 peels away next  (z-index 3): progress 0.47 -> 0.73 (revealing Card 04)
      // Card 04 peels away next  (z-index 2): progress 0.71 -> 0.95 (revealing Card Last)
      // Card Last scales smoothly (z-index 1) to anchor the ending

      // Card 01 (z-index 5, resting angle 0deg)
      if (card1) {
        const p1 = Math.max(0, Math.min(1, progress / 0.25));
        const yVal = -p1 * 380;
        const scaleVal = 1 + p1 * 0.12;
        const rotVal = p1 * 6;
        const opVal = Math.max(0, 1 - p1 * 1.5);
        card1.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card1.style.opacity = opVal.toFixed(2);
        card1.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
      }

      // Card 02 (z-index 4, resting angle +4deg)
      if (card2) {
        const p2 = Math.max(0, Math.min(1, (progress - 0.23) / 0.26));
        const yVal = -p2 * 380;
        const scaleVal = 1 + p2 * 0.12;
        const rotVal = 4 + p2 * 8;
        const opVal = Math.max(0, 1 - p2 * 1.5);
        card2.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card2.style.opacity = opVal.toFixed(2);
        card2.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
      }

      // Card 03 (z-index 3, resting angle -4deg)
      if (card3) {
        const p3 = Math.max(0, Math.min(1, (progress - 0.47) / 0.26));
        const yVal = -p3 * 380;
        const scaleVal = 1 + p3 * 0.12;
        const rotVal = -4 - p3 * 8;
        const opVal = Math.max(0, 1 - p3 * 1.5);
        card3.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card3.style.opacity = opVal.toFixed(2);
        card3.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
      }

      // Card 04 (z-index 2, resting angle -2deg)
      if (card4) {
        const p4 = Math.max(0, Math.min(1, (progress - 0.71) / 0.25));
        const yVal = -p4 * 380;
        const scaleVal = 1 + p4 * 0.12;
        const rotVal = -2 + p4 * 8;
        const opVal = Math.max(0, 1 - p4 * 1.5);
        card4.style.transform = `translate3d(0, ${yVal.toFixed(1)}px, 0) scale(${scaleVal.toFixed(3)}) rotate(${rotVal.toFixed(1)}deg)`;
        card4.style.opacity = opVal.toFixed(2);
        card4.style.pointerEvents = opVal <= 0.05 ? 'none' : 'auto';
      }

      // Card Last scales into final prominence
      if (cardLast) {
        const pLast = Math.max(0, Math.min(1, (progress - 0.7) / 0.3));
        const scaleLast = 1 + pLast * 0.06;
        cardLast.style.transform = `scale(${scaleLast.toFixed(3)})`;
        cardLast.style.opacity = '1';
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // =========================================================================
  // 3. INFINITE TICKER MARQUEES (HERO & PARTNERS)
  // =========================================================================
  function initHeroMarquee() {
    const heroHolder = document.querySelector('.hero-text-loop-holder');
    if (!heroHolder) return;

    let heroPos = 0;
    function tickHero() {
      heroPos -= 0.85;
      const child = heroHolder.firstElementChild;
      const w = child ? child.offsetWidth : 400;
      if (Math.abs(heroPos) >= w) heroPos = 0;
      heroHolder.style.transform = `translate3d(${heroPos.toFixed(1)}px, 0, 0)`;
      requestAnimationFrame(tickHero);
    }
    requestAnimationFrame(tickHero);
  }

  function initPartnerMarquee() {
    const partnerHolders = document.querySelectorAll('.partner-container');
    if (!partnerHolders.length) return;

    let partPos = 0;
    function tickPartners() {
      partPos -= 0.65;
      const firstChild = partnerHolders[0] ? partnerHolders[0].firstElementChild : null;
      const w = firstChild ? firstChild.offsetWidth * 5 : 600;
      if (Math.abs(partPos) >= w) partPos = 0;
      partnerHolders.forEach(holder => {
        holder.style.transform = `translate3d(${partPos.toFixed(1)}px, 0, 0)`;
      });
      requestAnimationFrame(tickPartners);
    }
    requestAnimationFrame(tickPartners);
  }

  // =========================================================================
  // 4. SPLITTEXT READING SCROLL (WORD FADE)
  // =========================================================================
  function initSplitTextReadingScroll() {
    const titles = document.querySelectorAll('.animated-title');
    titles.forEach(title => {
      if (title.dataset.splitDone) return;
      title.dataset.splitDone = 'true';
      const text = title.textContent.trim();
      const words = text.split(/\s+/);
      title.innerHTML = words.map(w =>
        `<span class="split-word" style="display:inline-block; opacity: 0.18; transition: opacity 0.25s ease; margin-right: 0.25em;">${w}</span>`
      ).join(' ');
    });

    const allWords = document.querySelectorAll('.split-word');
    function updateWords() {
      const vh = window.innerHeight;
      const trigger = vh * 0.78;
      allWords.forEach(word => {
        const top = word.getBoundingClientRect().top;
        if (top < trigger) {
          const factor = Math.min(1, Math.max(0.18, (trigger - top) / 160));
          word.style.opacity = factor.toFixed(2);
        } else {
          word.style.opacity = '0.18';
        }
      });
    }

    window.addEventListener('scroll', updateWords, { passive: true });
    updateWords();
  }

  // =========================================================================
  // 5. BUTTON HOVER INTERACTION (RED CIRCLE EXPAND + TEXT SLIDE)
  // =========================================================================
  function initButtonHoverEffects() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
      const redCircle = btn.querySelector('.red-circle');
      const btnText = btn.querySelector('.button-text');
      const isSecondary = btn.classList.contains('secondary');

      if (!redCircle) return;

      btn.style.overflow = 'hidden';
      btn.style.position = 'relative';

      btn.addEventListener('mouseenter', function () {
        redCircle.style.transition = `transform 0.8s ${EASE_OUT_EXPO}`;
        redCircle.style.transform = 'scale(40)';

        if (btnText) {
          btnText.style.transition = `transform 0.8s ${EASE_OUT_EXPO}, color 0.4s ease`;
          btnText.style.transform = 'translate3d(-10px, 0, 0)';
          if (!isSecondary) {
            btnText.style.color = '#000000';
          }
        }
      });

      btn.addEventListener('mouseleave', function () {
        redCircle.style.transition = `transform 0.5s ${EASE_OUT_EXPO}`;
        redCircle.style.transform = 'scale(1)';

        if (btnText) {
          btnText.style.transition = `transform 0.5s ${EASE_OUT_EXPO}, color 0.4s ease`;
          btnText.style.transform = 'translate3d(0, 0, 0)';
          if (!isSecondary) {
            btnText.style.color = '';
          }
        }
      });
    });
  }

  // =========================================================================
  // 6. NAV LINK HOVER INTERACTION (UNDERLINE WIPE)
  // =========================================================================
  function initNavLinkHoverEffects() {
    const linkWrappers = document.querySelectorAll('.nav-link-wrapper');
    linkWrappers.forEach(wrapper => {
      const line = wrapper.querySelector('.nav-line');
      if (!line) return;

      line.style.transformOrigin = 'left center';

      wrapper.addEventListener('mouseenter', function () {
        line.style.transition = `width 0.65s ${EASE_OUT_EXPO}, transform 0s`;
        line.style.transform = 'translateX(0%)';
        line.style.width = '100%';
      });

      wrapper.addEventListener('mouseleave', function () {
        line.style.transition = `transform 0.4s ${EASE_OUT_EXPO}`;
        line.style.transform = 'translateX(100%)';
        setTimeout(() => {
          line.style.transition = 'none';
          line.style.width = '0%';
          line.style.transform = 'translateX(0%)';
        }, 420);
      });
    });
  }

  // =========================================================================
  // 7. PROJECT CARD HOVER & SCROLL 3D TILT
  // =========================================================================
  function initProjectCardHoverEffects() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
      const blurThumb = item.querySelector('.project-thumbnail.blur');
      const details = item.querySelector('.project-details');
      const thumbHolder = item.querySelector('.project-thumbnail-holder');

      if (blurThumb) {
        blurThumb.style.transition = `opacity 0.9s ${EASE_OUT_EXPO}, transform 0.9s ${EASE_OUT_EXPO}`;
      }
      if (details) {
        details.style.transition = `width 0.9s ${EASE_OUT_EXPO}`;
      }
      if (thumbHolder) {
        thumbHolder.style.transition = `transform 0.9s ${EASE_OUT_EXPO}`;
      }

      item.addEventListener('mouseenter', function () {
        if (blurThumb) {
          blurThumb.style.opacity = '0.85';
          blurThumb.style.transform = 'scale(1.08)';
        }
        if (details) {
          details.style.width = '90%';
        }
        if (thumbHolder) {
          thumbHolder.style.transform = 'scale(0.98)';
        }
      });

      item.addEventListener('mouseleave', function () {
        if (blurThumb) {
          blurThumb.style.opacity = '0';
          blurThumb.style.transform = 'scale(1)';
        }
        if (details) {
          details.style.width = '70%';
        }
        if (thumbHolder) {
          thumbHolder.style.transform = 'scale(1)';
        }
      });
    });

    // 3D tilt on scroll for projects
    window.addEventListener('scroll', function () {
      const vh = window.innerHeight;
      projectItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = (center - vh * 0.5) / (vh * 0.8);
        if (progress >= -1.2 && progress <= 1.2) {
          const rotX = Math.max(-25, Math.min(25, -progress * 25));
          const translateY = Math.max(-30, Math.min(30, progress * 40));
          item.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(1)}deg) translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        }
      });
    }, { passive: true });
  }

  // =========================================================================
  // 8. WHO ARE WE - KEYS SCATTER PARALLAX
  // =========================================================================
  function initKeysScrollParallax() {
    const keysWrapper = document.querySelector('.keys-wrapper');
    const k1 = document.querySelector('.keys-container._1');
    const k2 = document.querySelector('.keys-container._2');
    const k3 = document.querySelector('.keys-container._3');
    const k4 = document.querySelector('.keys-container._4');
    const k5 = document.querySelector('.keys-container._5');
    const k6 = document.querySelector('.keys-container._6');

    if (!keysWrapper) return;

    window.addEventListener('scroll', function () {
      const rect = keysWrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top > vh || rect.bottom < 0) return;

      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      const factor = (progress - 0.5) * 2; // -1.0 to 1.0

      if (k1) k1.style.transform = `translate3d(${-4 * factor}px, ${-6 * factor}px, 0) rotate(${-19 * factor}deg)`;
      if (k2) k2.style.transform = `translate3d(0px, ${-10 * factor}px, 0) rotate(${12 * factor}deg)`;
      if (k3) k3.style.transform = `translate3d(${6 * factor}px, ${-8 * factor}px, 0) rotate(${18 * factor}deg)`;
      if (k4) k4.style.transform = `translate3d(${3 * factor}px, ${-7 * factor}px, 0) rotate(${-15 * factor}deg)`;
      if (k5) k5.style.transform = `translate3d(${-3 * factor}px, ${-9 * factor}px, 0) rotate(${14 * factor}deg)`;
      if (k6) k6.style.transform = `translate3d(${6 * factor}px, ${-6 * factor}px, 0) rotate(${22 * factor}deg)`;
    }, { passive: true });
  }

  // =========================================================================
  // 9. AMENITIES TICKER SCROLL (RED LINE ACTIVE HIGHLIGHT)
  // =========================================================================
  function initSkillsScroll() {
    const redLine = document.querySelector('.red-line');
    const skillHolders = document.querySelectorAll('.skill-holder');
    if (!redLine || !skillHolders.length) return;

    let ticking = false;

    function updateActiveAmenity() {
      const lineRect = redLine.getBoundingClientRect();
      const lineCenterY = lineRect.top + lineRect.height / 2;

      let closestSkill = null;
      let minDistance = Infinity;

      skillHolders.forEach(holder => {
        const skill = holder.querySelector('.skill');
        if (!skill) return;

        const rect = holder.getBoundingClientRect();
        const holderCenterY = rect.top + rect.height / 2;
        const dist = Math.abs(holderCenterY - lineCenterY);

        // Check if the red line aligns with this item
        if (lineCenterY >= rect.top - 14 && lineCenterY <= rect.bottom + 14) {
          if (dist < minDistance) {
            minDistance = dist;
            closestSkill = skill;
          }
        }
      });

      skillHolders.forEach(holder => {
        const skill = holder.querySelector('.skill');
        if (!skill) return;

        if (skill === closestSkill) {
          skill.classList.add('red-active');
        } else {
          skill.classList.remove('red-active');
        }
      });

      ticking = false;
    }

    function onScrollOrResize() {
      if (!ticking) {
        requestAnimationFrame(updateActiveAmenity);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    updateActiveAmenity();
  }

  // =========================================================================
  // 10. INTERACTIVE FAQ ACCORDION DRAWERS (COLLAPSED BY DEFAULT)
  // =========================================================================
  function initFaqAccordion() {
    const qContainers = document.querySelectorAll('.questions-container');
    if (!qContainers.length) return;

    qContainers.forEach((container) => {
      const answer = container.querySelector('.answer-holder');
      const icon = container.querySelector('.question-icon');

      // All items start collapsed by default
      container.classList.remove('is-open');
      if (answer) {
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        answer.style.overflow = 'hidden';
      }
      if (icon) {
        icon.style.transform = 'rotate(0deg)';
      }

      container.addEventListener('click', function () {
        const wasOpen = container.classList.contains('is-open');

        // Close all drawers
        qContainers.forEach((other) => {
          other.classList.remove('is-open');
          const otherAns = other.querySelector('.answer-holder');
          const otherIcon = other.querySelector('.question-icon');
          if (otherAns) {
            otherAns.style.maxHeight = '0px';
            otherAns.style.opacity = '0';
          }
          if (otherIcon) {
            otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle clicked drawer
        if (!wasOpen && answer) {
          container.classList.add('is-open');
          answer.style.maxHeight = (answer.scrollHeight + 30) + 'px';
          answer.style.opacity = '1';
          if (icon) {
            icon.style.transform = 'rotate(45deg)';
          }
        }
      });
    });
  }

  // =========================================================================
  // 10. NAVBAR WORK DROPDOWN & MOBILE MENU
  // =========================================================================
  function initDropdownAndNav() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownList = document.querySelector('.dropdown-list');
    const dropdownIcon = document.querySelector('.drop-down-icon');

    if (dropdownToggle && dropdownList) {
      if (dropdownIcon) dropdownIcon.style.transition = `transform 0.35s ${EASE_OUT_EXPO}`;

      dropdownToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = dropdownList.classList.contains('w--open');
        if (isOpen) {
          dropdownList.classList.remove('w--open');
          if (dropdownIcon) dropdownIcon.style.transform = 'rotate(0deg)';
        } else {
          dropdownList.classList.add('w--open');
          if (dropdownIcon) dropdownIcon.style.transform = 'rotate(180deg)';
        }
      });

      document.addEventListener('click', () => {
        dropdownList.classList.remove('w--open');
        if (dropdownIcon) dropdownIcon.style.transform = 'rotate(0deg)';
      });
    }

    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    if (menuButton && navMenu) {
      menuButton.addEventListener('click', function () {
        const isOpen = navMenu.classList.contains('w--nav-menu-open');
        if (isOpen) {
          navMenu.classList.remove('w--nav-menu-open');
          menuButton.classList.remove('w--open');
        } else {
          navMenu.classList.add('w--nav-menu-open');
          menuButton.classList.add('w--open');
        }
      });
    }
  }

  // =========================================================================
  // 11. INTERSECTION OBSERVER REVEAL (FADE + TRANSLATE + BLUR CLEAR)
  // =========================================================================
  function initScrollIntersectionReveals() {
    const targets = document.querySelectorAll('[data-w-id], .fade-in-on-scroll, .pricing-table-holder, .testimonail-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.transition = `opacity 0.8s ${EASE_OUT_EXPO}, transform 0.8s ${EASE_OUT_EXPO}, filter 0.8s ease`;
          el.style.opacity = '1';
          el.style.filter = 'blur(0px)';
          el.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
        }
      });
    }, { threshold: 0.05, rootMargin: '60px' });

    targets.forEach(el => observer.observe(el));
  }
})();
