import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";

import ServicesAreaSix from "../components/ServicesArea/ServicesAreaSix";
import ServicesAreaTwo from "../components/ServicesArea/ServicesAreaTwo";
import VideoAreaTwo from "../components/VideoArea/VideoAreaTwo";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

const AboutUsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout  header={1}
        footer={1}
        headerClassName={"header-style-two"}
        topHeaderClassName={"header-top-two"}>
        <BreadcrumbArea title={"About Us"} subtitle={"About Us"} />
        <AboutUs />
        <ServicesAreaTwo />
        <ServicesAreaSix />
       
        <VideoAreaTwo />
       
        <BrandArea className={"inner-brand-area pb-70"} />
        <br/>
      </Layout>
    </>
  );
};

export default AboutUsPage;
