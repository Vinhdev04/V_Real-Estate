import prisma from "../library/prisma.lib.js";

const getUsers = async (req, res) => {
    console.log("--------- Test Get users in Postman ---------");
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Failed to get users"});
    }
}

const getUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get user" });
        
    }
}

const updateUser = async (req, res) => {
    try {
        
    } catch (error) {
         console.log(error);
         res.status(500).json({ message: "Failed to update user" });
    }
}

const deleteUser = async (req, res) => {
    try {
        
    } catch (error) {
         console.log(error);
         res.status(500).json({ message: "Failed to delete user" });
    }
}

export { getUsers, getUser, updateUser, deleteUser };