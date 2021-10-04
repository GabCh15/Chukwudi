import React from 'react'
import './Ad.css'
import headerimage from './assets/images/headerimage.png'
import arrow from './assets/icons/arrow.svg'
import d from './assets/images/d.png'
export const Ad = () => {
    return (
        <div className="ad">
            <div className="ad__img-container">
                <img className="ad__img" src={headerimage} alt=""/>
            </div>
            <div className="ad__text-container">
            <h1 className="ad__text-title"><span>$0 delivery for 30 days!</span><img src={d} className="ad__text-title-icon" alt=""/></h1>
            <p className="ad__text-desc">$0 delivery fee for orders over $10 for 30 days</p>
            </div>
            <div className="ad__learn_more-container">
                <a className="ad__learn_more-button" href="#" >
                    <span>Learn more</span> <img src={arrow} alt="" className="ad__learn_more-button_icon"/>
                </a>
            </div>

        </div>
    )
}
