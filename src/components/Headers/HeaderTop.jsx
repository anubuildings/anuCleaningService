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
                <i className="fas fa-fire-alt"></i> Satisfaction Guaranteed! | <a href="tel:+16477734356"> <i className="ml-10
                fa fa-phone"></i> +1 (647) 773-4356</a>
                

              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-top-right">
              <span>
                <i className="fas fa-map-marker-alt"></i> Available for service across Toronto, Ontario
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
