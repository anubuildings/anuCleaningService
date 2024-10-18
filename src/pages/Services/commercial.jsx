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
          title={"Commercial Buildings  Janitorial services"}
          subtitle={"Commercial Buildings  Janitorial services"}
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
                <h2 className="title">Commercial Buildings  Janitorial services</h2>
                <p>
                Whether you manage a large complex or a small business, maintaining cleanliness is essential. Our commercial building cleaning services cover all areas, from lobbies and break rooms to high-traffic zones, ensuring your building stays clean and inviting.
                <br/>
                We believe in using natural, sustainable cleaning products that are safe for both people and the environment. Our goal is to provide the highest standard of service, with the quality and attention to detail you deserve.
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
