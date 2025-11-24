import React from 'react'
import {createContext,useState} from "react"
export const FavoritesProperties = createContext();
export const FavoritesProvider = ({children})=>{
    const [favorites,setFavorites] = useState([])
    return <FavoritesProperties.Provider value ={{favorites}}>{children}</FavoritesProperties.Provider>
}