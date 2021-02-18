import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { DateRangeContextProvider } from './../../context/DateRangeContext'
// import styled from 'styled-components';
import ContextStore from 'Context/ContextStore'
import Dashboard from 'Containers/Dashboard'
import Overview from 'Containers/Overview/Loadable'
import Login from 'Containers/Login'
import NotFoundPage from 'Components/NotFoundPage'
import ProtectedRoute from 'Components/ProtectedRoute'

// const AppWrapper = styled.div`
//     width: 100%;
// `;

// const test = () => (<ContentWrapper><Dashboard/></ContentWrapper>)
export default function App() {
  return (
    <>
      <ContextStore>
        <DateRangeContextProvider>
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
        </DateRangeContextProvider>
      </ContextStore>
    </>
  )
}
