import React from "react";
import { Link } from "react-router-dom";

const BlogRecents = () => {
  const recent_blogs = [
    {
      url: "/blog-details",
      src: "/img/blog/rc_post_img01.jpg",
      created_at: "August 17, 2022",
      title: "A quick solutions for daily problem",
    },
    {
      url: "/blog-details",
      src: "/img/blog/rc_post_img02.jpg",
      created_at: "August 17, 2022",
      title: "Podcasting operational change any...",
    },
    {
      url: "/blog-details",
      src: "/img/blog/rc_post_img03.jpg",
      created_at: "August 17, 2022",
      title: "Capitalize on low Idea hanging fruit",
    },
  ];

  return (
    <>
      <h4 className="widget-title">Recent post</h4>

      <div className="rc-post-list">
        {recent_blogs.map((item, index) => (
          <div className="rc-post-item">
            <div key={index} className="thumb">
              <Link to={item.url}>
                <img src={item.src} alt="" />
              </Link>
            </div>

            <div className="content">
              <span className="date">
                <i className="far fa-calendar-alt" />
                {item.created_at}
              </span>

              <h5 className="title">
                <Link to={item.url}>{item.title}</Link>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogRecents;
