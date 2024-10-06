import React from "react";
import { Link } from "react-router-dom";

const HeaderLogoArea = () => {
  return (
    <div className="header-logo-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-3">
            <div className="logo">
              <Link to="/">
                <img src="/img/logo/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default HeaderLogoArea;
