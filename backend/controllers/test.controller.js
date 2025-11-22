
import jwt from "jsonwebtoken";
export const requireLogin = async(req,res) => {
    const token = req.cookies.token;
    console.log(token);

    if(!token) return res.status(401).json({message: "Not Authenticated!"})
        
    jwt.verify(token,process.env.JWT_SECRET_KEY,async(err,payload)=>{
        if(err) return res.status(403).json({message: 'Token is invalid!'})
    })
    res.status(200).json({message: "You are Authenticated!"})
}
export const requireLogout = async(req,res) => {}
export const requireAdmin = async(req,res) => {
    const token = req.cookies.token;
    console.log(token);

    if(!token) return res.status(401).json({message: "Not Authenticated!"})
        
    jwt.verify(token,process.env.JWT_SECRET_KEY,async(err,payload)=>{
        if(err) return res.status(403).json({message: 'Token is invalid!'})
        if(!payload.isAdmin) return res.status(403).json({message: 'Not authorized!'})
    })
    res.status(200).json({message: "You are Authenticated!"})
}