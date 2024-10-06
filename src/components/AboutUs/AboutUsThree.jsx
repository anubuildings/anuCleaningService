import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ProgressBarItems } from "../ProgressBar/ProgressBarItems.js";

const AboutUsThree = () => {
  return (
    <section className="about-area-three pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-7 col-lg-6 col-md-10">
            <div className="about-img-wrap-two">
              <img src="/img/images/h4_about_img01.jpg" alt="" />
              <img
                src="/img/images/h4_about_img02.jpg"
                data-aos="fade-up"
                alt=""
              />
              <img src="/img/images/h4_about_shape01.png" alt="" />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6">
            <div className="about-content-three">
              <div className="section-title-three mb-25">
                <span className="sub-title">About Our Company</span>
                <h2 className="title">One Stop Commercial Cleaning Company</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur suspendisse nulla
                aliquam. Risus rutrum tellus eget ultrices pretium nisi amet
                facilisis. Augue eu vulputate tortor egestas cursus vivamus.
                massa ultrices nunc dignissim.
              </p>

              <div className="progress-wrap">
                {ProgressBarItems.map((x, index) => (
                  <ProgressBar key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsThree;
