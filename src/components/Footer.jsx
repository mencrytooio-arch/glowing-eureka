/**
 * Footer Component
 * Footer with brand colors
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t py-6 sm:py-8"
      style={{ 
        backgroundColor: 'var(--color-dark-section)',
        borderColor: 'var(--color-accent-secondary)' + '33',
      }}
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm font-light" style={{ color: 'var(--color-background)', opacity: 0.7 }}>
            &copy; {currentYear} MenCryToo. All rights reserved.
          </p>
          <p className="text-sm font-light" style={{ color: 'var(--color-background)', opacity: 0.7 }}>
            100% of profits fund men's counselling sessions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
