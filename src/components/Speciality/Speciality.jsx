import React from 'react'
import './Speciality.css'

import truck from '../../assets/CaroImg/truck.png'
import wallet from '../../assets/CaroImg/wallet.png'
import web from '../../assets/CaroImg/web.png'

import car_brake from '../../assets/CaroImg/car_brake.jpg'
import car_steering from '../../assets/CaroImg/car_steering.jpg'
import car_tire from '../../assets/CaroImg/car_tire.jpg'


const Speciality = () => {
    return (
        <div className='speciality'>
            <div className='speciality1'>

                <div>
                    <img src={car_tire} alt="" />
                    <div className='spec_para sp2'>
                        <h6>THE BEST COLLECTION</h6>
                        <h4>CAR TIRE</h4>
                    </div>
                </div>
                <div>
                    <img src={car_brake} alt="" />
                    <div className='spec_para sp1'>
                        <h6>THE BEST COLLECTION</h6>
                        <h4>BREAK SYSTEM</h4>
                    </div>
                </div>
                <div>
                    <img src={car_steering} alt="" />
                    <div className='spec_para sp3'>
                        <h6>THE BEST COLLECTION</h6>
                        <h4>STEERING WHEEL</h4>
                    </div>
                </div>
            </div>
            <div className='speciality2'>
                <div>
                    <img src={web} alt="" />

                    <h5>WORLD WIDE DELIVERY</h5>
                    <p>We work with the biggest delivery networks. It doesn't matter where in the world you are.</p>

                </div>
                <div>
                    <img src={truck} alt="" />
                    <h5>FREE SHIPPING</h5>
                    <p>We work with the biggest delivery networks. It doesn't matter where in the world you are.</p>
                </div>
                <div >
                    <img src={wallet} alt="" />
                    <h5>MONEY BACK GURANTEE</h5>
                    <p>Got a problem with the product? Don't worry, We have a 30 day money back gurantee.</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Speciality