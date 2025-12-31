import { Link } from 'react-router-dom';

/**
 * Home Page
 * Hero section with brand colors
 */
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-light">
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
            {/* Brand Name */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-brand-primary">
                MenCryToo
              </h1>
              <p className="text-lg sm:text-xl text-brand-secondary font-light">
                Wear the change. Every purchase funds counselling for men.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto space-y-5 bg-white/80 backdrop-blur-sm px-8 py-10 sm:px-12 sm:py-12 rounded-sm">
              <p className="text-xl sm:text-2xl text-brand-dark font-light leading-relaxed">
                MenCryToo exists to raise awareness and provide support for men all over the world who are suffering with mental health issues.
              </p>
              <p className="text-lg sm:text-xl text-brand-dark/80 font-light leading-relaxed">
                All profits from clothing sales are used to fund counselling sessions for those who need them most.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
              <Link
                to="/shop"
                className="px-8 py-3 bg-brand-primary text-white text-sm font-light tracking-wide hover:bg-brand-primary/90 transition-colors duration-200"
              >
                Shop the Collection
              </Link>
              <Link
                to="/how-we-work"
                className="px-8 py-3 border border-brand-primary text-brand-primary text-sm font-light tracking-wide hover:bg-brand-light transition-colors duration-200"
              >
                Learn How We Work
              </Link>
            </div>

            {/* Supporting Statement */}
            <p className="text-sm sm:text-base text-brand-secondary font-light pt-2">
              Clothing with purpose. Transparency by design. Support where it's needed most.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
