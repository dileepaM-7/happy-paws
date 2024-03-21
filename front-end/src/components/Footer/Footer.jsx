import React from 'react';
import "./Footer.css";
import fb from "../../assets/fb.jpg";
import instagram from "../../assets/insta.jpg";
import linkedIn from "../../assets/linkedIn.jpg";
import github from "../../assets/git.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer_upper'>
        <div className="footer_social">
          <h3>Follow us on</h3>
          <div className="footer_social-icons">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={fb} alt="fb" className='image1' />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="insta" className='image2'/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedIn} alt="linkedIn" className='image3' />
            </a>
            <a href="https://www.github.com/" target="_blank">
              <img src={github} alt="linkedIn" className='image3' />
            </a>
            </div>
            </div>
      </div>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          
          <div className="sb_footer-links-div-services">
          <h4>Services</h4>
            
              <p>Food Recommendations</p>
              <p>Vaccination reminder</p>
              <Link to="/exceisePlanner">
              <p>Exercise planner</p>
              </Link>
              
              <p>medical records</p>
              <p>Search for consultants</p>
            
            
          </div>
          <div className="sb_footer-links-div-contact">
          <h4>Contact Us</h4>
            
            <p>+94 773613102</p>
              <p>happypaws@gmail.com</p>
            
          </div>
          <div className="sb_footer-links-div">
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-below-links">
        <div className="footer-copyright">
          <p>
            @{new Date().getFullYear()} Kryptonians. All rights reserved. <a href="">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
