import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { motion } from "framer-motion";
import CategoryPlay from "./categoryPlay";
import CustomPlay from "./customPlay";

const Categories = ({
  setShowCategories,
  setMain,
  type,
  number,
  setNumber,
  difficulty,
}) => {
  let [chosen, setChosen] = useState(false);
  let [chosenId, setChosenId] = useState(null);
  let [categoryPlay, setCategoryPlay] = useState(true);

  let { isLoading, error, data } = useQuery("categories", () =>
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => res.data.trivia_categories)
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>There was an error</h1>;

  const handleBack = () => {
    if (number !== undefined) {
      setNumber(0);
    } else {
      setShowCategories(false);
      setMain(true);
    }
  };

  const handleCheck = () => {
    if (number !== undefined) {
      setCategoryPlay(false);
    } else {
      setCategoryPlay(true);
    }
  };
  return (
    <>
      {!chosen && (
        <>
          <motion.div
            onClick={() => {
              handleBack();
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
            <p>Back</p>
          </motion.div>
          <div className="categories flex-column ">
            <div className="flex-column">
              <h2
                style={{ fontFamily: "Dosis", color: "#6c63ff" }}
                className="md"
              >
                Choose A Category
              </h2>

              <div className="categorie-grid categorie-card ">
                {data.map((category, id) => {
                  return (
                    <motion.a
                      key={id}
                      onClick={() => {
                        setChosenId(category.id);
                        setChosen(true);
                        handleCheck();
                      }}
                      style={{ fontFamily: "Dosis", justifySelf: "center" }}
                      whileHover={{
                        scale: 1.1,
                        color: "#6c63ff",
                        cursor: "pointer",
                      }}
                      className="sm"
                    >
                      {category.name
                        .replace(/Science:/, "")
                        .replace(/Entertainment:/, "")}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {chosen && categoryPlay && (
        <CategoryPlay chosenId={chosenId} setChosen={setChosen} />
      )}
      {chosen && !categoryPlay && (
        <CustomPlay
          chosenId={chosenId}
          setChosen={setChosen}
          difficulty={difficulty}
          type={type}
          number={number}
        />
      )}
    </>
  );
};

export default Categories;
