import React, { Component, Fragment } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const PLACEHOLDER_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

export class UserFinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      filteredList: PLACEHOLDER_USERS,
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({
        filteredList: PLACEHOLDER_USERS.filter((item) =>
          item.name.toLowerCase().includes(this.state.search.toLowerCase())
        ),
      });
    }
  }

  render() {
    const { search, filteredList } = this.state;
    return (
      <Fragment>
        <div className={classes.finder}>
          <input
            type="search"
            value={search}
            onChange={this.handleSearchChange}
          />
        </div>
        <Users list={filteredList} />
      </Fragment>
    );
  }
}

export default UserFinder;
