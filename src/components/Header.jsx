import { Link, useLocation } from 'react-router-dom';

/**
 * Header Component
 * Clean navigation with logo image support
 */
const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b border-brand-secondary/20 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container-custom py-6 sm:py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="MenCryToo"
              className="h-8 sm:h-10 w-auto"
              onError={(e) => {
                // Fallback to SVG or text if PNG doesn't exist
                if (e.target.src.includes('/logo.png')) {
                  e.target.src = '/logo.svg';
                } else {
                  e.target.style.display = 'none';
                  if (!e.target.nextSibling) {
                    const textLogo = document.createElement('span');
                    textLogo.className = 'text-xl font-light tracking-tight text-brand-primary';
                    textLogo.textContent = 'MenCryToo';
                    e.target.parentElement.appendChild(textLogo);
                  }
                }
              }}
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 sm:space-x-12">
            <Link
              to="/"
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-brand-primary border-b border-brand-primary pb-1' 
                  : 'text-brand-secondary hover:text-brand-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                isActive('/shop') 
                  ? 'text-brand-primary border-b border-brand-primary pb-1' 
                  : 'text-brand-secondary hover:text-brand-primary'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-brand-primary border-b border-brand-primary pb-1' 
                  : 'text-brand-secondary hover:text-brand-primary'
              }`}
            >
              About
            </Link>
            <Link
              to="/how-we-work"
              className={`text-sm font-light tracking-wide transition-colors duration-200 ${
                isActive('/how-we-work') 
                  ? 'text-brand-primary border-b border-brand-primary pb-1' 
                  : 'text-brand-secondary hover:text-brand-primary'
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
