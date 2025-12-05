/* ============================================
    VALIDATION LOGIC - profileValidation.js
   ============================================ */
import Swal from 'sweetalert2';

export const validatePassword = (passwordData) => {
    const { currentPassword, newPassword, confirmPassword } = passwordData;

    // Không nhập gì => OK, không đổi password
    if (!currentPassword && !newPassword && !confirmPassword) {
        return { isValid: true, password: null };
    }

    // Nếu nhập 1 trong 3 field thì phải nhập đủ cả 3
    if (currentPassword || newPassword || confirmPassword) {
        if (!currentPassword) {
            Swal.fire('Lỗi', 'Vui lòng nhập mật khẩu hiện tại', 'error');
            return { isValid: false };
        }
        if (!newPassword) {
            Swal.fire('Lỗi', 'Vui lòng nhập mật khẩu mới', 'error');
            return { isValid: false };
        }
        if (!confirmPassword) {
            Swal.fire('Lỗi', 'Vui lòng xác nhận mật khẩu mới', 'error');
            return { isValid: false };
        }
    }

    // Validate độ dài
    if (newPassword && newPassword.length < 6) {
        Swal.fire('Lỗi', 'Mật khẩu mới phải có ít nhất 6 ký tự', 'error');
        return { isValid: false };
    }

    // Check
    if (newPassword !== confirmPassword) {
        Swal.fire('Lỗi', 'Mật khẩu xác nhận không khớp', 'error');
        return { isValid: false };
    }

    return { isValid: true, password: newPassword };
};

export const buildUpdatePayload = (
    formData,
    avatar,
    passwordValidation,
    passwordData
) => {
    const { username, email, telephone, address, bio, gender } =
        Object.fromEntries(formData);

    const payload = {
        username,
        email,
        telephone,
        address,
        bio,
        avatar,
        gender
    };

    // Thêm password nếu user muốn đổi
    if (passwordValidation.password) {
        payload.password = passwordValidation.password;
        payload.currentPassword = passwordData.currentPassword;
    }

    return payload;
};
