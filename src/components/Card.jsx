/**
 * Card Component
 * Reusable card component for displaying content cards
 */
const Card = ({ title, description, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-neutral-200 p-6 sm:p-8 hover:shadow-md hover:border-accent transition-all duration-300 ${className}`}
    >
      {title && (
        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-3">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default Card;


