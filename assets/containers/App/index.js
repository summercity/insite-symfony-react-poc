import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
import Dashboard from '../Dashboard'
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
        <Helmet
          titleTemplate="insiteLogic"
          defaultTitle="insiteLogic"
        >
          <meta name="description" content="insiteLogic" />
        </Helmet>
        <BrowserRouter>
            <Switch>
                <ProtectedRoute exact path="/" component={Dashboard} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route path="" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
        {/* <Footer />
        <GlobalStyle /> */}
      </>
    );
  };
