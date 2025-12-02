/* ==============================
     CONTROLLER: AUTH
 ============================== */
import bcrypt from 'bcrypt';
import prisma from '../library/prisma.lib.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// ------ HANDLE REGISTER USER ------
export const register = async (req, res) => {
  const { username, password, passwordConfirm, email, telephone } = req.body;

  // Validation đầu vào
  if (!username || !email || !password || !telephone) {
    return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin." });
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ message: 'Mật khẩu xác nhận không khớp!' });
  }

  // Kiểm tra độ mạnh mật khẩu
  if (password.length < 6) {
    return res.status(400).json({ message: 'Mật khẩu phải có ít nhất 6 ký tự!' });
  }

  try {
    // 1. Kiểm tra user đã tồn tại chưa
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      // TRƯỜNG HỢP: User đã tồn tại do đăng nhập Google nhưng chưa có mật khẩu
      if (existingUser.loginType === 'google' && !existingUser.password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Cập nhật user: Thêm mật khẩu và số điện thoại
        await prisma.user.update({
          where: { id: existingUser.id },
          data: {
            password: hashedPassword,
            telephone: existingUser.telephone || telephone, // Giữ số cũ nếu có
            loginType: 'email_google', // Đánh dấu là hỗ trợ cả 2
          }
        });
        
        return res.status(200).json({ 
          message: 'Đã cập nhật mật khẩu cho tài khoản Google của bạn. Hãy đăng nhập lại.' 
        });
      }
      
      // TRƯỜNG HỢP: User đã đăng ký bình thường
      return res.status(400).json({ message: "Email này đã được sử dụng." });
    }

    // 2. Kiểm tra username (nếu là user mới hoàn toàn)
    const existingUsername = await prisma.user.findUnique({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ message: "Tên đăng nhập này đã tồn tại." });
    }

    // 3. Tạo user mới
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        telephone,
        loginType: 'email',
      },
    });

    console.log(' Đăng ký thành công:', email);
    res.status(201).json({ message: 'Đăng ký thành công!' });

  } catch (err) {
    console.error('Lỗi đăng ký:', err);
    
    // Bắt lỗi Unique constraint của Prisma
    if (err.code === 'P2002') {
      return res.status(400).json({ 
        message: 'Thông tin (email hoặc tên đăng nhập) bị trùng lặp trong hệ thống.' 
      });
    }
    
    res.status(500).json({ message: 'Lỗi hệ thống khi đăng ký. Vui lòng thử lại sau!' });
  }
}


//  ------ HANDLE LOGIN USER ------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Vui lòng nhập email và mật khẩu!" });
    }
    
    // Tìm user theo email
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: 'Email hoặc mật khẩu không đúng!' });
    }

    // Kiểm tra nếu tài khoản Google chưa có mật khẩu
    if (!user.password) {
      return res.status(400).json({ 
        message: 'Tài khoản Google chưa thiết lập mật khẩu. Vui lòng đăng nhập bằng Google.' 
      });
    }

    // So sánh mật khẩu
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      console.log(" Đăng nhập thất bại:", email);
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng!' });
    }

    // Loại bỏ password khỏi response
    const { password: userPassword, ...userInfo } = user;

    // Tạo JWT token
    const timeExpire = 24 * 60 * 60 * 1000; // 24 giờ

    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email,
        isAdmin: false 
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: timeExpire }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: timeExpire,
      sameSite: 'strict',
      // secure: true, // Bật trong production với HTTPS
    });
    
    console.log(" Đăng nhập thành công:", email);

    // Trả về response
    res.status(200).json({
      message: 'Đăng nhập thành công!',
      token,
      userInfo
    });

  } catch (err) {
    console.error(" Lỗi đăng nhập:", err);
    res.status(500).json({ message: 'Lỗi hệ thống khi đăng nhập. Vui lòng thử lại sau!' });
  }
};


// ------ HANDLE GOOGLE LOGIN ------
export const googleLogin = async (req, res) => {
  try {
    const { email, username, googleId, avatar, emailVerified } = req.body;

    console.log('📥 Yêu cầu đăng nhập Google:', { email, username, googleId });

    // Validation
    if (!email || !googleId) {
      return res.status(400).json({ 
        message: "Thiếu thông tin email hoặc Google ID!" 
      });
    }

    // Kiểm tra xem user đã tồn tại chưa (dựa vào email hoặc googleId)
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { googleId: googleId }
        ]
      }
    });

    // Nếu user chưa tồn tại, tạo mới
    if (!user) {
      // Tạo username unique nếu trùng
      let uniqueUsername = username;
      let counter = 1;
      
      while (await prisma.user.findUnique({ where: { username: uniqueUsername } })) {
        uniqueUsername = `${username}_${counter}`;
        counter++;
      }

      user = await prisma.user.create({
        data: {
          email,
          username: uniqueUsername,
          googleId,
          avatar,
          emailVerified: emailVerified || false,
          loginType: 'google',
          password: null,
          telephone: null,
        },
      });
      console.log(' Tạo tài khoản Google mới:', email);
    } else {
      // Nếu user đã tồn tại, cập nhật thông tin
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          googleId: googleId,
          avatar: avatar,
          emailVerified: emailVerified || user.emailVerified,
          loginType: user.password ? 'email_google' : 'google', // Nếu có password thì là cả 2
        },
      });
      console.log(' Cập nhật thông tin tài khoản Google:', email);
    }

    // Loại bỏ password khỏi response
    const { password: userPassword, ...userInfo } = user;

    // Tạo JWT token
    const timeExpire = 24 * 60 * 60 * 1000; // 24 giờ

    const token = jwt.sign(
      { 
        userId: user.id,
        email: user.email,
        isAdmin: false
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: timeExpire }
    );

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: timeExpire,
      sameSite: 'strict',
      // secure: true, // Bật trong production với HTTPS
    });

    console.log(' Đăng nhập Google thành công:', email);

    // Trả về thông tin user và token
    res.status(200).json({
      message: 'Đăng nhập Google thành công!',
      token,
      userInfo,
    });

  } catch (err) {
    console.error('Lỗi đăng nhập Google:', err);
    res.status(500).json({ 
      message: 'Đăng nhập Google thất bại. Vui lòng thử lại sau!',
      error: err.message 
    });
  }
};


// ------ HANDLE LOGOUT USER ------
export const logout = async (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Đăng xuất thành công!' });
}