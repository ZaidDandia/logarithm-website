import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Privacy from "./PrivacyPolicy";
import ErrorPage from "./ErrorPage";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

      if (scrollFromTop > 100) setIsScrolled(true);
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

  return (
    <div className="wrapper">
      <Nav isSmallScreen={isSmallScreen} isScrolled={isScrolled} />
      <HashRouter>
        {/* Hello */}
        <Routes>
          <Route
            exact
            path="/"
            element={<Home isSmallScreen={isSmallScreen} />}
          />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
};

export default App;
