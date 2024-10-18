import React from "react";
import cn from "classnames";

const BrandArea = ({ className }) => {
 
  return (
    <div className={cn(className ? className : "brand-area pb-130 pt-100" )}>
      <div className="container">
       <div className="row">
        <div className="col-md-4 alc">
<img src="/img/images/award.png" className="satimg pb-20" />

        </div>
        <div className="col-md-8">
        
        <h2 className="title tg-element-title">
        Award Area
                </h2>
                <p>
                Your satisfaction is 100% guaranteed at Anu Building Services. We are committed to delivering exceptional service every time and ensuring you are completely satisfied with the results. Hiring our janitorial services is a decision you can feel confident about.
                <br/>
                We also use eco-friendly cleaning products to provide a safe and healthy environment for your space. Our employees are carefully screened through a rigorous recruitment process and receive hands-on training to ensure top-quality service.
                </p>
                
          </div>
         
       </div>
      </div>
    </div>
  );
};

export default BrandArea;
