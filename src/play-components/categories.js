import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { motion } from "framer-motion";
import CategoryPlay from "./categoryPlay";

const Categories = () => {
  let [chosen, setChosen] = useState(false);
  let [chosenId, setChosenId] = useState(null);

  let { isLoading, error, data } = useQuery("categories", () =>
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => res.data.trivia_categories)
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>There was an error</h1>;

  console.log(data);
  return (
    <>
      {!chosen && (
        <div className="categories flex-column ">
          <div className="flex-column">
            <h2
              style={{ fontFamily: "Dosis", color: "#6c63ff" }}
              className="md"
            >
              Choose A Category
            </h2>

            {data.map((category, id) => {
              return (
                <motion.a
                  key={id}
                  onClick={() => {
                    setChosenId(category.id);
                    setChosen(true);
                  }}
                  style={{ fontFamily: "Dosis" }}
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
      )}

      {chosen && <CategoryPlay chosenId={chosenId} />}
    </>
  );
};

export default Categories;
