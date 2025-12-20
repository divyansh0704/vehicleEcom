import React from 'react'
import { useEffect, useState } from 'react'
import api from "../api/api"
import Hero from '../components/Hero'
import "./vehicle.css"
import image1 from "../assets/car1.jpg"
import Footer from '../components/Footer'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [cart, setCart] = useState([]);
    const { token } = useContext(AuthContext)
    const navigate = useNavigate();

    const addToCart = (vehicle) => {
        setCart([...cart, { vehicle, quantity: 1 }]);
    }
    const placeOrder = async () => {
        if (!token) {
            navigate("/login");
            return


        }
        const orderData = {
            items: cart.map((c) => ({
                vehicle: c.vehicle._id,
                quantity: c.quantity

            })),
            totalAmount: cart.reduce((sum, c) => sum + c.vehicle.price * c.quantity, 0)

        }

        await api.post("/orders", orderData, {
            headers: { Authorization: `Bearer${token}` }
        })

        alert("Order placed successfully");
        setCart([]);
        navigate("/orders");
    }

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
                                    <button onClick={() => addToCart(v)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {cart.length > 0 && (
                        <div className='cart-container'>
                            <h3>cart</h3>
                            {cart.map((c, i) => (

                                <div key={i}>
                                    <h4>{c.vehicle.name}</h4>
                                    <p>Quantity:{c.quantity}</p>
                                    <p>TotalPrice:{c.vehicle.price*c.quantity}</p>
                                </div>


                            ))}
                            <button onClick={placeOrder} >Place Order</button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Vehicles



