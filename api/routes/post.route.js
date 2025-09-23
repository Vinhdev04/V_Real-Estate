import express from "express";
// create a router
const router = express.Router();

router.get("/test",(req,res)=>{
    res.send("This is a test route from post.route.js");
});

router.post("/test",(req,res)=>{
    res.send("This is a POST route from post.route.js");
});

router.put("/test",(req,res)=>{
    res.send("This is a PUT route from post.route.js");
});

router.delete("/test",(req,res)=>{
    res.send("This is a DELETE route from post.route.js");
});

export default router;