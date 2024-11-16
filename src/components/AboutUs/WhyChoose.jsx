import React, { useEffect } from "react";
import { intersectingAnimation } from "../../lib/helpers";
import OdometerItem from "../Odometer/OdometerItem";

const AboutUs = () => {
  useEffect(() => {
    intersectingAnimation();
  }, []);

  return (
    <section className="about-area has-animation pt-30 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="about-img-wrap">
              <img
                src="/img/images/about_img01.jpg"
                className="wow fadeInLeft"
                data-wow-delay=".2s"
                alt=""
              />
           
             
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about-content">
              <div className="section-title mb-25">
                

                <h2 className="title">
                Why Choose Us
                </h2>
              </div>

              <div className="introduction-list">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>We Are Experts: With extensive experience and a strong network, we consistently deliver exceptional, professional results across all types of spaces.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>We Are Committed: We listen closely to our customers’ needs and tailor our services to meet them. Your satisfaction is always our priority.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>We Are Eco-Friendly: We use environmentally safe products that are gentle on your space and the planet, ensuring a healthy and clean environment.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>We Are Reliable: Our team is professional, punctual, and always delivers on time, making sure your space is cleaned when you need it.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>We Are Available 24/7: No matter the time or day, we’re here for you. Our services are available 24/7 to fit your schedule and needs.
                  </li>
                
                </ul>
              </div>

              <div className="contact">
                <span className="icon">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <a href="tel:+16477734356"> 
                          +1 (647) 773-4356
                      </a>
              </div>
            </div>
          </div>
        </div>
   
      </div>

    </section>
  );
};

export default AboutUs;
