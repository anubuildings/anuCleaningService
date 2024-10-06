import { jarallax } from "jarallax";
import React, { useEffect } from "react";
import { bgImgFromData } from "../../lib/helpers";
import CounterAreaOneItem from "./CounterAreaOneItem";
import { CounterItemsArray } from "./CounterItemsArray";
import cn from "classnames";

const CounterAreaTwo = ({ className, src }) => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  return (
    <section className={cn(className, "counter-bg jarallax")} data-background={src}>
      <div className="container">
        <div className="row">
          {CounterItemsArray.map((x, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <CounterAreaOneItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterAreaTwo;
