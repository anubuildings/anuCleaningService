import React from "react";

const TeamDetailsForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" placeholder="Your Name" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="email" placeholder="Email address" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" placeholder="Phone number" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" placeholder="Subject" />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <textarea name="message" placeholder="Write message"></textarea>
      </div>
      <button type="submit" className="btn btn-two">
        Send a message
      </button>
    </form>
  );
};

export default TeamDetailsForm;
