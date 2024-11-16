// src/components/Cart.jsx
import PropTypes from 'prop-types';

const Cart = ({ cartItems, onRemoveFromCart, onUpdateCartItem }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.productId} className="cart-item">
            <h4>{item.name}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>
              Quantity:
              <button onClick={() => onUpdateCartItem(item.productId, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
              {item.quantity}
              <button onClick={() => onUpdateCartItem(item.productId, item.quantity + 1)}>+</button>
            </p>
            <button onClick={() => onRemoveFromCart(item.productId)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

// Prop Types Validation
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  onUpdateCartItem: PropTypes.func.isRequired,
};

export default Cart;
