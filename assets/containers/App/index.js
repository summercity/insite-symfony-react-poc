import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { DateRangeContextProvider } from './../../context/DateRangeContext'
// import styled from 'styled-components';
import ContextStore from '../../context/ContextStore'
import Dashboard from '../Dashboard'
import Overview from '../Overview/Loadable'
import Login from '../Login'
import NotFoundPage from '../../components/NotFoundPage'
import ProtectedRoute from '../../components/ProtectedRoute'

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
