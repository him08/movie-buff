import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
   <nav className='nav'>
   <div>
   <Link className='logo' to="/">
    MOVIES BUFF
   </Link>
   </div>
   <div>
    <Link className='link' to="/login">
     Login
    </Link>
    <Link className='link' to="/register">
     Register
    </Link>
   </div>
  </nav>
  )
}

export default Navbar