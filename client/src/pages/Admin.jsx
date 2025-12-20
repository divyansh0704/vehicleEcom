import React,{useState,useEffect} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import api from '../api/api'

const Admin = () => {
    const {token } = useContext(AuthContext)
    const [vehicles,setVehicles] = useState([]);
  
   

    const[form,setForm] = useState({
        name:"",
        brand:"",
        price:"",
        type:""
    })
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const addVehicle =async()=>{
        await api.post("/vehicles",form,{
            headers:{Authorization:`Bearer ${token}`}
        })
        setForm({ name:"",brand:"",price:"",type:""});
        fetchVehicles();
    }
    const fetchVehicles =async()=>{
        const res =await  api.get("/vehicles");
        setVehicles(res.data);
    }
    const deleteVehicle = async(id)=>{
        await api.delete(`/vehicles/${id}`,{
            headers:{Authorization:'Bearer ${token}'}
        })

        fetchVehicles();
    }
    useEffect(()=>{
        fetchVehicles();
    },[])
  return (
    <div className='admin-container'>
        <h2>Admin Panel</h2>
        <h3>Add Vehicles</h3>
        <input type="text" name="name" value={form.name}  placeholder='Name' onChange={handleChange} />
        <input type="text" name="brand" value={form.brand}  placeholder='Brand' onChange={handleChange} />
        <input type="text" name="price" value={form.price}  placeholder='Price' onChange={handleChange} />
        <input type="text" name="type" value={form.type}  placeholder='Type' onChange={handleChange} /> 
        <button onClick={addVehicle}>Add Vehicle</button>   
        <h3>All Vehicles</h3>
      {vehicles.map(v => (
        <div key={v._id}>
          <p>{v.name} - ₹{v.price}</p>
          <button onClick={() => deleteVehicle(v._id)}>Delete</button>
        </div>
      ))}    
    </div>
  )
}

export default Admin