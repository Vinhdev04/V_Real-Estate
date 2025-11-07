import Swal from "sweetalert2";

//  Thông báo thành công
export const handleSubmitSuccess = (values) => {
  Swal.fire({
    title: "🎉 Gửi thành công!",
    text: `Cảm ơn ${values.username}, chúng tôi sẽ liên hệ sớm nhất.`,
    icon: "success",
    confirmButtonText: "OK",
  });
};

//  Thông báo thất bại
export const handleSubmitError = (error) => {
  Swal.fire({
    title: "😢 Gửi thất bại!",
    text: error || "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
    icon: "error",
    confirmButtonText: "Thử lại",
  });
};
