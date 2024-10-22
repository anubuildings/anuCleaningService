import React from "react";
import cn from "classnames";

const BrandArea = ({ className }) => {
 
  return (
    <div className={cn(className ? className : "brand-area pb-130 od1" )}>
      <div className="container">
       <div className="row">
        <div className="col-md-4 alc">
<img src="/img/images/aboutaward.jpg" className="w250" />

        </div>
        <div className="col-md-8">
        
        <h2 className="title tg-element-title">
        Award Area
                </h2>
                <p>
                Dear customer, I am happy to inform you that the 2023 business excellence consumer choice award has been awarded to ANU BUILDING SERVICES.  <br/>I really thank you for all of my customer, firends and family to give me a support to build our company.  Thanks one more time .
                </p>
                
          </div>
         
       </div>
      </div>
    </div>
  );
};

export default BrandArea;
