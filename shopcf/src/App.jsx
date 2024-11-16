import { useState, useEffect } from 'react';
import ProductGallery from './components/ProductGallery';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  
  // State for adding new products
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to add product to the database
  const handleAddProductToDB = async (product) => {
    try {
      const response = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      const data = await response.json();
      console.log(data.message); // Confirm product added
      fetchProducts(); // Refresh product list after adding
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Fetch products from the database
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle form submission for adding new products
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProductToDB(newProduct);
    setNewProduct({ name: '', price: '' }); // Reset the form
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Product Gallery</h1>
      <ProductGallery products={products} onAddToCart={handleAddToCart} />
      
      {/* Form to add a new product */}
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Product Name" 
          value={newProduct.name} 
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
          required 
        />
        <input 
          type="number" 
          placeholder="Product Price" 
          value={newProduct.price} 
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
          required 
        />
        <button type="submit">Add Product</button>
      </form>

      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the cart.</p>
      )}
      <h3>
        Total Bill: $
        {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </h3>
    </div>
  );
};

export default App;
