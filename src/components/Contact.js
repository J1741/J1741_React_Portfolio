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
        <input></input>
      </div>
      
      {/* email address */}
      <div>
        <label>Email Address:</label>
        <input></input>
      </div>
      
      {/* message */}
      <div>
        <label>Message</label>
        <input></input> 
      </div>

    </form>
  )
}