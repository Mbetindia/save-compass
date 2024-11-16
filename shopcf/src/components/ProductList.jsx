// src/components/ProductList.jsx

import PropTypes from 'prop-types';
import Product from './Product';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))
      )}
    </div>
  );
};

// Prop Types Validation
ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;
