import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navigate } from 'react-router-dom'

import './App.scss'
import routes, { RouteProps } from '@msp/routes/main'
import ErrorBoundary from '../ErrorBoundary'
import ProtectedRoute from '@msp/routes/ProtectedRoute'

const renderRoutes = (routes: RouteProps[]): React.ReactElement[] => {
  return routes.map(
    ({ element: Element, path, children }: RouteProps, index: number): React.ReactElement => (
      <Route key={index} path={path} element={<Element />}>
        {children && renderRoutes(children)}
      </Route>
    ),
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route element={<ProtectedRoute />}>
            {renderRoutes(routes)}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
