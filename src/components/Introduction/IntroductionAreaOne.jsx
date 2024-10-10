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
                Condo, Aparments, <br/>Commercial Buildings & Office
                </h3>
              </div>

              <p className="info-one">
              Janitorial services can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve our already high standards to have you see us as the absolute best in the industry. 
              </p>
              <p>
              It’s not enough to have trust in the  Janitorial services crew that you let into your condo, aparments, commercial buildings & offices. You also have to trust that they will perform a first-class  Janitorial services job for you. Putting our employees through a rigorous training program ensures each member of our  Janitorial services team understands their role and how it relates to the overall performance of the team.
              </p>

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

              <div className="introduction-bottom">
                <Link to="/about" className="btn">
                  Discover MORE
                </Link>

                <span className="call-now">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:0123456789">(647) 773-4356</a>
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
