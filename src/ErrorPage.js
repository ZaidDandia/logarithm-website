import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ParticleBackground from "./components/particles";
// import ReactFullpage from "@fullpage/react-fullpage-umd";
// import centro from "./images/Centro.png";
// import throwdown from "./images/ThaThrowdown.png";
// import vitpay from "./images/Vitpay.png";
import "./stylesheets/Error.scss";

const ErrorPage = () => {
  return (
    <>
      <section className="section__error">
        <h2 className="error__head">404 Not Found</h2>
        <p className="error__detail">
          The page you're looking for does not exist :&#40;
        </p>
      </section>
    </>
  );
};

export default ErrorPage;
