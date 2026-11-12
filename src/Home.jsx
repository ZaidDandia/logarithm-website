"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import logo from "./images/logo";
// import centro from "./images/Centro.png";
// import throwdown from "./images/ThaThrowdown.png";
// import vitpay from "./images/Vitpay.png";
import PlusSVG from "./components/Plus";
import Man from "./images/Man.png";
import Centro from "./images/Centro White.png";
import ThaThrowdown from "./images/ThaThrowdown White.png";
import Vitpay from "./images/Vitpay White.png";
import Trema from "./images/Trema White.png";
import nattyNYC from "./images/nattyNYC white.png";
import LearnersDen from "./images/Learners Den Logo White.png";
import Learnify from "./images/Learnify White.png";
import VI from "./images/VI White.png";
import IDEA from "./images/IDE.A White.png";
import useIsSmallScreen from "./hooks/useIsSmallScreen";
import "./stylesheets/App.scss";

const Home = () => {
  const isSmallScreen = useIsSmallScreen();
  // Carousel function
  const [activeStep, setActiveStep] = useState(0);
  const [activeHeight, setActiveHeight] = useState("auto");
  const elsCarousel = [
    {
      text: "I've had the pleasure of working with Zaid and the team on the development of my application, a process which is still ongoing and I couldn't be more impressed. Their professionalism is top-notch, consistently demonstrating a high level of expertise and reliability throughout the project. The quality of their customer relations is exceptional, always available to address any concerns promptly and effectively. What sets them apart is their commitment to going beyond what is expected, ensuring that every aspect of the job is completed to the highest standards. I highly recommend Zaid and the team for any IT development needs.",
      name: "Lanre",
      company: "ThaThrowdown",
    },
    {
      text: "I recently used Logarithm Technologies to create a credit lending and mobile wallet, and I couldn't be more pleased with the experience. From the outset, their team was professional, knowledgeable, and attentive to my needs. The process was smooth and efficient, with clear communication at every step. The final product is user- friendly, secure, and exactly what I was looking for. Logarithm Technologies truly  exceeded my expectations, and I highly recommend their services to anyone in need of innovative financial solutions. Thank you, Logarithm Technologies, for your exceptional work.",
      name: "Alex Mudzingwa",
      company: "Vitpay",
    },
  ];
  const sliderRef = useRef(null);

  const transitionStyles = (activeNum) => {
    const centerNum = 100 * activeNum;
    const rightNum = centerNum * -1 + 100;
    const leftNum = centerNum * -1 - 100;

    const styles = {
      left: { opacity: 0, transform: `translateX(${leftNum}%)` },
      center: {
        opacity: 1,
        transform: `translateX(${centerNum !== 0 ? "-" : ""}${centerNum}%)`,
      },
      right: { opacity: 0, transform: `translateX(${rightNum}%)` },
    };

    return styles;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === elsCarousel.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? elsCarousel.length - 1 : prevActiveStep - 1
    );
  };

  // console.log(transStyles);

  //device width for carousel auto
  const [phone, setPhone] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (window.innerWidth < 600) {
      timeoutId = setTimeout(() => {
        setActiveStep((prevActiveStep) =>
          prevActiveStep === elsCarousel.length - 1 ? 0 : prevActiveStep + 1
        );
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeStep, elsCarousel.length]);

  useLayoutEffect(() => {
    if (sliderRef.current) {
      const children = sliderRef.current.childNodes;
      let height = 0;

      children.forEach((el) => {
        const list = Array.from(el.classList);
        if (list.includes("active")) {
          for (let i = 0; i < el.children.length; i++) {
            // console.log(el.children[i].offsetHeight);
            height += el.children[i].offsetHeight;
          }
          // console.log(height);
          setActiveHeight(`${height + 100}px`);
        }
      });
    }
  }, [activeStep]);

  // Setting last section gap to align with heading
  const servicesHeadingRef = useRef(null);
  const servicesDesignRef = useRef(null);
  // All section animation on scroll functionality
  const whiteRef = useRef(null);
  const orangeRef = useRef(null);
  const whatRef = useRef(null);
  const servicesRef = useRef(null);
  const [whiteVisible, setWhiteVisible] = useState(false);
  const [orangeVisible, setOrangeVisible] = useState(false);
  const [whatVisible, setWhatVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === whiteRef.current) {
            if (entry.isIntersecting) {
              setWhiteVisible(true);
              observer.unobserve(entry.target);
            }
          } else if (entry.target === orangeRef.current) {
            if (entry.isIntersecting) {
              setOrangeVisible(true);
              observer.unobserve(entry.target);
            }
          } else if (entry.target === whatRef.current) {
            if (entry.isIntersecting) {
              setWhatVisible(true);
              observer.unobserve(entry.target);
            }
          } else if (entry.target === servicesRef.current) {
            if (entry.isIntersecting) {
              setServicesVisible(true);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    if (whiteRef.current) observer.observe(whiteRef.current);
    if (orangeRef.current) observer.observe(orangeRef.current);
    if (whatRef.current) observer.observe(whatRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);

    const setPhoneState = () => {
      if (window.innerWidth <= 600) {
        setPhone(true);
      } else setPhone(false);
    };

    const addHeight = () => {
      if (servicesHeadingRef.current && servicesDesignRef.current) {
        const servicesHeadingHeight = servicesHeadingRef.current.offsetHeight;
        servicesDesignRef.current.style.height = `${
          servicesHeadingHeight - 20
        }px`;
      }
    };

    setPhoneState();
    addHeight();
    const handleResize = () => {
      addHeight();
      setPhoneState();
    };
    window.addEventListener("resize", handleResize);

    const curWhiteRef = whiteRef.current;
    const curOrangeRef = orangeRef.current;
    const curWhatRef = whatRef.current;
    const curServicesRef = servicesRef.current;
    return () => {
      window.removeEventListener("resize", handleResize);

      if (observer && curWhiteRef) observer.unobserve(curWhiteRef);
      if (observer && curOrangeRef) observer.unobserve(curOrangeRef);
      if (observer && curWhatRef) observer.unobserve(curWhatRef);
      if (observer && curServicesRef) observer.unobserve(curServicesRef);
    };
  }, []);

  //email button link mailto functionality
  const handleEmailButtonClick = () => {
    const email = "contact@logarithmtechnologies.com";
    const subject = "We want to work";
    const body = "Hello,\n";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <header className="header">
        <section className="hero">
          <div className="hero__content">
            <h3 className="hero__heading">
              Your idea, implemented{" "}
              <span style={{ display: "block" }}>your way.</span>
            </h3>
            <p className="hero__desc">
              Logarithm Technologies empowers clients globally by transforming
              their visions into tangible results through industry-leading
              product development.
            </p>
            {/* <a className="hero__btn" href="#main">
              &#x2193;
            </a> */}
          </div>
        </section>
      </header>
      <section
        className={`white ${whiteVisible ? "white__animation" : ""}`}
        id="main"
        ref={whiteRef}
      >
        <div className="white__container">
          <div className="white__text">
            <h4 className="white__text--heading">Book a consultation.</h4>
            <p className="white__text--details">
              Unleash the full potential of your brand. Join Logarithm
              Technologies' distinguished roster of clients, and let our team of
              experts be your trusted partner in innovation. We leverage
              cutting-edge technology to translate your vision into tangible
              results, empowering you to achieve your business goals and gain a
              competitive edge. Partner with Logarithm today and experience the
              transformative power of industry-leading solutions.
            </p>
            <button
              className="white__text--btn"
              onClick={handleEmailButtonClick}
            >
              Book Appointment &gt;
            </button>
          </div>
          <div className="white__img">
            <img alt="design element" src={Man.src} />
          </div>
          <div className="white__clip--shadow">
            <div className="white__clip"></div>
          </div>
          <div className="white__clip--overlay">
            <div className="white__clip--overlay-child"></div>
            {/* <svg
              style={{ width: "100%", height: "100%" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="myClipPath">
                  <path d="M 400 0 Q 61 56 265 303 Q 361 416 215 474 Q 19 546 185 647 Q 297 725 0 752 L 411 751 Z" />
                </clipPath>
              </defs>

              <rect
                x="0"
                y="0"
                width="800"
                height="800"
                style={{
                  clipPath: "url(#myClipPath)",
                  fill: "#ffffff",
                }}
              />
            </svg> */}
          </div>
          <div className="white__plus white__plus--1">
            <PlusSVG width={50} height={50} color="#515151" />
          </div>
          <div className="white__plus white__plus--2">
            <PlusSVG
              width={50}
              height={50}
              color={isSmallScreen ? "#ffffff" : "#515151"}
            />
          </div>
        </div>
      </section>
      <section
        className={`orange ${orangeVisible ? "orange__animation" : ""}`}
        ref={orangeRef}
      >
        <div className="orange__container">
          <div className="orange__header">
            <h3 className="orange__heading">
              Our <span>clients.</span>
            </h3>
            <div className="orange__header--design"></div>
          </div>
          <div className="orange__clients">
            <div className="orange__clients__item">
              {/* <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,0 300,0 300,100 0,100z"
                  vectorEffect="non-scaling-stroke"
                />
              </svg> */}
              <img src={Centro.src} alt="img" />
              {/* Client 1 */}
            </div>
            <div className="orange__clients__item">
              {/* <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,0 300,0 300,100 0,100z"
                  vectorEffect="non-scaling-stroke"
                />
              </svg> */}
              <img src={ThaThrowdown.src} alt="img" />
              {/* Client 2 */}
            </div>
            <div className="orange__clients__item">
              {/* <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,0 300,0 300,100 0,100z"
                  vectorEffect="non-scaling-stroke"
                />
              </svg> */}
              <img src={Vitpay.src} alt="img" />
              {/* Client 3 */}
            </div>
            <div className="orange__clients__item">
              {/* <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,0 300,0 300,100 0,100z"
                  vectorEffect="non-scaling-stroke"
                />
              </svg> */}
              <img src={Trema.src} alt="img" />
              {/* Client 4 */}
            </div>
            <div className="orange__clients__item">
              {/* <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,0 300,0 300,100 0,100z"
                  vectorEffect="non-scaling-stroke"
                />
              </svg> */}
              <img src={LearnersDen.src} alt="img" />
              {/* Client 5 */}
            </div>
            <div className="orange__clients__item">
              {/* <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,0 300,0 300,100 0,100z"
                  vectorEffect="non-scaling-stroke"
                />
              </svg> */}
              <img src={nattyNYC.src} alt="img" />
              {/* Client 6 */}
            </div>
            <div className="orange__clients__item">
              {/* <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,0 300,0 300,100 0,100z"
                  vectorEffect="non-scaling-stroke"
                />
              </svg> */}
              <img src={Learnify.src} alt="img" />
              {/* Client 6 */}
            </div>
            <div className="orange__clients__item">
              {/* <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,0 300,0 300,100 0,100z"
                  vectorEffect="non-scaling-stroke"
                />
              </svg> */}
              <img src={VI.src} alt="img" />
              {/* Client 6 */}
            </div>
            <div className="orange__clients__item">
              {/* <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                <path
                  d="M0,0 300,0 300,100 0,100z"
                  vectorEffect="non-scaling-stroke"
                />
              </svg> */}
              <img src={IDEA.src} alt="img" />
              {/* Client 6 */}
            </div>
          </div>
          <div className="orange__bar orange__bar--1"></div>
          <div className="orange__bar orange__bar--2"></div>
          <div className="orange__bar orange__bar--3"></div>
          <div className="orange__bar orange__bar--4"></div>
          <div className="orange__bar orange__bar--5"></div>
        </div>
      </section>
      <section
        className={`what ${whatVisible ? "what__animation" : ""}`}
        ref={whatRef}
      >
        <div className="what__container">
          <h3 className="what__heading">
            What they<span>say.</span>
          </h3>
          <div className="what__carousel">
            <div
              className="what__content--container"
              ref={sliderRef}
              style={{
                height: activeHeight,
                width: `${elsCarousel.length * 100}%`,
                alignSelf: "flex-start",
              }}
            >
              {elsCarousel.map((el, index) => {
                return (
                  <div
                    key={index}
                    className={`what__content--item ${
                      activeStep === index ? "active" : ""
                    }`}
                    style={{
                      width: `${100 / elsCarousel.length}%`,
                      ...(activeStep === 0 && index === elsCarousel.length - 1
                        ? transitionStyles(index)["left"]
                        : activeStep === elsCarousel.length - 1 && index === 0
                        ? transitionStyles(index)["right"]
                        : transitionStyles(index)[
                            activeStep > index
                              ? "left"
                              : activeStep === index
                              ? "center"
                              : "right"
                          ]),
                    }}
                  >
                    <div className="what__img"></div>
                    <div className="what__details">
                      {el?.text
                        ? el.text
                        : "Lorem laboris laboris sint incididunt sint officia aliquip laboris tempor ut voluptate. Ipsum aliquip laboris dolor nostrud et mollit cillum in Lorem. In ipsum occaecat ad nulla qui."}
                    </div>
                    <div className="what__signatures">
                      <h4 className="what__name">{el?.name}</h4>
                      <p className="what__position">CEO - {el?.company}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {!phone && (
            <div className="what__controls">
              <button
                className="projects__arrow projects__arrow--prev"
                onClick={handleBack}
                // disabled={activeStep <= 0}
              >
                <div className="projects__arrow--icon"></div>
              </button>
              <button
                className="projects__arrow projects__arrow--next"
                onClick={handleNext}
                // disabled={activeStep >= 3}
              >
                <div className="projects__arrow--icon"></div>
              </button>
            </div>
          )}
        </div>
      </section>
      <section
        className={`services ${servicesVisible ? "services__animation" : ""}`}
        ref={servicesRef}
      >
        <div className="services__container">
          <h3 className="services__heading--small">Our Services</h3>
          <div className="services__col services__col--1">
            <div className="services__section services__section--info">
              <h4 className="services__section--heading">&lt;/&gt;</h4>
              <h4 className="services__section--subheading">Web development</h4>
              <p className="services__section--details">
                Pioneering Innovation. We craft captivating user experiences
                through stunning, user-centric frontend design, coupled with
                secure and robust backend development. Our team leverages
                cutting-edge technologies to build meaningful web solutions that
                drive results and propel your brand forward.
              </p>
            </div>
            <div className="services__section services__section--empty"></div>
          </div>
          <div className="services__col services__col--2">
            <div className="services__design" ref={servicesDesignRef}></div>
            <div className="services__section services__section--info">
              <h4 className="services__section--heading">UI/UX</h4>
              <h4 className="services__section--subheading">Frontend design</h4>
              <p className="services__section--details">
                Bridge the Gap. We don't just design interfaces, we craft
                intuitive user journeys that seamlessly bridge the gap between
                your vision and user needs. Our team of UX/UI experts optimizes
                usability, fosters engagement, and drives conversions through
                beautiful and intuitive design solutions.
              </p>
            </div>
            <div className="services__section services__section--empty"></div>
          </div>
          <div className="services__col services__col--3">
            <div className="services__heading" ref={servicesHeadingRef}>
              Our <span>services</span>
            </div>
            <div className="services__section services__section--info">
              <h4 className="services__section--heading">AI</h4>
              <h4 className="services__section--subheading">AI integration</h4>
              <p className="services__section--details">
                Unlock the Power of Intelligence. We integrate cutting-edge AI
                solutions to empower your business. Our team of AI specialists
                tailors intelligent automation and machine learning algorithms
                to transform your data into actionable insights, driving
                efficiency, personalization, and growth.
              </p>
            </div>
            <div
              className="services__section services__section--empty"
              onClick={handleEmailButtonClick}
            >
              Connect with us <span>&gt;</span>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="projects" id="projects">
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
              <div className="projects__item--img">
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
              <div className="projects__item--img">
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
              <div className="projects__item--img">
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
      </section> */}
    </>
  );
};

export default Home;
