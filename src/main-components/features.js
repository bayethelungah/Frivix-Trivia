import img from "../images/feature-img.svg";
import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";

const Features = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  let navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "100vw",
      });
    }
  }, [inView]);

  return (
    <section className="features" ref={props.featuresRef}>
      <div ref={ref} className="container flex">
        <motion.img src={img}></motion.img>
        <motion.div animate={animation} className="flex-column">
          <motion.h1 className="lg">Multiplayer</motion.h1>
          <motion.p>
            Invite and play against your friends and see who's smarter.
          </motion.p>
          <motion.button
            onClick={() => {
              navigate("/about");
            }}
            className="btn-outline"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
