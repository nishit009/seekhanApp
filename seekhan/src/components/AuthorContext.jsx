import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username,setUsername]=useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [history, setHistory] = useState([]); // Stores the history of prompt-result pairs
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
    const storedUsername = localStorage.getItem("username"); 
    

    if (storedToken) {
      setIsLoggedIn(true);
      setIsAdmin(isAdminStored);
      setUserId(storedUserId);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
      if (storedUsername) {
        setUsername(storedUsername);
    }
  }}, []);

  // Helper to generate a token (for demonstration)
  const generateToken = () => Date.now();

  // Handles user login
  const login = async(result, userId) => {
    try {
      const isAdminFlag = result === "admin";
      setIsAdmin(isAdminFlag);
      localStorage.setItem("isAdmin", isAdminFlag);
      const token = generateToken();
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      setIsLoggedIn(true);
      setUserId(userId);
      // const getHis=await axios.get(`http://localhost:6969/getHistory/${userId}`)
      // const restoring=getHis.data.message
      // setHistory(restoring)
      
    } catch (error) {
      console.log(`error in seting the history ${error}`)
    }
  };

  // Handles user logout
  const logout = async() => {
    try {
      // const resHis=await axios.post("http://localhost:6969/storeHistory",{userId,history})
      // console.log(resHis.data.message)
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("userId");
      localStorage.removeItem("history");
      localStorage.removeItem("username");
      setIsLoggedIn(false);
      setIsAdmin(false);
      setUserId(null);
      setHistory([]);
      setUsername("guest")
      window.location.href = "/";
    } catch (error) {
      console.log(`error in seting the history ${error}`)
    }
  };

  // Adds a question-answer pair to the history
  const addToHistory = (question, answer) => {
    const newEntry = { question, answer };
    setHistory((prev) => {
      const updatedHistory = [...prev, newEntry];
      localStorage.setItem("history", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };
  const addusername=(firstName)=>{
    setUsername(firstName)
    localStorage.setItem("username", firstName);
  }
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
        addusername,username,setUsername

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
