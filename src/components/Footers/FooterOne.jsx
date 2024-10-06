import React from "react";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area footer-bg">
        <div className="footer-top">
          <div className="container">
            <div className="footer-logo-area">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="logo">
                    <Link to="/">
                      <img src="/img/logo/w_logo.svg" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="footer-social-menu">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">LinkedIn</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Contact Us</h4>
                  </div>
                  <div className="footer-content">
                    <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA</p>
                    <div className="footer-contact">
                      <ul className="list-wrap">
                        <li className="phone-addess">
                          <i className="fas fa-phone-alt"></i>
                          <a href="tel:0123456789">1-888-452-1505</a>
                        </li>
                        <li className="email-addess">
                          <a href="mailto:Envato@gmail.com">Envato@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Our Links</h4>
                  </div>
                  <div className="fw-link-list">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/team">Meet Our Team</Link>
                      </li>
                      <li>
                        <Link to="/contact">What We Do</Link>
                      </li>
                      <li>
                        <Link to="/blog">News</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Our Services</h4>
                  </div>
                  <div className="fw-link-list">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/services">Apartment Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/services">House Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/services">Carpet Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/services">After Renovation</Link>
                      </li>
                      <li>
                        <Link to="/services">Curtain Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/services">Window Cleaning</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Newsletter</h4>
                  </div>
                  <div className="footer-newsletter">
                    <p>
                      Subscribe our newsletter to get our latest update & news
                    </p>
                    <form action="#">
                      <input type="text" placeholder="Your mail address" />
                      <button type="submit" className="btn">
                        Subscribe
                      </button>
                    </form>
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
