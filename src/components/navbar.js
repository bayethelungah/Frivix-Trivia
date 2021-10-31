import React from "react";

const navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="flex-space">
          <h1>Frivix</h1>
          <div className="flex">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </div>
        </nav>
      </div>
    </>
  );
};

export default navbar;
