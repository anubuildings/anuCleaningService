import React from "react";
import { Link } from "react-router-dom";

const BannerTwo = () => {
  const facilities = [
    "Best Cleaning Company",
    "Highly Rated Cleaning",
    "Trusted Professionals",
    "We are Committed",
  ];

  return (
    <section className="banner-area-two banner-bg-two">
      <div className="container-fluid p-0">
        <div className="row justify-content-end g-0">
          <div className="col-lg-6">
            <div className="banner-content-two">
              <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                Cleaning Services
              </span>

              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                We Are Best Cleaning Services
              </h2>

              <p className="wow fadeInUp" data-wow-delay=".6s">
                Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi
                amet facilisis.
              </p>

              <ul className="list-wrap wow fadeInUp" data-wow-delay=".8s">
                {facilities.map((x, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle" /> {x}
                  </li>
                ))}
              </ul>

              <div className="banner-content-bottom">
                <Link
                  to="/services"
                  className="btn wow fadeInLeft"
                  data-wow-delay="1s"
                >
                  Discover MORE
                </Link>

                <div
                  className="banner-contact wow fadeInRight"
                  data-wow-delay="1s"
                >
                  <div className="icon">
                    <i className="fas fa-phone-volume"></i>
                  </div>

                  <div className="content">
                    <span>Call for help:</span>
                    <a href="tel:0123456789">(+055) 6489 6448</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
