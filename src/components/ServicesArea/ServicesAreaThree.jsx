import React, { useEffect, useRef, useState } from 'react';
import { bgImgFromData } from "../../lib/helpers";
import { jarallax } from "jarallax";
import { BestServiceItemsArray } from "../BestServiceItem/BestServiceItemsArray";
import ServicesAreaThreeItem from "./ServicesAreaThreeItem";
import SlickSlider from "../SlickSlider/SlickSlider";

const ServicesAreaThree = () => {
  const [maxHeight, setMaxHeight] = useState(0);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    bgImgFromData();
  }, []);

  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  const slick_settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    const calculateHeights = () => {
      if (sliderContainerRef.current) {
        const slides = sliderContainerRef.current.querySelectorAll('.minslide');
        let max = 0;
        slides.forEach((slide) => {
          const height = slide.clientHeight;
          if (height > max) {
            max = height;
          }
        });
        setMaxHeight(max);
      }
    };

    // Use ResizeObserver to listen for changes in slide size and recalculate heights
    const resizeObserver = new ResizeObserver(() => calculateHeights());
    const container = sliderContainerRef.current;

    if (container) {
      container.querySelectorAll('.minslide').forEach((slide) => {
        resizeObserver.observe(slide);
      });
    }

    // Initial calculation after rendering
    calculateHeights();

    // Cleanup observer on unmount
    return () => {
      if (container) {
        container.querySelectorAll('.minslide').forEach((slide) => {
          resizeObserver.unobserve(slide);
        });
      }
    };
  }, [BestServiceItemsArray]);

  return (
    <section className="services-area-three pt-125">
      <div
        className="services-bg jarallax"
        data-background="/img/bg/services_bg.jpg"
      ></div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title-two white-title text-center mb-65 tg-heading-subheading animation-style2">
              <span className="sub-title">What We’re Offering</span>
              <h2 className="title tg-element-title">
                Delivering Top-Quality Services  <br />
                You Can Trust
              </h2>
            </div>
          </div>
        </div>

        <div className="services-item-wrap-two">
          <div className="row services-active" ref={sliderContainerRef}>
            <SlickSlider settings={slick_settings}>
              {BestServiceItemsArray.map((x, index) => (
                <div key={index} className="col-lg-3 minslide" style={{ height: maxHeight }}>
                  <ServicesAreaThreeItem item={x} />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaThree;
