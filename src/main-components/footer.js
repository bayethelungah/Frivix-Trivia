import React from "react";
import facebookIcon from "../images/facebook.svg";
import twitterIcon from "../images/twitter.svg";
import linkdinIcon from "../images/linkdin.svg";
import logo from "../images/logo.svg";
import { useEffect } from "react";
import { animate, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        y: 100,
      });
    }
  });

  return (
    <footer>
      <motion.div
        ref={ref}
        // animate={animation}
        className="container flex-column"
      >
        <div className="flex">
          <div>
            <h1 className="sm">Product</h1>
            <p>How this works</p>
            <p>Features</p>
            <p>Desktop App</p>
            <p>FAQ</p>
          </div>
          <div>
            <h1 className="sm">Company</h1>
            <p>About</p>
            <p>Blog</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h1 className="sm">Support</h1>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex-column">
            <h1 className="sm">Get in Touch</h1>
            <img src={facebookIcon}></img>
            <img src={twitterIcon}></img>
            <img src={linkdinIcon}></img>
          </div>
        </div>

        <div className="flex-space">
          <img src={logo}></img>
          <p>© Frivix 2021. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
