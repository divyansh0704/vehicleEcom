import React, { useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import api from '../api/api'
import "./admin.css"

const Admin = () => {
  const { token } = useContext(AuthContext)
  const [vehicles, setVehicles] = useState([]);
  const [image, setImage] = useState(null);



  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    type: ""
  })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const addVehicle = async () => {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("brand", form.brand);
    formData.append("price", form.price);
    formData.append("type", form.type);
    formData.append("image", image);

    await api.post("/vehicles", formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
    setForm({ name: "", brand: "", price: "", type: "" });
    fetchVehicles();
  }
  const fetchVehicles = async () => {
    const res = await api.get("/vehicles");
    setVehicles(res.data);
  }
  const deleteVehicle = async (id) => {
    await api.delete(`/vehicles/${id}`, {
      headers: { Authorization: 'Bearer ${token}' }
    })

    fetchVehicles();
  }
  useEffect(() => {
    fetchVehicles();
  }, [])
  return (
    <div className='admin-container'>
      <h2>Admin Panel</h2>
      <h3>Add Vehicles</h3>
      <input type="text" name="name" value={form.name} placeholder='Name' onChange={handleChange} />
      <input type="text" name="brand" value={form.brand} placeholder='Brand' onChange={handleChange} />
      <input type="text" name="price" value={form.price} placeholder='Price' onChange={handleChange} />
      <input type="text" name="type" value={form.type} placeholder='Type' onChange={handleChange} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={addVehicle}>Add Vehicle</button>
      <h3>All Vehicles</h3>
      {vehicles.map(v => (
        <div className='admin-cards' key={v._id}>
          <img
            src={`http://localhost:5000/uploads/${v.image}`}
            alt={v.name}
            width="200"
          />
          <p>{v.name} - ₹{v.price}</p>
          <button onClick={() => deleteVehicle(v._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Admin