import React, { Component } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      // axios.get. and now we are logging the
      // response we are receiving from the axios call.
      .get("http://localhost:5000/friends")
      // response is the response we get back from the server
      // in react we set the state of our component with the data that we get back from the request.
      .then(res => this.setState({ friends: res.data }));
  }

  render() {
    return (
      <div className="container">
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
