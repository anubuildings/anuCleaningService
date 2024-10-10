import React, { useEffect } from "react";
import BannerOne from "../../components/Banner/BannerOne";
import BrandArea from "../../components/BrandArea/BrandArea";
import AwardArea from "../../components/BrandArea/AwardArea"
import FaqAreaOne from "../../components/FaqArea/FaqAreaOne";
import IntroductionAreaOne from "../../components/Introduction/IntroductionAreaOne";
import ServicesAreaThree from "../../components/ServicesArea/ServicesAreaThree";
import TestimonialAreaTwo from "../../components/Testimonials/TestimonialAreaTwo";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const HomeOne = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout
        header={1}
        footer={1}
        headerClassName={"header-style-two"}
        topHeaderClassName={"header-top-two"}
      >
        <BannerOne />
       
        <IntroductionAreaOne />
        <ServicesAreaThree />
        <FaqAreaOne />
        <TestimonialAreaTwo
          className={"testimonial-area-two"}
          headerClassName={"animation-style2"}
          src={"/img/bg/testimonial_bg.jpg"}
        />
       <AwardArea/>
        <BrandArea />
      </Layout>
    </>
  );
};

export default HomeOne;
