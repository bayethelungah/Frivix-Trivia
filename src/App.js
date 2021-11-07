import "./styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import Nav from "./components/Nav";
import Hero from "./components/hero";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useRef, useMemo, useEffect } from "react";

function App() {
  const darkmode = useSelector((state) => state.darkMode);
  console.log(darkmode);
  const targetRef = useRef(null);
  const observeRef = useRef(null);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      document.querySelector("nav").classList.add("scrolled");
      document.getElementById("logo-text").setAttribute("fill", "#80BCC9");
    } else {
      document.querySelector("nav").classList.remove("scrolled");
      document.getElementById("logo-text").setAttribute("fill", "white");
    }
  };
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const navObserver = new IntersectionObserver(callBackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) navObserver.observe(currentTarget);

    return () => {
      if (currentTarget) navObserver.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <div className="App">
      <Nav />

      <Hero targetRef={targetRef} />
      <section></section>
    </div>
  );
}

export default App;
