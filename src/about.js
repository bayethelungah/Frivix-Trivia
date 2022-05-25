import React, { useState, useContext } from "react";
import Nav from "./main-components/Nav";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "./context/authContext";

const About = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <section className="about">
      <Nav />
      <div className="flex-around height container">
        <div className="flex-column">
          <div className="   flex-column">
            <motion.h1
              whileHover={{ color: "#6c63ff", cursor: "pointer" }}
              onMouseEnter={() => setQuestion1(true)}
              onMouseLeave={() => setQuestion1(false)}
              className="md"
            >
              What Is Frivix?
            </motion.h1>

            <motion.h1
              whileHover={{ color: "#6c63ff", cursor: "pointer" }}
              onMouseEnter={() => setQuestion2(true)}
              onMouseLeave={() => setQuestion2(false)}
              className="md"
            >
              Who Created Frivix?
            </motion.h1>

            <motion.h1
              whileHover={{ color: "#6c63ff", cursor: "pointer" }}
              onMouseEnter={() => setQuestion3(true)}
              onMouseLeave={() => setQuestion3(false)}
              className="md"
            >
              What Technologies Were Used?
            </motion.h1>

            <motion.h1
              whileHover={{ color: "#6c63ff", cursor: "pointer" }}
              onMouseEnter={() => setQuestion4(true)}
              onMouseLeave={() => setQuestion4(false)}
              className="md"
            >
              Latest Update
            </motion.h1>
          </div>
        </div>
        <div className="flex-column">
          <AnimatePresence>
            {question1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="card"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="answers"
                >
                  Frivix is a Web app for quick fun trivia Games. It is built by
                  one developer named Bayethe Lungah. This is a portfolio
                  project.
                </motion.p>
              </motion.div>
            )}
            {question2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="card"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="answers"
                >
                  Frivix is designed and maintained by Bayethe Lungah
                </motion.p>
              </motion.div>
            )}
            {question3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="card"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="answers"
                >
                  The tech stack for this project includes React, GraphQL,
                  Framer Motion
                </motion.p>
              </motion.div>
            )}
            {question4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="card"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="answers"
                >
                  The Latest Update was 2022/22/2
                </motion.p>
              </motion.div>
            )}
            {!question1 && !question2 && !question3 && !question4 && (
              <>
                {user && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="card"
                      style={{ width: "325px" }}
                    >
                      <motion.h1
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        Have a Question?
                      </motion.h1>
                      <motion.form className="flex-column">
                        <motion.input
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          placeholder="Enter it here..."
                        />
                      </motion.form>
                    </motion.div>
                  </>
                )}
                {!user && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="card flex-column"
                      style={{ width: "325px" }}
                    >
                      <motion.h1
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        Have a Question?
                      </motion.h1>
                      <motion.button
                        className="btn"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        Sign In
                      </motion.button>
                    </motion.div>
                  </>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;
