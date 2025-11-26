// src/hooks/useFormatTime.js
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


const useFormatTime = () => {
    const { currentUser } = useContext(AuthContext);
    let formattedDate = "";
    
    // Đảm bảo currentUser và createdAt tồn tại
    if (currentUser?.createdAt) { 
        try {
            // Date object từ chuỗi ISO
            const date = new Date(currentUser.createdAt);

            // Định dạng ngày tháng (D/M/Y)
            formattedDate = date.toLocaleDateString("vi-VN", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        } catch (err) {
            console.error("Lỗi định dạng ngày:", err);
            formattedDate = "Ngày không hợp lệ";
        }
    }
    
   
    return formattedDate; 
};

export default useFormatTime;