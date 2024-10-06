import React from "react";
import EstimateForm from "./EstimateForm";

const EstimateArea = () => {
  return (
    <section className="estimate-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="estimate-img-wrap">
              <img src="/img/images/estimate_img.jpg" alt="" />
              
              <div className="office-loction-wrap">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="loction-item">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="content">
                        <h2 className="title">New York Office</h2>
                        <p>681 Sussex St. Brooklyn, NY 11204, USA.</p>
                        <a href="tel:0123456789">(+01) 9999-888-888</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="loction-item">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="content">
                        <h2 className="title">California Office</h2>
                        <p>681 Sussex St. Brooklyn, NY 11204, USA.</p>
                        <a href="tel:0123456789">(+01) 9999-888-888</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="estimate-form">
              <h2 className="title">Schedule Free Estimate</h2>
              {/* form */}
              <EstimateForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateArea;
