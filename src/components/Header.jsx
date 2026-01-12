import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header Component
 * Clean navigation with transparent logo
 * Mobile: Hamburger menu
 * Desktop: Inline navigation
 */
const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Close menu when route changes and reset state on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    // Return focus to hamburger button on route change
    hamburgerRef.current?.focus();
  }, [location.pathname]);
  
  // Ensure menu is closed on initial render
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Keyboard navigation and focus trap
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        hamburgerRef.current?.focus();
      }
      
      // Tab trap inside menu
      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // Return focus to hamburger button when menu closes
    hamburgerRef.current?.focus();
  };

  return (
    <>
    <header className="backdrop-blur-sm sticky top-0 z-50 border-b header-mobile" style={{ borderColor: 'var(--color-accent-secondary)' + '33', backgroundColor: 'rgba(255, 255, 255, 0.95)', margin: '0', padding: '0', lineHeight: '0' }}>
      <nav className="container-custom py-0" style={{ marginTop: '0', marginBottom: '0', paddingTop: '0', paddingBottom: '0', lineHeight: '0' }}>
        <div className="flex items-center justify-between header-nav-wrapper" style={{ marginTop: '0', marginBottom: '0', paddingTop: '0', paddingBottom: '0', lineHeight: '0' }}>
          {/* Logo - Transparent background, 3x size */}
          <Link to="/" className="flex items-center header-logo" style={{ padding: '0', margin: '0', lineHeight: '0', paddingTop: '0', paddingBottom: '0', marginTop: '0', marginBottom: '0', display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo.png"
              alt="MenCryToo"
              className="h-36 sm:h-42 w-auto"
              style={{ backgroundColor: 'transparent', padding: '0', margin: '0', display: 'block', verticalAlign: 'middle', lineHeight: '0', transform: 'scale(0.75)' }}
              onError={(e) => {
                if (e.target.src.includes('/logo.png')) {
                  e.target.src = '/logo.svg';
                } else {
                  e.target.style.display = 'none';
                  if (!e.target.nextSibling) {
                    const textLogo = document.createElement('span');
                    textLogo.className = 'text-xl font-light tracking-tight';
                    textLogo.style.color = 'var(--color-text-primary)';
                    textLogo.textContent = 'MenCryToo';
                    e.target.parentElement.appendChild(textLogo);
                  }
                }
              }}
            />
          </Link>

          {/* Hamburger Button (Mobile Only) */}
          <button
            ref={hamburgerRef}
            className="hamburger-button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              minWidth: '44px',
              minHeight: '44px',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <span className="hamburger-line" style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-text-primary)', transition: 'all 0.3s ease' }}></span>
            <span className="hamburger-line" style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-text-primary)', transition: 'all 0.3s ease' }}></span>
            <span className="hamburger-line" style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-text-primary)', transition: 'all 0.3s ease' }}></span>
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="nav-links-desktop flex items-center space-x-8 sm:space-x-12">
            <Link
              to="/"
              className="text-sm font-light tracking-wide transition-colors duration-200"
              style={{
                color: isActive('/') ? 'var(--color-accent-primary)' : 'var(--color-text-primary)',
                borderBottom: isActive('/') ? '1px solid var(--color-accent-primary)' : 'none',
                paddingBottom: isActive('/') ? '4px' : '0',
              }}
              onMouseEnter={(e) => {
                if (!isActive('/')) {
                  e.target.style.color = 'var(--color-accent-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/')) {
                  e.target.style.color = 'var(--color-text-primary)';
                }
              }}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-light tracking-wide transition-colors duration-200"
              style={{
                color: isActive('/shop') ? 'var(--color-accent-primary)' : 'var(--color-text-primary)',
                borderBottom: isActive('/shop') ? '1px solid var(--color-accent-primary)' : 'none',
                paddingBottom: isActive('/shop') ? '4px' : '0',
              }}
              onMouseEnter={(e) => {
                if (!isActive('/shop')) {
                  e.target.style.color = 'var(--color-accent-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/shop')) {
                  e.target.style.color = 'var(--color-text-primary)';
                }
              }}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-sm font-light tracking-wide transition-colors duration-200"
              style={{
                color: isActive('/about') ? 'var(--color-accent-primary)' : 'var(--color-text-primary)',
                borderBottom: isActive('/about') ? '1px solid var(--color-accent-primary)' : 'none',
                paddingBottom: isActive('/about') ? '4px' : '0',
              }}
              onMouseEnter={(e) => {
                if (!isActive('/about')) {
                  e.target.style.color = 'var(--color-accent-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/about')) {
                  e.target.style.color = 'var(--color-text-primary)';
                }
              }}
            >
              About
            </Link>
            <Link
              to="/how-we-work"
              className="text-sm font-light tracking-wide transition-colors duration-200"
              style={{
                color: isActive('/how-we-work') ? 'var(--color-accent-primary)' : 'var(--color-text-primary)',
                borderBottom: isActive('/how-we-work') ? '1px solid var(--color-accent-primary)' : 'none',
                paddingBottom: isActive('/how-we-work') ? '4px' : '0',
              }}
              onMouseEnter={(e) => {
                if (!isActive('/how-we-work')) {
                  e.target.style.color = 'var(--color-accent-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/how-we-work')) {
                  e.target.style.color = 'var(--color-text-primary)';
                }
              }}
            >
              How We Work
            </Link>
            <Link
              to="/enquiry-form"
              className="text-sm font-light tracking-wide transition-colors duration-200"
              style={{
                color: isActive('/enquiry-form') ? 'var(--color-accent-primary)' : 'var(--color-text-primary)',
                borderBottom: isActive('/enquiry-form') ? '1px solid var(--color-accent-primary)' : 'none',
                paddingBottom: isActive('/enquiry-form') ? '4px' : '0',
              }}
              aria-current={isActive('/enquiry-form') ? 'page' : undefined}
              onMouseEnter={(e) => {
                if (!isActive('/enquiry-form')) {
                  e.target.style.color = 'var(--color-accent-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/enquiry-form')) {
                  e.target.style.color = 'var(--color-text-primary)';
                }
              }}
            >
              Enquiry Form
            </Link>
          </div>
        </div>
      </nav>
    </header>
    {typeof document !== 'undefined' && isMenuOpen && createPortal(
      <div
        ref={menuRef}
        id="mobile-menu"
        className="mobile-menu"
        aria-hidden={!isMenuOpen}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="mobile-menu-close"
        >
          ✕
        </button>

        {/* Mobile Navigation Links - Full height, all items visible */}
        <nav 
          aria-label="Mobile navigation"
          className="mobile-nav-links-wrapper"
        >
          <Link
            to="/"
            onClick={closeMenu}
            className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={closeMenu}
            className={`mobile-nav-link ${isActive('/shop') ? 'active' : ''}`}
            aria-current={isActive('/shop') ? 'page' : undefined}
          >
            Shop
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            About
          </Link>
          <Link
            to="/how-we-work"
            onClick={closeMenu}
            className={`mobile-nav-link ${isActive('/how-we-work') ? 'active' : ''}`}
            aria-current={isActive('/how-we-work') ? 'page' : undefined}
          >
            How We Work
          </Link>
          <Link
            to="/enquiry-form"
            onClick={closeMenu}
            className={`mobile-nav-link ${isActive('/enquiry-form') ? 'active' : ''}`}
            aria-current={isActive('/enquiry-form') ? 'page' : undefined}
          >
            Enquiry Form
          </Link>
        </nav>
      </div>,
      document.body
    )}
    </>
  );
};

export default Header;
