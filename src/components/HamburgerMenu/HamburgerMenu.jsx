/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HamburgerMenu = ({
  className,
  hamburgerMenu = "https://cdn.animaapp.com/projects/65069ecfdaf4d0c7dc24f190/releases/65069f1f3f7e71edf983c8c2/img/hamburger-menu-1@2x.png",
}) => {
  return <img className={`hamburger-menu ${className}`} alt="Hamburger menu" src={hamburgerMenu} />;
};

HamburgerMenu.propTypes = {
  hamburgerMenu: PropTypes.string,
};
