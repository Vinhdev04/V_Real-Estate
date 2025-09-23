import express from "express";
const PORT = process.env.PORT || 3000;
// import router
import postRoute from "./routes/post.route.js";
// import auth route
import authRoute from "./routes/auth.route.js";
const app = express();
app.use(express.json());

// use the router
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/api/test",(req,res)=> {
    res.send("Test Endpoint");
})

app.get("/api",(req,res)=> {
    res.send("API Endpoint");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})  ;
export default app;
