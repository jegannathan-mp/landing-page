import React from 'react'
import './TireDisplay.css'
import { tire_list } from '../../assets/CaroImg/caroimg'


const TireDisplay = () => {
    return (
        <div className='tire_cont'>
            <div className='tire-first'>
                <h2><span>Car Tire</span></h2>
                <ul className='tire-ul'>
                    <li>Yokohama</li>
                    <li>Continental</li>
                    <li>Michelin</li>
                    <li>Bridgestone</li>
                    <li>Pirelli</li>
                    <li>GoodYear</li>
                    <li>See More</li>
                </ul>
            </div>
            <div className="tire-display-list">
                {tire_list.map((item, index) => (
                    <div key={item._id} className='tire-item'>
                        <div className="tire-item-image-container">
                            <img className='tire-item-image' src={item.image} alt={item.name} />
                        </div>
                        <div className='tire-item-info'>
                                <h6>{item.name}</h6>
                            <p className="tire-item-desc">
                                {item.description}
                            </p>
                            <div className='tire-last-div'>
                                <p className="tire-item-price">₹{item.price}</p>
                                <div>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TireDisplay