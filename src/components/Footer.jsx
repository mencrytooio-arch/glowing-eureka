/**
 * Footer Component
 * Footer matching header background and border
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="backdrop-blur-sm py-6 sm:py-8 border-t"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: 'var(--color-accent-secondary)' + '33',
      }}
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm font-light" style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>
            &copy; {currentYear} MenCryToo. All rights reserved.
          </p>
          <p className="text-sm font-light" style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>
            100% of profits fund men's counselling sessions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
