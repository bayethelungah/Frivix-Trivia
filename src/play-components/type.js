import React, { useState } from "react";
import { motion } from "framer-motion";
import QuestionNumber from "./questionNumber";

const Type = ({ difficulty, setDifficulty }) => {
  const [type, setType] = useState("");
  const [categoryPlay, setCategoryPlay] = useState(true);
  return (
    <>
      {type === "" && (
        <>
          <motion.div
            onClick={() => {
              setDifficulty("");
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
          <>
            <div className="type">
              <div className="flex-column">
                <h1 className="lg">Select Question Type</h1>
                <div className="flex gap">
                  <button
                    className="btn-outline"
                    onClick={() => {
                      setType("multiple");
                    }}
                  >
                    Multiple
                  </button>
                  <button
                    className="btn-outline"
                    onClick={() => {
                      setType("boolean");
                    }}
                  >
                    True or False
                  </button>
                  <button
                    className="btn-outline"
                    onClick={() => {
                      setType(undefined);
                    }}
                  >
                    Both
                  </button>
                </div>
              </div>
            </div>
          </>
        </>
      )}
      {type !== "" && (
        <QuestionNumber setType={setType} type={type} difficulty={difficulty} />
      )}
    </>
  );
};

export default Type;
