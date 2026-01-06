import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * 1️⃣ Define the REAL viewport height (Required for mobile portrait)
 * Mobile browsers misreport 100vh in portrait mode
 */
function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set initial viewport height
setViewportHeight();

// Update on resize
window.addEventListener('resize', setViewportHeight);

// Update on orientation change
window.addEventListener('orientationchange', setViewportHeight);

/**
 * Diagnostic logging for mobile portrait layout debugging
 * Logs computed position, top, and height for key elements
 */
function logElementDiagnostics() {
  if (window.innerWidth <= 768) {
    const elements = [
      { name: 'body', selector: 'body' },
      { name: 'header', selector: 'header' },
      { name: 'main element', selector: 'main' },
      { name: 'App wrapper div', selector: '#root > div' },
      { name: 'hero section', selector: '.section-hero' },
      { name: 'hero parent wrapper', selector: '.section-hero > div' },
      { name: 'hero absolute positioned child', selector: '.section-hero > div > div[class*="absolute"]' },
    ];

    console.log('=== MOBILE PORTRAIT LAYOUT DIAGNOSTICS ===');
    console.log(`Viewport: ${window.innerWidth}x${window.innerHeight}`);
    console.log(`Orientation: ${window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'}`);
    console.log('');

    elements.forEach(({ name, selector }) => {
      const element = document.querySelector(selector);
      if (element) {
        const styles = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        console.log(`📦 ${name.toUpperCase()}:`);
        console.log(`   Position: ${styles.position}`);
        console.log(`   Top: ${styles.top} (computed: ${rect.top}px)`);
        console.log(`   Height: ${styles.height} (computed: ${rect.height}px)`);
        console.log(`   Margin-top: ${styles.marginTop}`);
        console.log(`   Padding-top: ${styles.paddingTop}`);
        console.log(`   Z-index: ${styles.zIndex}`);
        console.log('');
      }
    });

    // Find all absolute/fixed positioned elements above hero
    const hero = document.querySelector('.section-hero, .homepage-hero, .hero, .hero-section');
    if (hero) {
      const heroRect = hero.getBoundingClientRect();
      const allElements = document.querySelectorAll('*');
      const positionedElements = Array.from(allElements).filter(el => {
        const styles = window.getComputedStyle(el);
        return styles.position === 'absolute' || styles.position === 'fixed';
      });

      const positionedAboveHero = positionedElements.filter(el => {
        const elRect = el.getBoundingClientRect();
        return elRect.bottom <= heroRect.top && el !== hero;
      });

      if (positionedAboveHero.length > 0) {
        console.log('📌 POSITIONED ELEMENTS ABOVE HERO (absolute/fixed):');
        positionedAboveHero.forEach((el, index) => {
          const styles = window.getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          const className = el.className ? '.' + Array.from(el.classList).join('.') : '';
          console.log(`   ${index + 1}. ${el.tagName}${className}${el.id ? '#' + el.id : ''}`);
          console.log(`      Position: ${styles.position}`);
          console.log(`      Top: ${styles.top} (computed: ${rect.top}px)`);
          console.log(`      Height: ${styles.height} (computed: ${rect.height}px)`);
          console.log(`      Z-index: ${styles.zIndex}`);
          console.log('');
        });
      } else {
        console.log('📌 No positioned elements found above hero');
        console.log('');
      }
    }
  }
}

// Run diagnostics on load and after a short delay for React to render
window.addEventListener('load', () => {
  setTimeout(logElementDiagnostics, 500);
});
window.addEventListener('resize', () => {
  setTimeout(logElementDiagnostics, 100);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


