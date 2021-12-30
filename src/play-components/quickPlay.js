import React from "react";
import { useState } from "react";
import Multiple from "./multiple";
import Boolean from "./boolean";
import Finished from "./finished";
import axios from "axios";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { motion, AnimatePresence } from "framer-motion";

const QuickPlay = (props) => {
  const answeredCorrectly = useSelector((state) => state.answeredCorrectly);
  const dispatch = useDispatch();
  const [whichQuestion, setWhichQuestion] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  let { setPlay, setMain } = props;

  const { setAnsweredCorrectly } = bindActionCreators(actionCreators, dispatch);

  let { isLoading, error, data } = useQuery("questions", () =>
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((res) => res.data.results)
  );

  console.log(data);

  if (isLoading) return "Loading...";
  if (error) return "There is an Error";

  return (
    <>
      <motion.div
        onClick={() => {
          setPlay(false);
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
      {!isFinished && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="quick-play"
        >
          <div className="flex-column">
            <div className="flex gap">
              <h1 className="lg">
                {data[whichQuestion].category
                  .replace(/Science:/, "")
                  .replace(/Entertainment:/, "")}
              </h1>
              <h2>{data[whichQuestion].difficulty}</h2>
            </div>
            <div className="card flex-column gap">
              <h1 className="md text-center">
                {data[whichQuestion].question
                  .replace(/&quot;/g, '"')
                  .replace(/&#039;/g, "'")
                  .replace(/&Eacute;/, "É")}
              </h1>
              {data[whichQuestion].type === "boolean" && (
                <Boolean
                  setIsFinished={setIsFinished}
                  totalCorrectAnswers={totalCorrectAnswers}
                  setTotalCorrectAnswers={setTotalCorrectAnswers}
                  correctAnswer={data[whichQuestion].correct_answer}
                  whichQuestion={whichQuestion}
                  setWhichQuestion={setWhichQuestion}
                />
              )}
              {data[whichQuestion].type === "multiple" && (
                <Multiple
                  setIsFinished={setIsFinished}
                  totalCorrectAnswers={totalCorrectAnswers}
                  setTotalCorrectAnswers={setTotalCorrectAnswers}
                  data={data}
                  whichQuestion={whichQuestion}
                  setWhichQuestion={setWhichQuestion}
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
      <AnimatePresence>
        {isFinished && (
          <Finished
            setWhichQuestion={setWhichQuestion}
            setTotalCorrectAnswers={setTotalCorrectAnswers}
            setIsFinished={setIsFinished}
            totalCorrectAnswers={totalCorrectAnswers}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickPlay;
