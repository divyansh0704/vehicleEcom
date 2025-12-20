import React from 'react'
import { useState } from 'react'
import api from "../api/api"
import {Link, useNavigate } from 'react-router-dom'
import "./register.css"

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleRegister = async () => {
        try {
            await api.post("/users/register", form);
            navigate("/login")
        } catch (err) {
            alert("Registration failed")
        }

    }

    return (
        <div className="out-register">
            <div className='register-container'>
                <h2>Sign Up</h2>
                <input type="text" name='name' placeholder='Name' onChange={handleChange} />
                <input type="text" name='email' placeholder='Email' onChange={handleChange} />
                <input type="text" name='password' placeholder='Password' onChange={handleChange} />
                <button onClick={handleRegister}>Sign Up</button>
                <p>Already have an account?<Link to="/login">Login here</Link> </p>
            </div>
        </div>
    )
}

export default Register