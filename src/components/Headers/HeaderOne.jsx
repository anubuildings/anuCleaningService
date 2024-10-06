import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderTop from "./HeaderTop";
import HeaderLogoArea from "./HeaderLogoArea";
import cn from "classnames";

const HeaderOne = ({ headerClassName, topHeaderClassName }) => {
  // menu sticky
  useEffect(() => {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $(".scroll-to-target").removeClass("open");
        $("#header-fixed-height").removeClass("active-height");
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $(".scroll-to-target").addClass("open");
        $("#header-fixed-height").addClass("active-height");
      }
    });
  }, []);

  return (
    <header className={cn(headerClassName)}>
      {/* header top - light */}
      <HeaderTop className={topHeaderClassName} />

      {/* header logo area */}
    

      <div id="header-fixed-height" />

      <div id="sticky-header" className="menu-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars"></i>
              </div>

              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo d-none">
                    <Link to="/">
                      <img src="/img/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <HeaderLogoArea />
                  <HeaderNavMenu />

                  <div className="header-action d-none d-md-block">
                    <ul className="list-wrap">
                      <HeaderSearch />

                      <li className="header-btn">
                        <Link to="/estimate" className="btn">
                        Get Quote
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* 
              <!-- Mobile Menu  --> */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
