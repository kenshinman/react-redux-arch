import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";

//container component
class UserDetail extends Component {
  state = {};

  render() {
    if (!this.props.user) {
      return <h5>Please select a user</h5>;
    }
    return (
      <div>
        <img src={this.props.user.thumbnail} alt="" />
        <h2>
          Name: {this.props.user.first} {this.props.user.last}
        </h2>
        <h3>Age: {this.props.user.age}</h3>
      </div>
    );
  }
}

//container glue
function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.activeUser
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps)(UserDetail);
