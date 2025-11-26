import React,{useState,useEffect} from 'react'
import {createContext} from "react"

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user") || null)
    )

    // update userInfo
    const updateUser = (userInfo) => {
            setCurrentUser(userInfo);
    }

    // update data in localStorage
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])    

    return <AuthContext.Provider value ={{currentUser,setCurrentUser,updateUser}}>{children}</AuthContext.Provider>
    
}