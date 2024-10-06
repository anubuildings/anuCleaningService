import React, { useEffect } from "react";
import AboutUsTwo from "../../components/AboutUs/AboutUsTwo";
import BannerTwo from "../../components/Banner/BannerTwo";
import BrandArea from "../../components/BrandArea/BrandArea";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import ServicesAreaFour from "../../components/ServicesArea/ServicesAreaFour";
import VideoArea from "../../components/VideoArea/VideoArea";
import Layout from "../../layouts/Layout";
import CounterAreaOne from "../../components/CounterAreas/CounterAreaOne";
import PricingArea from "../../components/PricingArea/PricingArea";
import TeamTwo from "../../components/Team/TeamTwo";
import TestimonialAreaTwo from "../../components/Testimonials/TestimonialAreaTwo";
import BlogAreaThree from "../../components/Blogs/BlogAreaThree";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const HomeTwo = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={2} footer={2}>
        <BannerTwo />
        <HowWeWork />
        <AboutUsTwo />
        <ServicesAreaFour />
        <VideoArea />
        <BrandArea className={"brand-area-three pt-100 pb-100"} />
        <CounterAreaOne className={"counter-area-three pb-130"} />
        <PricingArea />
        <TeamTwo />
        <TestimonialAreaTwo
          className={"testimonial-area-three"}
          headerClassName={"white-title animation-style1"}
          src={"/img/bg/testimonial_bg02.jpg"}
        />
        <BlogAreaThree />
      </Layout>
    </>
  );
};

export default HomeTwo;
