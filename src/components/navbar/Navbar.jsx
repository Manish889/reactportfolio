import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h4>
          Manish <span>Rawat</span>{" "}
        </h4>
      </div>

      <ul
        className={
          showMobile ? "navbar__list navbar__list_mobile" : "navbar__list"
        }
      >
        <NavLink exact activeClassName="navbar__active" to="/">
          <li className="navbar__item"> Home</li>
        </NavLink>

        <NavLink exact activeClassName="navbar__active" to="/about">
          <li className="navbar__item">About Me</li>
        </NavLink>

        <NavLink exact activeClassName="navbar__active" to="/mywork">
          <li className="navbar__item">My Work</li>
        </NavLink>

        <NavLink exact activeClassName="navbar__active" to="/contactme">
          <li className="navbar__item">Contact Me</li>
        </NavLink>

        <NavLink exact activeClassName="navbar__active" to="/resume">
          <li className="navbar__item">My Resume</li>
        </NavLink>
      </ul>
      <div
        onClick={() => {
          setShowMobile(!showMobile);
        }}
        className="navbar__hamburger"></div>
    </div>
  );
};

export default Navbar;
