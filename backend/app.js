// server.js
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

// Cấu hình host và port từ .env hoặc mặc định
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Route đơn giản kiểm tra server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Lắng nghe cổng
app.listen(port, host, () => {
  console.log(`🚀 Server is running at http://${host}:${port}`);
});

module.exports = app;
