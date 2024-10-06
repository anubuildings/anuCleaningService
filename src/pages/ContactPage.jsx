import React, { useEffect } from "react";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import ContactMapArea from "../components/Contact/ContactMapArea";
import ContactPageArea from "../components/Contact/ContactPageArea";
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
      <BreadcrumbArea title={"Contact Page"} subtitle={"Contact Page"} />
      <ContactPageArea />
      <ContactMapArea />
    </Layout>
  );
};

export default ContactPage;
