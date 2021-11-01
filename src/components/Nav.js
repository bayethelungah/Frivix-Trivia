import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const Nav = () => {
  const dispatch = useDispatch();

  const { setDarkMode } = bindActionCreators(actionCreators, dispatch);

  return (
    <div class="container">
      <nav className="flex-space">
        <h1>Frivix</h1>
        <ul class="flex">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a onClick={() => setDarkMode(true)}>Darkmode</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
