
// Import dotenv trước tiên
import dotenv from 'dotenv';
dotenv.config();

// Import các thư viện
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import routes
import authRoute from './routes/auth.route.js';

const app = express();

// Config host & port
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

// Middleware
app.use(morgan('dev'));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// Route test
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use("/api/auth", authRoute);

// Start server
app.listen(port, host, () => {
  console.log(`🚀 Server is running at http://${host}:${port}`);
});

export default app;