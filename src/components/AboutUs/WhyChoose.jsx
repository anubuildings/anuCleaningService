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
                    <i className="fas fa-check-circle"></i>We Are Experts: and dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>We Are Committed: to our customers and are guided in all we do by their needs.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>We Are Complete: and seek to provide exceptional service and engage in proactive behavior.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>We Are Driven: to our customers and are guided in all we do by their needs.
                  </li>
                
                </ul>
              </div>

              <div className="contact">
                <span className="icon">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <a href="tel:0123456789">(647) 773-4356</a>
              </div>
            </div>
          </div>
        </div>
   
      </div>

    </section>
  );
};

export default AboutUs;
