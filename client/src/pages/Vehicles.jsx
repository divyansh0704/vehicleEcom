import React from 'react'
import { useEffect, useState } from 'react'
import api from "../api/api"
import Hero from '../components/Hero'
import "./vehicle.css"
import image1 from "../assets/car1.jpg"
import Footer from '../components/Footer'

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        api.get("/vehicles")
            .then(res => setVehicles(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Hero />
            <div className='vehicleContainer'>
                <div className="section-title">
                    <h2>Featured Listings</h2>
                </div>
                <div className="card-container">
                    {vehicles.map(v => (
                        <div className='each-card' key={v._id}>
                            <div className="car-img">
                                <img src={image1} alt={v.name} />
                            </div>
                            <div className="info">
                                <div className="info-left">
                                    <h3>{v.name}</h3>
                                    <h5>{v.brand}</h5>
                                    <h5>Price: ₹{v.price}</h5>
                                </div>
                                <div className="info-right">
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Vehicles



