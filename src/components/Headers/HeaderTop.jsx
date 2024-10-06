import React from "react";
import cn from "classnames";

const HeaderTop = ({ className }) => {
  return (
    <div className={cn("header-top", className)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-top-left">
              <span>
                <i className="fas fa-fire-alt"></i> Satisfaction Guaranteed! | <i className="ml-10
                fa fa-phone"></i> (647) 773-4356 
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-top-right">
              <span>
                <i className="far fa-clock"></i> Office hours : Mon-Fri: 9:00 am – 5:00 pm | Sat 9:00 am – 1:00 pm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
