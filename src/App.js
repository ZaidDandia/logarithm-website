import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ParticleBackground from "./components/particles";
// import ReactFullpage from "@fullpage/react-fullpage-umd";
import logo from "./images/logo";
import centro from "./images/Centro.png";
import throwdown from "./images/ThaThrowdown.png";
import vitpay from "./images/Vitpay.png";
import "./stylesheets/App.scss";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const refSidebar = useRef();
  const navBtnRef = useRef();

  function changeFavIcon(path) {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = path;
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    const handleScroll = () => {
      const scrollFromTop = window.pageYOffset;

      if (scrollFromTop > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    changeFavIcon("./images/logo.png");
    document.title = "Logarithm Technologies";
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderPrevButton = (onClickHandler, hasPrev) => {
    return (
      <button
        className="projects__arrow projects__arrow--prev"
        onClick={onClickHandler}
        disabled={!hasPrev}
      >
        <div className="projects__arrow--icon"></div>
      </button>
    );
  };

  const renderNextButton = (onClickHandler, hasNext) => {
    return (
      <button
        className="projects__arrow projects__arrow--next"
        onClick={onClickHandler}
        disabled={!hasNext}
      >
        <div className="projects__arrow--icon"></div>
      </button>
    );
  };

  const toggleSidebar = () => {
    const sidebar = refSidebar.current;
    const navBtn = navBtnRef.current;

    const isActive = sidebar.getAttribute("data-active") === "on";
    sidebar.setAttribute("data-active", isActive ? "off" : "on");
    navBtn.setAttribute("data-mode", isActive ? "open" : "close");
  };

  return (
    <div className="wrapper">
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
      <header className="header">
        <section className="hero">
          <div className="hero__content">
            <h3 className="hero__heading">Perfecting your vision</h3>
            <p className="hero__desc">
              Over the past year, Logarithm has worled with 20 different clients
              to delivery different tasks. From website design to{" "}
            </p>
          </div>
        </section>
      </header>
      <section className="projects" id="projects">
        <Carousel
          className="projects__carousel"
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          renderArrowNext={renderNextButton}
          renderArrowPrev={renderPrevButton}
        >
          <div className="projects__item--container">
            <div className="projects__item">
              <div className="projects__item--head">
                <h4 className="projects__item--heading">Centro</h4>
              </div>
              <div className="projects__item--img">
                <img src={centro} alt="centro logo" />
              </div>
              {/* <div className="projects__details"></div> */}
            </div>
          </div>
          <div className="projects__item--container">
            <div className="projects__item">
              <div className="projects__item--head">
                <h4 className="projects__item--heading">Vitpay</h4>
              </div>
              <div className="projects__item--img">
                <img src={vitpay} alt="vitpay logo" />
              </div>
              {/* <div className="projects__details">

            </div> */}
            </div>
          </div>
          <div className="projects__item--container">
            <div className="projects__item">
              <div className="projects__item--head">
                <h4 className="projects__item--heading">Tha Throwdown</h4>
              </div>
              <div className="projects__item--img">
                <img src={throwdown} alt="throwdown logo" />
              </div>
              {/* <div className="projects__details">

            </div> */}
            </div>
          </div>
        </Carousel>
      </section>
      <section className="services" id="services">
        <ParticleBackground className="services__bg" />
        <div className="services__item--container">
          <div className="services__item">
            <div className="services__item--head">
              <h4 className="services__item--heading">Web Development</h4>
            </div>
            <div className="services__item--details"></div>
          </div>
          <div className="services__item">
            <div className="services__item--head">
              <h4 className="services__item--heading">Machine Learning</h4>
            </div>
            <div className="services__item--details"></div>
          </div>
          <div className="services__item">
            <div className="services__item--head">
              <h4 className="services__item--heading">Mobile Development</h4>
            </div>
            <div className="services__item--details"></div>
          </div>
          <div className="services__item">
            <div className="services__item--head">
              <h4 className="services__item--heading">Design</h4>
            </div>
            <div className="services__item--details"></div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__head">
          <h4 className="footer__heading">Why were good for you</h4>
        </div>
        <div className="footer__details"></div>
      </footer>
    </div>
  );
}

export default App;
