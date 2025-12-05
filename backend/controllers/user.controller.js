/* ==============================
     CONTROLLER: USER 
 ============================== */
import prisma from '../library/prisma.lib.js';
import bcrypt from 'bcrypt';
import fs from 'fs';
import path from 'path';

import logger from '../logs/logger.js';

// GET ALL USERS
const getUsers = async (req, res) => {
    logger.info('Yêu cầu lấy danh sách người dùng');

    try {
        const users = await prisma.user.findMany();

        logger.success('Lấy danh sách người dùng thành công', {
            count: users.length
        });

        res.status(200).json(users);
    } catch (error) {
        logger.error('Lỗi khi lấy danh sách người dùng', error);
        res.status(500).json({
            message: 'Thất bại, Không thể lấy dữ liệu người dùng!'
        });
    }
};

// GET USER BY ID
const getUser = async (req, res) => {
    const id = req.params.id;

    logger.info('Yêu cầu lấy thông tin người dùng', { userId: id });

    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });

        if (!user) {
            logger.warn('Không tìm thấy người dùng', { userId: id });
            return res
                .status(404)
                .json({ message: 'Không tìm thấy người dùng!' });
        }

        const { password, ...userInfo } = user;

        logger.success('Lấy thông tin người dùng thành công', { userId: id });

        res.status(200).json(userInfo);
    } catch (error) {
        logger.error('Lỗi khi lấy thông tin người dùng', error);
        res.status(500).json({
            message: `Thất bại, Không thể lấy dữ liệu người dùng!, ID: ${id}`
        });
    }
};

// UPDATE USER WITH PASSWORD CHANGE
const updateUser = async (req, res) => {
    const id = req.params.id;
    const userTokenId = req.userId;
    const { password, currentPassword, avatar, ...inputs } = req.body;

    logger.info('Yêu cầu cập nhật thông tin người dùng', {
        userId: id,
        tokenUserId: userTokenId,
        hasPasswordChange: !!(password && currentPassword)
    });

    // Kiểm tra authorization
    if (id !== userTokenId) {
        logger.warn('Cập nhật thất bại - Không có quyền', {
            userId: id,
            tokenUserId: userTokenId
        });
        return res.status(403).json({
            message: 'Bạn không có quyền cập nhật thông tin người dùng khác!'
        });
    }

    try {
        // Kiểm tra user có tồn tại không
        const existingUser = await prisma.user.findUnique({
            where: { id }
        });

        if (!existingUser) {
            logger.warn('Cập nhật thất bại - Không tìm thấy người dùng', {
                userId: id
            });
            return res
                .status(404)
                .json({ message: 'Không tìm thấy người dùng!' });
        }

        let updateData = {};

        // Xử lý các field thông thường
        if (inputs.username) updateData.username = inputs.username;
        if (inputs.email) updateData.email = inputs.email;
        if (inputs.telephone) updateData.telephone = inputs.telephone;
        if (inputs.gender) updateData.gender = inputs.gender;
        if (inputs.address !== undefined) updateData.address = inputs.address;
        if (inputs.bio !== undefined) updateData.bio = inputs.bio;

        // Xử lý avatar từ Cloudinary
        if (avatar && avatar.trim() !== '') {
            updateData.avatar = avatar;
            logger.debug('Cập nhật avatar', { userId: id, avatarPath: avatar });
        }

        // XỬ LÝ ĐỔI MẬT KHẨU
        if (password && currentPassword) {
            logger.info('Yêu cầu đổi mật khẩu', { userId: id });

            // Kiểm tra độ dài mật khẩu mới
            if (password.length < 6) {
                logger.warn('Đổi mật khẩu thất bại - Mật khẩu quá yếu', {
                    userId: id
                });
                return res.status(400).json({
                    message: 'Mật khẩu mới phải có ít nhất 6 ký tự!'
                });
            }

            // Kiểm tra nếu user không có password (tài khoản Google)
            if (!existingUser.password) {
                logger.warn('Đổi mật khẩu thất bại - Tài khoản Google', {
                    userId: id
                });
                return res.status(400).json({
                    message:
                        'Tài khoản Google không thể đổi mật khẩu theo cách này. Vui lòng sử dụng chức năng đặt lại mật khẩu.'
                });
            }

            // Xác thực mật khẩu hiện tại
            const isPasswordCorrect = await bcrypt.compare(
                currentPassword,
                existingUser.password
            );

            if (!isPasswordCorrect) {
                logger.warn(
                    'Đổi mật khẩu thất bại - Mật khẩu hiện tại không đúng',
                    { userId: id }
                );
                return res.status(401).json({
                    message: 'Mật khẩu hiện tại không đúng!'
                });
            }

            // Hash mật khẩu mới
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;

            logger.info('Đổi mật khẩu thành công', { userId: id });
        }

        logger.debug('Dữ liệu cập nhật', {
            userId: id,
            fields: Object.keys(updateData)
        });

        // Kiểm tra có dữ liệu để update không
        if (Object.keys(updateData).length === 0) {
            logger.warn('Cập nhật thất bại - Không có dữ liệu', { userId: id });
            return res
                .status(400)
                .json({ message: 'Không có dữ liệu để cập nhật!' });
        }

        // Cập nhật user
        const updatedUser = await prisma.user.update({
            where: { id },
            data: updateData
        });

        logger.success('Cập nhật người dùng thành công', {
            userId: id,
            updatedFields: Object.keys(updateData)
        });

        // Loại bỏ password khỏi response
        const { password: userPassword, ...userInfo } = updatedUser;

        res.status(200).json({
            message: password
                ? 'Cập nhật thông tin và mật khẩu thành công!'
                : 'Cập nhật thông tin người dùng thành công!',
            user: userInfo
        });
    } catch (error) {
        logger.error('Lỗi hệ thống khi cập nhật người dùng', error);

        // Xử lý lỗi unique constraint
        if (error.code === 'P2002') {
            return res.status(400).json({
                message:
                    'Thông tin bị trùng lặp (email hoặc username đã tồn tại)!'
            });
        }

        res.status(500).json({
            message: 'Cập nhật thất bại!',
            error: error.message
        });
    }
};

