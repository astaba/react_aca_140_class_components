import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      message: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ message: error.message });
  }

  render() {
    const {hasError, message} = this.state;
    if (hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          {message ? <p>{message}</p> : null}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
