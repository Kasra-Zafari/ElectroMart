import React, { useState } from "react";
import classes from "./index.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={classes.contactContainer}>
      {/* contact info */}
      <div className={classes.contactInfo}>
        <h2>Contact Information</h2>
        <p>Feel free to reach out to me using the details below:</p>
        <ul>
          <li><strong>Name:</strong> Kasra Zafari</li>
          <li><strong>Phone:</strong> +98 912 517 0656</li>
          <li><strong>Email:</strong> kasra@example.com</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Kasra-Zafari" target="_blank" rel="noopener noreferrer">Click here</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kasra-zafari-2695a2298/" target="_blank" rel="noopener noreferrer">Click here</a></li>
        </ul>
      </div>

      {/* message */}
      <div className={classes.contactForm}>
        <h2>Send Me a Message</h2>
        <p>Have any questions or inquiries?<br/>Fill out the form below and I'll get back to you soon.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
