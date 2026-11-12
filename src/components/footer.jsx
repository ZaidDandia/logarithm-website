"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import centro from "./images/Centro.png";
// import throwdown from "./images/ThaThrowdown.png";
// import vitpay from "./images/Vitpay.png";
import LinkedIn from "./../images/linkedin.png";
import Instagram from "./../images/instagram.png";
import Whatsapp from "./../images/whatsapp.png";
import "../stylesheets/App.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        {/* <div className="footer__head">
          <h4 className="footer__heading">Why were good for you</h4>
        </div> */}
        <div className="footer__details">
          <ul className="footer__list">
            <li className="footer__list--item">
              <a href="/">Home</a>
            </li>
            <li className="footer__list--item">
              <a href="/">Services</a>
            </li>
            <li className="footer__list--item">
              <a href="/">About</a>
            </li>
            <li className="footer__list--item">
              <a href="/">Contact</a>
            </li>
          </ul>
          <div className="footer__links">
            <div
              className="footer__links--item"
              onClick={() => {
                window.open("https://www.linkedin.com/company/logarithmtech/");
              }}
            >
              <img src={LinkedIn.src} alt="Linkedin" />
            </div>
            <div
              className="footer__links--item"
              onClick={() => {
                window.open("https://www.instagram.com/logarithm.tech/");
              }}
            >
              <img alt="Instagram" src={Instagram.src} />
            </div>
            <div
              className="footer__links--item"
              onClick={() => {
                window.open("https://wa.me/447449068134");
              }}
            >
              <img alt="Whatsapp" src={Whatsapp.src} />
            </div>
          </div>
        </div>
        <div className="footer__banner">
          <h6 className="footer__banner--head">
            <span>&#169; 2024</span> Logarithm Technologies
          </h6>
        </div>
      </footer>
    </>
  );
}

export default Footer;
