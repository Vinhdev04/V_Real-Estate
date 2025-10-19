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
        const {username,password} = req.body;
        // check user exists
        const user = await prisma.user.findFirst({
            where: {username}
        });

        if(!user) res.status(404).json({message: 'User not found'});

        // check password
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect) res.status(401).json({message: 'Password is incorrect'});

        // login successful
        res.status(200).json({message: 'Login successful'});

        // create a new token
    }catch(err){
        console.log(err);
        res.status(500).json({message: 'Failed to login user'});
    }
}


// HANDLE LOGOUT USER
export const logout = async(req,res) => {
    
}