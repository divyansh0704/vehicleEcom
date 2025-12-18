import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Vehicles from './pages/Vehicles'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Vehicles/> } />
      <Route path='/register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
