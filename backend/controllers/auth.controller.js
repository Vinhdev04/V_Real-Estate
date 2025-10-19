import bcrypt from 'bcrypt';
import prisma from '../library/prisma.lib.js';
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
export const login = async(req,res) => {

    try{

        // check user exists


        // check password


        // create a new token
    }catch(err){

    }
}


// HANDLE LOGOUT USER
export const logout = async(req,res) => {}