import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false}

    static getDerivedStateFromError(error) {
        return { hasError:true };
    }

    componentDidCatch(error, info) {
        console.log(error, info)
        // Log the error to an error reporting service
    }

    render() {
        if (this.state.hasError) {
            // Create a custom fallback UI here
            return this.props.fallback
        }
      
       return this.props.children
    }
}

export default ErrorBoundary;
