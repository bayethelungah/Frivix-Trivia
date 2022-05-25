import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import Boolean from "./boolean";
import Multiple from "./multiple";
import Finished from "./finished";
import { motion } from "framer-motion";

const CategoryPlay = (props) => {
  let [isFinished, setIsFinished] = useState(false);
  let [whichQuestion, setWhichQuestion] = useState(0);
  let [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  let { chosenId, setChosen } = props;
  let { isLoading, error, data } = useQuery("categorieQuestions", () =>
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${chosenId}`)
      .then((res) => res.data.results)
  );
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>There was an error</h1>;

  return (
    <>
      <motion.div
        onClick={() => {
          setChosen(false);
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
        <div className="quick-play">
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
                  .replace(/&eacute;/, "É")}
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
        </div>
      )}
      {isFinished && (
        <Finished
          setWhichQuestion={setWhichQuestion}
          setTotalCorrectAnswers={setTotalCorrectAnswers}
          setIsFinished={setIsFinished}
          totalCorrectAnswers={totalCorrectAnswers}
        />
      )}
    </>
  );
};

export default CategoryPlay;
