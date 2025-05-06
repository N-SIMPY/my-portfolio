import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z3y9oc9', 'template_7s48uv5', form.current, 'sTpyzkvsR1qHUssqu')
      .then((result) => {
        alert("Message Sent Successfully!");
        e.target.reset();
      }, (error) => {
        alert("Failed to send. Please try again.");
        console.log(error.text);
      });
  };

  return (
    <div className="contact-page">
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="from_name" required />

  <label>Email</label>
  <input type="email" name="from_email" required />

  <label>Message</label>
  <textarea
  id="message"
  name="message"
  placeholder="Enter your message"
  required
/>

  <button type="submit">Send</button>
</form>

    </div>
    </div>
  );
};

export default Contact;
