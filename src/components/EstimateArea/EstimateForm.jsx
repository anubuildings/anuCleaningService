import React from "react";

const EstimateForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-sm-12">
        <div className="form-grp select-grp">
        <select
          id="shortByOne"
          name="select"
          aria-label="Default select example"
        >
          <option value="">Select Services*</option>
          <option>Janitorial</option>
          <option>Maintenance & Repair</option>
          <option>Exterior Services</option>
        </select>
      </div>
        </div>
        <div className="col-sm-12">
        <div className="form-grp select-grp">
        <select
          id="shortByOne"
          name="select"
          aria-label="Default select example"
        >
          <option value="">Type of Client*</option>
          <option>New</option>
          <option>Excisting</option>
        
        </select>
      </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" placeholder="Company Name*" />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" placeholder="Contact Person's Name*" />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" placeholder="Contact Person's Role*" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
            <input type="text" placeholder=" Phone number*" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
            <input type="text" placeholder="Email*" />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" placeholder="Best Time to Reach you*" />
          </div>
        </div>
        <div className="col-sm-12">
        <div className="form-grp">
        <textarea name="comments" placeholder="Scope of Work. To better serve you*"></textarea>
      </div>
      </div>
      <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" placeholder="Key dates or Timelines/ Anticipated Start Date" />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" placeholder="SDA Representative, if applicable" />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-two">
        Submit Now
      </button>
    </form>
  );
};

export default EstimateForm;
