import React, { Component, Fragment } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import usersContext from "../context/users-context";

export class UserFinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      filteredList: [],
    };
  }

  static contextType = usersContext;

  componentDidMount() {
    this.setState({ filteredList: this.context.users });
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({
        filteredList: this.context.users.filter((item) =>
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
