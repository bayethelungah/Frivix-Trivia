import "./styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import Nav from "./components/Nav";
import Hero from "./components/hero";
import Features from "./components/features";
import Categories from "./components/categories";
import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useRef, useMemo, useEffect } from "react";

function App() {
  const darkmode = useSelector((state) => state.darkMode);
  console.log(darkmode);
  const navRef = useRef(null);
  const featuresRef = useRef(null);
  const observeRef = useRef(null);

  const navCallBack = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      document.querySelector("nav").classList.add("scrolled");
      // document.getElementById("logo-text").style.filll = "white";
    } else {
      document.querySelector("nav").classList.remove("scrolled");
      // document.getElementById("logo-text").style.filll = "white";
    }
  };
  const navOptions = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  const featuresCallBack = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      document.querySelector("#card1").style.animation = "slideRight 300ms";
      document.querySelector("#card2").style.animation = "slideRight 500ms";
      document.querySelector("#card1").style.opacity = 1;
      document.querySelector("#card2").style.opacity = 1;

      document.getElementById("line").style.animation = "slideLeft 500ms";
      document.getElementById("line").style.opacity = 1;

      document.getElementById("solo-bg").style.animation = "fadeIn 500ms";
      document.getElementById("solo-border").style.animation = "fadeIn 300ms";
      document.getElementById("multi-bg").style.animation = "fadeIn 300ms";
      document.getElementById("multi-border").style.animation = "fadeIn 500ms";

      document.getElementById("solo-bg").style.opacity = 1;
      document.getElementById("solo-border").style.opacity = 1;
      document.getElementById("multi-bg").style.opacity = 1;
      document.getElementById("multi-border").style.opacity = 1;
    }
  };

  const featuresOptions = useMemo(() => {
    return {
      root: null,
      rootMargin: "-200px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const navObserver = new IntersectionObserver(navCallBack, navOptions);
    const navTarget = navRef.current;
    if (navTarget) navObserver.observe(navTarget);

    const featuresObserver = new IntersectionObserver(
      featuresCallBack,
      featuresOptions
    );
    const featuresTarget = featuresRef.current;

    if (featuresTarget) featuresObserver.observe(featuresTarget);
    return () => {
      if (navTarget) navObserver.unobserve(navTarget);
    };
  }, [navRef, navOptions]);

  return (
    <div className="App">
      <Nav />
      <Hero navRef={navRef} />
      <Features featuresRef={featuresRef} />
      <Categories />
    </div>
  );
}

export default App;
