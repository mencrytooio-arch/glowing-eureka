import { Link, useLocation } from 'react-router-dom';

/**
 * Header Component
 * Clean navigation with transparent logo
 */
const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="backdrop-blur-sm sticky top-0 z-50 border-b" style={{ borderColor: 'var(--color-accent-secondary)' + '33', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <nav className="container-custom py-6 sm:py-8">
        <div className="flex items-center justify-between">
          {/* Logo - Transparent background, 3x size */}
          <Link to="/" className="flex items-center" style={{ padding: '0', margin: '0' }}>
            <img
              src="/logo.png"
              alt="MenCryToo"
              className="h-36 sm:h-42 w-auto"
              style={{ backgroundColor: 'transparent', padding: '0', margin: '0', display: 'block' }}
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

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 sm:space-x-12">
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
