import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer>
      <div class="fot_content">
        <div class="top">
          <div class="logo-details">
            <span class="logo_name fb_700">Coursify</span>
          </div>
          <div class="media-icons">
            <a
              href=""
              target="_blank"
            >
              <i class="fa fa-facebook"></i
            ></a>
            <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="" target="_blank"
              ><i class="fa fa-linkedin"></i
            ></a>
            <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
          </div>
        </div>
        <div class="link-boxes">
          <ul class="box">
            <li class="link_name">Company</li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Contact us</NavLink></li>
            <li><NavLink to="/">About us</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>

          </ul>
          <ul class="box">
            <li class="link_name">For Recruiters</li>

            <li>
              <NavLink to="/">Overview</NavLink>
              
            </li>
            <li>
              <NavLink to="/">Hire Developers</NavLink>
              
            </li>
            <li>
              <NavLink to="/">Post Jobs</NavLink>
              
            </li>
            
          </ul>

          <ul class="box">
            <li class="link_name">For Students</li>
            <li>
            <NavLink to="/">Internships</NavLink>
            </li>
            <li>
            <NavLink to="/">Jobs</NavLink>
            </li>
            <li>
            <NavLink to="/">Courses</NavLink>
            </li>

          </ul>
         
         
          <ul class="box text-light">
            <li>
              Email: <a href="mailto:help@outlook.com">help@outlook.com</a>
            </li>
            <li>Phone: <a href="tel:+917894561234">+917894561234</a></li>
            <li>Address: kolkata, West Bengal, India</li>
          </ul>
        </div>

        

        
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <span class="copyright_text"
            >Copyright &#169; 2023 <a href="#">Coursify.</a>All rights
            reserved</span
          >
          <span class="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
