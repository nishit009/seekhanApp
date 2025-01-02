import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [history, setHistory] = useState([]); // Stores the history
  const [userId, setUserId] = useState(null);
  const [qAndAns, setQAndAns] = useState({
    question: "",
    generatedOutput: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    const isAdminStored = localStorage.getItem("isAdmin") === "true";
    const storedHistory = localStorage.getItem("history");

    if (storedToken) {
      setIsLoggedIn(true);
      setIsAdmin(isAdminStored);
      setUserId(storedUserId);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    }
  }, []);

  // Helper to generate a token (for demonstration)
  const generateToken = () => Date.now();

  // Handles user login
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

  // Handles user logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userId");
    localStorage.removeItem("history");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserId(null);
    setHistory([]);
    window.location.href = "/";
  };

  // Adds a question-answer pair to the history
  const addToHistory = (question, answer) => {
    const newEntry = {
      question: question,
      answers: Array.isArray(answer) ? answer : [answer],
    };

    setHistory((prev) => {
      const updatedHistory = [...prev, newEntry];
      localStorage.setItem("history", JSON.stringify(updatedHistory)); // Persist to localStorage
      return updatedHistory;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        isAdmin,
        history,
        addToHistory, // Add questions and answers to history
        qAndAns,
        setQAndAns,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
