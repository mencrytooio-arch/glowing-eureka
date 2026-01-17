import { useEffect, useRef, useState } from 'react';

/**
 * Footer Component
 * Minimal footer with brand colors and Instagram icon
 * Three-column CSS Grid layout with dynamic spacing
 */

const Footer = () => {
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);
  const [rightMargin, setRightMargin] = useState(0);

  useEffect(() => {
    const calculateSpacing = () => {
      if (!leftRef.current || !centerRef.current || !rightRef.current) return;

      // Get bounding boxes
      const leftRect = leftRef.current.getBoundingClientRect();
      const centerRect = centerRef.current.getBoundingClientRect();

      // Calculate gap between left text (right edge) and center text (left edge)
      const gap = centerRect.left - leftRect.right;

      // Apply the same gap as margin-left to the right container
      // This pushes the Instagram icon to the right by the calculated gap
      setRightMargin(gap);
    };

    // Calculate on mount
    calculateSpacing();

    // Recalculate on window resize
    window.addEventListener('resize', calculateSpacing);

    return () => {
      window.removeEventListener('resize', calculateSpacing);
    };
  }, []);

  return (
    <footer 
      className="border-t py-6 sm:py-8"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: 'var(--color-accent-secondary)' + '33',
      }}
    >
      <div className="container-custom">
        <div className="footer-inner">
          <div className="footer-left" ref={leftRef}>
            <p className="text-sm font-light" style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>
              &copy; {new Date().getFullYear()} MenCryToo. All rights reserved.
            </p>
          </div>

          <div className="footer-center" ref={centerRef}>
            <p className="text-sm font-light" style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>
              100% of profits fund men's counselling sessions
            </p>
          </div>

          <div 
            className="footer-right" 
            ref={rightRef}
            style={{ marginLeft: `${rightMargin}px` }}
          >
            <a
              href="https://www.instagram.com/mencrytoo.co/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MenCryToo on Instagram"
              className="inline-flex items-center justify-center transition-all duration-200"
              style={{
                color: 'var(--color-text-primary)',
                opacity: 0.6,
                width: '20px',
                height: '20px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.6';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
              >
                {/* Instagram icon - thin stroke outline */}
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Camera viewfinder circle */}
                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Small dot for lens */}
                <circle
                  cx="17"
                  cy="7"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
