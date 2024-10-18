import React from "react";
import cn from "classnames";

const BrandArea = ({ className }) => {
 
  return (
    <div className={cn(className ? className : "brand-area pb-130 pt-100" )}>
      <div className="container">
       <div className="row">
        <div className="col-md-2 alc">
        <img src="/img/images/satisfaction.png" className="satimg" />
        </div>
        <div className="col-md-8">
          <center>
        <h2 className="title tg-element-title">
        Satisfaction Guaranteed!
                </h2>
                <p>
                At Anu Building Services, we genuinely care about your experience and your satisfaction means everything to us. That’s why we back our work with a 100% satisfaction guarantee. We’re here to make sure your space feels clean, comfortable, and cared for—every time.
                </p>
                </center>
          </div>
          <div className="col-md-2 alc">
          <img src="/img/images/stamp.png" className="satimg" />
          </div>
       </div>
      </div>
    </div>
  );
};

export default BrandArea;
