import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div>
    <div className="Form-container">
      <span className="big-circle"></span>
      <img src="shape.png" className="square" alt="" />
      <div className="form-cont">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="location.png" className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="/">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form Contact-1">
          <span className="circle-one"></span>
          <span className="circle-two"></span>

          <form autoComplete="off"  action="https://formspree.io/f/xrgdoqno" method="post">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder="Whats your name"/>
              
            </div>
            <div className="input-container">
              <input type="email" id="email" name="email" className="input" placeholder="Whats your Email Address"/>
              
            </div>
            <div className="input-container">
              <input type="tel" id="tel" name="phone" className="input" placeholder="Whats your phone number" />
            </div>
            <div className="input-container textarea">
              <textarea name="message" id="mes" className="input" placeholder="What do you have to say"></textarea>
              
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
