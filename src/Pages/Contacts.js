import React from 'react'
import "../styles/Contacts.css";
import ContactImage from "../assets/south.jpg"

const Contacts = () => {
  return (
    <div className="contact">
        <div className="leftSide" style={{ backgroundImage: `url(${ContactImage})`}}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'>Full Name</label>
                <input name="name" type="text" placeholder='Enter your name'/>
                <label htmlFor='email'>Email</label>
                <input name="name" placeholder='Enter email address' type="email"></input>
                <label htmlFor='message'>Message</label>
                <textarea name="message"  rows="7" placeholder='Enter your message'></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts