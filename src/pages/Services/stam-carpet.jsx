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
          title={"Steam Wash Carpet Janitorial Services"}
          subtitle={"Steam Wash Carpet Janitorial Services"}
        />
          <section className="services-deatails-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 order-0 order-lg-2">
            <div className="services-details-wrap">
            <div id="slider1" className="beer-slider" data-start="50">
              
                    {/* <BeforeAfterSlider
                      before={"/img/images/services_img02.jpg"}
                      after={"/img/images/after_img.jpg"}
                      
                    /> */}
                                        <img src="/img/images/steam-carpet.jpg" alt="Service Image" style={{ width: "100%", height: "auto", display: "block" }} />

                  </div>
              <div className="services-details-content">
                <br/>
                <h2 className="title">Steam Wash Carpet Janitorial Services</h2>
                <p>
                Carpets can trap dust, allergens, and stains, but our steam cleaning service provides a deep, thorough clean. We use advanced steam technology to refresh your carpets, leaving them looking and feeling brand new.
                    <br/>
                With eco-friendly cleaning agents and powerful equipment, we ensure your carpets are not only clean but also safe for your condominium or business. Our team is committed to delivering results that go beyond surface-level cleaning.
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
