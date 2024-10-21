import React, { useEffect } from "react";
import BreadcrumbArea4 from "../components/BreadcrumbArea/BreadcrumbArea4";
import TestimonialAreaFour from "../components/Testimonials/TestimonialAreaTwo"
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

const ContactPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout  header={1}
    footer={1}
    headerClassName={"header-style-two"}
    topHeaderClassName={"header-top-two"}>
      <BreadcrumbArea4 title={"Testimonials"} subtitle={"Testimonials"} />
     <TestimonialAreaFour/>
     <br/>
    </Layout>
  );
};

export default ContactPage;
