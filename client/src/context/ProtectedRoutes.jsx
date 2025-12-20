import React, { Children } from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate,Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const {isLoggedIn} = useContext(AuthContext);
    // console.log(isLoggedIn);
    if(!isLoggedIn){
        return <Navigate to="/login"/>
    }
    return <Outlet/>;


  
}

export default ProtectedRoutes