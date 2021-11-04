import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import logo from "../images/f.svg";

const Nav = () => {
  const dispatch = useDispatch();

  const { setDarkMode } = bindActionCreators(actionCreators, dispatch);

  return (
    <nav className="nav flex my-1">
      <div class="container flex-space ">
        <img src={logo}></img>
        <ul class="flex gap">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a className="btn btn-light">Login</a>
          </li>
          <li>
            <a className="btn">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
