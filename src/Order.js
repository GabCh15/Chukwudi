import React from "react";
import "./Order.css";
import frio from "./assets/images/frio.png";
import yellow_clock from "./assets/icons/yellow_clock.svg";
import {Order_list} from './Order_list'

export const Order = () => {
  return (
    <div className="order">
      <div className="order__title">
        <span>My</span>
        <img className="order__title-icon" src={frio} alt="" />
        <br />
        <span>Order</span>
      </div>
      <div className="order__person-info">
        <div className="order__person-info-address">
          <span className="order__person-info-address">625 St Marks Ave</span>
          <a className="order__person-info-address-button">Edit</a>
        </div>
        <div className="order__person-info-time">
            <div className="order__person-info-time_icon-container">
                <img className="order__person-info-time_icon" alt="" src={yellow_clock}/>

            </div>
          <span className="order__person-info-address">35 min</span>
          <a className="order__person-info-address-button">Choose Time</a>
        </div>
      </div>
      <Order_list/>


    </div>
  );
};
