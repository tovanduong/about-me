import React from "react";
import "./footerStyle.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="sec-footer">
      <div className="container-footer">
        <div className="my-info-group">
          <h4 className="my-name">To Van Duong</h4>
          <div className="info-footer">
            <span>Email:</span>
            <p>tovanduonghp1996@gmail.com</p>
          </div>
          <div className="info-footer">
            <span>Phone:</span>
            <p>0377068853</p>
          </div>
          <div className="info-footer">
            <span>Address:</span>
            <p>Vinh Bao street, Hai Phong city</p>
          </div>
          <div className="info-footer-icon">
            <ul className="icon-list-footer">
              <li className="icon-Item-footer">
                <a href="/">
                  <FacebookIcon className="link-icon-footer" />
                </a>
              </li>
              <li className="icon-Item-footer">
                <a href="/">
                  <TwitterIcon className="link-icon-footer" />
                </a>
              </li>
              <li className="icon-Item-footer">
                <a href="/">
                  <InstagramIcon className="link-icon-footer" />
                </a>
              </li>
              <li className="icon-Item-footer">
                <a href="/">
                  <YouTubeIcon className="link-icon-footer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-me">
          <h4 className="contact-title">Contact me</h4>
          <div className="contact-form">
            <form className="form-group">
              <div className="email-group">
                <p className="email">Email:</p>
                <input
                  placeholder="Email..."
                  className="input input-email"
                  name="text"
                  type="text"
                />
              </div>
              <div className="message-group">
                <p className="message">Message:</p>
                <textarea
                  placeholder="Message..."
                  className="input textarea-message"
                  name="text"
                  rows={4}
                  // type="text"
                />
              </div>
              <button className="submit-button">Send to me</button>
            </form>
          </div>
        </div>
      </div>
      <div className="block">All rights reserved © Mr Duong 2023</div>
    </footer>
  );
};

export default Footer;
