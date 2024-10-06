import React from "react";
import BlogDetailsComments from "./BlogDetailsComments";
import BlogDetailsForm from "./BlogDetailsForm";
import BlogDetailsPagination from "./BlogDetailsPagination";
import BlogSidebar from "../BlogSidebar/BlogSidebar";
import BlogDetailsBottom from "./BlogDetailsBottom";
import { Link } from "react-router-dom";

const BlogDetailsArea = () => {
  return (
    <section className="blog-details-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="blog-details-wrap">
              <div className="blog-item-two inner-blog-item">
                <div className="blog-thumb-two blog-details-thumb">
                  <img src="/img/blog/inner_blog_img01.jpg" alt="" />
                </div>
                <div className="blog-content-two blog-details-content">
                  <Link to="/blog" className="tag">
                    Kitchen
                  </Link>

                  <div className="blog-meta">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-calendar-alt"></i>Jun 4, 2022
                      </li>
                      <li>
                        <i className="far fa-user"></i>
                        <Link to="/blog">David Martin</Link>
                      </li>
                    </ul>
                  </div>

                  <h2 className="title">
                    New Cleaning With Hydrogen at many Peroxide Tips
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ut tellus
                    suspendisse nulla aliquam. Risus rutrum tellus eget ultrices
                    pretium nisi amet facilisis. Augue eu vulputate tortor
                    egestas cursus vivamus. Commodo dictum iaculis eget massa
                    phasellus ultrices nunc dignissim. Id nulla amet tincidunt
                    urna sed massa sed. Pellentesque imperdiet proin aliquam
                    nisl nulla. In donec massa ultrices amet eget. Tristique sed
                    purus et maecenas diam diam tellus libero id sapien justo.
                  </p>
                  <blockquote>
                    <p>
                      Commodo dictum iaculis eget massa phasellus ultrices
                      dignissim. Id nulla amet tincidunt urna sed massa sed.
                    </p>
                    <cite>David Moree</cite>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ut tellus
                    suspendisse nulla aliquam. Risus rutrum tellus eget ultrices
                    pretium nisi amet facilisis. Augue eu vulputate tortor
                    egestas cursus vivamus. Commodo dictum iaculis eget massa
                    phasellus ultrices nunc dignissim. Id nulla amet tincidunt
                    urna sed massa sed.
                  </p>

                  <div className="blog-details-inner-img">
                    <div className="row">
                      <div className="col-md-6">
                        <img src="/img/blog/blog_details-img01.jpg" alt="" />
                      </div>
                      <div className="col-md-6">
                        <img src="/img/blog/blog_details-img02.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ut tellus
                    suspendisse nulla aliquam. Risus rutrum tellus eget ultrices
                    pretium nisi amet facilisis. Augue eu vulputate tortor
                    egestas cursus vivamus. Commodo dictum iaculis eget massa
                    phasellus ultrices nunc dignissim. Id nulla amet tincidunt
                    urna sed massa sed.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ut tellus
                    suspendisse nulla aliquam. Risus rutrum tellus eget ultrices
                    pretium nisi amet facilisis. Augue eu vulputate tortor
                    egestas cursus vivamus.{" "}
                  </p>

                  <div className="blog-details-bottom">
                    <BlogDetailsBottom />
                  </div>
                </div>
              </div>

              <BlogDetailsPagination />

              <div className="comments-wrap">
                <h4 className="comments-wrap-title">Comments (3)</h4>
                <BlogDetailsComments />
              </div>

              <div className="comment-respond">
                <h3 className="comment-reply-title">Leave A Comment</h3>
                <BlogDetailsForm />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-8">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
