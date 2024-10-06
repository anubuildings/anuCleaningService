import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderSearch from "./HeaderSearch";
import MobileMenu from "./MobileMenu";

const HeaderTwo = () => {
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

      <div id="sticky-header" className="menu-area menu-style-three">
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

                      <li className="header-btn">
                        <Link to="/contact" className="btn">
                          Appointment
                        </Link>
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

export default HeaderTwo;
