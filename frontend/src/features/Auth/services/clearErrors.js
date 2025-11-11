 import { useAuth } from "../../../hooks/useAuth";

 const clearError = (fieldName,errors, setErrors) => {

    // Kiểm tra xem lỗi đó có tồn tại không
    if (errors[fieldName]) {
      // Cập nhật lại state errors, loại bỏ lỗi của trường đó
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[fieldName]; // Xóa key (lỗi) của trường đó
        return newErrors;
      });
    }
  };
  export default clearError;