// DELETE USER
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const userTokenId = req.userId;

    logger.info('Yêu cầu xóa tài khoản', {
        userId: id,
        tokenUserId: userTokenId
    });

    if (id !== userTokenId) {
        logger.warn('Xóa tài khoản thất bại - Không có quyền', {
            userId: id,
            tokenUserId: userTokenId
        });
        return res.status(403).json({
            message: 'Bạn không có quyền xóa tài khoản người dùng khác!'
        });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { id }
        });

        if (!existingUser) {
            logger.warn('Xóa tài khoản thất bại - Không tìm thấy người dùng', {
                userId: id
            });
            return res
                .status(404)
                .json({ message: 'Không tìm thấy người dùng!' });
        }

        // Xóa avatar nếu có
        if (existingUser.avatar && !existingUser.avatar.includes('default')) {
            const avatarPath = path.join(process.cwd(), existingUser.avatar);
            if (fs.existsSync(avatarPath)) {
                fs.unlinkSync(avatarPath);
                logger.debug('Đã xóa avatar', { userId: id, avatarPath });
            }
        }

        await prisma.user.delete({
            where: { id }
        });

        res.clearCookie('token');

        logger.success('Xóa tài khoản thành công', { userId: id });

        res.status(200).json({
            message: 'Xóa tài khoản thành công!'
        });
    } catch (error) {
        logger.error('Lỗi khi xóa tài khoản', error);

        if (error.code === 'P2003') {
            return res.status(400).json({
                message: 'Không thể xóa người dùng vì có dữ liệu liên quan!'
            });
        }

        res.status(500).json({
            message: 'Thất bại, Không thể xóa dữ liệu người dùng!'
        });
    }
};

export { getUsers, getUser, updateUser, deleteUser };
