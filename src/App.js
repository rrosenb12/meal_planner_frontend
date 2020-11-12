import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UserForm from "./Components/UserForm";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

import { setUser } from "./Actions/userActions";
import { connect } from "react-redux";
import {fetchCalendar} from "./Actions/calendarActions"

class App extends React.Component {

  componentWillMount(){
    this.props.fetchCalendar()
  }

  componentDidMount() {
    localStorage.getItem("token") && this.props.setUser(localStorage.getItem("token"))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/login" render={() => <UserForm type="login" />} />
          <Route path="/signup" render={() => <UserForm type="signup" />} />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    calendar: state.calendar.calendar,
  };
};

export default connect(mapStateToProps, { setUser, fetchCalendar })(App);
