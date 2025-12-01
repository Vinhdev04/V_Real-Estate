/* ==============================
     MIDDLEWARE: VERIFY TOKEN
 ============================== */
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({ message: "Chưa xác thực! Vui lòng đăng nhập." });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) {
            return res.status(403).json({ message: "Token không hợp lệ hoặc đã hết hạn!" });
        }

        req.userId = payload.userId; 
        next();
    });
}