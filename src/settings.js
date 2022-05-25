import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/authContext";
import { useQuery, gql } from "@apollo/client";

const Settings = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { user } = useContext(AuthContext);

  const USER_DATA_QUERY = gql`
    query GetUserInfo($email: String!) {
      getUserInfo(email: $email) {
        fullName
        username
        email
      }
    }
  `;

  console.log(user);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const { data, loading, error } = useQuery(USER_DATA_QUERY, {
    variables: { email: user.email },
  });

  return (
    <section className="settings">
      <div className="container flex-column height">
        {!loggedIn && (
          <>
            <div className="flex-col">
              <h1>You Are Not Logged In</h1>
              <button className="btn">Click Here to Sign In</button>
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
      </div>
    </section>
  );
};

export default Settings;
