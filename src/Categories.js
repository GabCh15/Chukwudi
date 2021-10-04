import "./Categories.css";
import { useState, useEffect } from "react";
import right_arrow from "./assets/icons/right_arrow.svg";
import left_arrow from "./assets/icons/left_arrow.svg";

const scrolList = (scrollValue) => {
  var list = document.getElementsByClassName("categories__category-list")[0];
  var width = list.scrollWidth - list.clientWidth;
  if (
    list.scrollLeft + scrollValue <= width &&
    list.scrollLeft + scrollValue >= 0
  ) {
    list.scrollLeft += scrollValue;
  }
};

export const Categories = () => {
  var [categories, setCategories] = useState([]);
  useEffect(() => {
    if (categories.length === 0) {
      fetch("model/categories.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setCategories(data);
        });
    }
  });
  var [selected, setSelected] = useState(0);
  var categories_list = [];
  categories.forEach((category, i) => {
    var modifier =
      i === selected
        ? "categories__category categories__category--selected"
        : "categories__category";
    categories_list.push(
      <div
        className={modifier}
        key={category.id}
        onClick={() => setSelected(i)}
      >
        <div className="categories__category-icon-container">
          <img
            className="categories__category-icon"
            src={category.icon}
            alt=""
          />
        </div>
        <div className="categories__category-text">{category.name}</div>
      </div>
    );
  });
  return (
    <div className="categories">
      <div className="categories__arrow-container">
        <button className="categories__arrow" onClick={() => scrolList(-40)}>
          <img className="categories__arrow-icon" src={left_arrow} alt="" />
        </button>
      </div>
      <div className="categories__category-list">{categories_list}</div>
      <div className="categories__arrow-container">
        <button className="categories__arrow" onClick={() => scrolList(40)}>
          <img className="categories__arrow-icon" src={right_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
