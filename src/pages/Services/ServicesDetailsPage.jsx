import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea2 from "../../components/BreadcrumbArea/BreadcrumbArea2";
import ServicesDetailsArea from "../../components/ServicesDetailsArea/ServicesDetailsArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";

const ServicesDetailsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={1} footer={1}>
        <BreadcrumbArea2
          title={"Single Services"}
          subtitle={"Single Services"}
        />
        <ServicesDetailsArea />
        <BrandArea className={"inner-brand-area pb-70"} />
      </Layout>
    </>
  );
};

export default ServicesDetailsPage;
