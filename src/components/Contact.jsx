import React from 'react';
import './Contact.css';
import img from '../assets/ContactImg.jpg';

export default function Contact() {
  return (
   <div className="contact">
      <div className="position-relative">
      <img src={img} alt="Contact" className="img-fluid w-100" />
        <div className="position-absolute text-light p-5" style={{ bottom: '0', right: '0', transform: 'translate(0%, 0%)' }}>
          <h3 className="display-4 font-weight-bold cart">Contact</h3>
          <h3  className="lead cart">
            <a href="/" className="text-light">Home</a> 
            <i className=' fa-solid fa-arrow-right'></i>Contact
          </h3>
        </div>
      </div>
     <div className="container">
      <div className="mt-5">
        <h2 className='cart'>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6914880304773!2d-0.11954338424973142!3d51.503324217145634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c8d89f9cb9%3A0x29d16bc1602d4997!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1596440863377!5m2!1sen!2suk"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="container contact-page">
        <div className="row">
          <div className="col-md-8">
            <h2>Contact Details</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Number Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Number Phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Comment Or Message</label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="botton">Send Message</button>
            </form>
          </div>
          <div className="col-md-4">

            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p><strong>Address</strong> Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N, Denmark</p>
              <p><strong>Phone</strong> (+84) 123 567 712</p>
              <p><strong>Email</strong> jewelryshop@gmail.com</p>
              <p><strong>Follow Us</strong></p>
              <div className="social-icons">
                <i className="fab fa-tiktok"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sletter p-5 mt-5 text-center">
        <h2 className="font-weight-bold">NEWSLETTER SIGN-UP</h2>
        <p className="mb-4">Get insider information about exclusive offers, events, and more.</p>

        <form className="newsletter-form d-flex justify-content-center align-items-center">
          <div className="form-group mb-0">
            <input
              type="email"
              className="input_"
              placeholder="Your email..."
              required
            />
          </div>
          <button type="submit" className="botton_">SEND</button>
        </form>
      </div>
    </div>

   </div>





  );
}
