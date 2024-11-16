// server.js
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Import the db connection

const app = express();
const port = 4000; // You can still adjust this manually or use a different config file

// Middleware
app.use(cors());
app.use(express.json());

// Get all products
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products';

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Add product to the products table
app.post('/api/add-product', (req, res) => {
  const { name, price } = req.body;
  const insertProductQuery = 'INSERT INTO products (name, price) VALUES (?, ?)';

  db.query(insertProductQuery, [name, price], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Product added successfully', productId: result.insertId });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
