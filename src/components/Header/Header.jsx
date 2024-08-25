import React from 'react'
import './Header.css'

import backimg from '../../assets/CaroImg/car6.jpg'

const Header = () => {
  return (

    <div className='header'>
        <img className='header_img' src={backimg} alt="" />
        <div className="header-contents">
            <h2>Get Your Car the Care It Deserves</h2>
            <p>At our expert car service center, we provide high-quality maintenance and repair solutions to keep your vehicle in top condition. Whether it's brakes, wheels, or tires, our skilled technicians use the best tools and parts to ensure your car performs at its best. Trust us for reliable and efficient service every time.</p>
            <button >View Menu</button>
        </div>
    </div>
  )
}

export default Header