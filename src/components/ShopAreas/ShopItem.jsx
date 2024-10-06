import React from "react";
import { Link } from "react-router-dom";

const ShopItem = ({ item }) => {
  return (
    <div className="shop-item">
      <div className="shop-thumb">
        <Link to={item.url}>
          <img src={item.src} alt="" />
        </Link>

        <div className="shop-action">
          <Link to={item.url}>
            <i className="fas fa-shopping-cart" />
          </Link>
          <Link to={item.url}>
            <i className="fas fa-heart" />
          </Link>
          <Link to={item.url}>
            <i className="fas fa-eye" />
          </Link>
        </div>
      </div>

      <div className="shop-content">
        <Link to="/shop" className="tag">
          {item.tag}
        </Link>

        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>

        <h3 className="price">${item.price}</h3>
      </div>
    </div>
  );
};

export default ShopItem;
