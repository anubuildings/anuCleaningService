import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const ProjectAreaTwoItem = ({ item }) => {
  return (
    <div className={cn("project-item-two", item.className)}>
      <div className="project-thumb-two">
        <Link to={item.url}>
          <img src={item.src} alt="" />
        </Link>
      </div>

      <div className="project-content-two">
        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>

        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default ProjectAreaTwoItem;
