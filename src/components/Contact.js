import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <form className="container contact-form">
      <h2 className="contact-header">Contact</h2>

      {/* name */}
      <div>
        <label className="contact-name-label">Name:</label>
        <input type="text" className="contact-name-input" required></input>
      </div>
      
      {/* email address */}
      <div>
        <label className="contact-email-label">Email Address:</label>
        <input type="email" className="contact-email-input" required></input>
      </div>
      
      {/* message */}
      <div>
        <label className="contact-message-label">Message:</label>
        <textarea rows="5" className="contact-message-input" required></textarea>
      </div>

      {/* submit */}
      <button type="submit" className="btn btn-lg btn-outline-primary contact-submit-button">Submit</button>

    </form>
  )
}