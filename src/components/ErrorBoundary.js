import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      console.log("Error:"+error)
      console.log("info:"+info)
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Error occurred!</h1>;
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;