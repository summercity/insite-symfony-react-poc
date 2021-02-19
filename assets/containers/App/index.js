import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ContextStore from 'Context/ContextStore'
import Dashboard from 'Containers/Dashboard'
import Overview from 'Containers/Overview/Loadable'
import Login from 'Containers/Login'
import NotFoundPage from 'Components/NotFoundPage'
import ProtectedRoute from 'Components/ProtectedRoute'

export default function App() {
  return (
    <ContextStore>
      <Helmet titleTemplate="insiteLogic" defaultTitle="insiteLogic">
        <meta name="description" content="insiteLogic" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/overview" component={Overview} />
          <Route exact path="/login" component={Login} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      {/* <Footer />
          <GlobalStyle /> */}
    </ContextStore>
  )
}
