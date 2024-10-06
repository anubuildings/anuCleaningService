import React from "react";
import ProjectAreaTwoItem from "./ProjectAreaTwoItem";

const ProjectAreaTwo = () => {
  return (
    <section className="project-area-two pt-125 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="section-title-two mb-60 tg-heading-subheading animation-style2">
              <span className="sub-title">Complete Projects</span>
              <h2 className="title tg-element-title">
                Keep Eye on Our New Projects
              </h2>
            </div>
          </div>

          {/* tabs */}
          <div className="col-lg-7">
            <div className="project-nav-wrap mb-40">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#all-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="all-tab-pane"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="office-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#office-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="office-tab-pane"
                    aria-selected="false"
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="false"
                  >
                    Office
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="outdoor-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#outdoor-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="outdoor-tab-pane"
                    aria-selected="false"
                  >
                    Outdoor
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="laundry-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#laundry-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="laundry-tab-pane"
                    aria-selected="false"
                  >
                    Laundry Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="all-tab-pane"
                role="tabpanel"
                aria-labelledby="all-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project__img01.jpg",
                        title: "Home Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "big-item",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img01.jpg",
                        title: "Office Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />

                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img02.jpg",
                        title: "Outdoor Cleaning",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="office-tab-pane"
                role="tabpanel"
                aria-labelledby="office-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project__img02.jpg",
                        title: "Home Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "big-item",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img01.jpg",
                        title: "office Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img02.jpg",
                        title: "Outdoor Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project__img03.jpg",
                        title: "Home Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "big-item",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img01.jpg",
                        title: "office Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img02.jpg",
                        title: "Outdoor Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="outdoor-tab-pane"
                role="tabpanel"
                aria-labelledby="outdoor-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project__img01.jpg",
                        title: "Home Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "big-item",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img01.jpg",
                        title: "office Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img02.jpg",
                        title: "Outdoor Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="laundry-tab-pane"
                role="tabpanel"
                aria-labelledby="laundry-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project__img02.jpg",
                        title: "Home Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "big-item",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img01.jpg",
                        title: "office Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                    <ProjectAreaTwoItem
                      item={{
                        src: "/img/project/h2_project_img02.jpg",
                        title: "Outdoor Cleaning Services",
                        url: "/project-details",
                        desc: `Lorem ipsum dolor sit consectetur. Ut tellus suspendisse aliquam.`,
                        className: "small-item",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAreaTwo;
