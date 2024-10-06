import React, { useEffect } from "react";
import AboutUsThree from "../../components/AboutUs/AboutUsThree";
import BannerThree from "../../components/Banner/BannerThree";
import BlogAreaFour from "../../components/Blogs/BlogAreaFour";
import BrandArea from "../../components/BrandArea/BrandArea";
import CounterAreaTwo from "../../components/CounterAreas/CounterAreaTwo";
import FaqAreaTwo from "../../components/FaqArea/FaqAreaTwo";
import ProjectAreaThree from "../../components/ProjectAreas/ProjectAreaThree";
import ServicesAreaFive from "../../components/ServicesArea/ServicesAreaFive";
import TestimonialAreaFour from "../../components/Testimonials/TestimonialAreaFour";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const HomeThree = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={3} footer={1}>
        <BannerThree />
        <AboutUsThree />
        <ServicesAreaFive />
        <FaqAreaTwo />
        <ProjectAreaThree />
        <TestimonialAreaFour />
        <BrandArea />
        <CounterAreaTwo
          className={"counter-area-three"}
          src={"/img/bg/counter_bg02.jpg"}
        />
        <BlogAreaFour />
      </Layout>
    </>
  );
};

export default HomeThree;
