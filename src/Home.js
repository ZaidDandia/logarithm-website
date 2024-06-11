import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ParticleBackground from "./components/particles";
// import ReactFullpage from "@fullpage/react-fullpage-umd";
import logo from "./images/logo";
// import centro from "./images/Centro.png";
// import throwdown from "./images/ThaThrowdown.png";
// import vitpay from "./images/Vitpay.png";
import "./stylesheets/App.scss";

const Home = () => {
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

  return (
    <>
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
              {/* <div className="projects__item--head">
                <h4 className="projects__item--heading">Centro</h4>
              </div> */}
              <div className="projects__item--img">
                {/* <img src={centro} alt="centro logo" /> */}
                <div className="projects__item--img-overlay projects__item--img-overlay-1"></div>
              </div>
              <div className="projects__item--details">
                I recently had the pleasure of working with Logarithm
                technologies and let me just say, they are absolute magicians
                when it comes to web development. From the moment I contacted
                them, the experience was nothign short of enchanting.
              </div>
            </div>
          </div>
          <div className="projects__item--container">
            <div className="projects__item">
              {/* <div className="projects__item--head">
                <h4 className="projects__item--heading">Vitpay</h4>
              </div> */}
              <div className="projects__item--img">
                {/* <img src={vitpay} alt="vitpay logo" /> */}
                <div className="projects__item--img-overlay projects__item--img-overlay-2"></div>
              </div>
              <div className="projects__item--details">
                I recently had the pleasure of working with Logarithm
                technologies and let me just say, they are absolute magicians
                when it comes to web development. From the moment I contacted
                them, the experience was nothign short of enchanting.
              </div>
            </div>
          </div>
          <div className="projects__item--container">
            <div className="projects__item">
              {/* <div className="projects__item--head">
                <h4 className="projects__item--heading">Tha Throwdown</h4>
              </div> */}
              <div className="projects__item--img">
                {/* <img src={throwdown} alt="throwdown logo" /> */}
                <div className="projects__item--img-overlay projects__item--img-overlay-3"></div>
              </div>
              <div className="projects__item--details">
                I recently had the pleasure of working with Logarithm
                technologies and let me just say, they are absolute magicians
                when it comes to web development. From the moment I contacted
                them, the experience was nothign short of enchanting.
              </div>
            </div>
          </div>
        </Carousel>
      </section>
      <section className="services" id="services">
        {/* <ParticleBackground className="services__bg" /> */}
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
    </>
  );
};

export default Home;
