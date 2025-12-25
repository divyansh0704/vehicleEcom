import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'


const Navbar = () => {
  const {cart} = useContext(CartContext)
  const {isLoggedIn,logout,role}=useContext(AuthContext)
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };
  
  return (
    <div className='navContainer'>
      <h1 className="navleft">Car<span>Sales</span></h1>
      <div className="navright">

        <Link className='nav-link' to="/"><h4>Home</h4></Link>
         {/*<h4 onClick={scrollToBottom} style={{ cursor: "pointer" }} >Contacts</h4>
        <h4 onClick={scrollToBottom} style={{ cursor: "pointer" }} >About</h4>
        <Link className='nav-link'  to="/register"><h4>Sign Up</h4></Link> */}
        {role === "admin" && <Link className='nav-link' to="/admin"><h4>Admin</h4></Link>}

        {isLoggedIn?
        (<><Link className='nav-link' to="/orders"><h4>My orders</h4></Link>
        <div className="cart-edit" style={{position: "relative",height:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}><Link className='nav-link' to="/cart"><h4>Cart</h4></Link>{cart.length > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-10px",
              background: "red",
              borderRadius: "50%",
              width: "10px",
              height: "10px"
            }}
          />
        )}</div>
        
        <button onClick={logout}>Log Out</button></>):
        (<><Link  className='nav-link' to="register"><h4>register</h4></Link>
      <Link className='nav-link' to="login"><h4>login</h4></Link></>)}


      </div>
    </div>
  )
}

export default Navbar