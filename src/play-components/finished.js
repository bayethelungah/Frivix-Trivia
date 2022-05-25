import React from "react";
import { motion } from "framer-motion";

const Finished = (props) => {
  let {
    totalCorrectAnswers,
    setIsFinished,
    setWhichQuestion,
    setTotalCorrectAnswers,
  } = props;

  const finishText =
    totalCorrectAnswers > 2 ? "Congrats" : "Better Luck Next Time";

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="finished flex-column gap"
    >
      <motion.h1>You Scored</motion.h1>
      <motion.h1 className="lg">{totalCorrectAnswers}/10</motion.h1>
      <motion.h1>{finishText}</motion.h1>
      <div className="flex gap">
        <button onClick={() => window.location.reload()} className="btn">
          Exit
        </button>
        <button
          onClick={() => {
            setIsFinished(false);
            setTotalCorrectAnswers(0);
            setWhichQuestion(0);
          }}
          className="btn"
        >
          Play Again
        </button>
      </div>
    </motion.div>
  );
};

export default Finished;
