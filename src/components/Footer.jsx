/**
 * Minimal Footer Component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white mt-24 sm:mt-32">
      <div className="container-custom py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-neutral-500 font-light">
            &copy; {currentYear} MenCryToo. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500 font-light">
            100% of profits fund men's counselling sessions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
