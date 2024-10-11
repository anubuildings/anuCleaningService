import React from "react";
import cn from "classnames";

const BrandArea = ({ className }) => {
 
  return (
    <div className={cn(className ? className : "brand-area pb-130 pt-100" )}>
      <div className="container">
       <div className="row">
        <div className="col-md-4 alc">
<img src="/img/images/award.png" className="satimg" />
        </div>
        <div className="col-md-8">
        
        <h2 className="title tg-element-title">
        Award Area
                </h2>
                <p>
                Your satisfaction is 100% guaranteed at Anu Building Services. If you are not happy with our service, just let us know and we’ll work to make it right. This makes hiring  Janitorial services Company virtually risk free. Our Employees are thoroughly screened through our rigorous recruitment process, and every one of them goes through hand in training process.
                </p>
                
          </div>
         
       </div>
      </div>
    </div>
  );
};

export default BrandArea;
