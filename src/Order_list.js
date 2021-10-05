import React from "react";
import "./Order_list.css";
import { useSelector } from "react-redux";

export const Order_list = () => {
  const products = useSelector((state) => state.products.value);
  console.log(products);
  var product_list = []
  products.forEach((product) => product_list.push(
    <div className="order_list__product">
      <img className="order_list__product-img" alt="" src={product.image} />
      <div className="order_list__product-quiantity">
        <input
          className="order_list__product-quiantity-input"
          type="number"
          min="0"
          value="1"
          onChange={(obj) => console.log(obj.value)}
        />
        x
      </div>
      <div className="order_list__product-name">{product.name}</div>
      <div className="order_list__product-price">${product.price}</div>
    </div>
  ));

  return <div className="order_list">{product_list}</div>;
};
