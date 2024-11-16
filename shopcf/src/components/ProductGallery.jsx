import PropTypes from 'prop-types';
import './ProductGallery.css';

const ProductGallery = ({ products, onAddToCart }) => (
  <div className="product-gallery">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

// Sample Products Array (for demo purposes)
ProductGallery.defaultProps = {
  products: [
    { id: 1, name: 'Laptop', price: 999.99, image: '/images/laptop.jpg' },
    { id: 2, name: 'Mobile Phone', price: 599.99, image: '/images/mobile.jpg' },
    { id: 3, name: 'Television', price: 899.99, image: '/images/tv.jpg' },
    { id: 4, name: 'Refrigerator', price: 1199.99, image: '/images/fridge.jpg' },
    { id: 5, name: 'Mixer', price: 199.99, image: '/images/mixer.jpg' },
    { id: 6, name: 'Headphones', price: 149.99, image: '/images/headphones.jpg' },
    { id: 7, name: 'Smart Watch', price: 299.99, image: '/images/smartwatch.jpg' },
    { id: 8, name: 'Tablet', price: 499.99, image: '/images/tablet.jpg' },
    { id: 9, name: 'Camera', price: 799.99, image: '/images/camera.jpg' },
    { id: 10, name: 'Gaming Console', price: 399.99, image: '/images/console.jpg' },
  ],
};

// Prop validation
ProductGallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};


export default ProductGallery;
