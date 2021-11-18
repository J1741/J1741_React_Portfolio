import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <form className="container contact-form">
      <h2>Contact</h2>

      {/* name */}
      <div>
        <label>Name:</label>
        <input type="text"></input>
      </div>
      
      {/* email address */}
      <div>
        <label>Email Address:</label>
        <input type="email"></input>
      </div>
      
      {/* message */}
      <div>
        <label>Message:</label>
        <textarea rows="5"></textarea>
      </div>

      {/* submit */}
      <button type="submit" className="btn btn-primary">Submit</button>

    </form>
  )
}