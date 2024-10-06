import { jarallax } from "jarallax";
import React, { useEffect } from "react";
import { bgImgFromData } from "../../lib/helpers";
import { Link } from "react-router-dom";

const BannerThree = () => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <section
      className="banner-area-three jarallax banner-bg-three"
      data-background="/img/banner/h4_banner_bg.jpg"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10 order-0 order-lg-2">
            <div className="banner-form-wrap">
              <h2 className="title">Get a Free Estimate</h2>

              <form action="#">
                <div className="form-grp">
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-grp">
                  <input type="email" placeholder="Email address" />
                </div>
                <div className="form-grp">
                  <input type="text" placeholder="phone number" />
                </div>
                <div className="form-grp">
                  <select
                    id="shortBy"
                    name="select"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Select Service</option>
                    <option>Office Service</option>
                    <option>Home Service</option>
                    <option>Others Service</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-two">
                  Submit Your Request
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="banner-content-three">
              <h2 className="title" data-aos="fade-right" data-aos-delay="0">
                Professional Cleaning Services
              </h2>

              <p data-aos="fade-right" data-aos-delay="300">
                Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse
                nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi
                amet facilisis.
              </p>

              <div
                className="banner-btn"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <Link to="/services" className="btn">
                  Discover MORE
                </Link>
                <Link to="/services" className="btn btn-two">
                  Our service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
