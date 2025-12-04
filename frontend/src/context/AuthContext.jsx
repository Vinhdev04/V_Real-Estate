// AuthContext.jsx
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { onAuthChange } from "../utils/authEvents.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  // ✅ Update userInfo và force re-render
  const updateUser = (userInfo) => {
    console.log("🔄 Updating user:", userInfo);

    // Cập nhật state
    setCurrentUser(userInfo);

    // ✅ Cập nhật localStorage ngay lập tức
    if (userInfo) {
      localStorage.setItem("user", JSON.stringify(userInfo));
    } else {
      localStorage.removeItem("user");
    }
  };

  // ✅ Sync với localStorage khi currentUser thay đổi
  useEffect(() => {
    console.log("👤 Current user changed:", currentUser);
  }, [currentUser]);

  // eventlistener for google
  useEffect(() => {
    const handleAuthChange = () => {
      const userFromStorage = JSON.parse(
        localStorage.getItem("user") || "null"
      );
      console.log("🔄 Auth changed from storage:", userFromStorage);
      setCurrentUser(userFromStorage);
    };

    const cleanup = onAuthChange(handleAuthChange);
    return cleanup;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
