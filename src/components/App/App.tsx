import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RouteProps } from 'react-router'
import { Navigate } from 'react-router-dom'

import './App.scss'
import routes from '@msp/routes/main'
import ErrorBoundary from '../ErrorBoundary'
import ProtectedRoute from '@msp/routes/ProtectedRoute'

interface IRouteProps extends Omit<RouteProps, 'element'> {
  element: React.ElementType
  protect?: boolean
}

const renderRoutes = (): React.ReactElement[] =>
  routes.map(
    ({ element: Element, path }: IRouteProps, index: number): React.ReactElement => (
      <Route element={<ProtectedRoute />} key={index}>
        <Route path={path} element={<Element />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    ),
  )

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>{renderRoutes()}</Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
