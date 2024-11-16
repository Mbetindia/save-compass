// config/db.js
const mysql = require('mysql2');

// Directly define database connection details here
const db = mysql.createConnection({
  host: 'localhost',        // Replace with your database host
  user: 'root', // Replace with your database user
  password: 'WJ28@krhps',  // Replace with your database password
  database: 'shop' // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

module.exports = db;
