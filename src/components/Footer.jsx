import React from 'react';
import './Footer.css';
import fbIcon from '../assets/fb.svg';
import instaIcon from '../assets/insta.svg';
import twitterIcon from '../assets/twitter.svg';
import linkedinIcon from '../assets/Linkedin.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <img src={fbIcon} alt="Facebook" className="footer-social-icon" />
        <img src={instaIcon} alt="Instagram" className="footer-social-icon" />
        <img src={twitterIcon} alt="Twitter" className="footer-social-icon" />
        <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon" />
      </div>
      <p className="footer-text">
        Copyright ©2020 All rights reserved
      </p>
    </footer>
  );
}

export default Footer;