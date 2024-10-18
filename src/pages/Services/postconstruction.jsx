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
          title={"Post-Construction Cleaning"}
          subtitle={"Post-Construction Cleaning"}
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
                    <img src="/img/images/post-construction-cleaning.png" alt="Service Image" style={{ width: "100%", height: "auto", display: "block" }} />

                  </div>
              <div className="services-details-content">
                <br/>
                <h2 className="title">Post-Construction Cleaning</h2>
                <p>
                After construction or renovation, dust and debris can leave your space looking unfinished. Our post-construction cleaning services ensure that your new space is spotless and ready to use, with meticulous attention to detail.
                <br/>
                We use eco-friendly products that safely clean your space, while also respecting the materials and finishes of your project. Our team is experienced in handling the toughest post-construction messes, so you can move in or open up without delay.
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
