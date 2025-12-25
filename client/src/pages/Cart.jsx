import React from 'react'
import "./cart.css"
import api from '../api/api'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'


const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext)
  const { token } = useContext(AuthContext)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const placeOrder = async () => {
    const items = cart.map(i => ({
      vehicle: i._id,
      quantity: i.quantity
    }));

    await api.post(
      "/orders",
      { items, totalAmount: total },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    clearCart();
    alert("Order placed successfully");
  };
  return (
    <div className='cart-container'>
      <h2>My Cart</h2>
      {cart.length === 0 ?
        (<p>No items in cart </p>) : (<>
          {cart.map(item => (
            <div className='cart-card' key={item._id} >
               <div className="carCart-img">
                                {/* <img src={image1} alt={v.name} /> */}
                                <img
                                    src={`http://localhost:5000/uploads/${item.image}`}
                                    alt={item.name}
                                    width="200"
                                />
                            </div>
              <p>{item.name} - ₹{item.price}</p>
              <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item._id, Number(e.target.value))} />
              <button onClick={() => removeFromCart(item._id)}>
                Remove
              </button>
            </div>

          ))}
          <h3>Total: ₹{total}</h3>

          <button onClick={placeOrder}>Place Order</button></>)}



    </div>
  )
}

export default Cart