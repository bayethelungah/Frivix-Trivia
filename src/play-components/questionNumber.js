import React, { useState } from "react";
import Categories from "./categories";
import { motion } from "framer-motion";

const QuestionNumber = ({ type, setType, difficulty }) => {
  const [number, setNumber] = useState(0);
  return (
    <>
      {number === 0 && (
        <>
          <motion.div
            onClick={() => {
              setType("");
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
          <section className="number">
            <div className="flex-column">
              <h1 className="lg"> Choose the amount of questions</h1>
              <div className="flex gap">
                <button
                  className="btn-outline"
                  onClick={() => {
                    setNumber(10);
                  }}
                >
                  Default - 10
                </button>
                <button
                  className="btn-outline"
                  onClick={() => {
                    setNumber(20);
                  }}
                >
                  20
                </button>
                <button
                  className="btn-outline"
                  onClick={() => {
                    setNumber(30);
                  }}
                >
                  30
                </button>
                <button
                  className="btn-outline"
                  onClick={() => {
                    setNumber(40);
                  }}
                >
                  40
                </button>
                <button
                  className="btn-outline"
                  onClick={() => {
                    setNumber(50);
                  }}
                >
                  Max - 50
                </button>
              </div>
              <div className="flex">
                <h2 className="">Custom</h2>
                <input className="btn-outline" max="50" min="1" type="number" />
              </div>
            </div>
          </section>
        </>
      )}
      {number > 0 && (
        <Categories
          type={type}
          difficulty={difficulty}
          number={number}
          setNumber={setNumber}
        />
      )}
    </>
  );
};

export default QuestionNumber;
