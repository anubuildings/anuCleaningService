import React from "react";
import FooterTwo from "../components/Footers/FooterTwo";
import HeaderOne from "../components/Headers/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

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
      {footer === 1 && <FooterTwo />}
      {footer === 2 && <FooterTwo />}
    </>
  );
};

export default Layout;
