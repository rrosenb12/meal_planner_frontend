import { createUserCalendar } from "./generalActions";

export const setUser = (token) => {
  return (dispatch) => {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((response) => {
        let token = localStorage.getItem("token");
        localStorage.setItem("user", JSON.stringify(response.user));
        dispatch({
          type: "SET_USER",
          payload: token,
          currentUser: response.user,
        });
      });
  };
};

export const createUser = (userObj, month) => {
  return (dispatch) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then((response) => {
        let token = localStorage.setItem("token", response.jwt);
        localStorage.setItem("user", JSON.stringify(response.user));
        createUserCalendar(response.user.id, month, dispatch);
        dispatch({
          type: "CREATE_USER",
          payload: token,
          currentUser: response.user,
        });
      });
  };
};

export const loginUser = (userObj) => {
  return (dispatch) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: userObj }),
    })
      .then((response) => response.json())
      .then((response) => {
        let token = localStorage.setItem("token", response.jwt);
        localStorage.setItem("user", JSON.stringify(response.user));
        dispatch({
          type: "LOGIN_USER",
          payload: token,
          currentUser: response.user,
        });
      });
  };
};
