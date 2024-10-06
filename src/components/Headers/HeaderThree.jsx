import React, { useEffect } from "react";
import $ from "jquery";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderSearch from "./HeaderSearch";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const HeaderThree = () => {
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
    <header>
      <div id="header-fixed-height" />

      <div id="sticky-header" className="menu-area menu-style-four">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link to="/">
                      <img src="/img/logo/w_logo.svg" alt="Logo" />
                    </Link>
                  </div>

                  <HeaderNavMenu />

                  <div className="header-action d-none d-md-block">
                    <ul className="list-wrap">
                      <HeaderSearch />

                      <li className="header-contact">
                        <div className="icon">
                          <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="content">
                          <span>Call for help:</span>
                          <a href="tel:0123456789">(+055) 6489 6448</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderThree;
