import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Vehicles from './pages/Vehicles'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import MyOrders from './pages/MyOrders'
import ProtectedRoutes from './context/ProtectedRoutes'
import Admin from './pages/Admin'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Vehicles />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin/>} />
        {/* <Route path='/orders' element={<ProtectedRoutes> <MyOrders/> </ProtectedRoutes>  } /> */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/orders" element={<MyOrders />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
