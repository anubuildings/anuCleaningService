import React from "react";
import { ProjectList } from "./ProjectList";
import ProjectAreaThreeItem from "./ProjectAreaThreeItem";

const ProjectAll = () => {
  return (
    <section className="inner-project-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          {[...ProjectList, ...ProjectList].map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <ProjectAreaThreeItem item={x} />
            </div>
          ))}
        </div>

        <div className="autoload-btn text-center mt-30">
          <a href="#!" className="btn">
            Auto load
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectAll;
