import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Vehicles from './pages/Vehicles'

function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Vehicles/> } />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
