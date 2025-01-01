import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [history, setHistory] = useState([]); 
  const [userId, setUserId] = useState(null); 
  const [qAndAns, setQAndAns] = useState({
    question: "",
    generatedOutput: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    const isAdminStored = localStorage.getItem("isAdmin") === "true";

    if (storedToken) {
      setIsLoggedIn(true);
      setIsAdmin(isAdminStored);
      setUserId(storedUserId);
    }
  }, []);

  const generateToken = () => Date.now();

  const login = (result, userId) => {
    const isAdminFlag = result === "admin";
    setIsAdmin(isAdminFlag);
    localStorage.setItem("isAdmin", isAdminFlag);
    const token = generateToken();
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    setIsLoggedIn(true);
    setUserId(userId);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userId");
    window.location.href = "/";
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserId(null);
  };

  const addToHistory = (newEntry) => {
    setHistory((prev) => [...prev, newEntry]);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        isAdmin,
        history,
        addToHistory, 
        qAndAns,
        setQAndAns,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
