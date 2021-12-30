import React from "react";
import img from "../images/soon-img.svg";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Soon = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

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
    <section className="soon my-3" ref={props.soonRef}>
      <div ref={ref} className="container flex">
        <img src={img}></img>
        <motion.div animate={animation} className="flex-column">
          <h1 className="lg">Problem Solving</h1>
          <p>Tackle thousands of different questions and grow smarter.</p>
          <button className="btn-outline">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Soon;
