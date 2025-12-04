/* ==============================
     CONTROLLER: USER (WITH DEBUG)
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

// UPDATE USER (WITH DETAILED LOGS)

const updateUser = async (req, res) => {
  const id = req.params.id;
  const userTokenId = req.userId;
  const { password, avatar, ...inputs } = req.body; // ✅ Thêm avatar

  console.log("\n========== UPDATE USER REQUEST ==========");
  console.log("📋 User ID:", id);
  console.log("🔑 Token User ID:", userTokenId);
  console.log("📝 Request Body:", req.body);
  console.log("=========================================\n");

  if (id !== userTokenId) {
    return res.status(403).json({
      message: "Bạn không có quyền cập nhật thông tin người dùng khác!",
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "Không tìm thấy người dùng!" });
    }

    let updateData = {};

    // ✅ Xử lý các field thông thường
    if (inputs.username) updateData.username = inputs.username;
    if (inputs.email) updateData.email = inputs.email;
    if (inputs.telephone) updateData.telephone = inputs.telephone;
    if (inputs.gender) updateData.gender = inputs.gender;
    if (inputs.address !== undefined) updateData.address = inputs.address;
    if (inputs.bio !== undefined) updateData.bio = inputs.bio;

    // ✅ Xử lý avatar từ Cloudinary
    if (avatar && avatar.trim() !== "") {
      updateData.avatar = avatar;
      console.log("🖼️ New avatar URL:", avatar);
    }

    // ✅ Xử lý password
    if (password && password.length >= 6) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    console.log("📦 Final Update Data:", updateData);

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "Không có dữ liệu để cập nhật!" });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    const { password: userPassword, ...userInfo } = updatedUser;

    res.status(200).json({
      message: "Cập nhật thông tin người dùng thành công!",
      user: userInfo,
    });
  } catch (error) {
    console.error("\n❌ UPDATE ERROR:", error);

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
