import React, { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areUsersShown: true,
    };
  }

  toggleDisplay = () => {
    this.setState((prevState) => ({
      areUsersShown: !prevState.areUsersShown,
    }));
  };
  // Create an Error to test ErrorBoundary component
  // componentDidUpdate() {
  //   if(this.props.list.length === 0) {
  //     throw new Error("No list provided!")
  //   }
  // }

  render() {
    const { areUsersShown } = this.state;
    const usersList = (
      <ul>
        {this.props.list.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleDisplay}>
          {areUsersShown ? "Hide" : "Show"}
        </button>
        {areUsersShown && usersList}
      </div>
    );
  }
}

export default Users;

// import { useState } from 'react';

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };
