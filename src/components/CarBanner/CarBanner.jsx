import React from 'react'
import './CarBanner.css'

import email_img from '../../assets/CaroImg/email.png'
import car_Backr from '../../assets/LogReg1.jpg'

const CarBanner = () => {
    return (
        <div className='carbanner_head'>
            <img className='carbanner_img' src={car_Backr} alt="" />
            <div className='carbanner'>
                <div className='carb1'>
                    <div className='carb_div1'>
                        <img src={email_img} alt="email" />
                    </div>
                    <div className='carb_div2'>
                        <h4>SIGN UP FOR NEWSLETTERS</h4>
                        <p>Be the First to Know. Sign up for newsletter today.</p>
                    </div>
                </div>
                <div className='carb2'>
                    <input type="text" placeholder='Enter your e-mail address' />
                    <button>SUBCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default CarBanner