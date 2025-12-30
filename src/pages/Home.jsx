import { Link } from 'react-router-dom';

/**
 * Home Page
 * Hero section with warm colors and improved spacing
 */
const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section with warm background */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-warm-100">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="MenCryToo"
            className="w-full h-full object-cover opacity-15"
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
        <div className="relative z-10 container-custom section-spacing">
          <div className="max-w-4xl mx-auto text-center space-y-12 sm:space-y-16">
            {/* Brand Name */}
            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-warm-900">
                MenCryToo
              </h1>
              <p className="text-lg sm:text-xl text-warm-600 font-light">
                A clothing brand funding counselling for men in need.
              </p>
            </div>

            {/* Mission Statement - on subtle background */}
            <div className="max-w-3xl mx-auto space-y-6 bg-white/60 backdrop-blur-sm px-8 py-10 sm:px-12 sm:py-14 rounded-sm">
              <p className="text-xl sm:text-2xl text-neutral-800 font-light leading-relaxed">
                MenCryToo exists to raise awareness and provide support for men all over the world who are suffering with mental health issues.
              </p>
              <p className="text-lg sm:text-xl text-neutral-700 font-light leading-relaxed">
                All profits from clothing sales are used to fund counselling sessions for those who need them most.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
              <Link
                to="/shop"
                className="px-8 py-3 bg-warm-700 text-white text-sm font-light tracking-wide hover:bg-warm-800 transition-colors duration-200"
              >
                Shop the Collection
              </Link>
              <Link
                to="/how-we-work"
                className="px-8 py-3 border border-warm-700 text-warm-800 text-sm font-light tracking-wide hover:bg-warm-100 transition-colors duration-200"
              >
                Learn How We Work
              </Link>
            </div>

            {/* Supporting Statement */}
            <p className="text-sm sm:text-base text-warm-600 font-light pt-4">
              Clothing with purpose. Transparency by default. Support where it's needed most.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
