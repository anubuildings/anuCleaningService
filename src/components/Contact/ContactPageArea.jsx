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

                <b> Main Contact / After hours:</b> <a href="tel:+16477734356"> 
                    +1 (647) 773-4356
                </a>
                
               <b> Office Number: </b> <a href="tel:+12892740648"> 
                    +1 (289) 274-0648
                </a>
                <a href="mailto:vasi@anubuilsingservices.com ">
                  vasi@anubuilsingservices.com 
                </a>
                 

                
                
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="content">
              
                <b>Available 24/7</b>
                
                <strong>Office working hours </strong>
                Monday to Friday: 9:00 AM – 5:00 PM
                Saturday: 9:00 AM – 12:00 PM <br/>
                Sunday: Closed 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="content">
                 
                5215 Finch Ave E, Unit 153,<br/>
                Toronto, Ontario, M1S 0C2
                <br/>
                <div className="social-links">
                <b>Follow Us</b>


                <ul className="clearfix list-wrap flexicon">
                    <li target="blank" className="facebook">
                      <a href="https://www.facebook.com/anubuildingservices/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li target="blank" className="instagram">
                      <a href="https://www.instagram.com/anubuildingservices/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="linkedin">
                      <a target="blank" href="https://www.linkedin.com/in/antony-vasikaran-gnanapragasam-558490190">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="whatsapp">
                      <a target="blank" href="https://wa.me/+16477734356">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    {/* <li className="twitter">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li> */}
                  </ul>
          </div>
          <br/>
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
                <h2 className="title">Contact Us</h2>
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
