import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

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

  const answeredCorrectly = useSelector((state) => state.answeredCorrectly);
  const dispatch = useDispatch();
  const { setAnsweredCorrectly } = bindActionCreators(actionCreators, dispatch);

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
