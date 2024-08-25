import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/front-end-assets/assets';

import logo1 from '../../assets/CaroImg/logo1.png'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");

  return (
    <div  className='navbar'>
        <Link to='/' ><img src={logo1} alt="Logo" className="logo" /></Link>
        <ul className="navbar-menu">
            <a href='#home' onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>home</a>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : ""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>mobile app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search icon" />
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar