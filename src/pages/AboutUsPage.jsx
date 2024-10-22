import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea1 from "../components/BreadcrumbArea/BreadcrumbArea1";
import AwardArea2 from "../components/BrandArea/AwardArea2"
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
        <BreadcrumbArea1 title={"About Us"} subtitle={"About Us"} />
        <div className="mob">
        <AwardArea2/>
        </div>
        <AboutUs />
        <ServicesAreaTwo />
        <ServicesAreaSix />
        <div className="desk">
        <AwardArea2/>
        </div>
        <VideoAreaTwo />
       
        <BrandArea className={"inner-brand-area pb-70"} />
        <br/>
      </Layout>
    </>
  );
};

export default AboutUsPage;
