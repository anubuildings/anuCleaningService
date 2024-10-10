import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import { Link } from "react-router-dom";



const ServicesDetailsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout  header={1}
        footer={1}
        headerClassName={"header-style-two"}
        topHeaderClassName={"header-top-two"}>
        <BreadcrumbArea
          title={"Residential Carpet  Janitorial services"}
          subtitle={"Residential Carpet  Janitorial services"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
            <div id="slider1" className="beer-slider" data-start="50">
              
                    <BeforeAfterSlider
                      before={"/img/images/services_img02.jpg"}
                      after={"/img/images/after_img.jpg"}
                      
                    />
                  </div>
              <div className="services-details-content">
                <br/>
                <h2 className="title">Residential Carpet  Janitorial services</h2>
                <p>
                Our professional steam Janitorial services can save you from replacing your carpet before it needs to be replaced. Ensuring that your carpets are clean and in good shape adds value to your resedential property when it has been properly maintained. Proper carpet steam  Janitorial services and maintenance will also help to keep your home odour-free. Anu building services only use professional industry-approved products for all of our services.
                </p>
             

             <br/>
             <Link to="/estimate" className="btn">
                        Request a Quote
                        </Link>

                            </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
        <BrandArea className={"inner-brand-area pb-70"} />
        <br/>
      </Layout>
    </>
  );
};

export default ServicesDetailsPage;
