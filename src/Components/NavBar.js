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
        <image-wrapper>
          {isClicked ? (
            <img
              src={openedSidebar}
              alt="the sidebar menu is opened"
              onClick={click}
            />
          ) : (
            <img
              src={closedSidebar}
              alt="the sidebar menu is closed"
              onClick={click}
            />
          )}
        </image-wrapper>
        <title-right>mealzy</title-right>
      </div>
    </>
  );
}
