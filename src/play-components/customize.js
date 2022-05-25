import React, { useState } from "react";
import { motion } from "framer-motion";
import Type from "./type";

const Customize = ({ setMain, setCustomize }) => {
  const [difficulty, setDifficulty] = useState("");

  return (
    <>
      {difficulty === "" && (
        <>
          <motion.div
            onClick={() => {
              setCustomize(false);
              setMain(true);
            }}
            onHover={{ cursor: "pointer" }}
            style={{ gap: "10px" }}
            className="back flex"
          >
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 1L2 5.27723L8 9" stroke="#6C63FF" stroke-width="2" />
            </svg>
            <a>Back</a>
          </motion.div>
          <div className="customize">
            <motion.h1 className="lg text-center">Difficulty</motion.h1>
            <div className="flex gap">
              <button
                className="btn-outline"
                onClick={() => {
                  setDifficulty("hard");
                }}
              >
                Hard
              </button>
              <button
                className="btn-outline"
                onClick={() => {
                  setDifficulty("medium");
                }}
              >
                Medium
              </button>
              <button
                className="btn-outline"
                onClick={() => {
                  setDifficulty("easy");
                }}
              >
                Easy
              </button>
              <button
                className="btn-outline"
                onClick={() => {
                  setDifficulty(undefined);
                }}
              >
                Any
              </button>
            </div>
          </div>
        </>
      )}
      {difficulty !== "" && (
        <Type difficulty={difficulty} setDifficulty={setDifficulty} />
      )}
    </>
  );
};

export default Customize;
