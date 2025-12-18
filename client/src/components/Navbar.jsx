import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
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
        <h4 onClick={scrollToBottom} style={{ cursor: "pointer" }} >Contacts</h4>
        <h4 onClick={scrollToBottom} style={{ cursor: "pointer" }} >About</h4>
        <Link className='nav-link'  to="/"><h4>Profile</h4></Link>




      </div>
    </div>
  )
}

export default Navbar