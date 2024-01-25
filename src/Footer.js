import React, { useRef, useEffect, useState } from "react";

// import $ from "jquery";

import footerLogo from "./Image/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_wrap">
      <div className="footer_middle_section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo_area">
                <a>
                  <img src={footerLogo} />
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has...
                </p>
                <div className="social_menu">
                  <ul>
                    <li>
                      <a>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact_info">
                <h3>Contact Us</h3>
                <p>55 Gallaxy Enque,2568 steet, 23568 NY</p>
                <p>
                  Phone:
                  <a href="tel:(440) 000 000 0000">(440) 000 000 0000</a>
                </p>
                <p>
                  Email:
                  <a href="mailto:sales@yousite.com">sales@yousite.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="general_menu">
                <h3>General</h3>
                <ul>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                  <li>
                    <a href="/">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/">Terms & condition</a>
                  </li>
                  <li>
                    <a href="/">My Account</a>
                  </li>
                  <li>
                    <a href="/">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="categories_menu">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">Others</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// $(document).ready(function () {
//   //Get the button
//   let mybutton = document.getElementById("btn-back-to-top");

//   // When the user scrolls down 20px from the top of the document, show the button
//   window.onscroll = function () {
//     scrollFunction();
//   };

//   function scrollFunction() {
//     if (
//       document.body.scrollTop > 20 ||
//       document.documentElement.scrollTop > 20
//     ) {
//       mybutton.style.display = "block";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }
//   // When the user clicks on the button, scroll to the top of the document
//   mybutton.addEventListener("click", backToTop);

//   function backToTop() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }

//   // Scroll Top Ends
// });

export default Footer;
