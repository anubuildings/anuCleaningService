import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const IntroductionAreaOne = () => {
  return (
    <section id="intro" className="introduction-area pb-130">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="introduction-img-wrap">
              <img src="/img/images/introduction_img01.png" alt="" />
              <img
                src="/img/images/h3_about_img.png"
                data-aos="fade-right"
                alt=""
              />

            
            </div>
          </div>

          <div className="col-lg-6">
            <div className="introduction-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style2">
                <br/>
                <span className="sub-title">Professional  Janitorial Services for</span>
                <h3 className="title ">
                Condominium, <br/>Commercial Buildings & Office
                </h3>
              </div>

              <p className="info-one">
              We know cleaning can be a hassle, and there are many options out there. That’s why we work hard to keep our standards high and make sure you can rely on us as one of the best.
              </p>
              <p>
              Our team is well-trained to deliver top-quality cleaning services. You can trust that we’ll do a great job and keep your space clean and comfortable.
              </p>

              <br/>

              <div className="introduction-bottom">
                <Link to="/about" className="btn">
                  Discover MORE
                </Link>

                <span className="call-now">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+16477734356"> 
                          +1 (647) 773-4356
                      </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionAreaOne;
