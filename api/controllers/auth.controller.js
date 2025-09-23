import bcrypt from "bcrypt";
export const register = async (req,res)=>{
    // log inform user form test api postman
    console.log(req.body);

    // create new user
    const {username,email,password} = req.body;

    // hash the password
    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword)

    
    // save to db
}

export const login = (req,res)=>{
    //
}

export const logout = (req,res)=> {
    //
}