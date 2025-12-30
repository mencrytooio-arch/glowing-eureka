/**
 * Section Component
 * Reusable section wrapper with consistent spacing and optional background
 */
const Section = ({ id, title, subtitle, children, className = "", bgColor = "bg-white" }) => {
  return (
    <section id={id} className={`${bgColor} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12 sm:mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;


