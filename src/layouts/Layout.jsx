import React from "react";
import FooterOne from "../components/Footers/FooterOne";
import HeaderOne from "../components/Headers/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import Accessibility from "../accessibility";

const Layout = ({
  children,
  header = 2,
  footer = 1,
  topHeaderClassName,
  headerClassName,
}) => {
  return (
    <>
   
      <PageLoader />
      <ScrollToTopButton />
      <Accessibility />
      <div id="content-wrapper">
      {/* header */}
      {header === 1 && (
        <HeaderOne
          headerClassName={headerClassName}
          topHeaderClassName={topHeaderClassName}
        />
      )}

    

      {/* main content */}
      <main>{children}</main>
    
      {/* footer */}
      {footer === 1 && <FooterOne />}
      {footer === 2 && <FooterOne />}
      </div>
    </>
  );
};

export default Layout;
