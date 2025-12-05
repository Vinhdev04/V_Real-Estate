/* ============================================
        HOOK - useEditProfile.js
============================================ */
import { useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL_UPDATE_PROFILE } from '../../../constant/api';
import Swal from 'sweetalert2';

export const useEditProfile = () => {
    const { currentUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [avatar, setAvatar] = useState(currentUser?.avatar || '');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prev) => ({ ...prev, [name]: value }));
    };

    const resetPasswordFields = () => {
        setPasswordData({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };

    const submitProfile = async (payload) => {
        setIsLoading(true);
        try {
            const res = await axios.put(
                `${API_URL_UPDATE_PROFILE}/${currentUser.id}`,
                payload,
                { withCredentials: true }
            );

            const updatedUserInfo = res.data.user;
            updateUser(updatedUserInfo);
            localStorage.setItem('user', JSON.stringify(updatedUserInfo));

            Swal.fire('Thành công!', 'Cập nhật hồ sơ thành công', 'success');
            resetPasswordFields();
            navigate('/profile');

            return { success: true };
        } catch (err) {
            if (err.response?.status === 401) {
                Swal.fire({
                    title: 'Phiên đăng nhập hết hạn',
                    text: 'Vui lòng đăng nhập lại',
                    icon: 'warning'
                }).then(() => {
                    localStorage.removeItem('user');
                    window.location.href = '/login';
                });
                return { success: false };
            }

            const msg = err.response?.data?.message || 'Cập nhật thất bại';
            Swal.fire('Lỗi', msg, 'error');
            return { success: false };
        } finally {
            setIsLoading(false);
        }
    };

    const cancelEdit = () => {
        Swal.fire({
            title: 'Hủy thay đổi?',
            text: 'Tất cả thay đổi chưa lưu sẽ bị mất.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có, hủy bỏ',
            cancelButtonText: 'Không',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6'
        }).then((result) => {
            if (result.isConfirmed) {
                setAvatar(currentUser?.avatar || '');
                resetPasswordFields();
                navigate('/profile');
            }
        });
    };

    return {
        // State
        currentUser,
        avatar,
        setAvatar,
        isLoading,
        showPassword,
        setShowPassword,
        showNewPassword,
        setShowNewPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        passwordData,

        // Methods
        handlePasswordChange,
        submitProfile,
        cancelEdit
    };
};
