import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [history, setHistory] = useState([]);
  const [UserName, setUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [qAndAns, setQAndAns] = useState({
    question: "",
    generatedOutput: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const isAdminStored = localStorage.getItem("isAdmin") === "true";
    if (storedToken) {
      setIsLoggedIn(true);
      setIsAdmin(isAdminStored);
    }
  }, []);
  const generateToken = () => {
    return Date.now();
  };

  const login = (result) => {
    const isAdminFlag = result === "admin";
    setIsAdmin(isAdminFlag);
    localStorage.setItem("isAdmin", isAdminFlag);
    const token = generateToken();
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, isAdmin, history, qAndAns }}
    >
      {children}
    </AuthContext.Provider>
  );
};
