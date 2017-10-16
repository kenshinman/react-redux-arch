import React, { Component } from "react";
import UserList from "./containers/user-list";
import UserDetail from "./containers/user-detail";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Username List</h1>
        <UserList/>
        <hr />
        <h2>User Details:</h2>
        <UserDetail/>
      </div>
    );
  }
}

export default App;
