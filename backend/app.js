/* ==============================
    SERVER: APP
 ============================== */
// Import dotenv trước tiên
import dotenv from "dotenv";
dotenv.config();

import path from "path";
import testRouter from "./routes/test.route.js";

// Import các thư viện
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import routes
import authRoute from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
const isProduction = process.env.NODE_ENV === "production";

// Config host & port
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:8080",
  "https://v-real-estate.netlify.app",
];

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // Cho phép các origin trong danh sách, hoặc nếu không có origin (ví dụ: Postman, request cùng server)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Route test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRouter);
app.use("/api/test", testRouter);

app.listen(port, host, () => {
  console.log(`🚀 Server is running at http://${host}:${port}`);
});

export default app;
