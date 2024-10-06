import React from "react";

const TeamDetailsSidebar = () => {
  return (
    <div className="team-details-img">
      <img src="/img/team/team_details_img.jpg" alt="" />
      <div className="team-details-info">
        <h2 className="title">William Adams</h2>
        <span>Window Cleaner</span>
        <div className="team-details-social">
          <ul className="list-wrap">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="info-list">
          <ul className="list-wrap">
            <li>
              Website : <a href="#!">yourwebsite.com</a>
            </li>
            <li>
              Phone : <a href="tel:0123456789">44-20-7328-4499</a>
            </li>
            <li>
              Email : <a href="mailto:custom@gmail.com">custom@gmail.com</a>
            </li>
            <li>
              Address : <span>380 Albert St, Melbourne</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsSidebar;
