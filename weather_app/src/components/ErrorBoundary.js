import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      errorInfo: null,
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      console.log(this.state.errorInfo);
      return (
        <div>
          <h2>Error</h2>
          <p>something went wronge, please refresh page!</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
