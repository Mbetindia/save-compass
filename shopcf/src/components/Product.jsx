// src/components/Product.jsx
import PropTypes from 'prop-types';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

// Prop Types Validation
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Product;
