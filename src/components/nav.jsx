import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ParticleBackground from "./particles";
// import ReactFullpage from "@fullpage/react-fullpage-umd";
import logo from "../images/logo";
// import centro from "./images/Centro.png";
// import throwdown from "./images/ThaThrowdown.png";
// import vitpay from "./images/Vitpay.png";
import "../stylesheets/App.scss";

function Nav({ isSmallScreen, isScrolled }) {
  const refSidebar = useRef();
  const navBtnRef = useRef();

  const toggleSidebar = () => {
    const sidebar = refSidebar.current;
    const navBtn = navBtnRef.current;

    const isActive = sidebar.getAttribute("data-active") === "on";
    sidebar.setAttribute("data-active", isActive ? "off" : "on");
    navBtn.setAttribute("data-mode", isActive ? "open" : "close");
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <nav className="nav__small">
            <div
              className="nav__small--btn"
              data-mode="open"
              ref={navBtnRef}
              onClick={toggleSidebar}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="nav__small--logo">
              <img src={logo} alt="logarithm technologies logo" />
            </div>
          </nav>
          <div
            className="nav__small--sidebar"
            data-active="off"
            ref={refSidebar}
          >
            <ul className="nav__small--list">
              <li className="nav__small--list-item">
                <a className="nav__small--list-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav__small--list-item">
                <a className="nav__small--list-link" href="/">
                  Services
                </a>
              </li>
              <li className="nav__small--list-item">
                <a className="nav__small--list-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav__small--list-item">
                <a className="nav__small--list-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <nav className={`nav ${isScrolled ? "nav__scrolled" : ""}`}>
          <div className="nav__options">
            <div className="nav__logo">
              <a className="nav__link" href="/">
                <img
                  src={logo}
                  className="nav__logo--img"
                  alt="logarithm logo"
                />
              </a>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="/">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#projects">
                  About Us
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default Nav;
