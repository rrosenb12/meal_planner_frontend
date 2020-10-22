import React from "react";

export default class UserForm extends React.Component {
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
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("token", response.jwt)
        localStorage.setItem("user", response.user.username)
        console.log(response, localStorage)});
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
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
