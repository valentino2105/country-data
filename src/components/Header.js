import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = ({ switchMode, darkMode }) => {
  return (
    <>
      {/* <header className={darkMode ? "light" : ""}> */}
      <header className={`${classes.header} ${darkMode ? "light" : ""}`}>
        <Link to="/">
          <span>Integrify Assignement - Country Data w/React</span>
        </Link>
        
      </header>
    </>
  );
};

export default Header;
