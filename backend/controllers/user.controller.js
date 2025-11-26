/* ==============================
     CONTROLLER: USER
 ============================== */
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
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: {id}
        })
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get user" });
        
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const userTokenId = req.userId; 
    const body = res.body
    if(id !== userTokenId)   
        return res.status(403).json({message: "You are not authorized to update this user!"})
    try {
        const updatedUser = await prisma.user.update({
            where: {id},
            data: body
        })
        res.status(200).json(updatedUser);
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