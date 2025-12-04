/* ==============================
     CONTROLLER: USER WITH PASSWORD UPDATE
 ============================== */
import prisma from "../library/prisma.lib.js";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

// GET ALL USERS
const getUsers = async (req, res) => {
  console.log("--------- Test dữ liệu từ API Postman ---------");
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Thất bại, Không thể lấy dữ liệu người dùng!" });
  }
};

// GET USER BY ID
const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng!" });
    }

    const { password, ...userInfo } = user;
    res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Thất bại, Không thể lấy dữ liệu người dùng!, ID: ${id}`,
    });
  }
};

// UPDATE USER WITH PASSWORD CHANGE
const updateUser = async (req, res) => {
  const id = req.params.id;
  const userTokenId = req.userId;
  const { password, currentPassword, avatar, ...inputs } = req.body;

  console.log("\n========== UPDATE USER REQUEST ==========");
  console.log("ID người dùng:", id);
  console.log("ID token người dùng:", userTokenId);
  console.log("Dữ liệu người dùng:", req.body);

  console.log("=========================================\n");

  // Kiểm tra authorization
  if (id !== userTokenId) {
    return res.status(403).json({
      message: "Bạn không có quyền cập nhật thông tin người dùng khác!",
    });
  }

  try {
    // Kiểm tra user có tồn tại không
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "Không tìm thấy người dùng!" });
    }

    let updateData = {};

    //  Xử lý các field thông thường
    if (inputs.username) updateData.username = inputs.username;
    if (inputs.email) updateData.email = inputs.email;
    if (inputs.telephone) updateData.telephone = inputs.telephone;
    if (inputs.gender) updateData.gender = inputs.gender;
    if (inputs.address !== undefined) updateData.address = inputs.address;
    if (inputs.bio !== undefined) updateData.bio = inputs.bio;

    //  Xử lý avatar từ Cloudinary
    if (avatar && avatar.trim() !== "") {
      updateData.avatar = avatar;
      console.log("Path avt đại diện của tài khoản:", avatar);
    }

    //  XỬ LÝ ĐỔI MẬT KHẨU
    if (password && currentPassword) {
      console.log("Thay đổi mật khẩu!");

      // Kiểm tra độ dài mật khẩu mới
      if (password.length < 6) {
        return res.status(400).json({
          message: "Mật khẩu mới phải có ít nhất 6 ký tự!",
        });
      }

      // Kiểm tra nếu user không có password (tài khoản Google)
      if (!existingUser.password) {
        return res.status(400).json({
          message:
            "Tài khoản Google không thể đổi mật khẩu theo cách này. Vui lòng sử dụng chức năng đặt lại mật khẩu.",
        });
      }

      // Xác thực mật khẩu hiện tại
      const isPasswordCorrect = await bcrypt.compare(
        currentPassword,
        existingUser.password
      );

      if (!isPasswordCorrect) {
        console.log("Mật khẩu hiện tại không chính xác!");
        return res.status(401).json({
          message: "Mật khẩu hiện tại không đúng!",
        });
      }

      // Hash mật khẩu mới
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
      console.log("Cập nhật mật khẩu thành công!");
    }

    console.log("Dữ liệu cập nhật người dùng cuối cùng:", updateData);

    // Kiểm tra có dữ liệu để update không
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "Không có dữ liệu để cập nhật!" });
    }

    // Cập nhật user
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    console.log("Người dùng đã được cập nhật!");

    // Loại bỏ password khỏi response
    const { password: userPassword, ...userInfo } = updatedUser;

    res.status(200).json({
      message: password
        ? "Cập nhật thông tin và mật khẩu thành công!"
        : "Cập nhật thông tin người dùng thành công!",
      user: userInfo,
    });
  } catch (error) {
    console.error("\n Xảy ra lỗi trong quá trình cập nhật!", error);

    // Xử lý lỗi unique constraint
    if (error.code === "P2002") {
      return res.status(400).json({
        message: "Thông tin bị trùng lặp (email hoặc username đã tồn tại)!",
      });
    }

    res.status(500).json({
      message: "Cập nhật thất bại!",
      error: error.message,
    });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const userTokenId = req.userId;

  if (id !== userTokenId) {
    return res.status(403).json({
      message: "Bạn không có quyền xóa tài khoản người dùng khác!",
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "Không tìm thấy người dùng!" });
    }

    // Xóa avatar nếu có
    if (existingUser.avatar && !existingUser.avatar.includes("default")) {
      const avatarPath = path.join(process.cwd(), existingUser.avatar);
      if (fs.existsSync(avatarPath)) {
        fs.unlinkSync(avatarPath);
      }
    }

    await prisma.user.delete({
      where: { id },
    });

    res.clearCookie("token");

    res.status(200).json({
      message: "Xóa tài khoản thành công!",
    });
  } catch (error) {
    console.log(error);

    if (error.code === "P2003") {
      return res.status(400).json({
        message: "Không thể xóa người dùng vì có dữ liệu liên quan!",
      });
    }

    res
      .status(500)
      .json({ message: "Thất bại, Không thể xóa dữ liệu người dùng!" });
  }
};

export { getUsers, getUser, updateUser, deleteUser };
