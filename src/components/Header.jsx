import React from "react";
import { Link } from "react-router-dom";
import yorha from "../../icons/yorha.png";
import "../index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img className="logo" src={yorha} />
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              {" "}
              <Link to="/"> Home </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/"> About </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/"> Projects </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/"> Contact </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
