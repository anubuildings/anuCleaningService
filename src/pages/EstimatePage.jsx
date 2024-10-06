import React, { useEffect } from "react";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import EstimateArea from "../components/EstimateArea/EstimateArea";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

const EstimatePage = () => {
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
          title={"Service Request"}
          subtitle={"Service Request"}
        />
        <EstimateArea />
        <BrandArea className={"inner-brand-area pb-70"} />
        <br/>
      </Layout>
    </>
  );
};

export default EstimatePage;
