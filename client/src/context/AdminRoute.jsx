// import React from 'react'

// const AdminRoute = () => {
//   return (
//     <div>AdminRoute</div>
//   )
// }

// export default AdminRoute


import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { role } = useContext(AuthContext);

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return children
};

export default AdminRoute;
