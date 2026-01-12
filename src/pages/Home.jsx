import { Link } from 'react-router-dom';
import ImpactTracker from '../components/ImpactTracker';
import EmailSignup from '../components/EmailSignup';

/**
 * Home Page
 * Hero section with transparent logo and improved text legibility
 */
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section section-hero">
        <div className="relative hero-content-wrapper flex items-center justify-center" style={{ backgroundColor: 'var(--color-background)' }}>
          {/* Hero Image Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.jpg"
              alt="MenCryToo"
              className="w-full h-full object-cover opacity-10"
              onError={(e) => {
                if (e.target.src.includes('/hero.jpg')) {
                  e.target.src = '/hero-image.avif';
                } else {
                  e.target.style.display = 'none';
                }
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 container-custom py-20 sm:py-24">
            <div className="max-w-4xl mx-auto text-center space-y-10 sm:space-y-12">
              {/* Logo - Transparent background, 3x size, not clickable */}
              <div className="flex justify-center hero-logo-container" style={{ margin: '0', padding: '0', paddingTop: '0', paddingBottom: '0', lineHeight: '0', display: 'flex', alignItems: 'center' }}>
                <img
                  src="/logo.png"
                  alt="MenCryToo"
                  className="h-72 sm:h-84 lg:h-96 w-auto pt-10 sm:pt-0"
                  style={{ backgroundColor: 'transparent', padding: '0', margin: '0', display: 'block', verticalAlign: 'middle', lineHeight: '0', transform: 'scale(0.75)' }}
                  onError={(e) => {
                    if (e.target.src.includes('/logo.png')) {
                      e.target.src = '/logo.svg';
                    } else {
                      e.target.style.display = 'none';
                    }
                  }}
                />
              </div>

              {/* Supporting Line - Matched size and color */}
              <p className="text-lg sm:text-xl font-light" style={{ color: 'var(--color-text-primary)', opacity: 0.95 }}>
                Wear the change. Every purchase funds counselling for men.
              </p>

              {/* Mission Statement */}
              <div 
                className="max-w-3xl mx-auto space-y-5 backdrop-blur-sm px-8 py-10 sm:px-12 sm:py-12 rounded-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              >
                <p className="text-xl sm:text-2xl font-light leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                  MenCryToo exists to raise awareness and provide support for men all over the world who are suffering with mental health issues.
                </p>
                <p className="text-lg sm:text-xl font-light leading-relaxed" style={{ color: 'var(--color-text-primary)', opacity: 0.9 }}>
                  All profits from clothing sales are used to fund counselling sessions for those who need them most.
                </p>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
                <Link
                  to="/shop"
                  className="px-8 py-3 text-sm font-light tracking-wide transition-colors duration-200"
                  style={{ 
                    backgroundColor: 'var(--color-accent-primary)',
                    color: 'var(--color-background)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--color-dark-section)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--color-accent-primary)';
                  }}
                >
                  Shop the Collection
                </Link>
                <Link
                  to="/how-we-work"
                  className="px-8 py-3 text-sm font-light tracking-wide transition-colors duration-200"
                  style={{ 
                    border: '1px solid var(--color-accent-primary)',
                    color: 'var(--color-accent-primary)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--color-background)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  Learn How We Work
                </Link>
              </div>

              {/* Supporting Statement - Matched size and color */}
              <p className="text-lg sm:text-xl font-light pt-2" style={{ color: 'var(--color-text-primary)', opacity: 0.95 }}>
                Clothing with purpose. Transparency by design. Support where it's needed most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Tracker Section */}
      <section className="section section-impact">
        <div className="section-inner">
          <ImpactTracker />
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="section section-email">
        <div className="section-inner">
          <EmailSignup />
        </div>
      </section>
    </>
  );
};

export default Home;
