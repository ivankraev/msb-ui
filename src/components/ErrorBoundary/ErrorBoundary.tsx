import React from 'react'

import s from './ErrorBoundary.scss'

class ErrorBoundary extends React.Component<{ children: JSX.Element }, { hasError: boolean }> {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  // componentDidCatch(error, errorInfo) {
  //   Log the error
  // }

  render(): JSX.Element {
    if (this.state.hasError) {
      return (
        <div className={s.container}>
          <img className={s.errorImage} src="/error-fallback.png" />
          <h1 className={s.errorDescription}>Something went wrong!</h1>
          <p className={s.errorAdvice}>Please refresh the page or contact support</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
