import React from "react";
import { connect } from "react-redux";
import { createUser, loginUser } from "../Actions/userActions";

class UserForm extends React.Component {
  MONTH = new Date().getMonth() + 1;

  state = {
    username: "",
    password: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.type === "login" &&
      this.props.loginUser({
        username: this.state.username,
        password: this.state.password,
      });
    this.props.type === "signup" &&
      this.props.createUser(this.state, this.MONTH);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        {this.props.type === "signup" && (
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        )}
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default connect(null, { createUser, loginUser })(UserForm);