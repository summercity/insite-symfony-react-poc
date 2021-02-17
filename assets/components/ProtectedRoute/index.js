import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import ContentWrapper from '../ContentWrapper'

const ProtectedRoute = ({ component: Componnent, ...rest }) => {
  const access = true // TODO: add authentication
  return (
    <Route
      {...rest}
      render={(props) => {
        if (access) {
          return (
            <ContentWrapper>
              <Componnent {...props} />
            </ContentWrapper>
          )
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export default ProtectedRoute
