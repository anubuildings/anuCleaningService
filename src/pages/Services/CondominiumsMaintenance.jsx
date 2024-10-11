import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import { Link } from "react-router-dom";



const ServicesDetailsPage = () => {
  useEffect(() => {
    //gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout  header={1}
        footer={1}
        headerClassName={"header-style-two"}
        topHeaderClassName={"header-top-two"}>
        <BreadcrumbArea
          title={"Condominiums Maintenance"}
          subtitle={"Condominiums Maintenance"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
            <div id="slider1" className="beer-slider" data-start="0">
              
                    <BeforeAfterSlider
                      before={"/img/images/services_item_img04.jpg"}
                      after={"/img/images/after_img.jpg"}
                      
                    />
                  </div>
              <div className="services-details-content">
                <br/>
                <h2 className="title">Condominiums Maintenance</h2>
                <p>
                Anu building services is equipped to handle high-end condominium building  Janitorial services and maintenence services also provide professional  Janitorial services personnel who will work to satisfy the varying needs with well-trained individual who will work hard to provide a friendly and a clean and attractive living environment.
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
