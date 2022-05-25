import React from "react";
import { useState } from "react";

const Boolean = (props) => {
  let {
    correctAnswer,
    whichQuestion,
    setWhichQuestion,
    totalCorrectAnswers,
    setTotalCorrectAnswers,
    setIsFinished,
  } = props;
  const [isCorrect, setIsCorrect] = useState(null);

  function handleClickTrue() {
    if (correctAnswer === "True") {
      setIsCorrect(true);
      setTotalCorrectAnswers(totalCorrectAnswers + 1);
    } else {
      setIsCorrect(false);
    }
    if (whichQuestion < 9) {
      setWhichQuestion(whichQuestion + 1);
    } else {
      setIsFinished(true);
    }
  }

  function handleClickFalse() {
    if (correctAnswer === "False") {
      setIsCorrect(true);
      setTotalCorrectAnswers(totalCorrectAnswers + 1);
    } else {
      setIsCorrect(false);
    }
    if (whichQuestion < 9) {
      setWhichQuestion(whichQuestion + 1);
    } else {
      setIsFinished(true);
    }
  }

  console.log(correctAnswer);
  return (
    <div className="boolean flex gap">
      <button onClick={() => handleClickTrue()} className="btn-outline">
        True
      </button>
      <button onClick={() => handleClickFalse()} className="btn-outline">
        False
      </button>
    </div>
  );
};

export default Boolean;
