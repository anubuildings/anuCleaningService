import React from "react";

const EstimateForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-grp">
            <input type="text" placeholder="First Name*" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
            <input type="text" placeholder="Last Name*" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
            <input type="text" placeholder=" Phone number*" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
            <input type="email" placeholder="Email*" />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <input type="text" placeholder="Company Name*" />
      </div>
      <div className="form-grp select-grp">
        <select
          id="shortByOne"
          name="select"
          aria-label="Default select example"
        >
          <option value="">Select Services*</option>
          <option>Office Service</option>
          <option>Home Service</option>
          <option>Others Service</option>
        </select>
      </div>
      <div className="form-grp select-grp">
        <select
          id="shortByTwo"
          name="select"
          aria-label="Default select example"
        >
          <option value="">Service Frequency*</option>
          <option>Office Service</option>
          <option>Home Service</option>
          <option>Others Service</option>
        </select>
      </div>
      <div className="form-grp select-grp">
        <select
          id="shortByThree"
          name="select"
          aria-label="Default select example"
        >
          <option value="">How did you hear about us?*</option>
          <option>Office Service</option>
          <option>Home Service</option>
          <option>Others Service</option>
        </select>
      </div>
      <div className="form-grp">
        <textarea name="comments" placeholder="Comments/Questions*"></textarea>
      </div>
      <button type="submit" className="btn btn-two">
        Submit Now
      </button>
    </form>
  );
};

export default EstimateForm;
