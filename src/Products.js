import { useState, useEffect } from "react";
import star from "./assets/icons/star.svg";
import "./Products.css";
import { useDispatch } from "react-redux";
import { addProduct } from "./productSlice";

export const Products = () => {
  var dispatch = useDispatch();
  var [products, setProducts] = useState([]);
  useEffect(() => {
    if (products.length === 0) {
      fetch("model/products.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setProducts(data);
        });
    }
  });

  var product_list = [];
  products.forEach((product) => {
    product_list.push(
      <div
        className="product__container"
        key={product.id}
        onClick={() => {
          dispatch(addProduct(product));
        }}
      >
        <div className="product__image-container">
          <img className="product__image" src={product.image} alt="" />
          <p className="product__image-text">
            <span className="product__image-text-time">
              {product.time.split("min")[0]}
            </span>
            min
          </p>
        </div>
        <p className="product__info-title">{product.name}</p>
        <div className="product__info-description">
          <p className="product__info-stars">
            <img className="product__info-stars-icon" src={star} alt="" />
            {product.qualification}
          </p>
          <p className="product__info-name">
            <span className="product__info-separator">&#183;</span>$
            {product.price}
          </p>
        </div>
      </div>
    );
  });

  return <div className="product__list">{product_list}</div>;
};
