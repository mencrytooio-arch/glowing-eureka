/**
 * Hero Component
 * Displays the main hero section with hero image and site branding
 */
const Hero = () => {
  return (
    <section className="relative bg-neutral-900 text-white min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.avif"
          alt="MenCryToo Hero"
          className="w-full h-full object-cover"
          style={{ opacity: 0.6 }}
          onError={(e) => {
            console.error('Hero image failed to load');
            e.target.style.display = 'none';
          }}
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            MenCryToo
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-100 font-light leading-relaxed mb-8">
            Authentic Clothing for Authentic Men
          </p>
          <p className="text-lg sm:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Embrace your emotions. Express yourself. Wear your truth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
