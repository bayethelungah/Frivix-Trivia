import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Multiple = (props) => {
  const {
    data,
    setWhichQuestion,
    whichQuestion,
    setTotalCorrectAnswers,
    totalCorrectAnswers,
    setIsFinished,
  } = props;
  const [isCorrect, setIsCorrect] = useState(null);

  let questions = [];

  questions.push(data[whichQuestion].correct_answer);
  questions.push(data[whichQuestion].incorrect_answers[0]);
  questions.push(data[whichQuestion].incorrect_answers[1]);
  questions.push(data[whichQuestion].incorrect_answers[2]);

  let correctAnswer = data[whichQuestion].correct_answer;

  shuffleArray(questions);
  console.log(correctAnswer);

  function handleClick(num) {
    if (correctAnswer === questions[num]) {
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

  const answeredCorrectly = useSelector((state) => state.answeredCorrectly);
  const dispatch = useDispatch();
  const { setAnsweredCorrectly } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="multiple flex gap text-center">
      <a onClick={() => handleClick(0)} className="btn-outline">
        {questions[0]}
      </a>
      <a onClick={() => handleClick(1)} className="btn-outline">
        {questions[1]}
      </a>
      <a onClick={() => handleClick(2)} className="btn-outline">
        {questions[2]}
      </a>
      <a onClick={() => handleClick(3)} className="btn-outline">
        {questions[3]}
      </a>
    </div>
  );

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
};

export default Multiple;
