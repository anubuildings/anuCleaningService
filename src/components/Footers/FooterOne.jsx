import React from "react";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area footer-bg">
        <div className="footer-top">
          <div className="container">
           
<div className="row">
  <div className="col-md-3">
  <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Our Location</h4>
                  </div>
                 
                    <div className="footer-contact">
                    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.228620957824!2d-79.25958312336363!3d43.80961704229958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5031f51b33c09%3A0xa67a8fe6d42b912f!2sAnu%20building%20Services!5e0!3m2!1sen!2slk!4v1728069451686!5m2!1sen!2slk"
        allowFullScreen
        loading="lazy"
      ></iframe> 
                  
                  </div>
                </div>
  </div>
  <div className="col-md-9">
    <div className="row">
      <div className="col-md-4">
      <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Working Hours</h4>
                  </div>
                  <div className="footer-content">
                   
                    <div className="footer-contact">
                    <p>
                    Available 24/7, 365 Days a Year</p>


                    </div>
                  </div>
                </div>
      </div>
      <div className="col-md-4">
      <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Office Hours:</h4>
                  </div>
                  <div className="footer-newsletter">
                   <p>
                   Monday to Friday: 9 AM - 5 PM <br/>
                   Saturday: 9 AM - 12 PM  <br/>
                   Sunday: Closed 
                    </p>
                  </div>
                </div>
</div>
<div className="col-md-4">
<div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Connect with Us</h4>
                  </div>
                  <div className="social-links">
            <ul className="clearfix list-wrap flexicon">
              <li>
                <a href="https://www.facebook.com/anubuildingservices/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
             
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
             
            </ul>
          </div>
                </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <div className="footer-widget">
              <p>&#169;2017 - 2024 <Link to="/">Anu Building Services.</Link> All Rights Reserved. </p>
            </div>
          </div>
          </div>
    </div>
  </div>
</div>
           
          </div>
        </div>

        {/* footer bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default FooterOne;
