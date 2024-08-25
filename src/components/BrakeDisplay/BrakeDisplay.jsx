import React from 'react';
import './BrakeDisplay.css';
import { brake_list } from '../../assets/CaroImg/caroimg';

const BrakeDisplay = () => {
    return (
        <div className='break_cont'>
            <div className='break-first'>
                <h2><span>Brake System</span></h2>
                <ul className='break-ul'>
                    <li>Yokohama</li>
                    <li>Continental</li>
                    <li>Michelin</li>
                    <li>Bridgestone</li>
                    <li>Pirelli</li>
                    <li>GoodYear</li>
                    <li>See More</li>
                </ul>
            </div>
            <div className="brake-display-list">
                {brake_list.map((item, index) => (
                    <div key={item._id} className='brake-item'>
                        <div className="brake-item-image-container">
                            <img className='brake-item-image' src={item.image} alt={item.name} />
                        </div>
                        <div className='brake-item-info'>

                            <h6>{item.name}</h6>

                            <p className="brake-item-desc">
                                {item.description}
                            </p>
                            <div className='brake-last-div'>
                            <p className="brake-item-price">₹{item.price}</p>
                                <div><button>Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrakeDisplay;
