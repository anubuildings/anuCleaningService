import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <div className="copyright-text">
              <p>
              &#169;2024 <Link to="/">Anu Building Services.</Link> All Rights Reserved.
              </p>
            </div>
          </div>

          {/* <div className="col-lg-6 col-md-5">
            <div className="footer-bottom-menu">
              <ul className="list-wrap">
                <li>
                  <Link to="/contact">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
