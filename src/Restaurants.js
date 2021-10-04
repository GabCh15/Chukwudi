import "./Restaurants.css";
import {Categories} from "./Categories";
import {Products} from "./Products";
import hamburger from "./assets/icons/hamburger.svg";
import clock from "./assets/icons/clock.svg";
import bottom_arrow from "./assets/icons/bottom_arrow.svg";


export const Restaurants = () => {
  return (
    <div className="restaurants">
      <div className="restaurants__header">
        <div className="restaurants__header-title-container">
          <h2 className="restaurants__header-title-text">Restaurants</h2>
          <img
            className="restaurants__header-title-img"
            alt=""
            src={hamburger}
          />
        </div>
        <div className="restaurants__header-delivery_button">
          <img className="restaurants__header-delivery-icon" src={clock} alt=""/>
          <p className="restaurants__header-delivery-text">Delivery: <strong>Now</strong></p>
          <img className="restaurants__header-delivery-icon" src={bottom_arrow} alt=""/>
        </div>
      </div>
      <Categories/>
      <Products/>
    </div>
  );
};
