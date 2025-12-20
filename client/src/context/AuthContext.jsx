import { createContext,useState } from "react";
// import { locals } from "../../../server/app";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const[token,setToken] = useState(localStorage.getItem("token"));
    const[role,setRole]=useState(localStorage.getItem("role"))

    const login =(jwtToken,role)=>{
        localStorage.setItem("token",jwtToken);
        localStorage.setItem("role",role);
        setToken(jwtToken);
        setRole(role);
    }
    const logout =()=>{
        localStorage.removeItem("token");
        setToken(null);
        setRole(null);
    }
    const isLoggedIn = !!token;

    return(
        <AuthContext.Provider value={{token,login,logout,isLoggedIn,role}} >
            {children}
        </AuthContext.Provider>
    )
}