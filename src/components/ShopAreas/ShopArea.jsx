import React from "react";
import ShopItem from "./ShopItem";
import { ShopItems } from "./ShopItems";

const ShopArea = () => {
  return (
    <section className="shop-area pt-130 pb-130">
      <div className="container">
        <div className="shop-top-wrap mb-50">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              <div className="shop-showing-result">
                <p>Showing all 9 results</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="shop-ordering">
                <select name="orderby" className="orderby">
                  <option value="Default sorting">Default sorting</option>
                  <option value="Sort by popularity">Sort by popularity</option>
                  <option value="Sort by average rating">
                    Sort by average rating
                  </option>
                  <option value="Sort by latest">Sort by latest</option>
                  <option value="Sort by latest">Sort by latest</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-item-wrap">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
            {ShopItems.map((x, index) => (
              <div key={index} className="col">
                <ShopItem item={x} />
              </div>
            ))}
          </div>

          <div className="autoload-btn text-center mt-30">
            <a href="#!" className="btn">
              Auto load
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
