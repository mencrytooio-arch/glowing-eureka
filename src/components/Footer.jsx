/**
 * Minimal Footer Component
 * With warm colors
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-200 bg-warm-50 py-12 sm:py-16">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-warm-600 font-light">
            &copy; {currentYear} MenCryToo. All rights reserved.
          </p>
          <p className="text-sm text-warm-600 font-light">
            100% of profits fund men's counselling sessions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
