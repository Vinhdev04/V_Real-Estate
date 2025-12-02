/* ==============================
     CONTROLLER: USER
 ============================== */
import prisma from "../library/prisma.lib.js";
import bcrypt from "bcrypt";

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
        
        // Loại bỏ password khỏi response
        const { password, ...userInfo } = user;
        
        res.status(200).json(userInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Thất bại, Không thể lấy dữ liệu người dùng!, ID: ${id}` });
    }
}

// UPDATE USER
const updateUser = async (req, res) => {
    const id = req.params.id;
    const userTokenId = req.userId;
    const { password,avatar, ...inputs } = req.body; //  Tách password ra khỏi inputs

    // Kiểm tra authorization
    if (id !== userTokenId) {
        return res.status(403).json({ 
            message: "Bạn không có quyền cập nhật thông tin người dùng khác!"
        });
    }

    // Kiểm tra có dữ liệu để cập nhật không
    if (Object.keys(inputs).length === 0 && !password) {
        return res.status(400).json({ message: "Không có dữ liệu để cập nhật!" });
    }

    try {
        // Kiểm tra user có tồn tại không
        const existingUser = await prisma.user.findUnique({
            where: { id }
        });

        if (!existingUser) {
            return res.status(404).json({ message: "Không tìm thấy người dùng!" });
        }

        // Chuẩn bị data để cập nhật
        let updateData = { ...inputs };

        // Nếu có password mới, mã hóa nó
        if (password) {
            // Kiểm tra password có đủ mạnh không (tùy chọn)
            if (password.length < 6) {
                return res.status(400).json({ 
                    message: "Mật khẩu phải có ít nhất 6 ký tự!" 
                });
            }
            
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }

        // Không cho phép cập nhật các trường nhạy cảm qua API này
        delete updateData.googleId;
        delete updateData.loginType;
        delete updateData.emailVerified;

        // Cập nhật user
        const updatedUser = await prisma.user.update({
            where: { id },
            data: updateData
        });

        // Loại bỏ password khỏi response
        const { password: userPassword, ...userInfo } = updatedUser;

        res.status(200).json({
            message: "Cập nhật thông tin người dùng thành công!",
            user: userInfo
        });
    } catch (error) {
        console.log(error);
        
        // Xử lý lỗi unique constraint
        if (error.code === 'P2002') {
            return res.status(400).json({ 
                message: "Thông tin bị trùng lặp (email hoặc username đã tồn tại)!" 
            });
        }
        
        res.status(500).json({ message: "Thất bại, Không thể cập nhật dữ liệu người dùng!" });
    }
}

// DELETE USER
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const userTokenId = req.userId;

    // Kiểm tra authorization
    if (id !== userTokenId) {
        return res.status(403).json({ 
            message: "Bạn không có quyền xóa tài khoản người dùng khác!"
        });
    }

    try {
        // Kiểm tra user có tồn tại không
        const existingUser = await prisma.user.findUnique({
            where: { id }
        });

        if (!existingUser) {
            return res.status(404).json({ message: "Không tìm thấy người dùng!" });
        }

        // Xóa user
        await prisma.user.delete({
            where: { id }
        });

        // Xóa cookie token
        res.clearCookie('token');

        res.status(200).json({ 
            message: "Xóa tài khoản thành công!" 
        });
    } catch (error) {
        console.log(error);
        
        // Xử lý lỗi foreign key constraint
        if (error.code === 'P2003') {
            return res.status(400).json({ 
                message: "Không thể xóa người dùng vì có dữ liệu liên quan!" 
            });
        }
        
        res.status(500).json({ message: "Thất bại, Không thể xóa dữ liệu người dùng!" });
    }
}

export { getUsers, getUser, updateUser, deleteUser };