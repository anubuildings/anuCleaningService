import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea3 from "../../components/BreadcrumbArea/BreadcrumbArea3";
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
        <BreadcrumbArea3
          title={"Underground parking lot power wash and clean"}
          subtitle={"Underground parking lot power wash and clean"}
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
                <h2 className="title">Underground parking lot power wash and clean</h2>
                <p>
                Underground parking lots can accumulate dirt, oil stains, and debris, making them unappealing and unsafe. Our power wash and cleaning services are designed to restore your parking lot to pristine condition, removing tough stains and ensuring a clean, well-maintained space.
                <br/>
                We use powerful, eco-friendly cleaning agents and equipment to tackle even the hardest-to-reach areas, providing a deep clean that enhances safety and aesthetics. Our team is dedicated to delivering thorough and efficient results, leaving your underground parking lot looking spotless and well cared for.
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
