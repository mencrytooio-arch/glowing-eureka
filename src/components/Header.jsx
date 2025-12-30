import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

/**
 * Minimal Header Component
 * Clean navigation with logo support
 */
const Header = () => {
  const location = useLocation();
  const [logoError, setLogoError] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b border-neutral-200 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <nav className="container-custom py-6 sm:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {!logoError ? (
              <img
                src="/logo.svg"
                alt="MenCryToo"
                className="h-8 sm:h-10 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-xl font-light tracking-tight">
                MenCryToo
              </span>
            )}
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 sm:space-x-12">
            <Link
              to="/"
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-neutral-900 border-b border-neutral-900 pb-1' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                isActive('/shop') 
                  ? 'text-neutral-900 border-b border-neutral-900 pb-1' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-neutral-900 border-b border-neutral-900 pb-1' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/how-we-work"
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                isActive('/how-we-work') 
                  ? 'text-neutral-900 border-b border-neutral-900 pb-1' 
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              How We Work
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
