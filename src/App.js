import React from "react";
import UserForm from "./Components/UserForm";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import { BrowserRouter, Route } from "react-router-dom";
import { setUser } from "./Actions/userActions";
import { connect } from "react-redux";
import "./App.css";

class App extends React.Component {

  state = {
    user: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.setUser(token);
    } else {
      console.log("no");
    }
  }

  render() {
    console.log(this.props.calendar)
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/login" render={() => <UserForm type="login"/>} />
          <Route path="/signup" render={() => <UserForm type="signup"/>} />
          <Route exact path="/" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return{
    calendar: state.calendar
  }
}

export default connect(mapStateToProps, { setUser })(App);
