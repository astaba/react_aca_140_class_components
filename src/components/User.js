import React, { Component } from "react";
import classes from "./User.module.css";

export class User extends Component {
  render() {
    const { name } = this.props;
    return <li className={classes.user}>{name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
