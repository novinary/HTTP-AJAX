import React, { Component } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import axios from "axios";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  handleFriendListChange = friends => {
    this.setState({
      friends
    });
  };

  // hook into the componentDidMount lifecycle hook and
  // perform a GET request
  componentDidMount() {
    axios
      //  Requests data from a specified resource
      .get("http://localhost:5000/friends")

      // Using axios.get(url) we then get a promise which returns a response
      // As we’re looking for the response data, we’ve assigned the value of person
      // to res.data.
      .then(res => this.setState({ friends: res.data }));
  }

  render() {
    return (
      <div className="container">
        <FriendList friends={this.state.friends} />
        <FriendForm updateFriendList={this.handleFriendListChange} />
      </div>
    );
  }
}

export default App;
