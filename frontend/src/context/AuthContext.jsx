import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { onAuthChange } from "../utils/authEvents.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  // update userInfo
  const updateUser = (userInfo) => {
    setCurrentUser(userInfo);
  };

  // update data in localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // eventlistener for google
  useEffect(() => {
    const handleAuthChange = () => {
      const userFromStorage = JSON.parse(
        localStorage.getItem("user") || "null"
      );
      setCurrentUser(userFromStorage);
    };

    // eventlistener
    const cleanup = onAuthChange(handleAuthChange);
    // clearn when unmount
    return cleanup;
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
