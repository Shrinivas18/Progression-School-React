import React, { useState } from "react";
import "../Style/Contact.css";

const Contact = () => {
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prevState) =>({
      ...prevState,
      [name]:value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('userInfo', userInfo)
    alert("Message send successfully");
    setuserInfo({name: "",
      email: "",
      subject: "",
      message:""})
  }
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-wrapper">
        <div className="contact-card">
          <h2>Get In Touch</h2>

          <div className="contact-info">
            <div className="info-block">
              <i className="fa-regular fa-envelope icon"></i>
              <div>
                <p className="label">Email</p>
                <p className="value">contact@example.com</p>
              </div>
            </div>

            <div className="info-block">
              <i className="fa-solid fa-phone icon"></i>
              <div>
                <p className="label">Phone</p>
                <p className="value">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="info-block">
              <i className="fa-solid fa-location-dot icon"></i>
              <div>
                <p className="label">Address</p>
                <p className="value">123 React Router St. Web App City, JS 12345</p>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <h2>Office Hours</h2>
          <p className="value">Monday – Friday: 9AM – 5PM</p>
          <p className="value">Saturday – Sunday: Closed</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" value={userInfo.name} onChange={handleChange} required/>
            </div>

            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={userInfo.email} onChange={handleChange} required/>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter subject" value={userInfo.subject} onChange={handleChange} required/>
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter message" rows="5" value={userInfo.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="send-button" >
            <i className="fa-regular fa-paper-plane" style={{ marginRight: "8px" }}></i>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
