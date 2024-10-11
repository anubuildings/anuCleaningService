import React from "react";
import { BestServiceItemsArray } from "../BestServiceItem/BestServiceItemsArray";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
const breakpointColumnsObj = {
  default: 4, // 4 columns by default
  1100: 3,    // 3 columns for screens less than 1100px wide
  700: 2,     // 2 columns for screens less than 700px wide
  500: 1      // 1 column for screens less than 500px wide
};

const ServicesAreaAll = () => {
  return (
    <section className="services-area-three inner-services-two pt-130 pb-90">
      <div className="container custom-container-two">
        <div className="services-item-wrap-two">
        <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {BestServiceItemsArray.map((item, index) => (
        <div key={index} className="masonry-item">
          <div className="service-card">
            <div className="service-thumbnail">
              <Link to={item.url}>
                <img src={item.src} alt={item.title} style={{ height: 'auto', maxHeight: `${Math.floor(Math.random() * (300 - 150 + 1)) + 150}px` }} />
              </Link>
            </div>
            <div className="service-details">
              <h2 className="service-title">
                <Link to={item.url}>{item.title}</Link>
              </h2>
              <p className="service-subtitle">{item.subtitle}</p>
              <Link to={item.url} className="btn btn-two">
                      Read more
                    </Link>
            </div>
          </div>
        </div>
      ))}
    </Masonry>


        </div>
      </div>
    </section>
  );
};

export default ServicesAreaAll;
