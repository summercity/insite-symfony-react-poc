import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import ContentWrapper from 'Components/ContentWrapper'

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

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default ProtectedRoute
