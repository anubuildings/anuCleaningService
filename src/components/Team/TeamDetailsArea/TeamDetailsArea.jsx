import React from "react";
import TeamDetailsForm from "./TeamDetailsForm";
import TeamDetailsProgress from "./TeamDetailsProgress";
import TeamDetailsSidebar from "./TeamDetailsSidebar";
import TeamDetailsSlider from "./TeamDetailsSlider";

const TeamDetailsArea = () => {
  return (
    <section className="team-details-area pt-130 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            {/* team details sidebar */}
            <TeamDetailsSidebar />
          </div>

          <div className="col-lg-8">
            <div className="team-details-content">
              <p>
                Grursus mal suada faci lisis Lorem ipsum dolarorit ametion
                consectetur elit. a Vesti at on bulum nec odio aea the dumm the
                ipsumm ipsum that dolocons rsus mal suada and the fadolorit the
                consectetur elit. Grursus mal lisis Lorem any ipsumm and
                fadolorit consectetur elit.
              </p>
              <p>
                Grursus mal suada faci lisis Lorem ipsum dolarorit ametion
                consectetur elit. a Vesti at on bulum nec odio aea the dumm the
                ipsumm ipsum that dolocons rsus mal.
              </p>

              {/* progress */}
              <TeamDetailsProgress />

              <div className="team-details-form">
                <h2 className="title">
                  Feel Free to Write Our <br /> Cleaning Experts
                </h2>

                {/* form */}
                <TeamDetailsForm />
              </div>
            </div>
          </div>
        </div>

        <div className="related-member-wrap">
          {/* team details slider */}
          <TeamDetailsSlider />
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsArea;
