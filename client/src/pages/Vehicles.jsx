import React from 'react'
import { useEffect,useState } from 'react'
import api from "../api/api"

const Vehicles = () => {
    const[vehicles,setVehicles]=useState([])

    useEffect(()=>{
        api.get("/vehicles")
        .then(res=>setVehicles(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='vehicleContainer'>
        <h2>Vehicles</h2>
        {vehicles.map(v=>(
            <div key={v._id}>
                <h4>{v.name}</h4>
                <p>{v.brand} - ₹{v.price}</p>
            </div>
        ))}
    </div>
  )
}

export default Vehicles



