import bcrypt from 'bcrypt';
import prisma from '../library/prisma.lib.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// ------ HANDLE REGISTER USER ------
export const register = async(req,res) => {   
    // get data from response
    const {username, password, passwordConfirm, email, telephone} = req.body;

    // ===  VALIDATION BACKEND ===
    if(!username || !email || !password || !telephone){
      res.status(400).json({message: "Vui lòng điền đầy đủ thông tin."})
    }

    if(password !== passwordConfirm){
        return res.status(400).json({message: 'Mật khẩu xác nhận không khớp!'});
    }
    
    try{
         // check email or username exists
         const existingEmail = await prisma.user.findUnique({ where: { email } });
        if (existingEmail) {
            return res.status(400).json({message: "Email này đã được sử dụng."});
        }

        //  Check username đã tồn tại?
        const existingUser = await prisma.user.findUnique({ where: { username } });
        if (existingUser) {
            return res.status(400).json({message: "Username này đã tồn tại."});
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(hashedPassword);

        // create a new user - schema from prisma
         const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                telephone,
                loginType: 'email', // Thêm loginType cho user đăng ký thường
            },
        });
        // console.log(newUser);
        res.status(201).json({message: 'User registered successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({message: 'Failed to register user'});

    }

}



//  ------ HANDLE LOGIN USER ------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check input
    if(!email || !password)
      return res.status(400).json({message: "Missing email or password!"})
    
    // check user exists - seatch user by username
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) 
      return res.status(404).json({ message: 'Invalid Credentials!' });
    
    // Kiểm tra nếu user đăng nhập bằng Google
    if (user.loginType === 'google' && !user.password) {
      return res.status(400).json({ 
        message: 'Tài khoản này đã được đăng ký bằng Google. Vui lòng đăng nhập bằng Google.' 
      });
    }

    // check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
       console.log("LOGIN FAILED User not found:", email);
       return res.status(401).json({ message: 'Invalid Credentials' });
    }

    const {password: userPassword,...userInfo} = user;

    // create a new token
    const timeExpire = 24 * 60 * 60 * 1000;

    // create a JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: timeExpire }
    );

    // set cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: timeExpire,
      sameSite: 'strict',
      // secure: true; // using HTTPS - Production
    });
    
    console.log("LOGIN SUCCESS User logged in:", email);
    console.log("Token:", token);

    
    res.status(200).json({
      // message: 'Login successful',
      // token,
      userInfo
    });

  } catch (err) {
    console.error("LOGIN Error",err);
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
      console.log('✅ New Google user created:', email);
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

    console.log('🔐 Google LOGIN SUCCESS:', email);
    console.log('🎫 Token:', token);

    // Trả về thông tin user và token
    res.status(200).json({
      message: 'Đăng nhập Google thành công',
      token,
      userInfo,
    });

  } catch (err) {
    console.error('❌ Google Login Error:', err);
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