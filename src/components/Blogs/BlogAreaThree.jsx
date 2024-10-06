import React from "react";
import BlogAreaOneItem from "./BlogAreaOneItem";
import { BlogItemsArray } from "./BlogItemsArray";

const BlogAreaThree = () => {
  return (
    <section className="blog-area-three pt-125 pb-180">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title-two text-center mb-60 tg-heading-subheading animation-style1">
              <span className="sub-title">Blog</span>
              <h2 className="title tg-element-title">Recent News</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {BlogItemsArray.slice(0, 3).map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <BlogAreaOneItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAreaThree;
