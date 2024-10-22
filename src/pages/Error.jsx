import React, { useEffect } from "react";
import BreadcrumbArea2 from "../components/BreadcrumbArea/BreadcrumbArea2";
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
       <div className="not-found-container">
      <svg className="not-found-svg" viewBox="0 0 100 20">
        <text x="10" y="15" className="not-found-text">
          404
        </text>
      </svg>
      <div className="message">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
      </div>
      <a href="/" className="back-home">
        Go back home
      </a>
    </div>
    </Layout>
  );
};

export default ContactPage;
