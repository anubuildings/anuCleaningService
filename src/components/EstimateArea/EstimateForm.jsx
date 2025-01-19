import React, { useState } from "react";
import emailjs from "emailjs-com";

const EstimateForm = () => {
  const [loading, setLoading] = useState(false);

  const sendEstimateEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Constructing the custom message
    const message = `
      Qotation Request\n
      Contact Person's Name: ${e.target.contact_name.value}\n
      Selected Service: ${e.target.service.value}\n
      Type of Client: ${e.target.client.value}\n
      Company Name: ${e.target.company_name.value}\n
      Contact Person's Role: ${e.target.contact_role.value}\n
      Phone Number: ${e.target.phone.value}\n
      Email: ${e.target.email.value}\n
      Best Time to Reach You: ${e.target.best_time.value}\n
      Scope of Work: ${e.target.comments.value}\n
      Key Dates or Timelines/Anticipated Start Date: ${e.target.start_date.value}\n
    `;

    // Prepare the template parameters for EmailJS
    const templateParams = {
      form_name: e.target.company_name.value,
      from_email: e.target.email.value, // User's email
      message: message, // Pass the constructed message as HTML
    };

    // Send the form data using emailjs.send
    emailjs
      .send(
        "service_4u1ihn6", // Replace with your EmailJS service ID
        "template_5t7xttq", // Replace with your EmailJS template ID
        templateParams,      // Send custom template params
        "U3QkgQwCe1fFMJR6c"       // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Failed to send the estimate request, please try again.");
        }
      );
  };

  return (
    <form onSubmit={sendEstimateEmail}>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-grp select-grp">
            <select id="service" name="service" required>
              <option value="">Select Services*</option>
              <option>Retail Store Cleaning</option>
              <option>Carpet Steam Wash Cleaning</option>
              <option>Office Cleaning</option>
              <option>Disinfecting Cleaning</option>
              <option>Tile and Grout Cleaning</option>
              <option>Construction Cleaning</option>
            </select>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp select-grp">
            <select id="client" name="client" required>
              <option value="">Type of Client*</option>
              <option>New</option>
              <option>Existing</option>
            </select>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" name="company_name" placeholder="Company Name*" required />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" name="contact_name" placeholder="Contact Person's Name*" required />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" name="contact_role" placeholder="Contact Person's Role*" required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
            <input type="text" name="phone" placeholder="Phone number*" required />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-grp">
            <input type="email" name="email" placeholder="Email*" required />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            <input type="text" name="best_time" placeholder="Best Time to Reach you*" required />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            <textarea name="comments" placeholder="Scope of Work. To better serve you*" required></textarea>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-grp">
            {/* Change the input type to date for Key Dates */}
            <input type="date" name="start_date" placeholder="Key dates or Timelines/ Anticipated Start Date" />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-two" disabled={loading}>
        {loading ? "Sending..." : "Submit Now"}
      </button>
    </form>
  );
};

export default EstimateForm;
