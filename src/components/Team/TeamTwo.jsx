import React from "react";
import { TeamOneItemsArray } from "./TeamOneItemsArray";
import TeamTwoItem from "./TeamTwoItem";

const TeamTwo = () => {
  return (
    <section className="team-area-two pt-125 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two text-center mb-60 tg-heading-subheading animation-style1">
              <span className="sub-title">Expert Team</span>
              <h2 className="title tg-element-title">
                We’ve Have an Expert Team
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {TeamOneItemsArray.slice(0,4).map((x, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <TeamTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTwo;
