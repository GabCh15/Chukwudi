import "./Cart.css";
import profile from "./assets/icons/profile.svg";
import { Order } from "./Order";
export const Cart = (props) => {
  return (
    <div className={props.className}>
      <div className="cart__profile">
        <img className="cart__profile-icon" src={profile} alt="" />
        <div className="cart__profile-notifications">3</div>
      </div>
      <Order />
    </div>
  );
};
