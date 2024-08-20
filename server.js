const express = require('express');

const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});


connection.connect(error => {
  if (error) {
    console.error('Ошибка подключения к базе данных:', error);
    throw error;
  }
  console.log('Подключение к базе данных успешно установлено');
});

// Маршрут для отримання всіх категорій
app.get('/api/categories', (req, res) => {
  const query = 'SELECT * FROM categories';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Помилка при виконанні запиту:', error);
      res.status(500).json({ error });
      return;
    }
    res.json(results);
  });
});

// Маршрут для отримання всіх типів
app.get('/api/types', (req, res) => {
  const query = 'SELECT * FROM types';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Помилка при виконанні запиту:', error);
      res.status(500).json({ error });
      return;
    }
    res.json(results);
  });
});

// Маршрут для отримання всіх товарів
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Помилка при виконанні запиту:', error);
      res.status(500).json({ error });
      return;
    }
    res.json(results);
  });
});

// Маршрут для отримання товару за ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const query = 'SELECT * FROM products WHERE id = ?';
  connection.query(query, [productId], (error, results) => {
    if (error) {
      console.error('Помилка при виконанні запиту:', error);
      res.status(500).json({ error });
      return;
    }
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
});


app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});