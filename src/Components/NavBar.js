import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import closedSidebar from "../Images/closed-sidebar.png";
import openedSidebar from "../Images/opened-sidebar.png";

export default function NavBar() {
  const [isClicked, setIsClicked] = useState(false);
  const click = useCallback(() => setIsClicked(!isClicked), [
    isClicked,
    setIsClicked,
  ]);

  return (
    <>
      <side-menu style={isClicked ? { width: "16.66%" } : { width: "0%" }}>
        <NavLink onClick={click} to="/login" className="link">
          Login
        </NavLink>
        <NavLink onClick={click} to="/signup" className="link">
          Signup
        </NavLink>
      </side-menu>
      <div
        style={isClicked ? { marginLeft: "16.66%" } : { marginLeft: "0" }}
        className="navbar"
      >
        <div
          className="scene"
          style={isClicked ? { marginLeft: "5%" } : { marginLeft: "0" }}
        >
          <div className="card" id={isClicked ? "is-flipped" : null}>
            <div className="card__face card__face--front" onClick={click}>
              <img src={closedSidebar} alt="the sidebar menu is closed" />
            </div>
            <div className="card__face card__face--back" onClick={click}>
              <img src={openedSidebar} alt="the sidebar menu is opened" />
            </div>
          </div>
        </div>
        <title-right>mealzy</title-right>
      </div>
    </>
  );
}
