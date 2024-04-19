import React, { createContext, Component } from "react";

const UsersContext = createContext({ users: [] });

export const UsersProvider = UsersContext.Provider;

export const withUsersConsumer = (EnhancedComponent) => {
  class WithUsersConsumer extends Component {
    render() {
      return (
        <UsersContext.Consumer>
          {(ctxValue) => (
            <EnhancedComponent ctxValue={ctxValue} {...this.props} />
          )}
        </UsersContext.Consumer>
      );
    }
  }

  return WithUsersConsumer;
};
