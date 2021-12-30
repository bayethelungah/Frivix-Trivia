import React from "react";
import music from "../images/music-notes.jpeg";
import sport from "../images/lebron.jpeg";
import art from "../images/art.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function buttonClick(e) {
  e.preventDefault();
}

const News = (props) => {
  const [imgHover, setImgHover] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        height: 15,
        width: 300,
        opacity: 1,
        transition: {
          duration: 0.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        height: 0,
        width: 0,
        opacity: 0,
      });
    }

    console.log(imgHover);
  }, [inView, imgHover]);
  return (
    <section className="categories" ref={ref}>
      <div className="container flex-column">
        <h1 className="lg">Sign up for our Newsletter</h1>
        <motion.form variants={variants} className="flex-column">
          <motion.input
            whileTap={{ scale: 1.1 }}
            animate={animation}
            className="card"
            placeholder="Full Name"
          />
          <motion.input
            whileTap={{ scale: 1.1 }}
            animate={animation}
            className="card"
            placeholder="Email"
          />
          <motion.button
            whileTap={{ scale: 0.55 }}
            onClick={(e) => buttonClick(e)}
            className="btn"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default News;
