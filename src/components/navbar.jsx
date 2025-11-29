import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>TitleHub</div>
      <ul>
        <Link to={"/"} style={{textDecorationLine:"none",fontWeight:"bold"}}><li>Home</li></Link>
        <Link to={"/about"} style={{textDecorationLine:"none",fontWeight:"bold"}}><li>About</li></Link>
        <Link to={"/contact"} style={{textDecorationLine:"none",fontWeight:"bold"}}><li>Contact</li></Link>

      </ul>
    </div>
  )
}
export default Navbar
