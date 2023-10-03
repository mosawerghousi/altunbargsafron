import React, {Component} from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  componentDidCatch(error, errorInfo) {
    // Update state to indicate that an error occurred
    this.setState({hasError: true})
    // You can also log the error or send it to an error reporting service
    console.error(error, errorInfo)
    console.log(error, errorInfo)
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return <div>Something went wrong.</div>
    }

    // Render the children components normally
    return this.props.children
  }
}

export default ErrorBoundary
