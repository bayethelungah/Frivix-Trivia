import React from "react";
import img from "../images/facts.svg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router";

const Facts = () => {
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
        x: "-100vw",
      });
    }
  }, [inView]);

  let navigate = useNavigate();

  return (
    <section className="facts">
      <div ref={ref} className="container flex">
        <motion.div animate={animation} className="flex-column">
          <h1 className="lg">Interesting Facts</h1>
          <p>
            Learn new interesting facts about politics, music, sports and many
            more.
          </p>
          <button
            onClick={() => {
              navigate("/about");
            }}
            className="btn-outline"
          >
            Learn More
          </button>
        </motion.div>
        <img src={img}></img>
      </div>
    </section>
  );
};

export default Facts;
