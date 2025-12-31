/**
 * Footer Component
 * Minimal footer with brand colors
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-secondary/20 bg-brand-dark py-6 sm:py-8">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-white/70 font-light">
            &copy; {currentYear} MenCryToo. All rights reserved.
          </p>
          <p className="text-sm text-white/70 font-light">
            100% of profits fund men's counselling sessions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
