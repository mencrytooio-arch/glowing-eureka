/**
 * Call-to-Action Component
 * Displays a call-to-action section for e-commerce
 */
const CTA = () => {
  return (
    <section className="bg-neutral-900 text-white py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Wear Your Truth?
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
            Join thousands of men who are redefining masculinity through authentic self-expression.
          </p>
          <a
            href="#products"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Shop the Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
