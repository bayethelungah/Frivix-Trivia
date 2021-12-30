import React from "react";
import Categories from "./categories";
import QuickPlay from "./quickPlay";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Customize from "./customize";

import { motion } from "framer-motion";

export const Main = () => {
  const [main, setMain] = useState(true);
  const [quickPlay, setPlay] = useState(false);
  const [questionType, setQuestionType] = useState();
  const [showCategories, setShowCategories] = useState(false);
  const [customize, setCustomize] = useState(false);

  console.log(questionType);

  return (
    <section className="main">
      <div className="container flex">
        {main && (
          <>
            <div
              id="quick"
              onClick={() => {
                setMain(false);
                setPlay(true);
              }}
              className="flex-column card "
            >
              <svg
                width="150"
                height="100"
                viewBox="0 0 105 123"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M96.8796 46.4446C106.918 52.5428 107.183 67.0181 97.3751 73.48L27.1306 119.759C16.6027 126.695 2.56175 119.297 2.33075 106.691L0.68228 16.7378C0.451277 4.1324 14.2117 -3.77563 24.9867 2.77014L96.8796 46.4446Z"
                  fill="#6C63FF"
                />
              </svg>

              <h1 className="md">Quick Play</h1>
              <p>Play and answer questions from many different categories. </p>
            </div>
            <div
              id="categories"
              className="flex-column card"
              onClick={() => {
                setMain(false);
                setShowCategories(true);
              }}
            >
              <svg
                width="150"
                height="100"
                viewBox="0 0 177 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect width="177" height="27" rx="8" fill="#6C63FF" />
                <motion.rect
                  y="38"
                  width="177"
                  height="27"
                  rx="8"
                  fill="#6C63FF"
                />
                <motion.rect
                  y="76"
                  width="177"
                  height="27"
                  rx="8"
                  fill="#6C63FF"
                />
              </svg>
              <h1 className="md">Categories</h1>
              <p>
                Choose to answer questions in a specific categorie like music or
                art.
              </p>
            </div>
            <div
              onClick={() => {
                setMain(false);
                setCustomize(true);
              }}
              id="customize"
              className="flex-column card"
            >
              <svg
                width="150"
                height="100"
                viewBox="0 0 124 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="61"
                  cy="63"
                  r="38.5"
                  stroke="#6C63FF"
                  stroke-width="23"
                />
                <rect x="44" width="35" height="18" rx="3" fill="#6C63FF" />
                <rect
                  x="44"
                  y="108"
                  width="35"
                  height="18"
                  rx="3"
                  fill="#6C63FF"
                />
                <rect
                  x="14.3242"
                  y="75"
                  width="35"
                  height="18"
                  rx="3"
                  transform="rotate(47.7504 14.3242 75)"
                  fill="#6C63FF"
                />
                <rect
                  x="32.7866"
                  y="22.5193"
                  width="35"
                  height="18"
                  rx="3"
                  transform="rotate(121.927 32.7866 22.5193)"
                  fill="#6C63FF"
                />
                <rect
                  x="106.117"
                  y="15"
                  width="35"
                  height="18"
                  rx="3"
                  transform="rotate(57.122 106.117 15)"
                  fill="#6C63FF"
                />
                <rect
                  x="124.792"
                  y="81.5234"
                  width="35"
                  height="18"
                  rx="3"
                  transform="rotate(121.943 124.792 81.5234)"
                  fill="#6C63FF"
                />
              </svg>

              <h1 className="md">Customize</h1>
              <p>
                Specialize your quiz by the number of questions categories and
                more.
              </p>
            </div>
          </>
        )}
        <AnimatePresence>
          {quickPlay && <QuickPlay setPlay={setPlay} setMain={setMain} />}
        </AnimatePresence>
        {showCategories && <Categories />}
        {customize && <Customize />}
      </div>
    </section>
  );
};

export default Main;
