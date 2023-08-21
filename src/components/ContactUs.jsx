import React from 'react';
import '../componentscss/ContactUs.css';


function ContactUs() {
    return (
        <div className="container-1">
            <h1 className='h1-1'>Contact Us</h1>
            <p className='p-1'>We'd love to hear from you! Please use the form below to get in touch with us.</p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit" className='button-1'>Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
