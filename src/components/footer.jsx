import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ParticleBackground from "./particles";
// import ReactFullpage from "@fullpage/react-fullpage-umd";
import logo from "../images/logo";
// import centro from "./images/Centro.png";
// import throwdown from "./images/ThaThrowdown.png";
// import vitpay from "./images/Vitpay.png";
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
            <div className="footer__links--item">{/* <img/> */}</div>
            <div className="footer__links--item">{/* <img/> */}</div>
            <div className="footer__links--item">{/* <img/> */}</div>
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
