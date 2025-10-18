// server.js
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();

// Cấu hình host và port từ .env hoặc mặc định
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Route đơn giản kiểm tra server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Lắng nghe cổng
app.listen(port, host, () => {
  console.log(`🚀 Server is running at http://${host}:${port}`);
});

module.exports = app;
