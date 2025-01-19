import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Constructing the custom message
    const message = `
      Contact Form\n
      Name: ${e.target.name.value}\n
      Subject: ${e.target.subject.value}\n
      Phone: ${e.target.phone.value}\n
      Email: ${e.target.email.value}\n
      Message: ${e.target.message.value}
    `;

    // Prepare the template parameters for EmailJS
    const templateParams = {
      form_name: e.target.name.value,
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
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="email" name="email" placeholder="Email address" required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" name="phone" placeholder="Phone number" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <textarea name="message" placeholder="Write message" required></textarea>
      </div>
      
      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Sending..." : "Send a message"}
      </button>
    </form>
  );
};

export default ContactForm;
