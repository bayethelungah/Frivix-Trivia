import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/authContext";
import { useQuery, gql } from "@apollo/client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Settings = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { user } = useContext(AuthContext);
  let navigate = useNavigate();

  const USER_DATA_QUERY = gql`
    query GetUserInfo($email: String!) {
      getUserInfo(email: $email) {
        fullName
        username
        email
      }
    }
  `;

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const { data, loading, error } = useQuery(USER_DATA_QUERY, {
    variables: { email: user?.email },
  });

  return (
    <section className="settings">
      <div className="container flex-column height">
        {!loggedIn && (
          <>
            <div className="flex-col">
              <h1>You Are Not Logged In</h1>
              <div className="flex">
                <Link to="/login" className="btn-outline">
                  Log In
                </Link>
                <Link to="/signup" className="btn-outline">
                  Create Account
                </Link>
              </div>
            </div>
          </>
        )}

        {!loading && (
          <>
            {loggedIn && (
              <>
                <h1>Settings</h1>
                <div className="flex-column card">
                  <h1 className="md">{data?.getUserInfo?.fullName}</h1>
                  <h2 style={{ alignSelf: "start" }}>
                    username: {data?.getUserInfo?.username}{" "}
                  </h2>
                  <h2 style={{ alignSelf: "start" }}>
                    email: {data?.getUserInfo?.email}
                  </h2>
                </div>
              </>
            )}
          </>
        )}
        {loading && (
          <>
            <h1>Loading...</h1>
          </>
        )}
        <motion.div
          onClick={() => {
            navigate("/");
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
      </div>
    </section>
  );
};

export default Settings;
