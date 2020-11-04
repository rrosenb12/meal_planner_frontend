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
      <side-menu style={isClicked ? { "width": "16.66%" } : { "width": "0%" }}>
        <ul className="sidebar-options">
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          <NavLink to="/signup">
            <li>Signup</li>
          </NavLink>
        </ul>
      </side-menu>
      <div
        style={isClicked ? { "margin-left": "16.66%" } : { "margin-left": "0" }}
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
