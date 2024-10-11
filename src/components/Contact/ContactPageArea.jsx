import React from "react";
import ContactForm from "./ContactForm";

const ContactPageArea = () => {
  return (
    <section className="contact-area pt-130 pb-130">
      <div className="container">
        <div className="inner-contact-info-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="content">
                  (647) 773-4356
                 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="content">
              
365
24/7 - done
<br/>
<strong>Office working hours </strong>
Monday to Friday 9 am to 5 pm 
Saturday- 9 -12 <br/>
Sunday - close 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="content">
                 
                  5215, Finch Ave E Unit:153 ,<br/>
Scarborough, Ontario.M1S0C2
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-area">
          <div className="row align-items-center g-0">
            <div className="col-lg-6">
              <div className="contact-img">
                <img src="/img/images/contact_img.jpg" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-content">
                <h2 className="title">Contact for Services</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageArea;
