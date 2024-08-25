import React from 'react'
import './Footer.css'
import {logos } from '../../assets/front-end-assets/assets'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logos.car_logo} alt="" className='footer-logo' />
                <p>Providing exceptional car care with a focus on safety, quality, and reliability. Your trusted partner in keeping your vehicle in peak condition.</p>
                <div className="footer-social-icons">
                    <Link to='https://www.instagram.com/_._jon.snow_._'><img src={logos.insta_gram} alt="" /></Link>
                    <Link to='https://github.com/jegannathan-mp'><img src={logos.git_hub} alt="" /></Link>
                    <Link to='https://www.linkedin.com/in/mpjegannathanmech'><img src={logos.linked_in} alt="" /></Link>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9876548912</li>
                    <li>jegan@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © ijackx.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer