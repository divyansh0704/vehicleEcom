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
import { CartContext } from '../context/CartContext'
import Shimmer from '../components/Shimmer'

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [cart, setCart] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const { token } = useContext(AuthContext)
    const { addToCart } = useContext(CartContext);
    const [loading,setLoading] = useState(true);
    const handleAddToCart = (vehicle) => {
        addToCart(vehicle);
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 3000);

    }
    

    useEffect(() => {
        api.get("/vehicles")
            .then((res) => {setVehicles(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Hero />
            {showAlert && (
                <div
                    style={{
                        background: "#4caf50",
                        color: "white",
                        padding: "10px",
                        marginBottom: "10px",
                        position:"fixed",
                        top:"5px",
                        right:"40%",
                        widht:"20%",
                        borderRadius:"10px",
                        border:"1px solid white"
                    }}
                >
                    ✅ Item added to cart
                </div>
            )}
            <div className='vehicleContainer'>
                <div className="section-title">
                    <h2>Featured Listings</h2>
                </div>
                <div className="card-container">
                    {loading && <Shimmer/>}
                    {vehicles.map(v => (
                        <div className='each-card' key={v._id}>
                            <div className="car-img">
                                {/* <img src={image1} alt={v.name} /> */}
                                <img
                                    src={`http://localhost:5000/uploads/${v.image}`}
                                    alt={v.name}
                                    width="200"
                                />
                            </div>
                            <div className="info">
                                <div className="info-left">
                                    <h3>{v.name}</h3>
                                    <h5>{v.brand}</h5>
                                    <h5>Price: ₹{v.price}</h5>
                                </div>
                                <div className="info-right">
                                    <button onClick={() => handleAddToCart(v)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* {cart.length > 0 && (
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
                    )} */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Vehicles



