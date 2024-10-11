import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="copyright-text">
              <p>
              Maintained by Orandbt
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
