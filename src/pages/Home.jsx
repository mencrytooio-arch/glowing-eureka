import { Link } from 'react-router-dom';

/**
 * Home Page
 * Hero section with brand name, mission statement, and CTAs
 */
const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="MenCryToo"
            className="w-full h-full object-cover opacity-10"
            onError={(e) => {
              // Try fallback image
              if (e.target.src.includes('/hero.jpg')) {
                e.target.src = '/hero-image.avif';
              } else {
                e.target.style.display = 'none';
              }
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-12 sm:space-y-16">
            {/* Brand Name */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900">
                MenCryToo
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 font-light">
                A clothing brand funding counselling for men in need.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl sm:text-2xl text-neutral-700 font-light leading-relaxed">
                MenCryToo exists to raise awareness and provide support for men all over the world who are suffering with mental health issues.
              </p>
              <p className="text-lg sm:text-xl text-neutral-600 font-light leading-relaxed">
                All profits from clothing sales are used to fund counselling sessions for those who need them most.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
              <Link
                to="/shop"
                className="px-8 py-3 bg-neutral-900 text-white text-sm font-light tracking-wide hover:bg-neutral-800 transition-colors duration-200"
              >
                Shop the Collection
              </Link>
              <Link
                to="/how-we-work"
                className="px-8 py-3 border border-neutral-900 text-neutral-900 text-sm font-light tracking-wide hover:bg-neutral-50 transition-colors duration-200"
              >
                Learn How We Work
              </Link>
            </div>

            {/* Supporting Statement */}
            <p className="text-sm sm:text-base text-neutral-500 font-light pt-8">
              Clothing with purpose. Transparency by default. Support where it's needed most.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
