import React from "react";
import UserForm from "./Components/UserForm";
import NavBar from "./Components/NavBar"
import {BrowserRouter, Route} from "react-router-dom"
import "./App.css";

export default class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then(console.log);
    } else {
      console.log("no");
    }
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route path="/" component={NavBar}/>
        <Route exact path="/login-signup" component={UserForm} />
      </div>
      </BrowserRouter>
    );
  }
}

{/* <div
  class="btn-toolbar"
  role="toolbar"
  aria-label="Toolbar with button groups"
>
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">
      1
    </button>
    <button type="button" class="btn btn-secondary">
      2
    </button>
    <button type="button" class="btn btn-secondary">
      3
    </button>
    <button type="button" class="btn btn-secondary">
      4
    </button>
  </div>
  <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">
      5
    </button>
    <button type="button" class="btn btn-secondary">
      6
    </button>
    <button type="button" class="btn btn-secondary">
      7
    </button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-secondary">
      8
    </button>
  </div>
</div> */}