/* ==============================
     CONTROLLER: USER (WITH DEBUG)
 ============================== */
import prisma from "../library/prisma.lib.js";
import bcrypt from "bcrypt";
import fs from 'fs';
import path from 'path';

// GET ALL USERS
const getUsers = async (req, res) => {
    console.log("--------- Test dữ liệu từ API Postman ---------");
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Thất bại, Không thể lấy dữ liệu người dùng!" });
    }
}

// GET USER BY ID
const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });
        
        if (!user) {
            return res.status(404).json({ message: "Không tìm thấy người dùng!" });
        }
        
        const { password, ...userInfo } = user;
        res.status(200).json(userInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Thất bại, Không thể lấy dữ liệu người dùng!, ID: ${id}` });
    }
}

// UPDATE USER (WITH DETAILED LOGS)
const updateUser = async (req, res) => {
    const id = req.params.id;
    const userTokenId = req.userId;
    const { password, ...inputs } = req.body;

    console.log('\n========== UPDATE USER REQUEST ==========');
    console.log('📋 User ID:', id);
    console.log('🔑 Token User ID:', userTokenId);
    console.log('📝 Request Body:', req.body);
    console.log('📎 File:', req.file);
    console.log('=========================================\n');

    // Kiểm tra authorization
    if (id !== userTokenId) {
        console.log(' Authorization failed: ID mismatch');
        return res.status(403).json({ 
            message: "Bạn không có quyền cập nhật thông tin người dùng khác!"
        });
    }

    try {
        // Kiểm tra user có tồn tại không
        const existingUser = await prisma.user.findUnique({
            where: { id }
        });

        console.log('👤 Existing User:', existingUser);

        if (!existingUser) {
            return res.status(404).json({ message: "Không tìm thấy người dùng!" });
        }

        // Chuẩn bị data để cập nhật
        let updateData = {};

        // Chỉ thêm các field có giá trị
        if (inputs.username !== undefined && inputs.username !== '') {
            updateData.username = inputs.username;
        }
        if (inputs.email !== undefined && inputs.email !== '') {
            updateData.email = inputs.email;
        }
        if (inputs.telephone !== undefined && inputs.telephone !== '') {
            updateData.telephone = inputs.telephone;
        }
        if (inputs.gender !== undefined && inputs.gender !== '') {
            updateData.gender = inputs.gender;
        }
        if (inputs.address !== undefined) {
            updateData.address = inputs.address;
        }
        if (inputs.bio !== undefined) {
            updateData.bio = inputs.bio;
        }

        //  Xử lý avatar upload
        if (req.file) {
            console.log(' Processing avatar upload...');
            
            // Xóa avatar cũ nếu có
            if (existingUser.avatar && !existingUser.avatar.includes('default')) {
                const oldAvatarPath = path.join(process.cwd(), existingUser.avatar);
                console.log('  Old avatar path:', oldAvatarPath);
                
                if (fs.existsSync(oldAvatarPath)) {
                    try {
                        fs.unlinkSync(oldAvatarPath);
                        console.log(' Deleted old avatar');
                    } catch (err) {
                        console.log('  Could not delete old avatar:', err.message);
                    }
                }
            }

            // Lưu đường dẫn avatar mới
            updateData.avatar = `uploads/avatars/${req.file.filename}`;
            console.log(' New avatar path:', updateData.avatar);
        }

        // Xử lý password nếu có
        if (password) {
            if (password.length < 6) {
                return res.status(400).json({ 
                    message: "Mật khẩu phải có ít nhất 6 ký tự!" 
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
            console.log(' Password updated');
        }

        console.log(' Final Update Data:', updateData);

        // Kiểm tra có dữ liệu để update không
        if (Object.keys(updateData).length === 0) {
            console.log('  No data to update');
            return res.status(400).json({ message: "Không có dữ liệu để cập nhật!" });
        }

        // Cập nhật user
        console.log(' Updating user in database...');
        const updatedUser = await prisma.user.update({
            where: { id },
            data: updateData
        });

        console.log(' User updated successfully:', updatedUser);

        // Loại bỏ password khỏi response
        const { password: userPassword, ...userInfo } = updatedUser;

        res.status(200).json({
            message: "Cập nhật thông tin người dùng thành công!",
            user: userInfo
        });

    } catch (error) {
        console.error('\n ========== UPDATE ERROR ==========');
        console.error('Error Name:', error.name);
        console.error('Error Message:', error.message);
        console.error('Error Code:', error.code);
        console.error('Error Stack:', error.stack);
        console.error('====================================\n');
        
        // Xóa file đã upload nếu có lỗi
        if (req.file) {
            const uploadedFilePath = path.join(process.cwd(), 'uploads/avatars', req.file.filename);
            if (fs.existsSync(uploadedFilePath)) {
                fs.unlinkSync(uploadedFilePath);
                console.log('🗑️  Cleaned up uploaded file');
            }
        }
        
        // Xử lý lỗi unique constraint
        if (error.code === 'P2002') {
            return res.status(400).json({ 
                message: "Thông tin bị trùng lặp (email hoặc username đã tồn tại)!" 
            });
        }
        
        res.status(500).json({ 
            message: "Thất bại, Không thể cập nhật dữ liệu người dùng!",
            error: error.message,
            errorCode: error.code
        });
    }
}

// DELETE USER
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const userTokenId = req.userId;

    if (id !== userTokenId) {
        return res.status(403).json({ 
            message: "Bạn không có quyền xóa tài khoản người dùng khác!"
        });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { id }
        });

        if (!existingUser) {
            return res.status(404).json({ message: "Không tìm thấy người dùng!" });
        }

        // Xóa avatar nếu có
        if (existingUser.avatar && !existingUser.avatar.includes('default')) {
            const avatarPath = path.join(process.cwd(), existingUser.avatar);
            if (fs.existsSync(avatarPath)) {
                fs.unlinkSync(avatarPath);
            }
        }

        await prisma.user.delete({
            where: { id }
        });

        res.clearCookie('token');

        res.status(200).json({ 
            message: "Xóa tài khoản thành công!" 
        });
    } catch (error) {
        console.log(error);
        
        if (error.code === 'P2003') {
            return res.status(400).json({ 
                message: "Không thể xóa người dùng vì có dữ liệu liên quan!" 
            });
        }
        
        res.status(500).json({ message: "Thất bại, Không thể xóa dữ liệu người dùng!" });
    }
}

export { getUsers, getUser, updateUser, deleteUser };