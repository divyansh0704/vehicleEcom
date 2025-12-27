import React, { useEffect } from 'react'
import "./orders.css"
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useState } from 'react'
import api from '../api/api'

const MyOrders = () => {
    const { token } = useContext(AuthContext)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!token) {
            return;
        }
        const fetchOrders = async () => {
            try {
                const res = await api.get("/orders/my", {
                    headers: { Authorization: `Bearer ${token}` }

                });
                console.log("order response: ",res.data.orders)
                setOrders(res.data.orders);

            }catch(err){
                console.log(err);
            }
        }
        fetchOrders();

    },[token])

    return (
        <div className='order-container'>
            <h2>My Orders</h2>
            {orders.length==0 && <p>No Orders Found</p>}
            {orders.map(order=>(
                <div key={order._id}>
                    <p><strong>Status:</strong>{order.status}</p>
                    <p><strong>Total Amount:</strong>{order.totalAmount}</p>
                    <h4>Vehicles</h4>
                    {order.items.map(item=>(
                        <p key={item._id}>
                            {item.vehicle.name} * {item.quantity}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default MyOrders