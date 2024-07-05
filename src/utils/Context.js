import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext();
const SelectedCardContext = createContext();

const useAuthContext = () => {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [ContextData, setContextData] = useState({});
    console.log(ContextData);
    const setAuthData = (key, value) => {
        setContextData({
            ...ContextData,
            [key]: value
        })
    }
    const getAuthData = (key) => {
        return ContextData[key]
    }
    const resetAuthData = () => setContextData({})

    return (
        <AuthContext.Provider value={{ ContextData, setContextData, setAuthData, getAuthData, resetAuthData }} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, useAuthContext }