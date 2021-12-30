import React from "react";
import heroImg from "../images/laptop-girl.svg";
import { Link } from "react-router-dom";

const hero = (props) => {
  return (
    <section className="hero  flex-center" ref={props.navRef}>
      <div className="container flex">
        <div className="flex-column">
          <h1 className="xl">Become a trivia master</h1>
          <p>
            Sharpen your skills or learn something new with thousands of
            questions and many categories to chose from.
          </p>
          <Link to="/play" className="btn">
            Get Started
          </Link>
        </div>
        <img src={heroImg}></img>
      </div>
    </section>
  );
};

export default hero;
