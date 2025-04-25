import React from 'react';
import './Header.css';
import profileImage from '../assets/images/profile.jpeg';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li><a href="#" className="header-nav-link">Works</a></li>
          <li><a href="#" className="header-nav-link">Blog</a></li>
          <li><a href="#" className="header-nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className='hero'>
        <div className="header-content">
          <h1 className="header-title">
            <span className="header-title-bold">Hi, I am Felix,</span><br />
            <span className="header-title-normal">Tech Enthusiast</span>
          </h1>
        
          <p className="header-text">Lorem Ipsum</p>
          <button className="header-button">Download Resume</button>
        </div >
        <div className='hero-image'>
          {/* The profile image is displayed here, imported from the assets/images directory */}
          {/* The image is styled with a class for better presentation */}
          {/* The alt attribute provides a text alternative for the image */}
          <img src={profileImage} alt="Profile" className="profile-image"/>
        </div>
      </div>
    </header>
  );
}

export default Header;