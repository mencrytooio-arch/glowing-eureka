/**
 * ProductCard Component
 * Displays a clothing product with image, title, price, and purchase button
 */
const ProductCard = ({ product }) => {
  const { name, price, description, image, imageAlt } = product;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-accent transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="aspect-square bg-neutral-100 overflow-hidden">
        <img
          src={image || '/placeholder-product.jpg'}
          alt={imageAlt || name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          {name}
        </h3>
        {description && (
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-neutral-900">
            ${price}
          </span>
          <button className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

