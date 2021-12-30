import "./styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import Nav from "./main-components/Nav";
import Hero from "./main-components/hero";
import Features from "./main-components/features";
import Categories from "./main-components/categories";
import Soon from "./main-components/soon";
import Facts from "./main-components/facts";
import Mobile from "./main-components/mobile";
import Footer from "./main-components/footer.js";

import { useRef, useMemo, useEffect } from "react";

function App() {
  const darkmode = useSelector((state) => state.darkMode);
  console.log(darkmode);
  const navRef = useRef(null);
  const featuresRef = useRef(null);
  const categoriesRef = useRef(null);
  const soonRef = useRef(null);

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

  useEffect(() => {
    const navObserver = new IntersectionObserver(navCallBack, navOptions);
    const navTarget = navRef.current;

    if (navTarget) navObserver.observe(navTarget);

    return () => {
      if (navTarget) navObserver.unobserve(navTarget);
      // if (soonTarget) soonObserver.unobserve(soonTarget);
    };
  }, [navRef, navOptions]);

  return (
    <div className="App">
      <Nav />
      <Hero navRef={navRef} />
      <Features featuresRef={featuresRef} />
      <Facts />
      <Soon soonRef={soonRef} />
      <Mobile />
      <Categories categoriesRef={categoriesRef} />
      <Footer />
    </div>
  );
}

export default App;
