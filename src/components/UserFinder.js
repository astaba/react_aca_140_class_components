import React, { Component, Fragment } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import { withUsersConsumer } from "../context/users-context";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

export class UserFinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      filteredList: props.ctxValue.users,
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({
        filteredList: this.props.ctxValue.users.filter((item) =>
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
        <ErrorBoundary>
          <Users list={filteredList} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default withUsersConsumer(UserFinder);
