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

  if (!username || !email || !password || !telephone) {
    return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin." });
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ message: 'Mật khẩu xác nhận không khớp!' });
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
        
        return res.status(200).json({ message: 'Đã cập nhật mật khẩu cho tài khoản Google của bạn. Hãy đăng nhập lại.' });
      }
      
      // TRƯỜNG HỢP: User đã đăng ký bình thường
      return res.status(400).json({ message: "Email này đã được sử dụng." });
    }

    // 2. Kiểm tra username (nếu là user mới hoàn toàn)
    const existingUsername = await prisma.user.findUnique({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ message: "Username này đã tồn tại." });
    }

    // 3. Tạo user mới
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        telephone,
        loginType: 'email',
        // Không set googleId ở đây để tránh lỗi null unique (nếu index chưa fix sparse)
      },
    });

    res.status(201).json({ message: 'Đăng ký thành công' });

  } catch (err) {
    console.error(err); // Xem log để biết chính xác lỗi gì
    // Bắt lỗi Unique constraint của Prisma để trả về message rõ ràng
    if (err.code === 'P2002') {
       return res.status(400).json({ message: 'Thông tin (email/username) bị trùng lặp hệ thống.' });
    }
    res.status(500).json({ message: 'Lỗi hệ thống khi đăng ký' });
  }
}



//  ------ HANDLE LOGIN USER ------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password)
      return res.status(400).json({message: "Missing email or password!"})
    
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) 
      return res.status(404).json({ message: 'Invalid Credentials!' });

    if (!user.password) {
      return res.status(400).json({ 
        message: 'Tài khoản Google chưa thiết lập mật khẩu. Vui lòng đăng nhập bằng Google.' 
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
       console.log("LOGIN FAILED User not found:", email);
       return res.status(401).json({ message: 'Invalid Credentials' });
    }

    const {password: userPassword, ...userInfo} = user;

    const timeExpire = 24 * 60 * 60 * 1000;

    const token = jwt.sign(
      { userId: user.id, email: user.email,isAdmin:false },
      process.env.JWT_SECRET_KEY,
      { expiresIn: timeExpire }
    );

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: timeExpire,
      sameSite: 'strict',
    });
    
    console.log("LOGIN SUCCESS User logged in:", email);
    console.log("Token:", token);

    //  Trả về đúng cấu trúc như Google Login
    res.status(200).json({
      message: 'Đăng nhập thành công',
      token,
      userInfo  // Giữ nguyên structure
    });

  } catch (err) {
    console.error("LOGIN Error", err);
    res.status(500).json({ message: 'Failed to login user' });
  }
};



// ------ HANDLE GOOGLE LOGIN ------
export const googleLogin = async (req, res) => {
  try {
    const { email, username, googleId, avatar, emailVerified } = req.body;

    console.log('📥 Google Login Request:', { email, username, googleId });

    // Validation
    if (!email || !googleId) {
      return res.status(400).json({ 
        message: "Thiếu thông tin email hoặc Google ID" 
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
          // Không cần password cho Google login
          password: null,
          telephone: null,
        },
      });
      console.log(' New Google user created:', email);
    } else {
      // Nếu user đã tồn tại, cập nhật thông tin
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          googleId: googleId,
          avatar: avatar,
          emailVerified: emailVerified || user.emailVerified,
          loginType: 'google',
        },
      });
      console.log('✅ Existing Google user updated:', email);
    }

    // Loại bỏ password khỏi response
    const { password: userPassword, ...userInfo } = user;

    // Tạo JWT token
    const timeExpire = 24 * 60 * 60 * 1000; // 24 giờ

    const token = jwt.sign(
      { 
        userId: user.id,
        email: user.email,
        loginType: 'google' 
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

    console.log('Google LOGIN SUCCESS:', email);
    console.log('Token:', token);

    // Trả về thông tin user và token
    res.status(200).json({
      message: 'Đăng nhập Google thành công',
      token,
      userInfo,
    });

  } catch (err) {
    console.error('Google Login Error:', err);
    res.status(500).json({ 
      message: 'Đăng nhập Google thất bại',
      error: err.message 
    });
  }
};



// ------ HANDLE LOGOUT USER ------
export const logout = async(req,res) => {
    res.clearCookie('token');
    res.status(200).json({message: 'Logout successful'});

}