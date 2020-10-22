import React from "react";
import UserForm from "./UserForm";
import "./App.css";

class App extends React.Component {
  state = {
    user: null 
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token){
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(response => response.json())
      .then(console.log)
    } else {
      console.log("no")
    }
  }
  
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;
