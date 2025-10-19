import bcrypt from 'bcrypt';
import prisma from '../library/prisma.lib.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// HANDLE REGISTER USER
export const register = async(req,res) => {
    // get data from response
    const {username,password,email} = req.body;
    // console.log(req.body);

    try{
        
        // hash password
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(hashedPassword);

        // create a new user
         const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        // console.log(newUser);
        res.status(201).json({message: 'User registered successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({message: 'Failed to register user'});

    }

}



// HANDLE LOGIN USER
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // check user exists
    const user = await prisma.user.findFirst({
      where: { username },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Password is incorrect' });
    }

    // create a new token
    const timeExpire = 24 * 60 * 60; // 24 hours

    // create a new token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: timeExpire }
    );

    // set cookie
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: timeExpire * 1000,
      sameSite: 'strict',
      
    });
    // console.log(token);


    // send final response
    res.status(200).json({
      message: 'Login successful',
    //   token,
    //   user: {
    //     id: user.id,
    //     username: user.username,
    //   },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to login user' });
  }
};



// HANDLE LOGOUT USER
export const logout = async(req,res) => {

}