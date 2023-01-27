import React from "react";
import classes from "./Footer.module.css";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${classes.footer} ${darkMode ? "light" : ""}`}>
      Valentino Valkaj 2023
    </footer>
  );
};

export default Footer;
