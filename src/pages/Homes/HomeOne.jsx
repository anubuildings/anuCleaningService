import React, { useEffect } from "react";
import BannerOne from "../../components/Banner/BannerOne";
import BlogAreaTwo from "../../components/Blogs/BlogAreaTwo";
import BrandArea from "../../components/BrandArea/BrandArea";
import CounterAreaTwo from "../../components/CounterAreas/CounterAreaTwo";
import FaqAreaOne from "../../components/FaqArea/FaqAreaOne";
import IntroductionAreaOne from "../../components/Introduction/IntroductionAreaOne";
import ProjectAreaTwo from "../../components/ProjectAreas/ProjectAreaTwo";
import ServicesAreaThree from "../../components/ServicesArea/ServicesAreaThree";
import ServicesAreaTwo from "../../components/ServicesArea/ServicesAreaTwo";
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
       
        <BrandArea />
      </Layout>
    </>
  );
};

export default HomeOne;
