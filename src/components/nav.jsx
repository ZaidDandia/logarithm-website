"use client";

import React, { useEffect, useRef, useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../images/logo.png";
// import centro from "./images/Centro.png";
// import throwdown from "./images/ThaThrowdown.png";
// import vitpay from "./images/Vitpay.png";
import useIsSmallScreen from "../hooks/useIsSmallScreen";
import "../stylesheets/App.scss";

function Nav() {
  const refSidebar = useRef();
  const navBtnRef = useRef();
  const isSmallScreen = useIsSmallScreen();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <img src={logo.src} alt="logarithm technologies logo" />
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
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="/">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="/">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <div className="nav__logo">
                  <a className="nav__link" href="/">
                    <img
                      src={logo.src}
                      className="nav__logo--img"
                      alt="logarithm logo"
                    />
                  </a>
                </div>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="/">
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
